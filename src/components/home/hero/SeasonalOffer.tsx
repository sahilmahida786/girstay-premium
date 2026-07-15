"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";

export function SeasonalOffer() {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="group cursor-pointer relative"
    >
      {/* Animated gradient border wrapper */}
      <div className="relative rounded-[28px] p-[1px] overflow-hidden transition-transform duration-300 active:scale-[0.98]">
        {/* Glow border gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/40 via-white/5 to-[#D4AF37]/20" />
        
        {/* Inner Glass Card */}
        <div className="relative rounded-[27px] bg-[#060606]/60 backdrop-blur-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#D4AF37]/20 transition-colors duration-700" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#FFD27A]/10 rounded-full blur-[30px] pointer-events-none" />

          {/* Floating Particles (CSS only for performance) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none mix-blend-overlay" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Flame className="w-3 h-3 text-orange-400" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-400 uppercase drop-shadow-sm">
                Limited Collection
              </span>
            </div>
            
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
              Save up to <span className="text-[#FFD27A]">25%</span>
            </h3>
            
            <p className="text-[12px] sm:text-[13px] text-white/60 font-medium">
              Luxury stays curated for the monsoon season.
            </p>
          </div>

          {/* Action Button */}
          <div className="relative z-10 sm:ml-4 shrink-0 mt-2 sm:mt-0">
            <div className="flex items-center justify-between sm:justify-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-colors duration-300">
              <span className="text-[13px] font-bold text-white group-hover:text-[#FFD27A] transition-colors duration-300">
                Explore Collection
              </span>
              <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-[#FFD27A] group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
