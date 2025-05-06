## 🧠 AI Cabinet

> A modular AI-powered toolkit for developers, creators, and prompt engineers.
> Built with **React + Vite + TailwindCSS** (frontend) and **Express + TypeScript** (backend).
> Powered by AI providers like **通义千问 (Tongyi Qianwen)**.

---

### 🚀 Features (Modular Tools)

| Tool                    | Description                                                     | Status     |
| ----------------------- | --------------------------------------------------------------- | ---------- |
| **Prompt Optimizer**    | Improve prompt clarity, tone, and performance via AI rewriting. | ✅ Stable   |
| **Text Refiner**        | Paraphrase, translate, summarize input text.                    | 🔜 Planned |
| **Developer Assistant** | AI-powered Q\&A and code snippet generator.                     | 🔜 Planned |
| **Custom QA Engine**    | Domain-specific Q\&A from user-provided context.                | 🔜 Planned |

---

### 🧱 Current Focus: Prompt Optimizer

**What’s working:**

* Prompt input with real-time editing
* Optimize button that calls AI backend
* Display rewritten result with formatting
* Copy-to-clipboard support with feedback
* “Try Again” for variation requests
* Error and loading state handling
* Componentized UI (Input / Output)
* Clean Layout with route-aware Header/Footer

---

### 🛣 Roadmap

#### ✅ Completed

* Initial setup: `React + Vite + Tailwind + Express + TypeScript`
* Routing with layout and per-page components
* First tool: **Prompt Optimizer**
    * Interactive prompt building 
    * Prompt variation via `temperature`, `top_p`, `variationId`

#### 🔄 In Progress

* Feedback (👍/👎) collection
* Compare before vs after

#### 🔜 Coming Soon

* Tool selector home page
* Text Refiner page
* Dev Assistant (for AI-powered coding)
* Knowledge-bound Q\&A assistant
* Persistent prompt history and rating storage

---

### 🛠 Tech Stack

* **Frontend:** Vite + React + TypeScript + TailwindCSS
* **Backend:** Node + Express + TypeScript
* **Routing:** React Router v6
* **AI Provider:** 通义千问 (Tongyi Qianwen) SDK or compatible LLMs
* **Utilities:** Clipboard API, fetch, ESLint/Prettier

---

### 📦 Project Structure

This section outlines the directory structure of the project for easier navigation and understanding.

#### Frontend (`frontend/src/`)

├── components/       # Reusable UI components (Button, Input, Output) styled with TailwindCSS  
├── layout/           # Header, Footer, and Layout  
├── pages/            # Feature entry points (PromptOptimizer, etc.) using React Router v6  
├── services/         # Backend API wrappers with error handling and caching (e.g., promptService.ts)  
└── App.tsx           # Router with layout-aware routes  

#### Backend (`backend/src`)

├── routes/           # API route definitions  
├── services/         # Business logic and integrations (e.g., AI provider SDKs)  
├── index.ts          # Express app setup and middleware  

---

### 🧪 Getting Started

```bash
# Install dependencies
npm install

# Run frontend (Vite)
npm run dev

# Run backend (Express)
cd backend
npm install
npm run dev
```

---