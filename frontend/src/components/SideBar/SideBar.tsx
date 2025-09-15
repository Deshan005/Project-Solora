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
  isActive: boolean;
};

const Dropdown = ({ item, isOpen, onToggle, isActive }: DropdownProps) => {
  const pathname = usePathname();

  return (
    <div className="mb-1">
      <button
        className={`flex items-center w-full p-3 text-left rounded-lg transition-colors ${
          isActive
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
            const subActive = pathname === sub.href;
            return (
              <Link
                key={sub.href}
                href={sub.href}
                className={`block p-2 rounded-lg transition-colors ${
                  subActive
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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
  }, [initialOpenTitle, pathname]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`fixed lg:static top-0 left-0 z-50 w-64 bg-surface1 text-primary h-full flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 flex justify-between items-center">
          <h1 className="text-xl font-bold">LOGO</h1>
          <button 
            className="lg:hidden text-secondary hover:text-primary"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto chat-scrollbar">
          <div className="space-y-1">
            {navigation.map((item) => {
              // Check if this item or any of its sub-items is active
              const isActive = item.href 
                ? pathname === item.href
                : item.items?.some(sub => pathname === sub.href);
              
              return item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-sidebar-active text-sidebar-active"
                      : "text-secondary hover:bg-surface3 hover:text-primary"
                  }`}
                  onClick={onClose}
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
                  isActive={isActive || false}
                />
              );
            })}
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
    </>
  );
};

export default Sidebar;