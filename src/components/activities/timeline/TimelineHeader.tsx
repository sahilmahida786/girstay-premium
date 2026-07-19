"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export function TimelineHeader() {
  return (
    <div className="relative z-20 text-center flex flex-col items-center mb-12 sm:mb-20 px-4">
      {/* Kicker */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
      >
        Your Day at GirStay
      </motion.span>

      {/* Main Title */}
      <motion.h2
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
      >
        A Complete <span className="gradient-gold-text">Day Experience</span>
      </motion.h2>

      {/* Animated Gold Divider */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100px", opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 sm:mb-8"
      />

      {/* Subtitle with Compass */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center justify-center gap-3 text-white/60 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed"
      >
        <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD27A] shrink-0 animate-pulse" />
        <p>
          From the first ray of sunrise to a peaceful night under the stars —
          every moment is crafted for you.
        </p>
      </motion.div>
    </div>
  );
}
