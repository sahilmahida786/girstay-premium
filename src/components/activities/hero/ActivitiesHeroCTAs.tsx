"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function ActivitiesHeroCTAs() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="relative z-20 flex flex-col md:flex-row items-center justify-center gap-4 mt-12 w-full max-w-3xl mx-auto px-4"
    >
      {/* Primary: Book Experience */}
      <a href="#packages" className="w-full md:w-auto">
        <button className="relative overflow-hidden w-full md:w-auto h-[56px] px-8 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.4)] group/btn">
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shimmer-slow" />
          <span>Book Your Experience</span>
        </button>
      </a>

      {/* Secondary: View Itinerary */}
      <a href="#timeline" className="w-full md:w-auto">
        <button className="w-full md:w-auto h-[56px] px-8 rounded-full bg-white/[0.03] border border-white/20 backdrop-blur-md text-white font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] active:scale-[0.98] transition-all group/sec shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <span>View Itinerary</span>
          <ArrowRight className="w-4 h-4 group-hover/sec:translate-x-1 transition-transform" />
        </button>
      </a>

      {/* Third: Call Concierge */}
      <a href="tel:+919999999999" className="w-full md:w-auto">
        <button className="w-full md:w-auto h-[56px] px-8 rounded-full bg-black/20 border border-white/10 backdrop-blur-md text-white/90 font-medium flex items-center justify-center gap-2 hover:bg-white/5 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <Phone className="w-4 h-4 text-[#FFD27A]" />
          <span>Call Concierge</span>
        </button>
      </a>
    </motion.div>
  );
}
