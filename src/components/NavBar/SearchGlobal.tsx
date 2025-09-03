// src/components/SearchGlobal.tsx
"use client";

import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import Icon from "./Icon";

type SearchGlobalProps = {
  className?: string;
  onClose?: () => void;
  visible?: boolean;
};

const SearchGlobal = ({ className, onClose, visible }: SearchGlobalProps) => {
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  
  useClickAway(ref, () => {
    setSearch("");
    onClose?.();
  });

  return (
    <div className={`relative ${className || ""}`} ref={ref}>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon name="search" />
        </span>
        {search && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setSearch("")}
          >
            <Icon name="close" />
          </button>
        )}
      </div>

      {search && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
          <div className="text-sm text-gray-500 mb-2">Search results for "{search}"</div>
          <div className="text-center text-gray-400 py-4">
            No results found
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchGlobal;