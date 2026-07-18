import { useState, useEffect } from "react";
import { getLights } from "../../services/api";

function StreetLightsTable() {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    async function loadLights() {
      try {
        const data = await getLights();

        console.log("API Data:", data);

        const formattedData = data.map((light) => ({
          ...light,
          location: light.location || "Unknown",
          brightness:
            light.status === "ON"
              ? "100%"
              : light.status === "OFF"
              ? "0%"
              : "--",
        }));

        setLights(formattedData);
      } catch (error) {
        console.error("Error loading lights:", error);
      }
    }

    loadLights();
  }, []);

  const toggleLight = (id) => {
    setLights((prevLights) =>
      prevLights.map((light) => {
        if (light.id !== id) return light;

        if (light.status === "FAULT") return light;

        console.log("Lights:", lights);

        return {
          ...light,
          status: light.status === "ON" ? "OFF" : "ON",
          brightness: light.status === "ON" ? "0%" : "100%",
        };
      })
    );
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">Street Lights</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="py-3">Pole</th>
            <th>Location</th>
            <th>Status</th>
            <th>Brightness</th>
            <th>Control</th>
          </tr>
        </thead>

        <tbody>
          {lights.map((light) => (
            <tr key={light.id} className="border-b border-slate-800">
              <td className="py-4">{light.pole}</td>

              <td>{light.location}</td>

              <td>
                {light.status === "ON" && (
                  <span className="text-green-400">🟢 ON</span>
                )}

                {light.status === "OFF" && (
                  <span className="text-gray-400">⚫ OFF</span>
                )}

                {light.status === "FAULT" && (
                  <span className="text-red-500">🔴 FAULT</span>
                )}
              </td>

              <td>{light.brightness}</td>

              <td>
                <button
                  onClick={() => toggleLight(light.id)}
                  disabled={light.status === "FAULT"}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 px-4 py-2 rounded-lg"
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {lights.length === 0 && (
        <p className="text-center text-gray-400 mt-4">
          Loading lights...
        </p>
      )}
    </div>
  );
}

export default StreetLightsTable;