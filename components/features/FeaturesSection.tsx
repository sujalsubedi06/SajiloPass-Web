"use client";

import FeaturesHeader from "./FeaturesHeader";
import FeaturesGrid from "./FeaturesGrid";
import FeaturesBackground from "./FeaturesBackground";

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <FeaturesBackground />

      <div className="container mx-auto px-6 relative z-10">
        <FeaturesHeader />

        <FeaturesGrid />
      </div>
    </section>
  );
}