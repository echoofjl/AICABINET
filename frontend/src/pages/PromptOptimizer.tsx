import { useState } from "react";
import { optimizePrompt } from "../services/promptService"; 
import PromptInput from "../components/PromptInput";
import PromptOutput from "../components/PromptOutput";

const PromptOptimizer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleOptimize = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setCopied(false);

    try {
      const optimized = await optimizePrompt(input);
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
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Prompt Optimizer</h1>
      <p className="text-gray-600">Rewrite and enhance your prompt for better AI responses.</p>

      <PromptInput value={input} onChange={setInput} onSubmit={handleOptimize} loading={loading} output={output}/>

      {error && <div className="text-red-600">{error}</div>}

      {output && (
        <PromptOutput content={output} copied={copied} onCopy={handleCopy} />
      )}
    </div>
  );
};

export default PromptOptimizer;
