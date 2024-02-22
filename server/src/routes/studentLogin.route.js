import { Router } from "express";
import { 
    studentLogin
} from "../controllers/studentLogin.controller.js";
import { verifyJWT } from "../middlewares/studentAuth.middleware.js";


const router = Router()

router.route("/studentlogin").post(studentLogin)

export default router