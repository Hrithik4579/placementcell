import { Router } from "express";
import { 
    studentLogin, studentRegister
} from "../controllers/student.controller.js";
import { verifyStudentJWT } from "../middlewares/studentAuth.middleware.js"
import { fetchAllJobs } from "../controllers/job.controller.js"


const router = Router()

router.post("/studentlogin", studentLogin)
router.post("/studentregister", studentRegister)
router.get("/fetchalljobs", verifyStudentJWT, fetchAllJobs)


export default router