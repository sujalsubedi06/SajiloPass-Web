"use client";

import {
  CheckCircle2,
  Clock3,
  CreditCard,
  MapPin,
  Star,
  Wifi,
} from "lucide-react";

import FloatingCard from "./FloatingCard";
const CARD_POSITIONS = {
  top: "left-1/2 top-80 -translate-x-1/2 -translate-y-[320px]",
  topLeft: "left-70 top-110 -translate-x-[340px] -translate-y-[190px]",
  topRight: "left-1/2 top-1/2 translate-x-[260px] -translate-y-[180px]",
  bottomLeft: "left-1/2 top-95 -translate-x-[300px] translate-y-[120px]",
  bottomRight: "left-1/2 top-90 translate-x-[300px] translate-y-[120px]",
  bottom: "left-1/2 top-70 -translate-x-1 translate-y-[310px]",
};

export default function FloatingCards() {
  return (
    <>
      {/* ================================================= */}
      {/* TOP FEATURE CARD */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.top}
        w-72
        animate-float-slow
        z-[70]
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500">
                Kathmandu Valley
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                All Routes Active
              </h3>
            </div>

            <div className="rounded-2xl bg-blue-100 p-3">
              <MapPin
                className="text-blue-600"
                size={24}
              />
            </div>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="mt-4 flex justify-between text-sm text-slate-500">
            <span>Ring Road</span>
            <span>Bhaktapur</span>
            <span>Lalitpur</span>
          </div>
        </div>
      </FloatingCard>

      {/* ================================================= */}
      {/* LEFT TOP */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.topLeft}
        w-64
        animate-float
        z-[70]
        `}
      >
        <div className="p-5">
          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-emerald-100 p-3">
              <CheckCircle2
                className="text-emerald-600"
                size={22}
              />
            </div>

            <div>
              <p className="font-semibold">
                QR Ticket Active
              </p>

              <p className="text-sm text-slate-500">
                Ready to Scan
              </p>
            </div>

          </div>
        </div>
      </FloatingCard>

      {/* ================================================= */}
      {/* RIGHT TOP */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.topRight}
        w-64
        animate-float-reverse
        z-[70]
        `}
      >
        <div className="p-5">
          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-amber-100 p-3">
              <Clock3
                className="text-amber-600"
                size={22}
              />
            </div>

            <div>
              <p className="font-semibold">
                ETA 3 Minutes
              </p>

              <p className="text-sm text-slate-500">
                Pulchowk Stop
              </p>
            </div>

          </div>
        </div>
      </FloatingCard>

      {/* ================================================= */}
      {/* LEFT BOTTOM */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.bottomLeft}
        w-64
        animate-float-slow
        z-[70]
        `}
      >
        <div className="p-5">
          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-purple-100 p-3">
              <CreditCard
                className="text-purple-600"
                size={22}
              />
            </div>

            <div>
              <p className="font-semibold">
                Secure Payments
              </p>

              <p className="text-sm text-slate-500">
                Khalti • eSewa
              </p>
            </div>

          </div>
        </div>
      </FloatingCard>

      {/* ================================================= */}
      {/* RIGHT BOTTOM */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.bottomRight}
        w-64
        animate-float
        z-[70]
        `}
      >
        <div className="flex items-center justify-between p-5">

          <div>
            <p className="font-semibold">
              Live GPS
            </p>

            <p className="text-sm text-slate-500">
              Tracking Enabled
            </p>
          </div>

          <div className="relative">

            <Wifi
              className="text-green-500"
              size={22}
            />

            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>

          </div>

        </div>
      </FloatingCard>

      {/* ================================================= */}
      {/* BOTTOM CENTER */}
      {/* ================================================= */}

      <FloatingCard
        className={`
        ${CARD_POSITIONS.bottom}
        w-60
        animate-float-reverse
        z-[70]
        `}
      >
        <div className="flex items-center gap-4 p-5">

          <div className="rounded-2xl bg-amber-100 p-3">
            <Star
              size={22}
              className="fill-amber-500 text-amber-500"
            />
          </div>

          <div>
            <p className="font-semibold">
              4.9 Rider Rating
            </p>

            <p className="text-sm text-slate-500">
              Trusted Across the Valley
            </p>
          </div>

        </div>
      </FloatingCard>
    </>
  );
}