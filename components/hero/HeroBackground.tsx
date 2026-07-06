export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 -z-50 bg-gradient-to-br from-white via-slate-50 to-blue-50" />

      {/* Aurora Glow */}
      <div
        className="
          animate-glow
          absolute
          -top-72
          right-[-250px]
          -z-40
          h-[850px]
          w-[850px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      {/* Cyan Blob */}
      <div
        className="
          animate-float-slow
          absolute
          bottom-[-320px]
          left-[-180px]
          -z-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      {/* Purple Accent */}
      <div
        className="
          animate-float-reverse
          absolute
          top-40
          left-1/2
          -z-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-400/10
          blur-[100px]
        "
      />

      {/* White Light */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -z-30
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white/70
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.05]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Noise */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top Light Beam */}
      <div
        className="
          absolute
          top-[-280px]
          left-1/2
          -z-20
          h-[800px]
          w-[1200px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-blue-200/40
          to-transparent
          blur-[150px]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="animate-float absolute h-2 w-2 rounded-full bg-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-b from-transparent to-white" />
    </>
  );
}