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

    if (
        [jobId, companyName, location, type].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Required fields cannot be empty")
    }

    const existedUser = await Job.findOne({ jobId })

    if (existedUser) {
        throw new ApiError(409, "Job with jobId already exists")
    }

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
    const jobId = req.params.id

    const job = await Job.findOneAndDelete(jobId)

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
    const jobId = req.params.id

    const job = await Job.findByIdAndUpdate(jobId, {active: false}, {new: true})

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, job, "Job made inactive successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while making job inactive")
    }
})

const fetchAllJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find({active: true})

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, jobs, "Jobs fetched successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching jobs")
    }

})

const inActiveJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find({active: false})

    try {
        return res
        .status(200)
        .json(new ApiResponse(200, jobs, "Inactive Jobs fetched successfully"))
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching inactive jobs")
    }

})

export { createJob, deleteJob, makeJobInactive, fetchAllJobs, inActiveJobs }