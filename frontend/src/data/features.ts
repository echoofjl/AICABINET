import { BarChart2, Pencil, Share2, Sparkles } from "lucide-react";
import React from "react";
import { Feature } from "../types/Feature";


export const features: Feature[] = [
    {
        title: "Prompt Generator",
        description: "Create high-ail AI prompts with ease.",
        icon: React.createElement(Pencil, { className: "w-6 h-6 text-blue-600" }),
        action: "Generate",
        path: "/prompt-optimizer",
    },
    {
        title: "Prompt Score",
        description: "Measure the effectiveness of your prompts.",
        icon: React.createElement(BarChart2, { className: "w-6 h-6 text-blue-600" }),
        action: "Score Now",
        path: "/prompt-score",
    },
    {
        title: "Text Refiner",
        description: "Improve and polish your AI-generated text.",
        icon: React.createElement(Sparkles, { className: "w-6 h-6 text-blue-600" }),
        action: "Refine",
        path: "/text-refiner",
    },
    {
        title: "AI Assistant Connector",
        description: "Link your AI prompts to various assistants.",
        icon: React.createElement(Share2, { className: "w-6 h-6 text-blue-600" }),
        action: "Connect",
    },
];