import { Router } from "express";
import { createJob, deleteJob, makeJobInactive, fetchAllJobs } from "../controllers/job.controller.js";
import { verifyAdminJWT } from "../middlewares/adminAuth.middleware.js";
import { verifyStudentJWT } from "../middlewares/studentAuth.middleware.js"
import { verifyLoginJWT } from "../middlewares/loggedInAuth.middleware.js"; 

const router = Router()

router.get("/createjob", verifyAdminJWT, createJob)
router.get("/deletejob", verifyAdminJWT, deleteJob)
router.get("/makejobinactive", verifyAdminJWT, makeJobInactive)
router.get("/fetchalljobs", verifyLoginJWT, fetchAllJobs)

export default router