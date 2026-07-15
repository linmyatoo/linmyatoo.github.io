"use client";

import { useEffect, useState } from "react";

export default function BackgroundMesh() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On mobile, render a simplified single-gradient background instead of
  // multiple animated blur orbs — saves significant GPU and battery.
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Grid & dot pattern — lightweight CSS backgrounds */}
      <div className="absolute inset-0 grid-lines opacity-50 hidden sm:block" />
      <div className="absolute inset-0 dot-pattern opacity-40 hidden sm:block" />

      {/* Desktop: Rich animated orbs */}
      <div
        className={`hidden sm:block absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent blur-[130px] transition-opacity duration-1000 animate-gradient-shift ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`hidden sm:block absolute top-[40%] right-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-teal-500/15 via-emerald-500/10 to-transparent blur-[120px] transition-opacity duration-1000 animate-gradient-shift-reverse ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`hidden sm:block absolute bottom-[15%] left-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent blur-[110px] transition-opacity duration-1000 animate-float ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`hidden sm:block absolute top-[15%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse-glow ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile: Single lightweight static gradient — no animation, no GPU blur */}
      <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-teal-50/60" />

      {/* Vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/60 to-transparent" />
    </div>
  );
}
