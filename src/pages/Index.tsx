import { SearchBar } from "@/components/SearchBar";
import { QuickStats } from "@/components/QuickStats";
import { UploadArea } from "@/components/UploadArea";
import { RecentUploads } from "@/components/RecentUploads";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      <main className="pl-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <SearchBar />
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
              Add Asset +
            </button>
          </div>

          <section className="mb-8">
            <UploadArea />
          </section>

          <section className="mb-12">
            <QuickStats />
          </section>

          <section>
            <RecentUploads />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;