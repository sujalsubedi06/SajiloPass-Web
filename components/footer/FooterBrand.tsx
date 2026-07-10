import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="max-w-xl">

      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-blue-200/60
          bg-white/60
          px-4
          py-2
          backdrop-blur-xl
          shadow-sm
        "
      >
        <span className="text-sm font-semibold tracking-wide text-blue-600">
          🚍 SMART MOBILITY PLATFORM
        </span>
      </div>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
        "
      >
        Building the Future of
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-600
            via-sky-500
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >
          Public Transport.
        </span>
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          max-w-lg
          text-lg
          leading-8
          text-slate-600
        "
      >
        YatraPass helps passengers travel cashlessly while giving
        operators powerful tools to manage fleets, routes and
        payments through one intelligent platform.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="#"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-600
            px-7
            py-3.5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-700
          "
        >
          Get Started

          <ArrowRight size={18} />
        </Link>

        <Link
          href="mailto:hello@yatrapass.com"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white/70
            px-7
            py-3.5
            font-semibold
            text-slate-700
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-300
            hover:text-blue-600
          "
        >
          <Mail size={18} />

          Contact Us
        </Link>

      </div>

    </div>
  );
}