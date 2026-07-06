export default function PreviewBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white
          via-slate-50
          to-white
        "
      />

      {/* Top Left Glow */}
      <div
        className="
          animate-glow
          absolute
          -left-52
          top-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

      {/* Top Right Glow */}
      <div
        className="
          animate-glow
          absolute
          right-[-220px]
          top-10
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/10
          blur-[180px]
        "
      />

      {/* Bottom Center Glow */}
      <div
        className="
          animate-glow
          absolute
          bottom-[-220px]
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/10
          blur-[200px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Top Fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-48
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
          h-48
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />
    </div>
  );
}