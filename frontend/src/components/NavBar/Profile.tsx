"use client";

import { useState, useRef, useEffect } from "react";

const ProfilePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const ref = useRef<HTMLDivElement>(null);

  const name = "John Doe";
  const email = "john@example.com";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-surface3"
      >
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Floating Sidebar Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-surface2 rounded-2xl shadow-xl z-50 p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <img
              src="https://i.pravatar.cc/100"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-secondary">{email}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { key: "profile", label: "Profile" },
              { key: "security", label: "Security" },
              { key: "notifications", label: "Notifications" },
              { key: "payment", label: "Payment" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`w-full text-left px-4 py-2 rounded-xl transition ${
                  activeTab === item.key
                    ? "bg-primary text-white"
                    : "hover:bg-surface3"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div>
            <button className="w-full px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePanel;
