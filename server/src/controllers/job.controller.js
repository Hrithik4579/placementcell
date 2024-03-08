import { Job } from "../models/job.model.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createJob = asyncHandler(async (req, res) => {
    const {
        jobId,
        companyName,
        location,
        batch,
        type,
        salary,
        cgpa,
        role,
        branches,
        registerBy
    } = req.body

    const job = await Job.create({
        jobId,
        companyName,
        location,
        batch,
        type,
        salary,
        cgpa,
        role,
        branches,
        registerBy
    })

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, job, "Job added successfully"))
    } catch (error) {
        return next(new ApiError(500, "Something went wrong while creating job"))
    }
})

const deleteJob = asyncHandler(async (req, res, next) => {
    const jobId = req.params.jobId

    const job = await Job.findOneAndDelete({jobId})

    if(!job){
        throw new ApiError(404, "Job not found")
    }

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, job, "Job deleted successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while deleting job")
    }
})

const makeJobInactive = asyncHandler(async (req, res) => {
    const jobId = req.params.jobId

    const job = await Job.findByIdAndUpdate(jobId, {active: false}, {new: true})

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, job, "Job made inactive successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while making job inactive")
    }
})

export {createJob, deleteJob, makeJobInactive}