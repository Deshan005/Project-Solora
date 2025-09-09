// src/components/Header.jsx
"use client";

import { useState } from "react";
import ThemeButton from "../SideBar/ThemeButton";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

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

          <Notifications/>

          <Messages/>
          
          <Profile/>
          
          <ThemeButton className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;