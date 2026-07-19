"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SectionBackground } from "./SectionBackground";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export function FounderStory() {
  const WHATSAPP_LINK = "https://wa.me/917984592173";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/sahil-mahida-115835317";

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="charcoal" intensity="medium" hasBottomFade />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            The Architect
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Meet The <span className="gradient-gold-text">Founder</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] overflow-hidden glass-card border border-white/10 shadow-luxury-lg p-8 sm:p-12 lg:p-16"
        >
          {/* Inner Glow Background for Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left: Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
                {/* Outer Gold Glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-breathe" />
                
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-[#D4AF37] via-[#8B7355] to-transparent shadow-gold">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0B0B0B] border-[6px] border-[#0B0B0B]">
                    <Image
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=800&fit=crop"
                      alt="Sahil Mahida"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      sizes="(max-width: 640px) 256px, 320px"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Verified Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 glass-dark border border-[#D4AF37]/50 text-[#FFD27A] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_5px_20px_rgba(212,175,55,0.3)]"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </motion.div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                SAHIL MAHIDA
              </h3>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
                <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-widest">Founder & Developer</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
                <span className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">Luxury UI/UX Specialist</span>
              </div>

              <div className="space-y-5 text-white/70 text-sm sm:text-base font-light leading-relaxed mb-10">
                <p>
                  &quot;GirStay Premium was built with a singular vision: to create the most transparent, luxurious, and seamless booking experience for wildlife enthusiasts.&quot;
                </p>
                <p>
                  With extensive expertise in Full Stack Next.js development and high-end brand architecture, Sahil engineers platforms that merge world-class performance with breathtaking aesthetic design.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-bold h-14 px-8 rounded-xl transition-all duration-300 shadow-gold hover:scale-[1.02] active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Connect on WhatsApp
                </a>
                <a 
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 glass border border-white/10 text-white font-semibold h-14 px-8 rounded-xl transition-all duration-300 hover:border-[#D4AF37]/50 group"
                >
                  <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  View LinkedIn
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
