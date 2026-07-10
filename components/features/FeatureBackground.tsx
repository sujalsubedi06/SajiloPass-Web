"use client";

export default function FeatureBackground() {
  return (
    <>
      {/* Top Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/15
          blur-[140px]
          animate-glow
        "
      />

      {/* Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-1/2
          h-[300px]
          w-[300px]
          -translate-y-1/2
          rounded-full
          bg-cyan-300/10
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-1/2
          h-[320px]
          w-[320px]
          -translate-y-1/2
          rounded-full
          bg-blue-300/10
          blur-[140px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#2563eb_1px,transparent_1px),linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />
    </>
  );
}