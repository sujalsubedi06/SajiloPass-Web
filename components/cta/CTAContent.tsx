import CTAButtons from "./CTAButtons";

export default function CTAContent() {
  return (
    <div
      className="
        relative
        mx-auto
        max-w-6xl
        overflow-hidden
        rounded-[40px]
        border
        border-white/40
        bg-white/30
        px-8
        py-20
        text-center
        backdrop-blur-[30px]
        shadow-[0_30px_120px_rgba(15,23,42,0.08)]
        ring-1
        ring-white/30
        md:px-16
        lg:px-24
      "
    >
      {/* Top Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Badge */}

      <div
        className="
          relative
          z-10
          inline-flex
          items-center
          rounded-full
          border
          border-blue-100/60
          bg-white/50
          px-5
          py-2
          backdrop-blur-xl
        "
      >
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-600
          "
        >
          🚀 Join the Future of Public Transport
        </span>
      </div>

      {/* Heading */}

      <h2
        className="
          relative
          z-10
          mt-8
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          md:text-6xl
          lg:text-7xl
        "
      >
        Ready to Ride
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-700
            bg-clip-text
            text-transparent
          "
        >
          Smarter?
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          relative
          z-10
          mx-auto
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-slate-600
        "
      >
        Experience a faster, cashless, and GPS-powered way to travel.
        SajiloPass is redefining public transportation with seamless
        fare collection and a smarter commuting experience.
      </p>

      {/* Buttons */}

      <div className="relative z-10">
        <CTAButtons />
      </div>
    </div>
  );
}