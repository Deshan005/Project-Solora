// app/dashboard/layout.tsx
"use client";

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from "@/components/NavBar/NavBar";
import Sidebar from "@/components/SideBar/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const authStatus = localStorage.getItem('isAuthenticated')
    if (!authStatus) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  if (!isAuthenticated) {
    return <div className='loader'>Loading...</div>
  }

  return (
    <body className="bg-surface1 text-primary">
      <div className="flex h-screen">
        {/* Fixed sidebar - visible on large screens, hidden on mobile by default */}
        <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
        </div>
        
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        
        {/* Main content area - offset by sidebar width on large screens */}
        <div className="flex flex-col flex-1 min-w-0 lg:ml-0">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-auto p-4 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}