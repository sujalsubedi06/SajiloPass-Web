"use client";

import HeroScene from "./HeroScene";

export default function HeroVisual() {
  return (
    <div
      className="
        relative
        flex
        min-h-[760px]
        items-center
        justify-center
      "
    >
      <HeroScene />
    </div>
  );
}