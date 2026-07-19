"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "./SectionBackground";

// Placeholder names for premium partners since we don't have SVGs
const partners = [
  "FERN RESORTS",
  "TAJ SAFARIS",
  "OBERoi",
  "WILDLIFE TRUST",
  "GIR NATIONAL PARK",
  "GUJARAT TOURISM",
];

// Duplicate for infinite marquee
const marqueeItems = [...partners, ...partners];

export function BrandPartners() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden border-y border-white/5">
      <SectionBackground theme="charcoal" intensity="heavy" />

      <div className="relative z-10">
        <div className="text-center mb-12 px-4">
          <span className="text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em]">
            Trusted by the finest
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex flex-nowrap items-center gap-16 sm:gap-24 px-8 w-max"
          >
            {marqueeItems.map((partner, i) => (
              <div 
                key={i} 
                className="font-heading text-2xl sm:text-4xl font-bold tracking-widest text-white/10 hover:text-[#D4AF37] transition-colors duration-500 cursor-default select-none"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
