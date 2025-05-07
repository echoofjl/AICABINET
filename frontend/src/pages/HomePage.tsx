import React from "react";
import { useNavigate } from "react-router-dom";

import { BarChart2, Pencil, Share2, Sparkles } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

const features = [
  {
    title: "Prompt Generator",
    description: "Create high-ail AI prompts with ease.",
    icon: <Pencil className="w-6 h-6 text-blue-600" />,
    action: "Generate",
    path: "/prompt-optimizer",
  },
  {
    title: "Prompt Score",
    description: "Measure the effectiveness of your prompts.",
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    action: "Score Now",
    path: "/prompt-score",
  },
  {
    title: "Text Refiner",
    description: "Improve and polish your AI-generated text.",
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    action: "Refine",
    path: "/text-refiner",
  },
  {
    title: "AI Assistant Connector",
    description: "Link your AI prompts to various assistants.",
    icon: <Share2 className="w-6 h-6 text-blue-600" />,
    action: "Connect",
  },
];

const HomePage: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = (path: string): void => {
    navigate(path);
  }
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to AI Cabinet</h2>
      <p className="text-gray-600 text-lg mb-12">
        Your personal AI workspace for refined tools and optimized prompts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map(({ title, description, icon, action, path }) => (
          <Card key={title} >
            <CardContent>
              {icon}
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <Button onClick={() => handleClick(path || "/")}>{action}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default HomePage