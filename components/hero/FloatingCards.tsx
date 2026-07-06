"use client";

import {
  CheckCircle2,
  CreditCard,
  MapPin,
  Star,
  Clock3,
  Wifi,
} from "lucide-react";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        glass
        premium-card
        absolute
        hidden
        rounded-3xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-2xl
        shadow-[0_25px_80px_rgba(15,23,42,.12)]
        transition-all
        duration-500
        hover:scale-105
        hover:border-blue-300/70
        hover:shadow-[0_35px_90px_rgba(37,99,235,.22)]
        lg:block
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default function FloatingCards() {
  return (
    <>
      {/* ================================================= */}
      {/* Active Ticket */}
      {/* ================================================= */}

      <Card
        className="
          left-0
          top-20
          w-64
          animate-float
          z-50
        "
      >
        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-emerald-100 p-3">
              <CheckCircle2
                size={22}
                className="text-emerald-600"
              />
            </div>

            <div>
              <p className="font-semibold">
                Ticket Active
              </p>

              <p className="text-sm text-slate-500">
                QR Verified
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Today's Journey
            </span>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Active
            </span>
          </div>
        </div>
      </Card>

      {/* ================================================= */}
      {/* Live Route */}
      {/* ================================================= */}

      <Card
        className="
          -right-6
          top-10
          w-72
          animate-float-reverse
          z-50
        "
      >
        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-100 p-3">
              <MapPin
                size={22}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="font-semibold">
                Lagankhel → Ratnapark
              </p>

              <p className="text-sm text-slate-500">
                Live Valley Route
              </p>
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>
        </div>
      </Card>

      {/* ================================================= */}
      {/* Secure Payment */}
      {/* ================================================= */}

      <Card
        className="
          -left-6
          bottom-32
          w-64
          animate-float-slow
          z-50
        "
      >
        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-purple-100 p-3">
              <CreditCard
                size={22}
                className="text-purple-600"
              />
            </div>

            <div>
              <p className="font-semibold">
                Secure Payment
              </p>

              <p className="text-sm text-slate-500">
                eSewa • Khalti
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* ================================================= */}
      {/* ETA */}
      {/* ================================================= */}

      <Card
        className="
          right-8
          bottom-16
          w-60
          animate-float
          z-50
        "
      >
        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-amber-100 p-3">
              <Clock3
                size={22}
                className="text-amber-600"
              />
            </div>

            <div>
              <p className="font-semibold">
                ETA 4 mins
              </p>

              <p className="text-sm text-slate-500">
                Next Stop
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* ================================================= */}
      {/* Live Tracking Badge */}
      {/* ================================================= */}

      <Card
        className="
          left-24
          bottom-2
          w-56
          animate-float-reverse
          z-50
        "
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
              size={22}
              className="text-green-500"
            />

            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
          </div>
        </div>
      </Card>

      {/* ================================================= */}
      {/* Rating */}
      {/* ================================================= */}

      <Card
        className="
          right-36
          top-[330px]
          w-52
          animate-float-slow
          z-50
        "
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
              4.9 Rating
            </p>

            <p className="text-sm text-slate-500">
              Trusted Riders
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}