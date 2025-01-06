import { SearchBar } from "@/components/SearchBar";
import { UploadArea } from "@/components/UploadArea";
import { RecentUploads } from "@/components/RecentUploads";
import { Sidebar } from "@/components/Sidebar";
import { UserSession } from "@/components/UserSession";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar collapsed={sidebarCollapsed} onCollapse={setSidebarCollapsed} />

      <main 
        className={`
          min-h-screen
          transition-all 
          duration-300 
          ease-in-out
          ${sidebarCollapsed ? 'ml-16' : 'ml-64'} 
          px-4 
          md:px-8 
          py-6 
          md:py-8
        `}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              
              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span className="font-medium">John Doe</span>
                      <span className="text-xs text-gray-500">john@pixelate.com</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Add Asset +
              </button>
            </div>
          </header>

          {/* Quick Action & Upload Area Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Quick Action</h2>
            <UploadArea />
          </section>

          {/* Stats Section */}
          <section>
            <UserSession />
          </section>

          {/* Recent Uploads Section */}
          <section className="pb-8">
            <RecentUploads />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;