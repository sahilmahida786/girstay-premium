"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ActivitiesHeroBackground() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* 1. Ultra HD Elephant Image with 35s Ken Burns */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full animate-cinematic-pan">
        <Image 
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=2500&q=80&auto=format&fit=crop"
          alt="Luxury Gir National Park Elephant Safari"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* 2. Dark Forest Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#0a120c]/40 to-[#050505]" />
      
      {/* 3. Warm Golden Sunrise Lighting (Top Right) */}
      <div 
        className="absolute top-0 right-0 w-[120vw] h-[120vw] sm:w-[1400px] sm:h-[1400px] translate-x-[20%] -translate-y-[20%]"
        style={{ background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.12) 0%, transparent 70%)" }} 
      />
      {/* Light Rays */}
      <div className="absolute top-[-20%] right-[10%] w-[120px] h-[150%] bg-gradient-to-b from-transparent via-[#FFD27A]/[0.03] to-transparent rotate-[35deg] blur-3xl animate-breathe-slow" />
      <div className="absolute top-[-10%] right-[25%] w-[80px] h-[140%] bg-gradient-to-b from-transparent via-[#FFD27A]/[0.02] to-transparent rotate-[35deg] blur-[40px] animate-breathe-slow" style={{ animationDelay: "5s" }} />

      {/* 4. Atmospheric Forest Fog */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-95 blur-xl" />

      {/* 5. Floating Dust Particles (Hidden on Mobile) */}
      <div className="hidden sm:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-[#FFD27A] blur-[1px] animate-dust-float"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 29) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: ((i * 7) % 30) / 100 + 0.05,
              animationDelay: `-${(i * 4) % 20}s`,
              animationDuration: `${(i % 15) + 30}s`,
            }}
          />
        ))}
      </div>

      {/* 6. Subtle Golden Bokeh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#FFD27A]/[0.015] blur-[80px] animate-breathe-slow" />
        <div className="absolute bottom-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#FFD27A]/[0.02] blur-[100px] animate-breathe-slow" style={{ animationDelay: "4s" }} />
      </div>

      {/* 7. Dark Vignette */}
      <div className="absolute inset-0 vignette-heavy mix-blend-multiply opacity-90" />

      {/* 8. Animated Ambient Gradient (Breathing 25s) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a120c]/10 via-transparent to-[#2a1b05]/10 animate-breathe-slow" style={{ animationDuration: "25s" }} />

      {/* 9. Glass Reflections */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
    </div>
  );
}
