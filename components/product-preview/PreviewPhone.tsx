import {
  Bus,
  CreditCard,
  Home,
  MapPinned,
  QrCode,
  Wallet,
} from "lucide-react";

export default function PreviewPhone() {
  return (
    <div className="relative flex justify-center">
      {/* Shadow */}
      <div
        className="
          absolute
          bottom-[-40px]
          h-10
          w-64
          rounded-full
          bg-blue-950/20
          blur-3xl
        "
      />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          m-auto
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-[90px]
        "
      />

      {/* Phone */}
      <div
        className="
          animate-bus
          relative
          z-20
          h-[720px]
          w-[360px]
          overflow-hidden
          rounded-[46px]
          border-[10px]
          border-slate-900
          bg-white
          shadow-[0_50px_120px_rgba(15,23,42,.22)]
        "
      >
        {/* Reflection */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-24
            -translate-x-10
            rotate-12
            bg-white/20
            blur-2xl
          "
        />

        {/* Dynamic Island */}
        <div
          className="
            absolute
            left-1/2
            top-3
            z-50
            h-7
            w-36
            -translate-x-1/2
            rounded-full
            bg-black
          "
        />

        {/* App */}
        <div className="flex h-full flex-col bg-slate-50">
          {/* Header */}
          <div className="bg-blue-600 px-6 pb-8 pt-14 text-white">
            <p className="text-sm opacity-80">
              Welcome back
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              YatraPass
            </h3>

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                rounded-3xl
                bg-white/15
                px-4
                py-3
                backdrop-blur
              "
            >
              <div>
                <p className="text-xs opacity-80">
                  Wallet Balance
                </p>

                <p className="text-xl font-bold">
                  Rs. 520
                </p>
              </div>

              <Wallet size={28} />
            </div>
          </div>

          {/* QR Ticket */}
          <div className="px-5 pt-6">
            <div
              className="
                rounded-3xl
                bg-white
                p-5
                shadow-lg
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">
                    Active Ticket
                  </p>

                  <p className="text-sm text-slate-500">
                    Ring Road Route
                  </p>
                </div>

                <QrCode
                  size={28}
                  className="text-blue-600"
                />
              </div>

              <div
                className="
                  mt-5
                  flex
                  h-44
                  items-center
                  justify-center
                  rounded-2xl
                  bg-slate-100
                "
              >
                <QrCode
                  size={120}
                  className="text-slate-700"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-2 gap-4 px-5">
            <div
              className="
                rounded-2xl
                bg-white
                p-4
                shadow
              "
            >
              <Bus className="mb-2 text-blue-600" />

              <p className="font-semibold">
                Bus Pass
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-white
                p-4
                shadow
              "
            >
              <CreditCard className="mb-2 text-green-600" />

              <p className="font-semibold">
                Payments
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div
            className="
              mt-auto
              flex
              justify-around
              border-t
              border-slate-200
              bg-white
              py-5
            "
          >
            <Home className="text-blue-600" />

            <Bus className="text-slate-400" />

            <MapPinned className="text-slate-400" />

            <Wallet className="text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
}