import { Router } from "express";
import { 
    applyForJob,
    studentLogin, studentRegister
} from "../controllers/student.controller.js";
import { uploadResume } from "../controllers/upload.controller.js"; 
import { verifyStudentJWT } from "../middlewares/studentAuth.middleware.js"
import { fetchAllJobs } from "../controllers/job.controller.js"
import { upload } from "../middlewares/multer.js"


const router = Router()

router.post("/login", studentLogin)
router.post("/register", studentRegister)
router.get("/job", verifyStudentJWT, fetchAllJobs)
router.post("/job", verifyStudentJWT, applyForJob)
router.patch("/uploadresume", verifyStudentJWT, upload.single("resume"), uploadResume)


export default router