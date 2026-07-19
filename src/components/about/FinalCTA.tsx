"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "./SectionBackground";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function FinalCTA() {
  const WHATSAPP_LINK = "https://wa.me/917984592173";

  return (
    <section className="relative py-32 sm:py-48 overflow-hidden">
      <SectionBackground theme="gold" intensity="medium" hasTopFade />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card rounded-[3rem] p-10 sm:p-16 border border-[#D4AF37]/20 shadow-[0_20px_60px_rgba(212,175,55,0.15)] overflow-hidden relative group"
        >
          {/* Animated background flare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-[#F8E7B5]/10 group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Experience Sasan Gir <span className="gradient-gold-text block sm:inline mt-2 sm:mt-0">Like Never Before</span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl font-light mb-12 max-w-2xl mx-auto">
              Your luxury wilderness escape awaits. Let our concierge curate the perfect itinerary for your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/properties"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-bold h-14 px-10 rounded-xl transition-all duration-300 shadow-gold hover:scale-[1.02] active:scale-95"
              >
                Book Luxury Stay
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 glass border border-white/10 text-white font-semibold h-14 px-10 rounded-xl transition-all duration-300 hover:border-[#D4AF37]/50 group/btn"
              >
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                Chat with Concierge
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
