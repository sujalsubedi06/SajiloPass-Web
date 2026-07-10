import OperatorsBackground from "./OperatorsBackground";
import OperatorsHeader from "./OperatorsHeader";
import OperatorFeatures from "./OperatorFeatures";

export default function Operators() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        py-32
        lg:py-40
      "
    >
      {/* Background */}
      <OperatorsBackground />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Header */}
        <OperatorsHeader />

        {/* Features + Dashboard */}
        <OperatorFeatures />
      </div>
    </section>
  );
}