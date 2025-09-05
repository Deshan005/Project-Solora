"use client";

import { useState } from "react";
import Button from "./Button";
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

  return (
    <>
      <Button isWhite isCircle onClick={() => setIsOpen(true)}>
        <Icon name="bell" />
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
              <h2 className="text-lg font-semibold text-primary">{mockNotifications.length ? "Notifications" : "No Notifications"}</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {mockNotifications.slice(0, 5).map((n) => (
                <div key={n.id} className="p-3 bg-surface3 rounded-xl hover:bg-surface2 cursor-pointer">
                  <p className="text-sm font-semibold text-primary">{n.title}</p>
                  <p className="text-xs text-tertiary truncate">{n.description}</p>
                  <span className="text-[10px] text-tertiary">{n.time}</span>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-border-color">
              <Link
                href="/dashboard/notifications"
                className="btn-primary w-full text-center"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
