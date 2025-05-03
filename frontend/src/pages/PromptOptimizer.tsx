import { useState } from "react";
import { optimizePrompt } from "../services/promptService";
import PromptInput from "../components/PromptInput";
import PromptOutput from "../components/PromptOutput";
import PromptWizard from "../components/PromptWizard";

const PromptOptimizer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [useWizard, setUseWizard] = useState(false);

  const handleOptimize = async (isRetry = false) => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setCopied(false);

    try {
      const optimized = await optimizePrompt(input, isRetry);
      setOutput(optimized);
    } catch (e) {
      console.error("Error optimizing prompt:", e);
      setError("Failed to optimize. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prompt Optimizer</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setUseWizard(!useWizard)}
        >
          {useWizard ? "Switch to Manual Mode" : "Use Interactive Wizard"}
        </button>
      </div>

      {useWizard ? (
        <PromptWizard/>
      ) : (
        <div>
          <PromptInput value={input} onChange={setInput} onSubmit={handleOptimize} loading={loading} output={output} />

          {error && <div className="text-red-600">{error}</div>}

          {output && (
            <PromptOutput content={output} copied={copied} onCopy={handleCopy} />
          )}
        </div>
      )
      }
    </div >
  );
};

export default PromptOptimizer;
