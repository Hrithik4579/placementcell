import { Router } from "express";
import { 
    adminLogin
} from "../controllers/adminLogin.controller.js";
import { verifyJWT } from "../middlewares/adminAuth.middleware.js";


const router = Router()

router.route("/studentlogin").post(adminLogin)

export default router