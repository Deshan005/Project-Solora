"use client";

import { useState } from "react";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  fromUser?: boolean;
  read?: boolean;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
  messages: Message[];
}

const contactsData: Contact[] = [
  {
    id: 1,
    name: "John",
    avatar: "/avatars/john.jpg",
    lastMessage: "Are you there?",
    lastTime: "1m ago",
    messages: [
      { id: 1, sender: "John", text: "Hey, how are you?", time: "2m ago" },
      { id: 2, sender: "John", text: "Are you there?", time: "1m ago" },
    ],
  },
  {
    id: 2,
    name: "Sarah",
    avatar: "/avatars/sarah.jpg",
    lastMessage: "Meeting at 3pm",
    lastTime: "10m ago",
    messages: [
      { id: 3, sender: "Sarah", text: "Meeting at 3pm", time: "10m ago" },
    ],
  },
  {
    id: 3,
    name: "Alex",
    avatar: "/avatars/alex.jpg",
    lastMessage: "Please reply",
    lastTime: "20m ago",
    messages: [
      { id: 4, sender: "Alex", text: "Can you review my code?", time: "30m ago" },
      { id: 5, sender: "Alex", text: "I need feedback soon", time: "25m ago" },
      { id: 6, sender: "Alex", text: "Please reply", time: "20m ago" },
    ],
  },
  {
    id: 4,
    name: "Emma",
    avatar: "/avatars/emma.jpg",
    lastMessage: "Let’s catch up later",
    lastTime: "1h ago",
    messages: [
      { id: 7, sender: "Emma", text: "Let’s catch up later", time: "1h ago" },
    ],
  },
  {
    id: 5,
    name: "Mike",
    avatar: "/avatars/mike.jpg",
    lastMessage: "Check your email",
    lastTime: "1h 55m ago",
    messages: [
      { id: 8, sender: "Mike", text: "New project updates!", time: "2h ago" },
      { id: 9, sender: "Mike", text: "Check your email", time: "1h 55m ago" },
    ],
  },
];

export default function MessagesPage() {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [reply, setReply] = useState("");

  const getUnreadCount = (contact: Contact) => {
    return contact.messages.filter((msg) => !msg.fromUser && !msg.read).length;
  };

  const handleSelectContact = (contact: Contact) => {
    // Mark messages as read
    const updatedContacts = contacts.map((c) => {
      if (c.id === contact.id) {
        const updatedMessages = c.messages.map((msg) =>
          !msg.fromUser ? { ...msg, read: true } : msg
        );
        return { ...c, messages: updatedMessages };
      }
      return c;
    });
    setContacts(updatedContacts);
    setSelectedContact(contact);
    setReply("");
  };

  const handleSend = () => {
    if (reply.trim() && selectedContact) {
      const newMsg: Message = {
        id: Date.now(),
        sender: "You",
        text: reply,
        time: "just now",
        fromUser: true,
      };
      selectedContact.messages.push(newMsg);
      setReply("");

      const updatedContacts = contacts.map((c) =>
        c.id === selectedContact.id ? { ...selectedContact } : c
      );
      setContacts(updatedContacts);
      setSelectedContact({ ...selectedContact });
    }
  };

  return (
    <div className="flex justify-center bg-surface1 overflow-hidden pt-4">
      <div className="flex w-full max-w-[1100px] h-[80vh] shadow-theme rounded-2xl overflow-hidden border border-color">
        {/* Left Panel */}
        <div className="w-1/3 max-w-[320px] border-r border-color bg-surface2 flex flex-col">
          <h2 className="p-4 text-lg font-semibold border-b border-color">Chats</h2>
          <div className="flex-1 overflow-y-auto scrollbar-none">
            {contacts.map((c) => {
              const unread = getUnreadCount(c);
              return (
                <div
                  key={c.id}
                  onClick={() => handleSelectContact(c)}
                  className={`flex items-center justify-between p-3 cursor-pointer hover:bg-surface3 ${
                    selectedContact?.id === c.id ? "bg-surface3" : ""
                  } border-b border-color`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="truncate">
                      <p className="text-sm font-semibold text-primary truncate">{c.name}</p>
                      <p className="text-xs text-tertiary truncate">{c.lastMessage}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-tertiary">{c.lastTime}</span>
                    {unread > 0 && (
                      <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full mt-1">
                        {unread}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex-1 flex flex-col bg-surface1">
          {selectedContact ? (
            <>
              {/* Header */}
              <div className="flex items-center p-4 border-b border-color bg-surface2">
                <img
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="text-primary font-semibold">{selectedContact.name}</h3>
                  <p className="text-tertiary text-sm">
                    {selectedContact.messages[selectedContact.messages.length - 1]?.time}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scrollbar">
                {selectedContact.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.fromUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg max-w-xs ${
                        msg.fromUser
                          ? "bg-primary text-white rounded-br-none"
                          : "bg-surface3 text-primary rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-[10px] text-tertiary opacity-70">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-color bg-surface2 flex items-center">
                <input
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 input mr-2"
                />
                <button onClick={handleSend} className="btn-primary">
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-tertiary">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
