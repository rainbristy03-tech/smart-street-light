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

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Street Lights",
    path: "/lights",
    icon: <FaLightbulb />,
  },
  {
    title: "Live Map",
    path: "/map",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <FaChartBar />,
  },
  {
    title: "Alerts",
    path: "/alerts",
    icon: <FaBell />,
  },
  {
    title: "Maintenance",
    path: "/maintenance",
    icon: <FaTools />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaFileAlt />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-blue-500">
          ⚡ SmartLight
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Smart Street Light System
        </p>

      </div>

      <nav className="p-4">

        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}

      </nav>
    </aside>
  );
}

export default Sidebar;