
import {
  FaHome,
  FaLightbulb,
  FaMapMarkedAlt,
  FaChartBar,
  FaBell,
  FaTools,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800">

      <div className="p-6">

        <h1 className="text-2xl font-bold text-blue-500">
          ⚡ SmartLight
        </h1>

      </div>

      <nav className="px-4 space-y-2">

        <SidebarItem icon={<FaHome />} text="Dashboard" />
        <SidebarItem icon={<FaLightbulb />} text="Street Lights" />
        <SidebarItem icon={<FaMapMarkedAlt />} text="Live Map" />
        <SidebarItem icon={<FaChartBar />} text="Analytics" />
        <SidebarItem icon={<FaBell />} text="Alerts" />
        <SidebarItem icon={<FaTools />} text="Maintenance" />
        <SidebarItem icon={<FaFileAlt />} text="Reports" />
        <SidebarItem icon={<FaCog />} text="Settings" />

      </nav>

    </aside>
  );
}

function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800 cursor-pointer transition">

      <span className="text-blue-400">
        {icon}
      </span>

      <span>{text}</span>

    </div>
  );
}

export default Sidebar;