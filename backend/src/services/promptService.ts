import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.DASHSCOPE_API_KEY,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});


export async function optimizePrompt(prompt: string, variation?: string): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            model: "qwen-plus",
            messages: [
                {
                    role: "system",
                    content: `You are a prompt optimization assistant. Improve the following prompt to make it clearer and more effective. ${variation ? `This is a variation attempt: ${variation}. Try to make it different.` : ""
                        }`,
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.8,
            top_p: 0.95,
        });
        return JSON.stringify(completion);
    } catch (error) {
        console.error("Error calling LLM:", error);
        throw new Error("Failed to fetch completion from LLM.");
    }
}

export async function scorePrompt(prompt: string): Promise<number> {
    // Placeholder for scoring logic
    return 0; // Replace with actual scoring logic
}