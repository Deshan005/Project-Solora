"use client";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read?: boolean;
}

const allNotifications: Notification[] = [
  { id: 1, title: "New comment", description: "John commented on your post.", time: "5m ago" },
  { id: 2, title: "New follower", description: "Sarah started following you.", time: "20m ago" },
  { id: 3, title: "System update", description: "Maintenance scheduled for tonight.", time: "1h ago" },
  { id: 4, title: "Task assigned", description: "Alex assigned you a new task.", time: "3h ago" },
  { id: 5, title: "Reminder", description: "Don’t forget your 4pm meeting.", time: "5h ago" },
  { id: 6, title: "Promotion", description: "Get 20% off this week only.", time: "1d ago" },
];

export default function NotificationsPage() {
  return (
    <div className="p-6 bg-surface1 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-primary">All Notifications</h1>

      <div className="space-y-4">
        {allNotifications.map((n) => (
          <div
            key={n.id}
            className="card hover:shadow-theme transition"
          >
            <h3 className="text-sm font-semibold text-primary">{n.title}</h3>
            <p className="text-xs text-secondary">{n.description}</p>
            <span className="text-[10px] text-tertiary">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
