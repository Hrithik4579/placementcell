import mongoose from "mongoose"
import { Student } from "../models/student.model.js"
import { Application } from "../models/application.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const generateAccessAndRefreshTokens = async (id) => {
    try {
        const user = await Student.findById(id);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken };

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}


const studentLogin = asyncHandler(async (req, res, next) => {
    const { enrollmentNumber, password } = req.body
    console.log(enrollmentNumber);
    const student = await Student.findOne({ enrollmentNumber })

    if (!student) {
        return next(new ApiError(404, "Student not found"))
    }

    const isPasswordValid = await student.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(student._id)

    const loggedInUser = await Student.findById(student._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )
})

const studentRegister = asyncHandler(async (req, res) => {

    const { fullName, email, enrollmentNumber, password, branch, graduationYear, cgpa } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, enrollmentNumber, password, branch, graduationYear, cgpa].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await Student.findOne({
        $or: [{ enrollmentNumber }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    //console.log(req.files);  

    const student = await Student.create({
        fullName,
        email,
        enrollmentNumber,
        password,
        branch,
        graduationYear,
        cgpa
    })

    const createdUser = await Student.findById(student._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

const applyForJob = asyncHandler(async (req, res) => {
    const {
        jobId,
        batch,
        cgpa: requiredCgpa,
        branches,
        registerBy,
        active
    } = req.body
    const { _id, cgpa: studentCgpa, graduationYear, branch } = req.user;
    const student = await Student.findById(_id);

    if (!student) {
        throw new ApiError(404, "Student not found");
    }

    if (!active) {
        throw new ApiError(400, "Job is not active");
    }

    if (Date.now() > new Date(registerBy)) {
        throw new ApiError(400, "Registration date has been passed");
    }

    let appliedBefore = false;
    for (let i of student.applications) {
        if (i.job == jobId) {
            appliedBefore = true;
            break;
        }
    }

    if (appliedBefore) {
        throw new ApiError(409, "You have already applied for this job");
    }

    if (graduationYear != batch || studentCgpa < requiredCgpa) {
        throw new ApiError(400, "You are not eligible for this job");
    }

    if (!branches.includes(branch)) {
        throw new ApiError(400, "Your branch is not eligible for this job");
    }

    // TODO: PROCESS FORM DATA AND ADD TO JOB APPLICATION

    // TODO: Get resume from student and save to server



})


export { studentLogin, studentRegister, applyForJob }