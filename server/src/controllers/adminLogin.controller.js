import mongoose from "mongoose"
import {Admin} from "../models/admin.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import generateAccessAndRefreshTokens from "../utils/adminTokenGenerator.js"

export const adminLogin = asyncHandler(async (req, res, next) => {
    const {userId, password} = req.body
    console.log(userId);
    const admin = await Admin.findOne({userId})
    
    if(!admin){
        return next(new ApiError(404, "Admin not found"))
    }

    const isPasswordValid = await admin.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

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

export { adminLogin }