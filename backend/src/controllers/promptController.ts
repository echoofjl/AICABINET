import { Request, Response } from "express";

import { optimizePrompt, scorePrompt } from "../services/promptService";


export const optimize = async (req: Request, res: Response) => {
    const { prompt, variation } = req.body;

    if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Invalid prompt" });
    }

    try {
        const optimized = await optimizePrompt(prompt, variation);
        return res.json({ optimized });
    } catch (err) {
        console.error("Prompt optimization failed:", err);
        return res.status(500).json({ error: "Optimization failed" });
    }
};

export const score = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Invalid prompt" });
    }

    try {
        const score = await scorePrompt(prompt);
        return res.json({ score });
    } catch (err) {
        console.error("Prompt scoring failed:", err);
        return res.status(500).json({ error: "Scoring failed" });
    }
};