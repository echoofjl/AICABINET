import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const TextRefinerPage: React.FC = () => {
    const [inputText, setInputText] = useState("");
    const [refinedText, setRefinedText] = useState("");

    const handleRefineText = () => {
        // Placeholder for text refinement logic (you can replace with API call)
        setRefinedText(inputText.trim() ? `Refined: ${inputText}` : "");
    };

    return (
        <div className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Text Refiner</h2>
            <p className="text-gray-600 mb-6">Polish and enhance your text with AI.</p>

            <TextInput value={inputText} placeholder="Enter your text here..." onChange={(e) => setInputText(e.target.value)} />
            <Button onClick={handleRefineText}>Refine Text</Button>

            {refinedText && (
                <div className="bg-white p-4 rounded-md border mt-4 text-left shadow-sm">
                    <h3 className="font-semibold mb-2">Refined Text:</h3>
                    <p className="text-gray-700">{refinedText}</p>
                </div>
            )}
        </div>
    );
};

export default TextRefinerPage;
