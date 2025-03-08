import { Router } from "express";
import { createWebCheckIn } from "../controllers/webcheckin-controllers.js";

const router = Router();

router.post("/create", createWebCheckIn);

export default router;
