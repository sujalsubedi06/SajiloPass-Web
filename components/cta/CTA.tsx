import CTABackground from "./CTABackground";
import CTAContent from "./CTAContent";

export default function CTA() {
  return (
    <section
    className="
        relative
        isolate
        overflow-hidden
        pt-24
        pb-32
    " id="cta"
    >
      {/* Background */}

      <CTABackground />

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
        <CTAContent />
      </div>
    </section>
  );
}