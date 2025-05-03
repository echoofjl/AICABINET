type Props = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  loading: boolean;
  output: string
};

const PromptInput = ({ value, onChange, onSubmit, loading, output }: Props) => (
  <>
    <textarea
      className="w-full p-3 border rounded resize-y"
      rows={6}
      placeholder="Enter your raw prompt..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={onSubmit}
      disabled={loading}
    >
      {loading ? "Optimizing..." : "Optimize Prompt"}
    </button>
    {output && (
      <button
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? "..." : "Try Again 🔁"}
      </button>
    )}
  </>
);

export default PromptInput;
