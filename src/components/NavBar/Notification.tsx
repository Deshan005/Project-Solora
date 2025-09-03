// src/components/Notifications.tsx
"use client";

import { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button isWhite isCircle onClick={() => setIsOpen(true)}>
        <Icon name="bell" />
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Notifications</h2>
            </div>
            <div className="p-4">
              <div className="text-center text-gray-500 py-8">
                No new notifications
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;