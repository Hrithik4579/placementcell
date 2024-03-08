import { Router } from "express";
import { createJob, deleteJob, makeJobInactive } from "../controllers/job.controller.js";
import { verifyJWT } from "../middlewares/adminAuth.middleware.js";

const router = Router()

router.get("/createjob", verifyJWT, createJob)
router.get("/deletejob", verifyJWT, deleteJob)
router.get("/makejobinactive", verifyJWT, makeJobInactive)

export default router