import { SearchBar } from "@/components/SearchBar";
import { QuickStats } from "@/components/QuickStats";
import { UploadArea } from "@/components/UploadArea";
import { RecentUploads } from "@/components/RecentUploads";
import { Sidebar } from "@/components/Sidebar";
import { UserSession } from "@/components/UserSession";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onCollapse={setSidebarCollapsed} />

      {/* Main Content */}
      <main 
        className={`
          transition-all 
          duration-300 
          ${sidebarCollapsed ? 'pl-20' : 'pl-[280px]'} 
          pr-4 
          md:pr-8 
          pt-6 
          md:pt-8
          min-h-screen
        `}
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-0">
            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                Add Asset +
              </button>
            </div>
          </header>

          {/* Quick Action & Upload Area Section */}
          <section className="px-4 md:px-0">
            <h2 className="text-lg font-semibold mb-4">Quick Action</h2>
            <UploadArea />
          </section>

          {/* Stats Section */}
          <section className="px-4 md:px-0">
            <UserSession />
          </section>

          {/* Recent Uploads Section */}
          <section className="px-4 md:px-0 pb-8">
            <RecentUploads />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;