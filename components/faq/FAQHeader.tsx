export default function FAQHeader() {
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
          💬 Frequently Asked Questions
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
        Questions?
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
          We've Got Answers.
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
        Find answers to the most common questions about YatraPass,
        including journey detection, payments, privacy, and how the
        platform makes public transport simpler and smarter.
      </p>
    </div>
  );
}