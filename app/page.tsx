import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";

import ProductPreview from "@/components/product-preview/ProductPreview";

// Future Sections
// import Features from "@/components/features/Features";
// import HowItWorks from "@/components/how-it-works/HowItWorks";
// import WhyYatraPass from "@/components/why-yatrapass/WhyYatraPass";
// import MobileShowcase from "@/components/mobile-showcase/MobileShowcase";
// import Roadmap from "@/components/roadmap/Roadmap";
// import FAQ from "@/components/faq/FAQ";
// import CTA from "@/components/cta/CTA";
// import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ProductPreview />

        {/* <Features /> */}

        {/* <HowItWorks /> */}

        {/* <WhyYatraPass /> */}

        {/* <MobileShowcase /> */}

        {/* <Roadmap /> */}

        {/* <FAQ /> */}

        {/* <CTA /> */}

        {/* <Footer /> */}
      </main>
    </>
  );
}