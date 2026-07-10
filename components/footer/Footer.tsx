import FooterBackground from "./FooterBackground";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        py-24
      " id="footer"
    >
      <FooterBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* Glass Container */}

        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/60
            bg-white/60
            backdrop-blur-3xl
            shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          "
        >
          <div
          className="
            grid
            gap-14
            px-10
            py-10
            lg:grid-cols-[1.2fr_0.8fr]
            lg:px-14
            lg:py-12
          "
        >
            <FooterBrand />

            <FooterLinks />
          </div>

          <div className="px-10 pb-8 lg:px-14 lg:pb-10">
            <FooterBottom />
          </div>
        </div>
      </div>
    </footer>
  );
}