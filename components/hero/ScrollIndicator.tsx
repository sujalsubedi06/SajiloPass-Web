"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        z-[80]
        hidden
        -translate-x-1/2
        lg:flex
        flex-col
        items-center
        gap-4
        animate-fade-up
        select-none
      "
    >
      {/* Mouse */}

      <div
        className="
          group
          relative
          flex
          h-14
          w-8
          justify-center
          rounded-full
          border
          border-white/40
          bg-white/40
          backdrop-blur-xl
          shadow-[0_10px_30px_rgba(15,23,42,.08)]
          transition-all
          duration-300
          hover:border-blue-300
          hover:shadow-[0_15px_40px_rgba(37,99,235,.18)]
        "
      >
        {/* Moving Dot */}

        <span
          className="
            absolute
            top-2
            h-2.5
            w-2.5
            rounded-full
            bg-gradient-to-b
            from-cyan-300
            to-blue-600
            shadow-[0_0_12px_rgba(59,130,246,.55)]
            animate-scroll-dot
          "
        />
      </div>

      {/* Text */}

      <span
        className="
          bg-gradient-to-r
          from-slate-500
          to-slate-400
          bg-clip-text
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-transparent
        "
      >
        Scroll
      </span>

      {/* Arrow */}

      <ChevronDown
        size={18}
        className="
          text-slate-400
          animate-scroll-arrow
        "
      />
    </div>
  );
}