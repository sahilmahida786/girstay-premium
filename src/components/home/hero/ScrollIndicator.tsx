"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Scroll text - ultra minimal */}
      <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/40 drop-shadow-sm">
        Scroll
      </span>
      
      {/* The luxury indicator line */}
      <div className="relative w-[1px] h-12 bg-white/10 overflow-hidden">
        {/* Animated golden bar that slides down */}
        <motion.div
          animate={{
            y: ["-100%", "100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.7, 0, 0.3, 1], // Custom Apple-like ease
          }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#FFD27A] to-[#D4AF37]"
        />
      </div>
    </div>
  );
}
