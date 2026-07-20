"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, MapPin, Search, HeartHandshake, Leaf, Star, Sparkles } from "lucide-react";

const values = [
  { 
    icon: ShieldCheck, 
    title: "Verified Stays", 
    description: "Every property in our portfolio is personally inspected to guarantee uncompromising luxury and safety." 
  },
  { 
    icon: MapPin, 
    title: "Local Hospitality", 
    description: "Deep-rooted connections with the region ensure an authentic, immersive Sasan Gir experience." 
  },
  { 
    icon: Search, 
    title: "Transparent Booking", 
    description: "Clear pricing with zero hidden fees. We believe trust begins with absolute honesty." 
  },
  { 
    icon: HeartHandshake, 
    title: "Exceptional Service", 
    description: "A dedicated luxury concierge anticipating your every need from arrival to departure." 
  },
  { 
    icon: Leaf, 
    title: "Sustainable Tourism", 
    description: "Partnering exclusively with eco-conscious resorts that actively protect the delicate forest ecosystem." 
  },
  { 
    icon: Star, 
    title: "Guest Satisfaction", 
    description: "Our singular focus is exceeding the expectations of the world's most discerning travelers." 
  },
];

export function CoreValues() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  // Stagger variants for the cards grid
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
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-[#0A0A0A]"
      aria-labelledby="values-heading"
    >
      {/* ────────────────────────────────────────────────────────
          LUXURY CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Charcoal base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
        
        {/* Forest green radial gradients (subtle corners) */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top_left,rgba(14,24,14,0.3)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,24,14,0.3)_0%,transparent_60%)]" />
        
        {/* Warm gold ambient lighting (center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]" />
        
        {/* Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
        />

        {/* Minimal floating particles */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 hidden sm:block">
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#D4AF37] opacity-20 blur-[1px] will-change-transform [transform:translateZ(0)]"
                  style={{
                    top: `${15 + (i * 35)}%`,
                    left: `${20 + (i * 25)}%`,
                    width: '2px',
                    height: '2px',
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, 15, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear", delay: i * 2 }}
                />
             ))}
          </div>
        )}

        {/* Top & Bottom blends */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform"
          >
            <span className="inline-flex items-center justify-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Our Values
            </span>
            
            <h2 id="values-heading" className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-medium text-white mb-6 tracking-tight text-balance">
              Luxury Experiences <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Built on Trust
              </span>
            </h2>
            
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light text-balance max-w-2xl mx-auto">
              We believe that true luxury lies in absolute peace of mind. Our entire approach is guided by unwavering principles that ensure your journey is seamless, authentic, and unforgettable.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            VALUE CARDS GRID
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : cardVariants}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="group relative h-full rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-[#D4AF37]/30 p-8 sm:p-10 backdrop-blur-xl transition-all duration-700 ease-out will-change-transform flex flex-col overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.05)]"
            >
              {/* Abstract decorative graphic (Right aligned, subtle) */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" aria-hidden="true">
                <value.icon className="w-full h-full text-white" />
              </div>
              
              {/* Subtle gradient sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#D4AF37]/0 group-hover:from-[#D4AF37]/[0.05] group-hover:to-transparent transition-all duration-700 pointer-events-none rounded-[2rem]" aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-500 will-change-transform group-hover:scale-110 group-hover:rotate-[5deg]">
                  <value.icon className="w-6 h-6 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-2xl font-medium text-white mb-4 group-hover:text-[#F8E7B5] transition-colors duration-500">
                  {value.title}
                </h3>
                
                <p className="text-white/60 text-[15px] sm:text-base leading-[1.7] font-light group-hover:text-white/80 transition-colors duration-500 mt-auto">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            CLOSING BRAND STATEMENT
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mb-8" aria-hidden="true" />
            <p className="text-white/50 font-serif text-lg sm:text-xl font-light italic tracking-wide max-w-xl text-balance">
              "Excellence is not an act, but a habit. We are what we repeatedly do for our guests."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
