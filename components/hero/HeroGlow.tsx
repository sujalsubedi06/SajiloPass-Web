"use client";

export default function HeroGlow() {
  return (
    <>
      {/* =======================================================
          Main Blue Glow
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-30
          h-[760px]
          w-[760px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/18
          blur-[170px]
          animate-glow
        "
      />

      {/* =======================================================
          Cyan Accent
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[12%]
          -z-30
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/18
          blur-[130px]
          animate-float-slow
        "
      />

      {/* =======================================================
          Left Sky Light
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-[28%]
          -z-30
          h-[420px]
          w-[420px]
          rounded-full
          bg-sky-300/16
          blur-[150px]
          animate-float-reverse
        "
      />

      {/* =======================================================
          Bottom Reflection
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -z-30
          h-[220px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/12
          blur-[110px]
        "
      />

      {/* =======================================================
          White Highlight
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[22%]
          -z-30
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-white/30
          blur-[120px]
          opacity-60
        "
      />

      {/* =======================================================
          Left Light Beam
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[12%]
          -z-30
          h-[620px]
          w-[2px]
          rotate-12
          bg-gradient-to-b
          from-blue-300/40
          via-blue-200/10
          to-transparent
          blur-md
          opacity-70
        "
      />

      {/* =======================================================
          Right Light Beam
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[10%]
          -z-30
          h-[560px]
          w-[2px]
          -rotate-12
          bg-gradient-to-b
          from-cyan-300/40
          via-cyan-200/10
          to-transparent
          blur-md
          opacity-70
        "
      />

      {/* =======================================================
          Small Glow Orb
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-[22%]
          top-[18%]
          h-4
          w-4
          rounded-full
          bg-cyan-300
          blur-sm
          animate-pulse
        "
      />

      {/* =======================================================
          Small Glow Orb
      ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[24%]
          bottom-[28%]
          h-5
          w-5
          rounded-full
          bg-blue-400
          blur-sm
          animate-pulse
        "
      />
    </>
  );
}