import express from 'express';
import { callLLM } from '../services/llm.js';
const router = express.Router();
router.post('/optimize', async (req, res) => {
    console.log('Request received at /optimize:', req.body); // Log the request body
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
        console.error('Invalid prompt:', prompt); // Log invalid prompt
        return res.status(400).json({ error: 'Invalid prompt' });
    }
    try {
        console.log('Calling LLM with prompt:', prompt); // Log before calling LLM
        const optimized = await callLLM(prompt);
        console.log('LLM response:', optimized); // Log the response from LLM
        res.json({ optimized });
    }
    catch (e) {
        console.error('LLM 调用失败:', e); // Log the error
        res.status(500).json({ error: 'LLM 调用失败' });
    }
});
export default router;
