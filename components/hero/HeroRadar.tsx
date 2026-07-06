"use client";

export default function HeroRadar() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {/* =====================================================
          OUTER FADED HALO
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[900px]
          w-[900px]
          rounded-full
          border
          border-blue-100/20
        "
      />

      {/* =====================================================
          RING 1
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[720px]
          w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-200/35
          animate-rotate-slow
        "
      />

      {/* =====================================================
          RING 2
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-200/30
          [animation:rotateSlow_55s_linear_infinite_reverse]
        "
      />

      {/* =====================================================
          RING 3
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[470px]
          w-[470px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-300/20
          animate-pulse
        "
      />

      {/* =====================================================
          DASHED ORBIT
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[640px]
          w-[640px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-dashed
          border-blue-300/20
          animate-rotate-slow
        "
      />

      {/* =====================================================
          INNER GLOW RING
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-300/30
          shadow-[0_0_70px_rgba(59,130,246,.25)]
        "
      />

      {/* =====================================================
          TOP ORB
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-[130px]
          h-3
          w-3
          -translate-x-1/2
          rounded-full
          bg-blue-400
          shadow-[0_0_25px_rgba(59,130,246,.8)]
          animate-pulse
        "
      />

      {/* =====================================================
          RIGHT ORB
      ===================================================== */}
      <div
        className="
          absolute
          right-[170px]
          top-1/2
          h-3
          w-3
          -translate-y-1/2
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,.8)]
          animate-pulse
        "
      />

      {/* =====================================================
          LEFT ORB
      ===================================================== */}
      <div
        className="
          absolute
          left-[170px]
          top-1/2
          h-3
          w-3
          -translate-y-1/2
          rounded-full
          bg-blue-500
          shadow-[0_0_20px_rgba(37,99,235,.8)]
          animate-pulse
        "
      />

      {/* =====================================================
          BOTTOM ORB
      ===================================================== */}
      <div
        className="
          absolute
          bottom-[120px]
          left-1/2
          h-3
          w-3
          -translate-x-1/2
          rounded-full
          bg-cyan-300
          shadow-[0_0_25px_rgba(34,211,238,.8)]
          animate-pulse
        "
      />

      {/* =====================================================
          CENTER GLOW
      ===================================================== */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />
    </div>
  );
}