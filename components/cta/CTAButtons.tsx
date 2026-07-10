import { ArrowRight, Sparkles } from "lucide-react";

export default function CTAButtons() {
  return (
    <div
      className="
        mt-14
        flex
        flex-col
        items-center
        justify-center
        gap-5
        sm:flex-row
      "
    >
      {/* Primary Button */}

      <button
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          shadow-[0_20px_60px_rgba(37,99,235,0.30)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_30px_80px_rgba(37,99,235,0.45)]
        "
      >
        <Sparkles
          className="
            h-5
            w-5
            transition-transform
            duration-300
            group-hover:rotate-12
          "
        />

        Get Early Access

        <ArrowRight
          className="
            h-5
            w-5
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>

      {/* Secondary Button */}

      <button
        className="
          rounded-full
          border
          border-white/50
          bg-white/35
          px-8
          py-4
          text-lg
          font-semibold
          text-slate-700
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-white/55
          hover:border-blue-200
          hover:-translate-y-1
        "
      >
        Learn More
      </button>
    </div>
  );
}