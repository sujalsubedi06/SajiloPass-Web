export default function OperatorDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[720px]">

      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[40px]
          bg-blue-500/10
          blur-[80px]
        "
      />

      {/* Dashboard */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/70
          bg-white/80
          backdrop-blur-2xl
          shadow-[0_40px_120px_rgba(15,23,42,0.10)]
        "
      >

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-8 py-5">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Operator Dashboard
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Kathmandu Fleet Overview
            </h3>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ● Live
          </div>

        </div>

        {/* Stats */}
        <div className="grid gap-5 p-8 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              Today's Revenue
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Rs. 48,320
            </h2>

            <p className="mt-2 text-sm text-emerald-600">
              ▲ +12.4%
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">
              Active Buses
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              87
            </h2>

            <p className="mt-2 text-sm text-blue-600">
              GPS Connected
            </p>
          </div>

        </div>

        {/* Chart Placeholder */}
        <div className="px-8 pb-8">

          <div
            className="
              flex
              h-[260px]
              items-center
              justify-center
              rounded-3xl
              border-2
              border-dashed
              border-blue-200
              bg-gradient-to-br
              from-blue-50
              via-white
              to-slate-100
            "
          >
            <div className="text-center">

              <p className="text-xs font-semibold tracking-[0.4em] text-slate-400">
                DASHBOARD PREVIEW
              </p>

              <h3 className="mt-5 text-3xl font-black text-slate-900">
                Analytics Dashboard
              </h3>

              <p className="mt-3 text-slate-500">
                Replace with your operator dashboard screenshot
              </p>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}