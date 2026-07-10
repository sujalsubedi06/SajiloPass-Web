export default function JourneyLines() {
  return (
    <>
      {/* LEFT CONNECTOR */}
      <div
        className="
          pointer-events-none
          absolute
          left-[30.5%]
          top-1/2
          hidden
          h-[520px]
          w-[140px]
          -translate-y-1/2
          lg:block
        "
      >
        {/* Top Curve */}
        <div
          className="
            absolute
            left-0
            top-10
            h-36
            w-full
            rounded-tr-full
            border-r-2
            border-t-2
            border-dashed
            border-blue-300
          "
        />

        {/* Middle Line */}
        <div
          className="
            absolute
            left-0
            top-1/2
            h-[2px]
            w-full
            -translate-y-1/2
            border-t-2
            border-dashed
            border-blue-300
          "
        />

        {/* Bottom Curve */}
        <div
          className="
            absolute
            bottom-10
            left-0
            h-36
            w-full
            rounded-br-full
            border-b-2
            border-r-2
            border-dashed
            border-blue-300
          "
        />

        {/* Top Node */}
        <span className="absolute right-[-8px] top-10 h-4 w-4 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        {/* Middle Node */}
        <span className="absolute right-[-8px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        {/* Bottom Node */}
        <span className="absolute bottom-10 right-[-8px] h-4 w-4 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />
      </div>

      {/* RIGHT CONNECTOR */}
      <div
        className="
          pointer-events-none
          absolute
          right-[30.5%]
          top-1/2
          hidden
          h-[520px]
          w-[140px]
          -translate-y-1/2
          scale-x-[-1]
          lg:block
        "
      >
        {/* Top Curve */}
        <div
          className="
            absolute
            left-0
            top-10
            h-36
            w-full
            rounded-tr-full
            border-r-2
            border-t-2
            border-dashed
            border-blue-300
          "
        />

        {/* Middle Line */}
        <div
          className="
            absolute
            left-0
            top-1/2
            h-[2px]
            w-full
            -translate-y-1/2
            border-t-2
            border-dashed
            border-blue-300
          "
        />

        {/* Bottom Curve */}
        <div
          className="
            absolute
            bottom-10
            left-0
            h-36
            w-full
            rounded-br-full
            border-b-2
            border-r-2
            border-dashed
            border-blue-300
          "
        />

        {/* Top Node */}
        <span className="absolute right-[-8px] top-10 h-4 w-4 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        {/* Middle Node */}
        <span className="absolute right-[-8px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />

        {/* Bottom Node */}
        <span className="absolute bottom-10 right-[-8px] h-4 w-4 rounded-full border-2 border-blue-600 bg-white shadow-[0_0_18px_rgba(37,99,235,.35)]" />
      </div>
    </>
  );
}