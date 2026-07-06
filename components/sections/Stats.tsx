import { statistics } from "@/data/statistics";

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why YatraPass?
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Building Nepal's Future of Smart Mobility
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We're creating a seamless digital transportation ecosystem
            connecting passengers, operators, and payments into one
            powerful platform.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/80
                  p-8
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-300
                  hover:shadow-2xl
                  hover:shadow-blue-500/10
                "
              >
                {/* Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Number */}

                <h3 className="mt-8 text-5xl font-black text-slate-900">
                  {item.value}
                </h3>

                {/* Label */}

                <p className="mt-3 text-lg font-medium text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}