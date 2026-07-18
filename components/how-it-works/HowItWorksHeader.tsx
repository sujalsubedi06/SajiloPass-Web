export default function HowItWorksHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <div
        className="
          glass
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
          ⚙️ How It Works
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
        Travel in{" "}
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
          6 Simple Steps
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
        From scanning a QR code to receiving your digital receipt,
        <span className="font-semibold text-slate-900">
          {" "}SajiloPass{" "}
        </span>
        automates your entire public transport journey inside Kathmandu Valley.
        No cash. No paper tickets. Just board, travel, and arrive.
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
            6
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
            Simple Steps
          </p>

        </div>

        <div className="h-10 w-px bg-slate-200" />

        <div className="text-center">

          <h3 className="text-4xl font-black text-blue-600">
            GPS
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
            Fare Detection
          </p>

        </div>

      </div>

    </div>
  );
}