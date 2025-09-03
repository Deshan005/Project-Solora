// src/components/ThemeButton.jsx
"use client";

import { useState, useEffect } from "react";

const ThemeButton = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const html = document.documentElement;
      
      // Set initial theme based on saved preference or system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);
      
      setIsDark(shouldUseDark);
      
      // Apply the theme to the document
      if (shouldUseDark) {
        html.setAttribute("data-theme", "dark");
      } else {
        html.removeAttribute("data-theme");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    const html = document.documentElement;
    
    if (newIsDark) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center 
        bg-surface2 hover:bg-surface3 border border-color
        transition-colors duration-200 ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-secondary">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeButton;