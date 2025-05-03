import { useState } from "react";
import PromptManager from "../components/PromptManager";
import PromptWizard from "../components/PromptWizard";

const PromptOptimizer = () => {
  const [useWizard, setUseWizard] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setUseWizard(!useWizard)}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          {useWizard ? "Switch to Manual Mode" : "Use Interactive Wizard"}
        </button>
      </div>
      {useWizard ? <PromptWizard /> : <PromptManager />}
    </div>
  );
};

export default PromptOptimizer;