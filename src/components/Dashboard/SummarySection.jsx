import SummaryCard from "../cards/SummaryCard";
import {
  FaLightbulb,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPlug,
  FaBolt,
  FaLeaf,
} from "react-icons/fa";

function SummarySection() {
  return (
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
     
      
  );
}

export default SummarySection;