export default function OperatorsHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-100
          bg-white/70
          px-5
          py-2
          backdrop-blur-xl
          shadow-lg
        "
      >
        <span
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-600
          "
        >
          For Bus Operators
        </span>
      </div>

      {/* Heading */}

      <h2
        className="
          mt-8
          text-5xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          md:text-6xl
          lg:text-7xl
        "
      >
        Run Your Fleet
        <br />

        <span
          className="
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-blue-700
            bg-clip-text
            text-transparent
          "
        >
          Smarter Than Ever
        </span>

      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-slate-600
        "
      >
        SajiloPass helps transport operators automate fare collection,
        monitor fleets in real time, reduce operational costs, and gain
        valuable insights from every journey—all through one intelligent
        platform.
      </p>

      {/* Stats */}

      <div
        className="
          mt-14
          flex
          flex-wrap
          items-center
          justify-center
          gap-10
        "
      >

        <div className="text-center">

          <h3 className="text-4xl font-black text-blue-600">
            100%
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
            Cashless
          </p>

        </div>

        <div className="h-10 w-px bg-slate-200" />

        <div className="text-center">

          <h3 className="text-4xl font-black text-blue-600">
            Live
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
            GPS Tracking
          </p>

        </div>

        <div className="h-10 w-px bg-slate-200" />

        <div className="text-center">

          <h3 className="text-4xl font-black text-blue-600">
            24/7
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
            Analytics
          </p>

        </div>

      </div>

    </div>
  );
}