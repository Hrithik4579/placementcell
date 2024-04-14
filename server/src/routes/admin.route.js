import { Router } from "express";
import { 
    adminLogin
} from "../controllers/adminLogin.controller.js";
import { verifyAdminJWT } from "../middlewares/adminAuth.middleware.js";
import { createJob, deleteJob, makeJobInactive, fetchAllJobs, inActiveJobs } from "../controllers/job.controller.js";

const router = Router()

router.route("/login").post(adminLogin)
router.post("/job", verifyAdminJWT, createJob)
router.get("/job", verifyAdminJWT, fetchAllJobs)
router.delete("/job/:id", verifyAdminJWT, deleteJob)
router.put("/job/:id", verifyAdminJWT, makeJobInactive)
router.get("/job/inactive", verifyAdminJWT, inActiveJobs)


export default router