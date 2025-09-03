// src/components/User.tsx
"use client";

import { useState } from "react";

const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        JD
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          
          <div className="border-t border-gray-100 my-1"></div>
          
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default User;