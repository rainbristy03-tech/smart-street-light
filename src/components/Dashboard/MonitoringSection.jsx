function MonitoringSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      
      {/* Live Map */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">
          📍 Live Map
        </h2>

        <div className="h-80 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
          Live Map Coming Soon
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
        <h2 className="text-xl font-semibold mb-4">
          🚨 Recent Alerts
        </h2>

        <div className="space-y-4">

          <div className="border-l-4 border-red-500 bg-slate-800 p-3 rounded">
            <h3 className="font-semibold">Pole-25</h3>
            <p className="text-red-400 text-sm">
              Light Fault Detected
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 bg-slate-800 p-3 rounded">
            <h3 className="font-semibold">Pole-12</h3>
            <p className="text-yellow-400 text-sm">
              Offline
            </p>
          </div>

          <div className="border-l-4 border-orange-500 bg-slate-800 p-3 rounded">
            <h3 className="font-semibold">Pole-08</h3>
            <p className="text-orange-400 text-sm">
              Voltage Low
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MonitoringSection;