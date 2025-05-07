import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PromptOptimizerPage from "./pages/PromptOptimizerPage";
import PromptScorePage from "./pages/PromptScorePage";
import TextRefinerPage from "./pages/TextRefinerPage";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/prompt-optimizer" element={<PromptOptimizerPage />} />
                    <Route path="/prompt-score" element={<PromptScorePage />} />
                    <Route path="/text-refiner" element={<TextRefinerPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;