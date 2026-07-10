import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const productLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Operator Portal",
    href: "/operators",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "#features",
  },
  {
    label: "Contact",
    href: "#footer",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
];

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </h3>

      <div className="space-y-5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              group
              flex
              items-center
              justify-between
              text-lg
              text-slate-600
              transition-all
              duration-300
              hover:text-blue-600
            "
          >
            <span>{link.label}</span>

            <ArrowUpRight
              size={16}
              className="
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:opacity-100
              "
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FooterLinks() {
  return (
    <div className="space-y-12">

      <div className="grid gap-12 sm:grid-cols-2">

        <LinkGroup
          title="Product"
          links={productLinks}
        />

        <LinkGroup
          title="Company"
          links={companyLinks}
        />

      </div>

      <div
        className="
          rounded-3xl
          border
          border-white/60
          bg-white/60
          p-6
          backdrop-blur-2xl
        "
      >
        <div className="flex items-center gap-3 text-blue-600">
          <MapPin size={18} />

          <span className="font-semibold">
            Kathmandu, Nepal
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Designed and built to modernize public transport with
          secure payments and intelligent journey detection.
        </p>
      </div>

    </div>
  );
}