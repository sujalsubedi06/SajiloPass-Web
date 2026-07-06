"use client";

import {
  Activity,
  Bus,
  Clock3,
} from "lucide-react";

export default function HeroStats() {
  return (
    <>
      {/* ============================= */}
      {/* Live Status */}
      {/* ============================= */}

      <div
        className="
          glass
          premium-card
          absolute
          right-8
          top-10
          hidden
          rounded-2xl
          px-5
          py-4
          lg:flex
          items-center
          gap-4
          animate-float
          z-[70]
        "
      >
        <div className="relative">
          <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
            <Activity
              size={22}
              className="text-emerald-600"
            />
          </div>

          <span className="absolute right-1 top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            System Online
          </p>

          <p className="text-sm text-slate-500">
            Live Ticket Verification
          </p>
        </div>
      </div>

      {/* ============================= */}
      {/* Active Buses */}
      {/* ============================= */}

      <div
        className="
          glass
          premium-card
          absolute
          left-6
          bottom-24
          hidden
          rounded-2xl
          px-5
          py-4
          lg:flex
          items-center
          gap-4
          animate-float-reverse
          z-[70]
        "
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
          <Bus
            size={22}
            className="text-blue-600"
          />
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Valley Service
          </p>

          <p className="text-sm text-slate-500">
            Smart Bus Network
          </p>
        </div>
      </div>

      {/* ============================= */}
      {/* ETA */}
      {/* ============================= */}

      <div
        className="
          glass
          premium-card
          absolute
          right-20
          bottom-28
          hidden
          rounded-2xl
          px-5
          py-4
          lg:flex
          items-center
          gap-4
          animate-float-slow
          z-[70]
        "
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
          <Clock3
            size={22}
            className="text-amber-600"
          />
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Avg. Wait
          </p>

          <p className="text-sm text-slate-500">
            Under 5 Minutes
          </p>
        </div>
      </div>
    </>
  );
}