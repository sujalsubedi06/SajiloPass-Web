import HowItWorksBackground from "./HowItWorksBackground";
import HowItWorksHeader from "./HowItWorksHeader";
import JourneySteps from "./JourneySteps";

export default function HowItWorks() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        py-32
        lg:py-40
      " id="how-it-works"
    >
      {/* Background */}
      <HowItWorksBackground />

      {/* Decorative Blur */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[180px]
        "
      />

      {/* Decorative Blur */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/5
          blur-[150px]
        "
      />

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
        {/* Section Header */}
        <HowItWorksHeader />

        {/* Journey Layout */}
        <div className="mt-24 lg:mt-32">
          <JourneySteps />
        </div>
      </div>
    </section>
  );
}