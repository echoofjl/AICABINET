type PromptInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: (isRetry: boolean) => void;
  loading: boolean;
  showRetry?: boolean;
};

export const PromptInput = ({ value, onChange, onSubmit, loading, showRetry = false }: PromptInputProps) => (
  <>
    <textarea
      className="w-full p-3 border rounded resize-y"
      rows={6}
      placeholder="Enter your raw prompt..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <div className="flex gap-4 mt-2">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => onSubmit(false)}
        disabled={loading}
      >
        {loading ? "Optimizing..." : "Optimize Prompt"}
      </button>
      {showRetry && (
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => onSubmit(true)}
          disabled={loading}
        >
          {loading ? "..." : "Try Again 🔁"}
        </button>
      )}
    </div>
  </>
);

type PromptOutputProps = {
  content: string;
  copied: boolean;
  onCopy: () => void;
};

export const PromptOutput = ({ content, copied, onCopy }: PromptOutputProps) => (
  <div className="relative">
    <div className="mt-4 p-4 bg-gray-100 border rounded whitespace-pre-wrap">
      {content}
    </div>
    <button
      onClick={onCopy}
      className="absolute top-2 right-2 bg-gray-200 px-3 py-1 text-sm rounded hover:bg-gray-300"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
    {content && (
      <div className="mt-2 text-sm text-gray-600 text-right">
        <span>Was this result helpful? </span>
        <button
          className="mx-1 text-green-600 hover:underline"
          onClick={() => alert("Thanks for the feedback! 👍")}
        >
          👍
        </button>
        <button
          className="text-red-600 hover:underline"
          onClick={() => alert("We'll keep improving. 👎")}
        >
          👎
        </button>
      </div>
    )}
  </div>
);

export const PromptSectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-4 p-4 bg-white shadow rounded w-full">
    {children}
  </div>
);
