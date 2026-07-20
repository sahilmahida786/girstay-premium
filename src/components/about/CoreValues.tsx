"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, MapPin, Search, HeartHandshake, Leaf, Star, Sparkles, Target, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  { 
    icon: ShieldCheck, 
    title: "Trust & Transparency", 
    description: "Absolute honesty in pricing and promises. No hidden fees, no surprises—just complete peace of mind." 
  },
  { 
    icon: MapPin, 
    title: "Verified Luxury Properties", 
    description: "Every resort is personally inspected to guarantee uncompromising standards of comfort, safety, and exclusivity." 
  },
  { 
    icon: HeartHandshake, 
    title: "Exceptional Hospitality", 
    description: "From booking to departure, our dedicated concierge anticipates your needs to provide a flawless journey." 
  },
  { 
    icon: Star, 
    title: "Guest-First Experience", 
    description: "Our entire ecosystem is designed around you. Your comfort and satisfaction dictate every decision we make." 
  },
  { 
    icon: Search, 
    title: "Technology & Innovation", 
    description: "A seamless, world-class digital booking experience that matches the luxury of the resorts we represent." 
  },
  { 
    icon: Leaf, 
    title: "Responsible Tourism", 
    description: "We exclusively partner with properties that actively protect the Asiatic lion and support the local Gir community." 
  },
];

export function CoreValues() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black"
      aria-labelledby="purpose-heading"
    >
      {/* ────────────────────────────────────────────────────────
          LUXURY CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Seamless blend from Story (Black top) */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* Layer 1: Dark charcoal base */}
        <div className="absolute inset-0 bg-[#060606]" />
        
        {/* Layer 2: Forest green ambient glow */}
        <div className="absolute top-[20%] left-0 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_left,rgba(14,24,14,0.4)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Layer 3: Warm gold ambient lighting */}
        <div className="absolute bottom-[10%] right-0 w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.03)_0%,transparent_60%)] blur-[100px]" />
        
        {/* Layer 4: Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} 
        />

        {/* Bottom blend to next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform"
          >
            {/* Luxury Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em]">
                Purpose & Principles
              </span>
              <div className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            </div>
            
            {/* Editorial Heading */}
            <h2 id="purpose-heading" className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-medium text-white mb-6 tracking-tight text-balance">
              Redefining Wildlife <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Tourism in India
              </span>
            </h2>
            
            {/* Short Introduction */}
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light text-balance max-w-2xl mx-auto">
              We exist to elevate the standard of hospitality in Sasan Gir. By merging world-class digital experiences with exceptional on-ground service, we ensure your journey is flawless from discovery to departure.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            MISSION & VISION (2-Column Layout)
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {/* Mission Card */}
          <motion.div
            variants={prefersReducedMotion ? {} : cardVariants}
            whileHover={prefersReducedMotion ? {} : { y: -6 }}
            className="group relative rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#D4AF37]/40 p-8 sm:p-12 backdrop-blur-2xl transition-all duration-700 ease-out will-change-transform flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] overflow-hidden"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
            {/* Gold Accent Line */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-500 will-change-transform group-hover:scale-110">
              <Compass className="w-8 h-8 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
            </div>
            
            <h3 className="font-serif text-[1.75rem] sm:text-3xl font-medium text-white mb-4 group-hover:text-[#F8E7B5] transition-colors duration-500">
              Our Mission
            </h3>
            
            <p className="text-white/70 text-base sm:text-lg leading-[1.7] font-light group-hover:text-white/90 transition-colors duration-500 max-w-lg">
              Helping travelers discover verified premium stays in Sasan Gir through uncompromising trust, absolute transparency, and exceptional hospitality.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={prefersReducedMotion ? {} : cardVariants}
            whileHover={prefersReducedMotion ? {} : { y: -6 }}
            className="group relative rounded-[2rem] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#D4AF37]/40 p-8 sm:p-12 backdrop-blur-2xl transition-all duration-700 ease-out will-change-transform flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] overflow-hidden"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
            {/* Gold Accent Line */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-500 will-change-transform group-hover:scale-110">
              <Target className="w-8 h-8 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} aria-hidden="true" />
            </div>
            
            <h3 className="font-serif text-[1.75rem] sm:text-3xl font-medium text-white mb-4 group-hover:text-[#F8E7B5] transition-colors duration-500">
              Our Vision
            </h3>
            
            <p className="text-white/70 text-base sm:text-lg leading-[1.7] font-light group-hover:text-white/90 transition-colors duration-500 max-w-lg">
              To become the most trusted luxury accommodation platform for Sasan Gir and eventually India's definitive standard for premium wildlife travel.
            </p>
          </motion.div>
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            CORE VALUES GRID (3-Column Layout)
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : cardVariants}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative h-full rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#D4AF37]/30 p-8 sm:p-10 backdrop-blur-xl transition-all duration-700 ease-out will-change-transform flex flex-col overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.06)]"
            >
              {/* Subtle Gold Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
              
              {/* Soft Radial Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-[1rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-500 will-change-transform group-hover:scale-110">
                  <value.icon className="w-5 h-5 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                </div>
                
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-[#F8E7B5] transition-colors duration-500">
                  {value.title}
                </h4>
                
                <p className="text-white/60 text-[15px] sm:text-base leading-[1.6] font-light group-hover:text-white/80 transition-colors duration-500 mt-auto">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
