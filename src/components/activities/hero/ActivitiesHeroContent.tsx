"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ActivitiesHeroContent() {
  return (
    <div className="relative z-20 flex flex-col items-center text-center w-full mt-10 sm:mt-16">
      
      {/* Luxury Glass Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-[#D4AF37]/40 backdrop-blur-md mb-8 hover:bg-white/[0.08] transition-colors cursor-default shadow-[0_0_20px_rgba(212,175,55,0.1)]"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#FFD27A] animate-[pulse_10s_ease-in-out_infinite]" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FFD27A] uppercase">
          A Day in the Wild
        </span>
      </motion.div>

      {/* Huge Typographic Headline */}
      <motion.h1 
        className="font-heading font-bold text-white tracking-[-0.03em] leading-[0.88] mb-8"
        style={{ fontSize: "clamp(50px, 8vw, 120px)" }}
      >
        <motion.span 
          initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          Experience the
        </motion.span>
        <motion.span 
          initial={{ filter: "blur(10px)", opacity: 0, y: 40 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] pb-2 sm:pb-4"
        >
          Wild Heart <span className="text-white">of Gir</span>
        </motion.span>
      </motion.h1>

      {/* Emotional Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-white/75 max-w-3xl mx-auto font-light leading-relaxed px-4 line-clamp-3 sm:line-clamp-2"
      >
        Wake with the sounds of the forest, explore Gir alongside expert naturalists, enjoy handcrafted dining beneath the stars, and return with memories that last a lifetime.
      </motion.p>
    </div>
  );
}
