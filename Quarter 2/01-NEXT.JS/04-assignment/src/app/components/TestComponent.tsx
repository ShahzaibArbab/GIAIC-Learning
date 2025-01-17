// src/components/TestComponent.tsx

import React from "react";

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Welcome to Tailwind CSS
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          This is an advanced level component using Tailwind CSS. You can see various colors, gradients, and shadows at work here.
        </p>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
