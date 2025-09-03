// src/components/Icon.tsx
const Icon = ({ name, className }: { name: string; className?: string }) => {
  const iconMap: Record<string, string> = {
    menu: "≡",
    search: "🔍",
    "chat-think": "💬",
    bell: "🔔",
    logout: "🚪",
    close: "✕",
    chevron: "▼",
    arrow: "→",
    arrow2: "←",
    sun: "☀️", // Light mode icon
    moon: "🌙", // Dark mode icon
    dashboard: "📊",
    people: "👥",
    work: "💼",
    profile: "👥",
    wallet: "💰",
    settings: "⚙️",
  };

  return (
    <span className={`inline-block w-5 h-5 ${className || ""}`}>
      {iconMap[name] || "●"}
    </span>
  );
};

export default Icon;