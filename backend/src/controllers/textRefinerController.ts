import { Request, Response } from "express";
import { refineText } from "../services/textRefinerService";

export const textRefiner = async (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Text is required." });
    }

    const refinedText = refineText(text);
    return res.status(200).json({ refinedText });
};
