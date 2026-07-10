import Link from "next/link";

import Container from "@/components/layout/Container";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-6 z-50">
      <Container>
        <div
          className="
            group
            flex
            h-[76px]
            items-center
            justify-between
            rounded-[28px]
            border
            border-white/60
            bg-white/72
            px-10
            xl:px-12
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(15,23,42,0.10)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]
          "
        >
          {/* Logo */}

          <div
            className="
              transition-transform
              duration-300
              group-hover:scale-[1.02]
            "
          >
            <Logo />
          </div>

          {/* Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group/link
                  relative
                  py-2
                  text-base
                  font-medium
                  tracking-tight
                  text-slate-600
                  transition-all
                  duration-300
                  hover:text-slate-900
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    transition-all
                    duration-300
                    group-hover/link:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="relative z-50 flex items-center gap-4">
            <Link
              href="#cta"
              className="
                group/button
                relative
                hidden
                overflow-hidden
                lg:inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-blue-500
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-500/30
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-[1.04]
                hover:shadow-[0_20px_40px_rgba(37,99,235,.45)]
                active:scale-95
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover/button:translate-x-full
                "
              />

              <span className="relative z-10">
                🚀 Coming Soon
              </span>
            </Link>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}