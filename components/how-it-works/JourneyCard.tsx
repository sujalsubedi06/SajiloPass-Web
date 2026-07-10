import { ArrowUpRight } from "lucide-react";

interface JourneyCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function JourneyCard({
  number,
  title,
  description,
  icon: Icon,
}: JourneyCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/70
        bg-white/75
        p-8
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_30px_80px_rgba(37,99,235,0.12)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-blue-500/5
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Step */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-blue-500/25
          "
        >
          {number}
        </div>

        <h3
          className="
            text-[34px]
            font-bold
            leading-none
            tracking-tight
            text-slate-900
          "
        >
          {title}
        </h3>
      </div>

      {/* Icon */}
      <div
        className="
          mt-8
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-[26px]
          bg-gradient-to-br
          from-blue-50
          to-slate-100
          text-blue-600
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-3
        "
      >
        <Icon className="h-10 w-10" strokeWidth={2} />
      </div>

      {/* Description */}
      <p
        className="
          mt-8
          text-[16px]
          leading-9
          text-slate-600
        "
      >
        {description}
      </p>

      {/* Bottom Arrow */}
      <div
        className="
          mt-10
          flex
          justify-end
          text-slate-300
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-blue-600
        "
      >
        <ArrowUpRight size={22} />
      </div>
    </div>
  );
}