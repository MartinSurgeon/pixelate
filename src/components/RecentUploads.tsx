import { MoreVertical } from "lucide-react";
import { useState } from "react";

const allFiles = [
  {
    name: "File_Design.pdf",
    type: "PDF",
    size: "2.5MB",
    date: "2 days ago",
    color: "bg-orange-500",
  },
  {
    name: "Cool_Nature.jpg",
    type: "JPG",
    size: "3.2MB",
    date: "2 days ago",
    color: "bg-blue-500",
  },
  {
    name: "File_DataStore",
    type: "DOC",
    size: "1.8MB",
    date: "3 days ago",
    color: "bg-emerald-500",
  },
  {
    name: "Holiday_Done_Sheet.jpg",
    type: "JPG",
    size: "4.1MB",
    date: "4 days ago",
    color: "bg-violet-500",
  },
  {
    name: "Project_Brief.pdf",
    type: "PDF",
    size: "1.2MB",
    date: "5 days ago",
    color: "bg-orange-500",
  },
  {
    name: "Team_Photo.jpg",
    type: "JPG",
    size: "5.5MB",
    date: "6 days ago",
    color: "bg-blue-500",
  },
];

export const RecentUploads = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedFiles = showAll ? allFiles : allFiles.slice(0, 4);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Uploaded</h2>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-primary hover:text-primary-hover transition-colors"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedFiles.map((file) => (
          <div key={file.name} className="bg-white rounded-lg p-4 card-shadow group">
            <div className="flex items-start justify-between mb-4">
              <div className={`${file.color} text-white px-3 py-1 rounded text-sm`}>
                {file.type}
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <h3 className="font-medium mb-1 truncate">{file.name}</h3>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{file.size}</span>
              <span>{file.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};