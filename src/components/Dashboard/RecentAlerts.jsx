import { FaExclamationTriangle } from "react-icons/fa";

const alerts = [
  {
    id: 1,
    pole: "Pole-25",
    message: "Light Fault Detected",
    color: "text-red-400",
  },
  {
    id: 2,
    pole: "Pole-12",
    message: "Offline",
    color: "text-yellow-400",
  },
  {
    id: 3,
    pole: "Pole-08",
    message: "Voltage Low",
    color: "text-orange-400",
  },
];

function RecentAlerts() {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
      <div className="flex items-center gap-2 mb-4">
        <FaExclamationTriangle className="text-red-500" />
        <h2 className="text-xl font-semibold">Recent Alerts</h2>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border-b border-slate-800 pb-3 last:border-none"
          >
            <p className="font-semibold">{alert.pole}</p>
            <p className={`${alert.color} text-sm`}>
              {alert.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAlerts;