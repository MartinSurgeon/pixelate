import { Database, Upload, Users } from "lucide-react";

const stats = [
  {
    title: "Total Storage Used",
    value: "19.2 GB",
    total: "40GB",
    icon: Database,
    color: "text-emerald-500",
  },
  {
    title: "Asset Uploaded",
    value: "382",
    subtitle: "img, pdf, vid, etc.",
    icon: Upload,
    color: "text-blue-500",
  },
  {
    title: "Active Member",
    value: "25",
    total: "100 people inside",
    icon: Users,
    color: "text-violet-500",
  },
];

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      {stats.map((stat) => (
        <div key={stat.title} className="stat-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
              <h3 className="text-2xl font-semibold mb-1">{stat.value}</h3>
              {stat.total && (
                <p className="text-sm text-gray-500">/ {stat.total}</p>
              )}
              {stat.subtitle && (
                <p className="text-sm text-gray-500">{stat.subtitle}</p>
              )}
            </div>
            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};