export default function HowItWorksBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base Background */}

      <div
        className="
          absolute
          inset-0
        "
      />

      {/* Center Glow */}

      <div
        className="
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
          animate-pulse
        "
      />

      {/* Top Left Glow */}

      <div
        className="
          absolute
          -left-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[150px]
        "
      />

      {/* Bottom Right Glow */}

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-400/10
          blur-[170px]
        "
      />

      {/* Floating Orb */}

      <div
        className="
          absolute
          left-1/4
          top-1/3
          h-52
          w-52
          rounded-full
          bg-blue-300/10
          blur-[100px]
          animate-bounce
        "
        style={{
          animationDuration: "8s",
        }}
      />

      {/* Decorative Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Top Fade */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-white
          to-transparent
        "
      />

      {/* Bottom Fade */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />

      {/* Noise Overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

    </div>
  );
}