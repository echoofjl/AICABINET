import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full max-w-5xl px-6">
        <Header />
      </div>

      <main className="flex-1 w-full max-w-5xl px-6">
        {children}
      </main>

      <div className="w-full max-w-5xl px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
