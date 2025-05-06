import { useState } from "react";
import usePromptOptimization from "../../hooks/usePromptOptimization";
import { PromptInput, PromptOutput, PromptSectionWrapper } from "./PromptInputOutput";

type Props = {
    initialPrompt?: string
}

const PromptManager = ({ initialPrompt = "" }: Props) => {
    const [input, setInput] = useState(initialPrompt);
    const [copied, setCopied] = useState(false);
    const { output, loading, error, optimize } = usePromptOptimization();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };


    return (
        <PromptSectionWrapper>
            {initialPrompt ? (
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-700 text-center">{initialPrompt}</p>
                    <p className="text-sm text-gray-500 mt-2 italic">
                        Not quite sure if this is the best version? You can let AI polish it further.
                    </p>
                    <button
                        onClick={() => optimize(initialPrompt, false)}
                        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                        ✨ Enhance Prompt Clarity
                    </button>                
                </div>
            ) : (
                <PromptInput
                    value={input}
                    onChange={setInput}
                    onSubmit={(isRetry) => optimize(input, isRetry)}
                    loading={loading}
                    showRetry={!!output}
                />
            )}
            {error && <div className="text-red-600">{error}</div>}
            {output && <PromptOutput content={output} copied={copied} onCopy={handleCopy} />}
        </PromptSectionWrapper>
    );
};

export default PromptManager;