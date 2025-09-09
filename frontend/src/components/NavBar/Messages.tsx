"use client";

import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Link from "next/link";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
}

const mockMessages: Message[] = [
  { id: 1, sender: "John", text: "Hey, how are you?", time: "2m ago" },
  { id: 2, sender: "Sarah", text: "Meeting at 3pm", time: "10m ago" },
  { id: 3, sender: "Alex", text: "Can you review my code?", time: "30m ago" },
  { id: 4, sender: "Emma", text: "Let’s catch up later", time: "1h ago" },
  { id: 5, sender: "Mike", text: "New project updates!", time: "2h ago" },
  { id: 6, sender: "Sophia", text: "Don’t forget tomorrow’s deadline", time: "5h ago" },
];

const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      {/* Blend button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-surface2 transition"
      >
        <Icon name="chat-think" className="text-primary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-surface2 rounded-2xl shadow-xl z-50">
          {/* Header */}
          <div className="p-3 border-b border-surface3/40">
            <h2 className="text-base font-semibold text-primary">Messages</h2>
          </div>

          {/* Last few messages */}
          <div className="p-3 space-y-3">
            {mockMessages.slice(-4).map((msg) => (
              <div key={msg.id} className="p-3 bg-surface3 rounded-xl hover:bg-surface2 cursor-pointer">
                <p className="text-sm font-semibold text-primary">{msg.sender}</p>
                <p className="text-xs text-tertiary truncate">{msg.text}</p>
                <span className="text-[10px] text-tertiary">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3">
            <Link
              href="/dashboard/messages"
              className="block text-center text-sm text-blue-400 hover:underline"
            >
              View all messages
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
