import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import ScrollIndicator from "./ScrollIndicator";
import MouseGlow from "./MouseGlow";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden" id="home">
      {/* Background */}
      <HeroBackground />

      <MouseGlow />

      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Center Glow */}
        <div
          className="
            animate-glow
            absolute
            left-1/2
            top-1/2
            h-[900px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[180px]
          "
        />

        {/* Top Right */}
        <div
          className="
            animate-float-slow
            absolute
            right-[-220px]
            top-[10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-400/15
            blur-[150px]
          "
        />

        {/* Bottom Left */}
        <div
          className="
            animate-float-reverse
            absolute
            bottom-[-180px]
            left-[-180px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-sky-300/20
            blur-[140px]
          "
        />

        {/* Extra Blue Glow */}
        <div
          className="
            animate-glow
            absolute
            top-10
            left-1/3
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-300/20
            blur-[120px]
          "
        />
      </div>

      {/* Hero Layout */}
      <div
        className="
          relative
          z-20
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-center
          gap-24
          px-8
          pb-24
          pt-40
          lg:grid-cols-2
          xl:px-12
        "
      >
        <HeroContent />

        <HeroVisual />
      </div>

      {/* Scroll Down Indicator */}
      <ScrollIndicator />
    </section>
  );
}