"use client";

import { useState } from "react";
import ThemeButton from "../SideBar/ThemeButton";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";

// Define the prop interface
interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [searchVisible, setSearchVisible] = useState(false);
  
  return (
    <header className="sticky top-0 z-10 bg-surface1 h-20 flex items-center px-4 lg:px-10">
      <div className="flex items-center justify-between w-full">
        {/* Left section */}
        <div className="flex items-center">
          <button 
            className="lg:hidden mr-4 w-10 h-10 rounded-full flex items-center justify-center bg-surface3 hover:bg-surface2 shadow-sm"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <h1 className="text-2xl lg:text-3xl font-semibold">Dashboard</h1>
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

export default Navbar;