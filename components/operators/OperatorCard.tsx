import { ArrowUpRight } from "lucide-react";

interface OperatorCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function OperatorCard({
  title,
  description,
  icon: Icon,
}: OperatorCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/70
        bg-white/75
        p-7
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
          -right-20
          -top-20
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

      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
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
        <Icon className="h-8 w-8" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-2xl
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          leading-8
          text-slate-600
        "
      >
        {description}
      </p>

      {/* Arrow */}
      <div
        className="
          mt-8
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