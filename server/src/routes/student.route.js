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


export default router