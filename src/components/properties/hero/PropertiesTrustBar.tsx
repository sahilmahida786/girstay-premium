"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Compass, Headphones, Users, Tag } from "lucide-react";

export function PropertiesTrustBar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="relative z-20 mt-8 mb-4 max-w-4xl mx-auto w-full px-4 sm:px-6"
    >
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">4.9 Guest Rating</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">Verified Luxury Collection</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">Gir Safari Experts</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <Headphones className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">24×7 Concierge</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">10000+ Happy Guests</span>
        </div>
        <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold text-white/90">Best Price Guarantee</span>
        </div>
      </div>
    </motion.div>
  );
}
