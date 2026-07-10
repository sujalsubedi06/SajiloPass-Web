export default function CTABackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-48
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-48
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
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
          h-[850px]
          w-[850px]
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
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

    </div>
  );
}