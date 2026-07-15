"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-[#060606] flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Massive breathing gold glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFD27A]/20 rounded-full blur-[120px]"
        />
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#FFD27A]" />
          <span className="text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase">
            Bespoke Consultation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
        >
          Curate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] italic pr-2">
            Perfect Escape
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg sm:text-xl text-white/60 font-light max-w-2xl leading-relaxed mb-12 sm:mb-16"
        >
          Speak directly with our local Gir experts. We’ll secure the finest villas, arrange private safari permits, and handle every detail of your journey.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Primary CTA - The Floating Magnetic Button */}
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] rounded-full blur-[20px] opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
              <button className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD27A] to-[#D4AF37] text-black font-bold text-base sm:text-lg tracking-wide uppercase active:scale-95 transition-transform duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                <Phone className="w-5 h-5" />
                Speak to an Expert
              </button>
            </div>
          </a>

          {/* Secondary CTA - Elegant Ghost Button */}
          <Link href="/properties" className="w-full sm:w-auto">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/20 bg-white/[0.02] backdrop-blur-md text-white font-bold text-base sm:text-lg tracking-wide hover:bg-white/[0.08] hover:border-white/40 active:scale-95 transition-all duration-300">
              Browse Collection
              <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </Link>
        </motion.div>

      </div>
      
      {/* ── BOTTOM CINEMATIC FADE INTO FOOTER ── */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-10" />
    </section>
  );
}
