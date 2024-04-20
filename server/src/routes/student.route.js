import { Router } from "express";
import { 
    studentLogin, studentRegister
} from "../controllers/student.controller.js";
import { verifyStudentJWT } from "../middlewares/studentAuth.middleware.js"
import { fetchAllJobs } from "../controllers/job.controller.js"


const router = Router()

router.post("/login", studentLogin)
router.post("/register", studentRegister)
router.get("/job", verifyStudentJWT, fetchAllJobs)
// router.post("/job", verifyStudentJWT,upload.single("resume"), applyForJob)
// router.patch("/uploadresume", verifyStudentJWT, uploadResume)


export default router