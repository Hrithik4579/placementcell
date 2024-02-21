import mongoose from "mongoose"
import {Student} from "../models/student.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import generateAccessAndRefereshTokens from "../utils/tokenGenerator.js"

export const studentLogin = asyncHandler(async (req, res, next) => {
    const {enrollmentNumber, password} = req.body
    console.log(enrollmentNumber);
    const student = await Student.findOne({enrollmentNumber})
    
    if(!student){
        return next(new ApiError(404, "Student not found"))
    }

    const isPasswordValid = await student.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

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

export { studentLogin }