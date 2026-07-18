import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const features = [
  "QR Ticketing",
  "Digital Bus Pass",
  "Secure Payments",
];

const stats = [
  {
    value: "100%",
    label: "Digital Ticketing",
  },
  {
    value: "24/7",
    label: "Smart Access",
  },
  {
    value: "Fast",
    label: "Inside Valley",
  },
];

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-[620px]">
      {/* Badge */}

      <div
        className="
          glass
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-blue-200/60
          px-5
          py-2.5
          text-sm
          font-semibold
          text-blue-700
        "
      >
        <span className="text-lg">🇳🇵</span>

        <span>Nepal's Smart Mobility Platform</span>

        <span
          className="
            rounded-full
            bg-blue-600
            px-3
            py-1
            text-[11px]
            font-bold
            uppercase
            tracking-wider
            text-white
          "
        >
          Under Development
        </span>
      </div>

      {/* Heading */}

      <h1
        className="
          mt-10
          text-6xl
          font-black
          leading-[0.92]
          tracking-[-0.04em]
          text-slate-900
          md:text-7xl
          xl:text-[5.5rem]
        "
      >
        Travel

        <span
          className="
            mt-2
            block
            bg-gradient-to-r
            from-blue-700
            via-blue-500
            to-cyan-500
            bg-clip-text
            text-transparent
            animate-gradient
          "
        >
          Smarter
        </span>

        <span className="mt-2 block text-slate-900">
          Across Nepal
        </span>
      </h1>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-[580px]
          text-xl
          leading-9
          text-slate-600
        "
      >
        SajiloPass is building Nepal's next-generation mobility platform for
        seamless travel inside the Kathmandu Valley. Buy digital bus passes,
        scan QR tickets, and enjoy faster, smarter public transportation from
        one beautifully designed app.
      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#"
          className="
            btn-premium
            group
            flex
            h-14
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-blue-600
            px-8
            font-semibold
            text-white
            shadow-xl
            shadow-blue-600/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-700
            hover:shadow-2xl
            hover:shadow-blue-600/35
          "
        >
          <Download
            size={19}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
            "
          />

          Coming Soon
        </Link>

        <Link
          href="/features"
          className="
            glass
            premium-card
            group
            flex
            h-14
            items-center
            justify-center
            gap-2
            rounded-2xl
            px-8
            font-semibold
            text-slate-700
          "
        >
          Explore Features

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      {/* Stats */}

      <div
        className="
          mt-12
          grid
          grid-cols-3
          gap-5
          max-w-[520px]
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              glass
              premium-card
              rounded-2xl
              p-5
            "
          >
            <p
              className="
                text-2xl
                font-black
                text-blue-600
              "
            >
              {item.value}
            </p>

            <p
              className="
                mt-1
                text-sm
                leading-6
                text-slate-500
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Pills */}

      <div className="mt-10 flex flex-wrap gap-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="
              glass
              premium-card
              rounded-full
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
            "
          >
            ✓ {feature}
          </div>
        ))}
      </div>
    </div>
  );
}