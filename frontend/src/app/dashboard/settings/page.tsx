"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Profile states
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [location, setLocation] = useState("Canada");
  const [bio, setBio] = useState("");

  // Password states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex gap-6 p-8 bg-surface1 text-primary">
      {/* Left Panel as Card */}
      <aside className="card w-72 h-fit space-y-4 p-6">
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
      </aside>

      {/* Right Content Area */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

        {activeTab === "profile" && (
          <div className="card space-y-6 p-6">
            <h2 className="text-lg font-semibold">Profile Information</h2>
            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="input w-full h-24 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeTab === "security" && (
          <div className="card space-y-6 p-6">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input w-full"
                />
              </div>
              <button type="submit" className="btn-danger">
                Update Password
              </button>
            </form>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <p className="text-sm text-secondary">Notification settings coming soon...</p>
          </div>
        )}

        {activeTab === "payment" && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="text-sm text-secondary">Payment settings coming soon...</p>
          </div>
        )}
      </main>
    </div>
  );
}
