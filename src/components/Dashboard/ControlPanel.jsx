function ControlPanel() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Light Control Panel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <button className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold">
          Turn ON All
        </button>

        <button className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold">
          Turn OFF All
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
          Auto Mode
        </button>

        <button className="bg-yellow-500 hover:bg-yellow-600 py-3 rounded-xl font-semibold text-black">
          Manual Mode
        </button>

      </div>

      <div className="mt-8">
        <label className="block mb-3 text-lg">
          Brightness
        </label>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="80"
          className="w-full"
        />

        <p className="mt-2 text-slate-400">
          Current Brightness: 80%
        </p>
      </div>
    </div>
  );
}

export default ControlPanel;