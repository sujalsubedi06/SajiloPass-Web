"use client";

import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingCard({
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`
        absolute
        hidden
        lg:block
        ${className}
      `}
    >
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl

          border
          border-white/50

          bg-white/75
          backdrop-blur-2xl

          shadow-[0_25px_70px_rgba(15,23,42,.10)]

          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          will-change-transform

          hover:-translate-y-4
          hover:scale-[1.04]
          hover:-rotate-1

          hover:bg-white/90
          hover:border-blue-300/70
          hover:shadow-[0_40px_90px_rgba(37,99,235,.20)]
        "
      >
        {/* Gradient Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-br
            from-white/40
            via-transparent
            to-blue-200/20
          "
        />

        {/* Shine */}
        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-0
            h-full
            w-24
            -skew-x-12
            bg-white/40
            blur-xl
            opacity-0
            transition-all
            duration-700
            group-hover:left-[130%]
            group-hover:opacity-100
          "
        />

        {/* Blue Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-br
            from-blue-500/0
            via-blue-500/0
            to-blue-500/10
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Border Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-3xl
            border
            border-blue-400/0
            transition-all
            duration-500
            group-hover:border-blue-400/40
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            transition-transform
            duration-500
            group-hover:-translate-y-1
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}