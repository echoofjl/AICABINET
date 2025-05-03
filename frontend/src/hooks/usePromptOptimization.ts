import { useState } from "react";
import { optimizePrompt } from "../services/promptService";

const usePromptOptimization = () => {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const optimize = async (input: string, isRetry: boolean) => {
    if (!input.trim()) return;
    setLoading(true);
    setError("");
    setOutput("");

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

  return { output, loading, error, optimize };
};

export default usePromptOptimization;