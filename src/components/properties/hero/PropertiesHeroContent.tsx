"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export function PropertiesHeroContent() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="relative z-10 flex flex-col items-center text-center pt-24 pb-8 sm:pt-32 sm:pb-12"
    >
      {/* Luxury Glass Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/30 backdrop-blur-md mb-8 hover:bg-white/[0.06] transition-colors cursor-default"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#FFD27A]" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#FFD27A] uppercase">
          Discover Gir Collection
        </span>
      </motion.div>

      {/* Huge 3-Line Typography */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tight leading-[1.1] mb-8"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] block pb-2">Luxury</span>
        <span className="block font-light text-white/90 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] pb-2">Properties for</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] italic block">Extraordinary Stays</span>
      </motion.h1>

      {/* Editorial Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
      >
        Discover hand-selected luxury resorts, private villas, forest lodges, and boutique safari retreats designed for unforgettable experiences in the heart of Gir National Park.
      </motion.p>
    </motion.div>
  );
}
