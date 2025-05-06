import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import PromptOptimizer from "./pages/PromptOptimizer";

const App = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/prompt-optimizer" element={<PromptOptimizer />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
        </Router>
    );
};

export default App;