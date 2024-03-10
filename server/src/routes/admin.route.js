import { Router } from "express";
import { 
    adminLogin
} from "../controllers/adminLogin.controller.js";
import { verifyAdminJWT } from "../middlewares/adminAuth.middleware.js";
import { createJob, deleteJob, makeJobInactive, fetchAllJobs } from "../controllers/job.controller.js";

const router = Router()

router.route("/adminlogin").post(adminLogin)
router.get("/createjob", verifyAdminJWT, createJob)
router.get("/deletejob", verifyAdminJWT, deleteJob)
router.get("/makejobinactive", verifyAdminJWT, makeJobInactive)
router.get("/fetchalljobs", verifyAdminJWT, fetchAllJobs)


export default router