"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "./SectionBackground";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisons = [
  { other: "Fake or manipulated photos", girstay: "Personally verified properties" },
  { other: "Hidden pricing & surprise fees", girstay: "Transparent pricing upfront" },
  { other: "Slow generic support", girstay: "Local luxury concierge" },
  { other: "Unverified stays", girstay: "Strict quality standards" },
  { other: "Transactional experience", girstay: "Curated luxury journey" },
];

export function WhyTrustUs() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="espresso" intensity="light" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            The GirStay Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Why Travelers <span className="gradient-gold-text">Trust Us</span>
          </motion.h2>
        </div>

        <div className="bg-[#0B0B0B]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-luxury">
          
          {/* Header Row */}
          <div className="grid grid-cols-2 p-6 sm:p-8 border-b border-white/10 bg-white/[0.02]">
            <div className="text-white/50 font-semibold text-sm sm:text-base uppercase tracking-widest text-center sm:text-left">
              Other Platforms
            </div>
            <div className="text-[#D4AF37] font-semibold text-sm sm:text-base uppercase tracking-widest text-center sm:text-left pl-4 sm:pl-8 border-l border-white/10">
              GirStay Premium
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="flex flex-col">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "grid grid-cols-2 p-6 sm:p-8 hover:bg-white/[0.02] transition-colors duration-300",
                  i !== comparisons.length - 1 && "border-b border-white/5"
                )}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left pr-4">
                  <XCircle className="w-5 h-5 text-red-500/70 shrink-0 mt-0.5" />
                  <span className="text-white/50 text-sm sm:text-base font-medium">{row.other}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left pl-4 sm:pl-8 border-l border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-white/90 text-sm sm:text-base font-semibold">{row.girstay}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
