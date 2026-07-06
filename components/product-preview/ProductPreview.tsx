import PreviewBackground from "./PreviewBackground";
import PreviewGlow from "./PreviewGlow";
import PreviewHeader from "./PreviewHeader";
import PreviewPhone from "./PreviewPhone";
import PreviewCards from "./PreviewCards";

export default function ProductPreview() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <PreviewBackground />

      {/* Ambient Glow */}
      <PreviewGlow />

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col px-8 xl:px-12">
        {/* Section Heading */}
        <PreviewHeader />

        {/* Preview Layout */}
        <div
          className="
            mt-24
            grid
            items-center
            gap-20
            lg:grid-cols-[320px_1fr_320px]
          "
        >
          {/* Left Features */}
          <PreviewCards side="left" />

          {/* Phone */}
          <PreviewPhone />

          {/* Right Features */}
          <PreviewCards side="right" />
        </div>
      </div>
    </section>
  );
}