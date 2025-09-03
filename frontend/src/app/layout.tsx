// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/SideBar/SideBar";

export const metadata = {
  title: "Dashboard",
  description: "Modern dashboard application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface1 text-primary">
        <div className="flex h-screen">
          {/* Fixed sidebar */}
          <div className="fixed left-0 top-0 bottom-0 w-64 z-30">
            <Sidebar />
          </div>
          
          {/* Main content area - offset by sidebar width */}
          <div className="flex flex-col flex-1 ml-64 min-w-0">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
              <main className="flex-1 overflow-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}