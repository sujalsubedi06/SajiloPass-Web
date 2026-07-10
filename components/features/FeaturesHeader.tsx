"use client";

export default function FeaturesHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
        <span className="text-sm font-semibold tracking-wide text-blue-600">
          ✨ Powerful Features
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
        Everything You Need for{" "}
        <span className="text-gradient">
          Smart Public Transport
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        YatraPass combines digital ticketing, live tracking, secure payments,
        and smart route planning into one seamless experience for passengers
        and operators.
      </p>
    </div>
  );
}