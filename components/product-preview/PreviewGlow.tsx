export default function PreviewGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main Center Glow */}
      <div
        className="
          animate-glow
          absolute
          left-1/2
          top-[56%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/12
          blur-[170px]
        "
      />

      {/* Cyan Accent */}
      <div
        className="
          animate-glow
          absolute
          left-[58%]
          top-[42%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/12
          blur-[130px]
        "
      />

      {/* Blue Accent */}
      <div
        className="
          animate-glow
          absolute
          left-[42%]
          top-[62%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-blue-400/10
          blur-[120px]
        "
      />

      {/* Decorative Ring */}
      <div
        className="
          animate-rotate-slow
          absolute
          left-1/2
          top-1/2
          h-[640px]
          w-[640px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-200/40
        "
      />

      {/* Outer Ring */}
      <div
        className="
          animate-rotate-slow
          absolute
          left-1/2
          top-1/2
          h-[780px]
          w-[780px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-100/30
          [animation-direction:reverse]
        "
      />

      {/* Small Floating Lights */}

      <div
        className="
          animate-card-1
          absolute
          left-[20%]
          top-[25%]
          h-3
          w-3
          rounded-full
          bg-blue-400
          opacity-70
        "
      />

      <div
        className="
          animate-card-2
          absolute
          right-[18%]
          top-[30%]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          opacity-70
        "
      />

      <div
        className="
          animate-card-3
          absolute
          left-[28%]
          bottom-[24%]
          h-2.5
          w-2.5
          rounded-full
          bg-blue-500
          opacity-60
        "
      />

      <div
        className="
          animate-card-4
          absolute
          right-[26%]
          bottom-[18%]
          h-3
          w-3
          rounded-full
          bg-sky-400
          opacity-60
        "
      />
    </div>
  );
}