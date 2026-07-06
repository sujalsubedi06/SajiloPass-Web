"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dark Ambient Glow */}
      <div
        className="
          absolute
          h-[340px]
          w-[340px]
          rounded-full
          bg-[radial-gradient(circle,rgba(34,211,238,.35)_0%,rgba(59,130,246,.15)_35%,rgba(15,23,42,.08)_70%,transparent_100%)]
          blur-[90px]
          transition-transform
          duration-700
          ease-out
          will-change-transform
        "
        style={{
          transform: `translate(${position.x - 170}px, ${
            position.y - 170
          }px)`,
        }}
      />

      {/* Blue Core */}
      {/* Bright Core */}
<div
  className="
    absolute
    h-[90px]
    w-[90px]
    rounded-full
    bg-[radial-gradient(circle,rgba(34,211,238,.35)_0%,rgba(59,130,246,.15)_35%,rgba(15,23,42,.08)_70%,transparent_100%)]
    blur-[28px]
    transition-transform
    duration-900
    ease-out
    will-change-transform
  "
  style={{
    transform: `translate(${position.x - 45}px, ${
      position.y - 45
    }px)`,
  }}
/>

{/* Soft Halo */}
<div
  className="
    absolute
    h-[180px]
    w-[180px]
    rounded-full
    bg-[radial-gradient(circle,rgba(34,211,238,.35)_0%,rgba(59,130,246,.15)_35%,rgba(15,23,42,.08)_70%,transparent_100%)]
    blur-[60px]
    transition-transform
    duration-900
    ease-out
    will-change-transform
  "
  style={{
    transform: `translate(${position.x - 90}px, ${
      position.y - 90
    }px)`,
  }}
/>
</div>
  );
}