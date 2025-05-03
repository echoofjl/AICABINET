import { useState } from "react";
import PromptManager from "./PromptManager";

const PromptWizard = () => {
    const [step, setStep] = useState(0);
    const [goal, setGoal] = useState("");
    const [platform, setPlatform] = useState("");
    const [tone, setTone] = useState("");
    const [constraints, setConstraints] = useState("");
    const [finalPrompt, setFinalPrompt] = useState("");

    const steps = [
        {
            label: "What’s your goal?",
            content: (
                <input
                    id="goal"
                    className="w-full border p-2 rounded"
                    placeholder="E.g., Generate a blog post"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                />
            ),
        },
        {
            label: "What platform is this for?",
            content: (
                <select
                    id="platform"
                    className="w-full border p-2 rounded"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="ChatGPT">ChatGPT</option>
                    <option value="Midjourney">Midjourney</option>
                    <option value="Custom API">Custom API</option>
                </select>
            ),
        },
        {
            label: "Preferred tone?",
            content: (
                <input
                    id="tone"
                    className="w-full border p-2 rounded"
                    placeholder="E.g., Professional, Casual"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                />
            ),
        },
        {
            label: "Any must-have constraints?",
            content: (
                <textarea
                    id="constraints"
                    className="w-full border p-2 rounded resize-y"
                    placeholder="E.g., Include specific keywords"
                    value={constraints}
                    onChange={(e) => setConstraints(e.target.value)}
                />
            ),
        },
    ];

    const generatePrompt = () => {
        const prompt = `Please write a prompt for an AI assistant to ${goal}, targeting ${platform}, with a ${tone} tone. ${constraints ? "Make sure to: " + constraints : ""
            }`;
        setFinalPrompt(prompt);
    };

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            generatePrompt();
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 space-y-6 bg-white shadow rounded">
            <div>
                <h2 className="text-lg font-semibold mb-2">{steps[step].label}</h2>
                {steps[step].content}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handleBack}
                    className={`px-4 py-2 rounded ${step === 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-600 text-white hover:bg-gray-700"
                        }`}
                    disabled={step === 0}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    {step === steps.length - 1 ? "Generate Prompt" : "Next"}
                </button>
            </div>
            {finalPrompt && (<PromptManager initialPrompt={finalPrompt} />)}
        </div>
    );
};

export default PromptWizard;