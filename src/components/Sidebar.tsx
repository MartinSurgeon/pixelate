import { Home, FolderOpen, Users, BarChart2, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Folder Management", icon: FolderOpen, path: "/folders" },
  { name: "Team", icon: Users, path: "/team" },
  { name: "Analytics", icon: BarChart2, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, onCollapse }: SidebarProps) => {
  const location = useLocation();

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} h-screen bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto transition-all duration-300 animate-fade-in z-50`}>
      <div className="relative">
        <button
          onClick={() => onCollapse(!collapsed)}
          className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50 transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
        
        <div className="p-6">
          <h1 className={`text-xl font-semibold transition-all duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
            Let's Manage<br />Your Asset
          </h1>
        </div>
      </div>
      
      <nav className="px-3 py-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            <span className={`transition-all duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className={`p-4 mx-3 mt-8 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium">Professional</span>
          <span className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-full">Active</span>
        </div>
        <div className="text-2xl font-semibold mb-1">$29<span className="text-sm text-gray-500">/Month</span></div>
        <button className="w-full px-4 py-2 mt-2 text-sm text-primary bg-white rounded-lg hover:bg-primary hover:text-white transition-colors">
          Change Plan
        </button>
      </div>
    </aside>
  );
};