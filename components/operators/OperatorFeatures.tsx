import OperatorCard from "./OperatorCard";
import OperatorDashboard from "./OperatorDashboard";
import { operatorFeatures } from "./data";

export default function OperatorFeatures() {
  return (
    <div
      className="
        mt-24
        grid
        items-center
        gap-20
        lg:grid-cols-[1.15fr_0.85fr]
      "
    >
      {/* Dashboard */}

      <OperatorDashboard />

      {/* Features */}

      <div className="grid gap-6">

        {operatorFeatures.map((feature) => (

          <OperatorCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />

        ))}

      </div>

    </div>
  );
}