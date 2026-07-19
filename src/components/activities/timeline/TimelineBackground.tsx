"use client";

import { motion } from "framer-motion";

type TimelinePeriod = "morning" | "afternoon" | "evening" | "night";

interface TimelineBackgroundProps {
  activeTab: TimelinePeriod;
}

const backgroundStates = {
  morning: {
    primaryGradient: "radial-gradient(circle at top right, rgba(212, 175, 55, 0.15) 0%, transparent 60%)",
    secondaryGradient: "radial-gradient(circle at bottom left, rgba(16, 96, 72, 0.15) 0%, transparent 50%)",
    mistColor: "linear-gradient(to top, rgba(10, 15, 10, 1), rgba(212, 175, 55, 0.05) 50%, transparent)",
    particleOpacity: 1,
    rayOpacity: 0.05,
    overlayOpacity: 0.2
  },
  afternoon: {
    primaryGradient: "radial-gradient(circle at top right, rgba(255, 230, 150, 0.12) 0%, transparent 70%)",
    secondaryGradient: "radial-gradient(circle at bottom left, rgba(34, 139, 34, 0.12) 0%, transparent 60%)",
    mistColor: "linear-gradient(to top, rgba(8, 12, 8, 1), rgba(16, 96, 72, 0.05) 50%, transparent)",
    particleOpacity: 0.5,
    rayOpacity: 0.08,
    overlayOpacity: 0.1
  },
  evening: {
    primaryGradient: "radial-gradient(circle at top center, rgba(255, 120, 50, 0.15) 0%, transparent 60%)",
    secondaryGradient: "radial-gradient(circle at bottom right, rgba(128, 0, 128, 0.1) 0%, transparent 50%)",
    mistColor: "linear-gradient(to top, rgba(5, 5, 10, 1), rgba(255, 120, 50, 0.05) 50%, transparent)",
    particleOpacity: 0.8,
    rayOpacity: 0.03,
    overlayOpacity: 0.3
  },
  night: {
    primaryGradient: "radial-gradient(circle at top right, rgba(100, 150, 255, 0.08) 0%, transparent 50%)",
    secondaryGradient: "radial-gradient(circle at bottom left, rgba(5, 10, 30, 0.3) 0%, transparent 70%)",
    mistColor: "linear-gradient(to top, rgba(2, 4, 10, 1), rgba(100, 150, 255, 0.02) 50%, transparent)",
    particleOpacity: 0.2, // Fireflies effect
    rayOpacity: 0.01,
    overlayOpacity: 0.5
  }
};

export function TimelineBackground({ activeTab }: TimelineBackgroundProps) {
  const currentState = backgroundStates[activeTab];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#050505]">
      
      {/* 2 & 3. Radial Glows (Dynamic based on time of day) */}
      <motion.div 
        className="absolute inset-0"
        initial={false}
        animate={{ background: currentState.primaryGradient }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0"
        initial={false}
        animate={{ background: currentState.secondaryGradient }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* 4. Forest Mist */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[60vh] blur-2xl"
        initial={false}
        animate={{ background: currentState.mistColor }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* 5. Golden Particles / Fireflies */}
      <motion.div 
        className="hidden sm:block absolute inset-0"
        initial={false}
        animate={{ opacity: currentState.particleOpacity }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-[#FFD27A] blur-[1px] animate-dust-float"
            style={{
              top: `${(i * 23) % 100}%`,
              left: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              opacity: ((i * 7) % 30) / 100 + 0.1,
              animationDelay: `-${(i * 3) % 20}s`,
              animationDuration: `${(i % 15) + 20}s`,
            }}
          />
        ))}
      </motion.div>

      {/* 6. Subtle Light Rays */}
      <motion.div 
        className="absolute top-[-20%] right-[15%] w-[150px] h-[150%] bg-gradient-to-b from-transparent via-[#FFD27A] to-transparent rotate-[35deg] blur-3xl animate-breathe-slow"
        initial={false}
        animate={{ opacity: currentState.rayOpacity }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* 7. Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay" />

      {/* 8. Soft Vignette & Dynamic Darkening */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={false}
        animate={{ opacity: currentState.overlayOpacity }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 vignette-heavy mix-blend-multiply opacity-70" />
      
    </div>
  );
}
