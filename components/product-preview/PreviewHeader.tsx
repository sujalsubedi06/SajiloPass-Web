export default function PreviewHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <div
        className="
          glass
          glass-pill
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          premium-card
        "
      >
        <span className="text-lg">📱</span>

        <span className="text-sm font-semibold text-blue-700">
          Product Preview
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-8
          text-4xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          md:text-5xl
          lg:text-6xl
        "
      >
        Everything You Need for
        <span className="text-gradient block">
          Smarter Bus Travel
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
          md:text-xl
        "
      >
        SajiloPass brings ticketing, digital bus passes, live route tracking,
        and secure payments together into one beautifully designed mobile
        experience for everyday travel inside Kathmandu Valley.
      </p>
    </div>
  );
}