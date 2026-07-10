export default function FooterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Left Glow */}

      <div
        className="
          absolute
          -left-56
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* Right Glow */}

      <div
        className="
          absolute
          -right-56
          top-0
          h-[500px]
          w-[500px]
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
          bottom-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
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

      {/* Gradient Divider */}

      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-full
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-300/60
          to-transparent
        "
      />
    </div>
  );
}