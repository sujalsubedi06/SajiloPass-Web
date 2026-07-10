"use client";

import FloatingCards from "./FloatingCards";
import HeroGlow from "./HeroGlow";
import HeroIllustration from "./HeroIllustration";
import HeroRadar from "./HeroRadar";
import MouseGlow from "./MouseGlow";

export default function HeroScene() {
  return (
    <div className="relative flex h-[760px] w-full items-center justify-center overflow-visible">
      {/* Cursor Glow */}
      <MouseGlow />

      {/* Background Lighting */}
      <HeroGlow />

      {/* Animated Rings */}
      <HeroRadar />

      {/* Main Illustration (Bus + Road) */}
      <HeroIllustration />

      {/* Floating UI Cards */}
      <div className="absolute inset-0 z-40">
        <FloatingCards />
      </div>

    </div>
  );
}