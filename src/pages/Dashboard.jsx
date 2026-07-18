import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import SummarySection from "../components/dashboard/SummarySection";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import MonitoringSection from "../components/dashboard/MonitoringSection";
import StreetLightsTable from "../components/dashboard/StreetLightsTable";
import ControlPanel from "../components/dashboard/ControlPanel";


function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* সাইডবার */}
      <Sidebar />

      <div className="flex-1">
        {/* নেভবার */}
        <Navbar />

        {/* মেইন কনটেন্ট */}
        <main className="p-6">
          <h1 className="text-3xl font-bold">
            Smart Street Light Dashboard
          </h1>
          <p className="text-slate-400 mt-2">
            Welcome to the Smart City Control Center
          </p>

          {/* আপনার নতুন মডুলার সামারি সেকশন */}
          <SummarySection />
          <MonitoringSection />
          <StreetLightsTable />
          
          <ControlPanel />

          <div className="mt-8">
            <RecentAlerts />
          </div>

        </main>
      </div>
    </div>

  );
}

export default Dashboard;