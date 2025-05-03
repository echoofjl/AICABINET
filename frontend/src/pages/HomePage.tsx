import { Link } from "react-router-dom";

const tools = [
  {
    title: "Prompt Optimizer",
    description: "Improve your prompt for better AI responses.",
    path: "/prompt-optimizer"
  },
  {
    title: "Text Refiner",
    description: "Polish, translate, or rewrite any text.",
    path: "/text-refiner"
  },
  {
    title: "Developer Assistant",
    description: "Get coding help, documentation, or snippets.",
    path: "/dev-assistant"
  },
  {
    title: "Custom QA",
    description: "Ask questions in your defined knowledge domain.",
    path: "/custom-qa"
  }
]
  

const HomePage = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Tools</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            to={tool.path}
            key={tool.title}
            className="border rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="text-sm mt-2 text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
