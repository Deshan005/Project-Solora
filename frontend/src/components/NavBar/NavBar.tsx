// src/components/Header.jsx
"use client";

import { useState } from "react";
import ThemeButton from "../SideBar/ThemeButton";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  
  return (
    <header className="sticky top-0 z-20 bg-surface1  h-20 flex items-center px-10">
      <div className="flex items-center justify-between w-full">
        {/* Left section */}
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <button
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center 
              bg-surface3 hover:bg-surface2 shadow-sm"
            onClick={() => setSearchVisible(true)}
          >
            🔍
          </button>
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center 
            bg-surface3 hover:bg-surface2 shadow-sm">
            🔔
          </button>
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center 
            bg-surface3 hover:bg-surface2 shadow-sm">
            💬
          </button>
          
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium shadow-sm">
            JD
          </div>
          
          <ThemeButton className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;