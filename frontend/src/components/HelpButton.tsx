// src/components/HelpButton.tsx
"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // using lucide-react icons

export default function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
      {/* Popup */}
      {open && (
        <div className="mb-2 w-60 p-3 bg-white text-gray-800 rounded-xl shadow-lg border text-sm">
          👋 Need help? Contact us or check the FAQ section!
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#BC269B] text-white shadow-lg hover:bg-[#a02185] transition"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
