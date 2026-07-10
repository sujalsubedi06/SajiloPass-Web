"use client";

import FeatureCard from "./FeatureCard";
import { FEATURES } from "./FeatureData";

export default function FeaturesGrid() {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
}