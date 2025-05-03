import express from 'express';
import { callLLM } from '../services/llm.js';

const router = express.Router();

router.post('/optimize', async (req, res) => {
  const { prompt, variation } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Invalid prompt" });
  }

  try {
    const optimized = await callLLM(prompt, variation);
    return res.json({ optimized });
  } catch (err) {
    console.error("Prompt optimization failed:", err);
    return res.status(500).json({ error: "Optimization failed" });
  }
});

export default router;