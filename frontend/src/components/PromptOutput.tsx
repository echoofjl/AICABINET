type Props = {
  content: string;
  copied: boolean;
  onCopy: () => void;
};

const PromptOutput = ({ content, copied, onCopy }: Props) => (
  <div className="relative">
    <div className="mt-4 p-4 bg-gray-100 border rounded whitespace-pre-wrap">
      {content}
    </div>
    <button
      onClick={onCopy}
      className="absolute top-2 right-2 bg-gray-200 px-3 py-1 text-sm rounded hover:bg-gray-300"
    >
      {copied ? 'Copied!' : 'Copy'}
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

export default PromptOutput;
