import { Router } from "express";
import { 
    adminLogin
} from "../controllers/adminLogin.controller.js";
import { verifyJWT } from "../middlewares/adminAuth.middleware.js";


const router = Router()

router.route("/adminlogin").post(adminLogin)

export default router