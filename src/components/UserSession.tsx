import { Progress } from "@/components/ui/progress";

export const UserSession = () => {
  const usagePercentage = 62; // Example value matching the image (62% are image)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div className="stat-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Total Storage Used</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">19.2 GB</span>
              <span className="text-sm text-gray-500">/ 40GB</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-emerald-100">
            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
        </div>
        <Progress value={48} className="h-1.5" /> {/* 19.2/40 ≈ 48% */}
      </div>

      <div className="stat-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Asset Uploaded</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">382</span>
              <span className="text-sm text-gray-500">img, pdf, vid, etc.</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-blue-100">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </div>
        <Progress value={usagePercentage} className="h-1.5" />
      </div>

      <div className="stat-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Active Member</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">25</span>
              <span className="text-sm text-gray-500">/ 100 people inside</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-violet-100">
            <svg className="w-6 h-6 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
        <Progress value={25} className="h-1.5" /> {/* 25/100 = 25% */}
      </div>
    </div>
  );
};