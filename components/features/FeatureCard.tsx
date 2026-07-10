"use client";

import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
}: FeatureCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/60
        bg-white/75
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(37,99,235,.16)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/0
          via-transparent
          to-blue-500/10
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon
          size={30}
          className="text-blue-600"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-7">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          relative
          z-10
          mt-8
          flex
          justify-end
        "
      >
        <ArrowUpRight
          size={22}
          className="
            text-slate-400
            transition-all
            duration-500
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:text-blue-600
          "
        />
      </div>
    </article>
  );
}