export const optimizePrompt = async (prompt: string, isRetry: boolean): Promise<string> => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        prompt: prompt, 
        variation: isRetry
       }),
    });
  
    const data = await res.json();
    const optimizedData = typeof data.optimized === "string" ? JSON.parse(data.optimized) : data.optimized;
    return optimizedData.choices?.[0]?.message?.content || "No Content Returned";
  };
  