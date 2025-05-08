import { Router } from "express";
import { optimize, score } from "../controllers/promptController";


const router = Router();
router.post("/optimize", optimize);
router.post("/score", score);

export default router;