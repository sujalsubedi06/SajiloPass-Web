export default function FAQBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base Gradient */}

      <div
        className="
          absolute
          inset-0
        "
      />

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-40
          bottom-20
          h-[560px]
          w-[560px]
          rounded-full
          bg-cyan-400/10
          blur-[180px]
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
          bg-blue-500/5
          blur-[220px]
        "
      />

      {/* Grid */}

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

    </div>
  );
}