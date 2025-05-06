import { useState } from "react";
import PromptManager from "./PromptManager";
import { PromptSectionWrapper } from "./PromptInputOutput";

const PromptWizard = () => {
    const [step, setStep] = useState(0);
    const [goal, setGoal] = useState("");
    const [context, setContext] = useState("");
    const [audience, setAudience] = useState("");
    const [format, setFormat] = useState("");
    const [constraints, setConstraints] = useState("");
    const [tone, setTone] = useState("");
    const [example, setExample] = useState("");
    const [finalPrompt, setFinalPrompt] = useState("");

    const steps = [
        {
            label: "🎯 What’s your goal?",
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
            label: "📚 What’s the context?",
            content: (
                <textarea
                    id="context"
                    className="w-full border p-2 rounded resize-y"
                    placeholder="E.g., This is for my work presentation"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                />
            ),
        },
        {
            label: "👥 Who is the audience?",
            content: (
                <input
                    id="audience"
                    className="w-full border p-2 rounded"
                    placeholder="E.g., For internal team"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                />
            ),
        },
        {
            label: "📐 What format do you want?",
            content: (
                <input
                    id="format"
                    className="w-full border p-2 rounded"
                    placeholder="E.g., Bullet list, Summary, Table"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                />
            ),
        },
        {
            label: "⏱ Any constraints?",
            content: (
                <textarea
                    id="constraints"
                    className="w-full border p-2 rounded resize-y"
                    placeholder="E.g., Keep it under 100 words, avoid jargon"
                    value={constraints}
                    onChange={(e) => setConstraints(e.target.value)}
                />
            ),
        },
        {
            label: "🗣 What tone should it use?",
            content: (
                <input
                    id="tone"
                    className="w-full border p-2 rounded"
                    placeholder="E.g., Friendly, Professional, Playful"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                />
            ),
        },
        {
            label: "🧪 Any examples?",
            content: (
                <textarea
                    id="example"
                    className="w-full border p-2 rounded resize-y"
                    placeholder="E.g., I want an answer like: 'Here are 5 bullet points...'"
                    value={example}
                    onChange={(e) => setExample(e.target.value)}
                />
            ),
        },
    ];

    const generatePrompt = () => {
        const prompt = `I need help with the following task: ${goal}.
${context ? `Context: ${context}` : ""}
${audience ? `Audience: ${audience}` : ""}
${format ? `Preferred format: ${format}` : ""}
${constraints ? `Constraints: ${constraints}` : ""}
${tone ? `Tone: ${tone}` : ""}
${example ? `Example of expected output: ${example}` : ""}`.trim();

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
        <PromptSectionWrapper>
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
        </PromptSectionWrapper>
    );
};

export default PromptWizard;
