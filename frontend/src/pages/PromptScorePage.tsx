import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const PromptScorePage: React.FC = () => {
    const [promptText, setPromptText] = useState("");
    const [score, setScore] = useState<number | null>(null);
    const [feedback, setFeedback] = useState("");

    const handleScorePrompt = () => {
        // Simple scoring logic (can be replaced with an API call)
        const lengthScore = Math.min(10, Math.ceil(promptText.length / 10));
        const clarityScore = promptText.includes("?") ? 8 : 5;
        const finalScore = (lengthScore + clarityScore) / 2;
        setScore(finalScore);
        setFeedback(
            finalScore > 7
                ? "Great prompt! Clear and well-defined."
                : "Your prompt could be clearer. Try specifying the task more."
        );
    };

    return (
        <div className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Prompt Score</h2>
            <p className="text-gray-600 mb-6">Evaluate the effectiveness of your AI prompt.</p>

            <TextInput value={promptText} placeholder="Enter your AI prompt here..." onChange={(e) => setPromptText(e.target.value)} />
            <Button onClick={handleScorePrompt}>Score Prompt</Button>

            {score !== null && (
                <div className="bg-white p-4 rounded-md border mt-4 text-left shadow-sm">
                    <h3 className="font-semibold mb-2">Prompt Score: {score.toFixed(1)} / 10</h3>
                    <p className="text-gray-700">{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default PromptScorePage;
