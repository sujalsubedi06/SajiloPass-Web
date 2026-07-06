import Link from "next/link";

import Container from "@/components/layout/Container";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="py-4">
        <div className="flex h-20 items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  text-[15px]
                  font-medium
                  text-slate-600
                  transition-colors
                  duration-300
                  hover:text-blue-600
                "
              >
                {item.label}

                {/* Animated Underline */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-blue-600
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="relative z-50 flex items-center gap-4">

            <Link
              href="/download"
              className="
                hidden
                lg:inline-flex
                items-center
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
                hover:shadow-blue-600/30
                active:translate-y-0
              "
            >
              Download App
            </Link>

            <MobileMenu />

          </div>
        </div>
      </Container>
    </header>
  );
}