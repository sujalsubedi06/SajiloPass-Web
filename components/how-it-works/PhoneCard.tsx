interface PhoneCardProps {
  step: string;
  title: string;
  description: string;
  mockupText: string;
  reverse?: boolean;
}

export default function PhoneCard({
  step,
  title,
  description,
  mockupText,
  reverse = false,
}: PhoneCardProps) {
  return (
    <div
      className={`grid items-center gap-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Phone */}
      <div className="flex justify-center">
        <div
          className="
            glass
            relative
            h-[640px]
            w-[320px]
            rounded-[46px]
            border
            border-white/40
            bg-white
            p-4
            shadow-premium
          "
        >
          {/* Speaker */}
          <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-slate-300" />

          {/* Screen */}
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              rounded-[34px]
              border
              border-dashed
              border-slate-300
              bg-gradient-to-br
              from-slate-50
              via-white
              to-slate-100
              p-8
            "
          >
            <div className="text-center">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-blue-600">
                APP MOCKUP
              </p>

              <h3 className="text-3xl font-bold text-slate-700">
                {mockupText}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <span
          className="
            glass-pill
            glass
            inline-flex
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          {step}
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          {title}
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}