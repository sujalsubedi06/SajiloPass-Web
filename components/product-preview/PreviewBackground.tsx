export default function PreviewBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large Center Glow */}
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

      {/* Top Left Glow */}
      <div
        className="
          animate-glow
          absolute
          -left-56
          top-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-sky-400/15
          blur-[160px]
        "
      />

      {/* Top Right Glow */}
      <div
        className="
          animate-glow
          absolute
          right-[-220px]
          top-12
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/15
          blur-[180px]
        "
      />

      {/* Bottom Left Glow */}
      <div
        className="
          animate-float-reverse
          absolute
          bottom-[-180px]
          left-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-400/15
          blur-[150px]
        "
      />

      {/* Bottom Center Glow */}
      <div
        className="
          animate-glow
          absolute
          bottom-[-250px]
          left-1/2
          h-[750px]
          w-[750px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[220px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />
    </div>
  );
}