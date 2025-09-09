// src/components/Sidebar.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeButton from "@/components/SideBar/ThemeButton";

interface NavItem {
  title: string;
  icon: string;
  href?: string;
  items?: { title: string; href: string }[];
}

const navigation: NavItem[] = [
  { title: "Dashboard Overview", icon: "dashboard", href: "/" },
  {
    title: "Clients",
    icon: "people",
    items: [
      { title: "All Clients", href: "/dashboard/clients" },
    ],
  },
  {
    title: "Jobs",
    icon: "work",
    items: [
      { title: "All Jobs", href: "/dashboard/jobs" },
      { title: "Job Notes", href: "/dashboard/jobs/jobNotes" },
      { title: "Job Reports", href: "/dashboard/jobs/jobCompletion"}
    ],
  },
  {
    title: "Team",
    icon: "people",
    items: [
      { title: "Team Members", href: "/dashboard/team" },
    ],
  },
  {
    title: "Invoices",
    icon: "work",
    items: [
      { title: "All Invoices", href: "/dashboard/invoices" },
    ],
  },
  { title: "Settings", icon: "settings", href: "/dashboard/settings" },
  {
    title: "Revenue Reports", icon: "", href: "/dashboard/revenuereports"
  },
  {
    title: "Ratings", icon: "star", href: "/dashboard/ratings"
  },
  {
    title: "login", icon: "star", href: "/login"
  },  
  {
    title: "register", icon: "star", href: "/register"
  },
  {
    title: "reset", icon: "star", href: "/reset"
  }
];


const Icon = ({ name, className }: { name: string; className?: string }) => {
  const iconMap: Record<string, string> = {
    dashboard: "📊",
    people: "👥",
    work: "💼",
    settings: "⚙️",
    chevron: "▼",
  };
  return <span className={`inline-block w-5 h-5 ${className || ""}`}>{iconMap[name] || "📄"}</span>;
};

type DropdownProps = {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
};

const Dropdown = ({ item, isOpen, onToggle }: DropdownProps) => {
  const pathname = usePathname();
  const isActive = item.items?.some((sub) => pathname === sub.href);

  return (
    <div className="mb-1">
      <button
        className={`flex items-center w-full p-3 text-left rounded-lg transition-colors ${
          isActive || isOpen
            ? "bg-sidebar-active text-sidebar-active"
            : "text-secondary hover:bg-surface3 hover:text-primary"
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <Icon name={item.icon} className="mr-3" />
        <span className="flex-1">{item.title}</span>
        <Icon name="chevron" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="ml-6 mt-1 pl-3">
          {item.items?.map((sub) => {
            const active = pathname === sub.href;
            return (
              <Link
                key={sub.href}
                href={sub.href}
                className={`block p-2 rounded-lg transition-colors ${
                  active
                    ? "bg-sidebar-active text-sidebar-active font-medium"
                    : "text-secondary hover:text-primary hover:bg-surface3"
                }`}
              >
                {sub.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  // Which dropdown should be open (accordion behavior)
  const initialOpenTitle = useMemo(
    () => navigation.find((n) => n.items?.some((s) => s.href === pathname))?.title ?? null,
    [pathname]
  );
  const [openKey, setOpenKey] = useState<string | null>(initialOpenTitle);

  // Keep the correct group open when route changes
  useEffect(() => {
    setOpenKey(initialOpenTitle);
  }, [initialOpenTitle]);

  return (
    <aside className="w-64 bg-surface1 text-primary h-full flex flex-col">
      <div className="p-5">
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {navigation.map((item) =>
            item.href ? (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-sidebar-active text-sidebar-active"
                    : "text-secondary hover:bg-surface3 hover:text-primary"
                }`}
              >
                <Icon name={item.icon} className="mr-3" />
                {item.title}
              </Link>
            ) : (
              <Dropdown
                key={item.title}
                item={item}
                isOpen={openKey === item.title}
                onToggle={() => setOpenKey((prev) => (prev === item.title ? null : item.title))}
              />
            )
          )}
        </div>
      </nav>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          </div>
          <ThemeButton />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
