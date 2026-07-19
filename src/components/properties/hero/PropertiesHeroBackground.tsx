"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function PropertiesHeroBackground() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* 1. Base Image with Parallax & Ken Burns */}
      <motion.div style={{ y }} className="absolute inset-[-5%] w-[110%] h-[110%] animate-cinematic-pan">
        <Image 
          src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Resort Infinity Pool at Golden Hour"
          fill
          className="object-cover object-center opacity-[0.4] blur-[4px] sm:blur-0"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* 2. Dark Cinematic Overlay (Multi-gradient) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/30 to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      {/* 3. Radial Golden Light (Top Right) */}
      <div 
        className="absolute top-0 right-0 w-[150vw] h-[150vw] sm:w-[1200px] sm:h-[1200px] translate-x-1/3 -translate-y-1/3"
        style={{ background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)" }} 
      />

      {/* 4. Forest Green Ambient Glow (Bottom Left) */}
      <div 
        className="absolute bottom-0 left-0 w-[120vw] h-[120vw] sm:w-[1000px] sm:h-[1000px] -translate-x-1/3 translate-y-1/3"
        style={{ background: "radial-gradient(circle at center, rgba(16, 96, 72, 0.08) 0%, transparent 60%)" }} 
      />

      {/* 4.5 Luxury Bokeh Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#FFD27A]/[0.015] blur-[100px] animate-breathe-slow" />
        <div className="absolute bottom-[30%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#FFD27A]/[0.02] blur-[120px] animate-breathe-slow" style={{ animationDelay: "3s" }} />
      </div>

      {/* 5. Luxury Vignette */}
      <div className="absolute inset-0 vignette-heavy mix-blend-multiply opacity-80" />

      {/* 6. Soft Glass Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />

      {/* 7. Floating Golden Particles (Reduced for Mobile) */}
      <div className="hidden sm:block">
        {[...Array(15)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-[#FFD27A] blur-[1px] animate-dust-float"
            style={{
              top: `${(i * 23) % 100}%`,
              left: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              opacity: ((i * 7) % 30) / 100 + 0.05,
              animationDelay: `-${(i * 4) % 20}s`,
              animationDuration: `${(i % 15) + 30}s`,
            }}
          />
        ))}
      </div>

      {/* 8. Moving Light Rays (From Top Right) */}
      <div className="absolute top-[-20%] right-[10%] w-[100px] h-[140%] bg-gradient-to-b from-transparent via-[#FFD27A]/5 to-transparent rotate-[35deg] blur-3xl animate-breathe-slow" />
      <div className="absolute top-[-20%] right-[30%] w-[150px] h-[140%] bg-gradient-to-b from-transparent via-[#FFD27A]/3 to-transparent rotate-[35deg] blur-[40px] animate-breathe-slow" style={{ animationDelay: "5s" }} />

      {/* 9. Luxury Fog (Bottom edge & mist) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-95" />
      <div className="absolute bottom-0 left-0 right-0 h-[100vh] bg-gradient-to-t from-transparent via-[#050505]/10 to-transparent opacity-50 blur-3xl" />
    </div>
  );
}
