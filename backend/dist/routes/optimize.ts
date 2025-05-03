import express from 'express';
import { callLLM } from '../services/llm';

const router = express.Router();
router.post('/optimize', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Invalid prompt' });
    }
    try {
        const optimized = await callLLM(prompt);
        res.json({ optimized });
    }
    catch (e) {
        console.error('LLM 调用失败:', e);
        res.status(500).json({ error: 'LLM 调用失败' });
    }
});
export default router;
