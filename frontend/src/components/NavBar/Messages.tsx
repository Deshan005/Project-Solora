"use client";

import { useState } from "react";
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

  return (
    <>
      <Button isWhite isCircle onClick={() => setIsOpen(true)}>
        <Icon name="chat-think" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-20"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Pop-up box */}
          <div className="relative w-80 mt-20 mr-4 bg-surface2 rounded-2xl shadow-theme border border-border-color flex flex-col">
            <div className="p-4 border-b border-border-color">
              <h2 className="text-lg font-semibold text-primary">{mockMessages.length ? "Messages" : "No Messages"}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {mockMessages.slice(0, 5).map((msg) => (
                <div key={msg.id} className="p-3 bg-surface3 rounded-xl hover:bg-surface2 cursor-pointer">
                  <p className="text-sm font-semibold text-primary">{msg.sender}</p>
                  <p className="text-xs text-tertiary truncate">{msg.text}</p>
                  <span className="text-[10px] text-tertiary">{msg.time}</span>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border-color">
              <Link
                href="/dashboard/messages"
                className="btn-primary w-full text-center"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
