const Header = () => {
  return (
      <header className="w-full bg-gray-100 border-b p-4 mb-6">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <h1 className="text-2xl font-semibold text-gray-800">
                  Welcome to My AI Playground
              </h1>
              <p className="text-sm text-gray-600">
                  Explore tools powered by AI — from prompt optimization to developer assistance.
              </p>
          </div>
      </header>
  );
};

export default Header;