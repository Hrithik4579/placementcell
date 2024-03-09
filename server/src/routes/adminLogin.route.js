import { Router } from "express";
import { 
    adminLogin
} from "../controllers/adminLogin.controller.js";

const router = Router()

router.route("/adminlogin").post(adminLogin)

export default router