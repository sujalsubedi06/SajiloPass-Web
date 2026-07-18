export default function FooterBottom() {
  return (
    <div
      className="
        mt-20
        flex
        flex-col
        items-center
        justify-between
        gap-6
        border-t
        border-white/30
        pt-8
        text-center
        md:flex-row
      "
    >
      {/* Copyright */}

      <p
        className="
          text-sm
          text-slate-500
        "
      >
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-700">
          SajiloPass
        </span>
        . All rights reserved.
      </p>

      {/* Made in Nepal */}

      <p
        className="
          text-sm
          text-slate-500
        "
      >
        Made with ❤️ in Nepal 🇳🇵
      </p>
    </div>
  );
}