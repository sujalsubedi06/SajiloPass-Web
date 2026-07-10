import FAQBackground from "./FAQBackground";
import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        py-24
        lg:py-28
      " id="faq"
    >
      {/* Background */}

      <FAQBackground />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        <FAQHeader />

        <FAQList />
      </div>
    </section>
  );
}