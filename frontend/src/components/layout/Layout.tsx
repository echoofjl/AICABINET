import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-6 py-12">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
