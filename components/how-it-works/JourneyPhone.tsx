interface JourneyPhoneProps {
  screenTitle: string;
  title: string;
  description: string;
  progress: number;
}

export default function JourneyPhone({
  screenTitle,
  title,
  description,
  progress,
}: JourneyPhoneProps) {
  return (
    <div className="relative mx-auto w-[345px]">
      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Phone */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[46px]
          border-[8px]
          border-slate-900
          bg-black
          shadow-[0_40px_120px_rgba(15,23,42,0.20)]
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-30 h-7 w-36 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}
        <div className="rounded-[38px] bg-white">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-7 pt-5 text-xs font-bold">
            <span>9:41</span>

            <div className="flex items-center gap-2">
              <span>📶</span>
              <span>5G</span>
              <span>🔋</span>
            </div>
          </div>

          {/* App Header */}
          <div className="border-b border-slate-100 px-7 py-5">
            <h2 className="text-2xl font-bold text-blue-600">
              SajiloPass
            </h2>
          </div>

          {/* Body */}
          <div className="p-7">
            {/* Screenshot Placeholder */}
            <div
              className="
                flex
                h-[290px]
                items-center
                justify-center
                rounded-[28px]
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
                  APP SCREEN
                </p>

                <h3 className="mt-5 text-4xl font-black text-slate-900">
                  {screenTitle}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  Replace with your mobile UI
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {description}
              </p>
            </div>

            {/* Progress */}
            <div className="mt-10 flex justify-center gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <span
                  key={item}
                  className={`transition-all duration-500 ${
                    item === progress
                      ? "h-2 w-9 rounded-full bg-blue-600"
                      : "h-2 w-2 rounded-full bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute -left-[8px] top-24 h-12 w-1 rounded-full bg-slate-700" />
        <div className="absolute -left-[8px] top-44 h-20 w-1 rounded-full bg-slate-700" />
        <div className="absolute -right-[8px] top-36 h-24 w-1 rounded-full bg-slate-700" />
      </div>
    </div>
  );
}