"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { NAVIGATION } from "@/constants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50 lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="rounded-xl p-2 transition hover:bg-slate-100"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <nav className="mx-auto flex max-w-7xl flex-col p-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/download"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}