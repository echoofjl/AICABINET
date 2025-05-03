import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY || "your-default-api-key", // Fallback for missing API key
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});
const SYSTEM_PROMPT = '你是一个提示词优化助手，请优化以下提示词：';
export async function callLLM(prompt) {
    try {
        const completion = await openai.chat.completions.create({
            model: "qwen-plus", // Replace with the desired model name. Model list: https://help.aliyun.com/zh/model-studio/getting-started/models
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: prompt }
            ]
        });
        return JSON.stringify(completion);
    }
    catch (error) {
        console.error("Error calling LLM:", error);
        throw new Error("Failed to fetch completion from LLM.");
    }
}
