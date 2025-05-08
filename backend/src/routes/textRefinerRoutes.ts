import { Router } from "express";
import { textRefiner } from "../controllers/textRefinerController";

const router = Router();
router.post("/text-refine", textRefiner);

export default router;
