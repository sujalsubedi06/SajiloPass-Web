"use client";

import FeaturesHeader from "./FeaturesHeader";
import FeaturesGrid from "./FeatureGrid";
import FeatureBackground from "./FeatureBackground";

export default function Features() {
  return (
    <section className="relative overflow-hidden py-32" id="features">
      <FeatureBackground />

      <div className="container mx-auto relative z-10 px-6">
        <FeaturesHeader />
        <FeaturesGrid />
      </div>
    </section>
  );
}