import { Progress } from "@/components/ui/progress";

export const UserSession = () => {
  const usagePercentage = 75; // Example value

  return (
    <div className="bg-white rounded-lg p-6 card-shadow animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Pixelate</h2>
          <p className="text-gray-500">Professional Plan</p>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 text-primary bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors">
          Upgrade Plan
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Total Usage</span>
          <span className="font-medium">{usagePercentage}%</span>
        </div>
        <Progress value={usagePercentage} className="h-2 bg-gray-100" />
        <p className="text-xs text-gray-500">
          {usagePercentage}GB of 100GB used
        </p>
      </div>
    </div>
  );
};