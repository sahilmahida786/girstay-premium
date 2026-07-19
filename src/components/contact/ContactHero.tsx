"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function ContactHero() {
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeInUp}
      className="max-w-4xl mx-auto text-center mb-20 sm:mb-28 pt-10 sm:pt-16"
    >
      {/* Luxury Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors cursor-default">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD27A]" />
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#FFD27A] uppercase">
          Personal Concierge
        </span>
      </div>
      
      {/* Headline */}
      <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
        Let&apos;s Plan Your Perfect <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] italic pr-2">Gir Escape</span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
        Our luxury travel specialists curate unforgettable Gir experiences, hand-select premium resorts, and plan every detail of your journey.
      </p>

      {/* Trust Indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm font-medium text-white/70">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
          </div>
          <span>4.9 Guest Rating</span>
        </div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <span>10,000+ Happy Travelers</span>
        </div>
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="flex items-center gap-2">
          <span className="text-[#D4AF37]">24×7 Concierge</span>
        </div>
      </div>
    </motion.div>
  );
}
