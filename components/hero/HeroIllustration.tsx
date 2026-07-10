"use client";

import Image from "next/image";

export default function HeroIllustration() {
  return (
    <>
      {/* Blue Reflection Under Scene */}
      <div
        className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          h-24
          w-[520px]
          rounded-full
          bg-blue-500/20
          blur-[70px]
          z-0
        "
      />

      {/* Road Glow */}
      <div
        className="
          absolute
          bottom-[132px]
          left-1/2
          -translate-x-1/2
          h-5
          w-[520px]
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-blue-400/70
          to-transparent
          blur-xl
          z-10
        "
      />

      {/* Bus Shadow */}
      <div
        className="
          absolute
          bottom-[58px]
          left-1/2
          -translate-x-1/2
          h-12
          w-[390px]
          rounded-full
          bg-black/25
          blur-3xl
          z-20
        "
      />

{/* ================================================= */}
{/* Scene */}
{/* ================================================= */}

<div
  className="
    absolute
    inset-0
    flex
    items-end
    justify-center
    -translate-y-30
    lg:translate-x-20
    xl:translate-x-26
    2xl:translate-x-28
    z-26
  "
>
  {/* Road */}
  <Image
    src="/images/hero/hero-road.webp"
    alt=""
    width={1550}
    height={450}
    priority
    draggable={false}
    className="
      pointer-events-none
      absolute
      bottom-0
      left-1/2
      w-[200%]
      max-w-none
      -translate-x-1/2
      select-none
    "
  />

  {/* Bus */}
  <Image
    src="/images/hero/hero-bus.webp"
    alt="YatraPass Electric Bus"
    width={1550}
    height={1550}
    priority
    draggable={false}
    className="
      animate-float
      pointer-events-none
      relative
      z-36

      mb-[52px]

      w-full
      max-w-[1460px]

      drop-shadow-[0_60px_90px_rgba(37,99,235,.28)]

      transition-all
      duration-700

      hover:scale-[1.02]

      select-none
    "
  />
</div>

      {/* Glass Reflection */}
      <div
        className="
          absolute
          left-1/2
          top-[170px]
          -translate-x-1/2
          h-36
          w-[260px]
          rounded-full
          bg-white/20
          blur-3xl
          z-50
          opacity-40
        "
      />

      {/* Road Reflection */}
      <div
        className="
          absolute
          bottom-[88px]
          left-1/2
          -translate-x-1/2
          h-8
          w-[460px]
          rounded-full
          bg-blue-500/15
          blur-[40px]
          z-20
        "
      />

      {/* Ambient Light Left */}
      <div
        className="
          absolute
          left-[12%]
          top-[28%]
          h-6
          w-6
          rounded-full
          bg-cyan-300/60
          blur-md
          animate-float-slow
        "
      />

      {/* Ambient Light Right */}
      <div
        className="
          absolute
          right-[14%]
          top-[18%]
          h-5
          w-5
          rounded-full
          bg-blue-400/70
          blur-md
          animate-float-reverse
        "
      />

      {/* Small Particle */}
      <div
        className="
          absolute
          right-[20%]
          bottom-[260px]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_18px_rgba(34,211,238,.9)]
          animate-pulse
        "
      />

      {/* Small Particle */}
      <div
        className="
          absolute
          left-[22%]
          bottom-[330px]
          h-2
          w-2
          rounded-full
          bg-blue-500
          shadow-[0_0_18px_rgba(59,130,246,.8)]
          animate-pulse
        "
      />
    </>
  );
}