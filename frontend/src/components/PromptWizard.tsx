import { useState } from "react";
import { optimizePrompt } from "../services/promptService";

const PromptWizard = () => {
    const [step, setStep] = useState(0);
    const [goal, setGoal] = useState("");
    const [platform, setPlatform] = useState("");
    const [tone, setTone] = useState("");
    const [constraints, setConstraints] = useState("");
    const [finalPrompt, setFinalPrompt] = useState("");

    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const generatePrompt = () => {
        const prompt = `Please write a prompt for an AI assistant to ${goal}, targeting ${platform}, with a ${tone} tone. ${constraints ? "Make sure to: " + constraints : ""
            }`;
        setFinalPrompt(prompt);
    };

    const handleOptimize = async () => {
        setLoading(true);
        setOutput("");
        try {
            const optimized = await optimizePrompt(finalPrompt, false);
            setOutput(optimized);
        } catch (err) {
            console.error("Failed to optimize:", err);
            setOutput("Failed to optimize. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-4">
            {step === 0 && (
                <div>
                    <label htmlFor="goal" className="block font-semibold mb-1">What’s your goal?</label>
                    <input id="goal" className="w-full border p-2" value={goal} onChange={(e) => setGoal(e.target.value)} />
                    <button className="mt-4" onClick={() => setStep(1)}>Next</button>
                </div>
            )}

            {step === 1 && (
                <div>
                    <label htmlFor="platform" className="block font-semibold mb-1">What platform is this for?</label>
                    <select id="platform" className="w-full border p-2" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="ChatGPT">ChatGPT</option>
                        <option value="Midjourney">Midjourney</option>
                        <option value="Custom API">Custom API</option>
                    </select>
                    <button className="mt-4" onClick={() => setStep(2)}>Next</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <label htmlFor="tone" className="block font-semibold mb-1">Preferred tone?</label>
                    <input id="tone" className="w-full border p-2" value={tone} onChange={(e) => setTone(e.target.value)} />
                    <button className="mt-4" onClick={() => setStep(3)}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <label htmlFor="constraints" className="block font-semibold mb-1">Any must-have constraints?</label>
                    <textarea id="constraints" className="w-full border p-2" value={constraints} onChange={(e) => setConstraints(e.target.value)} />
                    <div className="mt-4 flex gap-4">
                        <button onClick={generatePrompt}>Generate Prompt</button>
                        <button onClick={() => setStep(0)}>Start Over</button>
                    </div>
                </div>
            )}

            {finalPrompt && (
                <div className="mt-6 space-y-4">
                    <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
                        <strong>Generated Prompt:</strong>
                        <div>{finalPrompt}</div>
                    </div>
                    <button
                        onClick={handleOptimize}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        disabled={loading}
                    >
                        {loading ? "Optimizing..." : "Optimize This Prompt"}
                    </button>
                </div>
            )}

            {output && (
                <div className="mt-4 bg-blue-50 p-4 rounded whitespace-pre-wrap">
                    <strong>Optimized Result:</strong>
                    <div>{output}</div>
                </div>
            )}
        </div>

    );
};

export default PromptWizard;


