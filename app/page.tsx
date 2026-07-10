import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";

import ProductPreview from "@/components/product-preview/ProductPreview";

import Features from "@/components/features/Features";

import HowItWorks from "@/components/how-it-works/HowItWorks";

import FAQ from "@/components/faq/FAQ";

import CTA from "@/components/cta/CTA";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ProductPreview />

        <Features />

        <HowItWorks />

        <FAQ /> 

        <CTA />

        <Footer />
      </main>
    </>
  );
}