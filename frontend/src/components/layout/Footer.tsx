import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t px-6 py-4 bg-white text-sm text-gray-500">
      <div className="max-w-6xl mx-auto flex justify-between">
        <span>© 2024 AI Cabinet</span>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
