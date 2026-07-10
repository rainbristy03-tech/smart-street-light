import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

// ১. এখানে Imports গুলো যোগ করা হলো
import SummaryCard from "../components/cards/SummaryCard";
import {
  FaLightbulb,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlug,
  FaBolt,
  FaLeaf,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* সাইডবার */}
      <Sidebar />

      <div className="flex-1">
        {/* নেভবার */}
        <Navbar />

        {/* <main> এর ভিতর কোড যোগ করা হলো */}
        <main className="p-6">
          <h1 className="text-3xl font-bold">
            Smart Street Light Dashboard
          </h1>
          <p className="text-slate-400 mt-2">
            Welcome to the Smart City Control Center
          </p>

          {/* ২. এইখানে আপনার গাইডলাইনের গ্রিড এবং কার্ডের কোডটি বসানো হলো */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <SummaryCard
              title="Total Lights"
              value="250"
              icon={<FaLightbulb />}
              color="text-yellow-400"
            />

            <SummaryCard
              title="Working"
              value="242"
              icon={<FaCheckCircle />}
              color="text-green-500"
            />

            <SummaryCard
              title="Fault"
              value="5"
              icon={<FaExclamationTriangle />}
              color="text-red-500"
            />

            <SummaryCard
              title="Offline"
              value="3"
              icon={<FaPlug />}
              color="text-gray-400"
            />

            <SummaryCard
              title="Today's Energy"
              value="324 kWh"
              icon={<FaBolt />}
              color="text-blue-500"
            />

            <SummaryCard
              title="Energy Saved"
              value="31%"
              icon={<FaLeaf />}
              color="text-green-400"
            />
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;