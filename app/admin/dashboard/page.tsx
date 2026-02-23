import DashboardStats from "@/components/admin/DashboardStats";
import FleetStatus from "@/components/admin/FleetStatus";
import FleetTable from "@/components/admin/FleetTable";
import RevenueOverview from "@/components/admin/RevenueOverview";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f5] flex flex-col font-display">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <RevenueOverview />
          </div>
          <div className="lg:col-span-1">
            <FleetStatus />
          </div>
        </div>

        <FleetTable />
      </main>

      <Footer />
    </div>
  );
}
