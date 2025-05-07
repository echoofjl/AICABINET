import React from "react";
import { Button } from "../ui/Button";

const Header: React.FC = () => {
  return (
    <header className="border-b px-6 py-4 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-semibold">AI Cabinet</h1>
        <nav className="flex gap-6 items-center text-sm">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/" className="hover:text-blue-600">Features</a>
          <a href="/" className="hover:text-blue-600">Pricing</a>
          <a href="/" className="hover:text-blue-600">Contact</a>
          <Button className="ml-4">Sign Up</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
