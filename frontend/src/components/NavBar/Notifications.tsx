"use client";

import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import Link from "next/link";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
}

const mockNotifications: Notification[] = [
  { id: 1, title: "New comment", description: "John commented on your post.", time: "5m ago" },
  { id: 2, title: "New follower", description: "Sarah started following you.", time: "20m ago" },
  { id: 3, title: "System update", description: "Maintenance scheduled for tonight.", time: "1h ago" },
  { id: 4, title: "Task assigned", description: "Alex assigned you a new task.", time: "3h ago" },
  { id: 5, title: "Reminder", description: "Don’t forget your 4pm meeting.", time: "5h ago" },
  { id: 6, title: "Promotion", description: "Get 20% off this week only.", time: "1d ago" },
];

const Notifications = () => {
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
        <Icon name="bell" className="text-primary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-surface2 rounded-2xl shadow-xl z-50">
          {/* Header */}
          <div className="p-3 border-b border-surface3/40">
            <h2 className="text-base font-semibold text-primary">Notifications</h2>
          </div>

          {/* Last few notifications */}
          <div className="p-3 space-y-3">
            {mockNotifications.slice(-4).map((n) => (
              <div key={n.id} className="p-3 bg-surface3 rounded-xl hover:bg-surface2 cursor-pointer">
                <p className="text-sm font-semibold text-primary">{n.title}</p>
                <p className="text-xs text-tertiary truncate">{n.description}</p>
                <span className="text-[10px] text-tertiary">{n.time}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3">
            <Link
              href="/dashboard/notifications"
              className="block text-center text-sm text-blue-400 hover:underline"
            >
              View all notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
