"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Play, Mouse } from "lucide-react";

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Fade out scroll indicator on scroll
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] w-full flex flex-col justify-start lg:justify-between overflow-hidden bg-black pb-safe-offset lg:pb-0"
    >
      
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Slow Ken Burns zoom */}
        <motion.div
          className="w-full h-full will-change-transform"
          animate={{ scale: [1.0, 1.05, 1.0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
            alt="Cinematic Lion close-up in Sasan Gir"
            fill
            priority // Critical for Hero LCP
            // Focus on lion's eyes approximately 30-40% from top
            className="object-cover object-[50%_35%] opacity-90" 
            sizes="100vw"
          />
        </motion.div>

        {/* Soft dark luxury overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Forest green ambient lighting (soft tint) */}
        <div className="absolute inset-0 bg-[rgba(14,24,14,0.15)] mix-blend-multiply" />

        {/* 
            BACKGROUND GRADIENTS 
            Top: Transparent black
            Center: Warm golden radial glow
            Bottom: Dark forest fade
            Corners: Soft vignette
        */}
        {/* Top Fade */}
        <div className="absolute top-0 inset-x-0 h-[30vh] bg-gradient-to-b from-black/80 to-transparent" />
        
        {/* Bottom Dark forest fade */}
        <div className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-t from-[#0A120A] via-[#0A120A]/70 to-transparent" />
        
        {/* Center: Warm golden radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_55%)]" />
        
        {/* Warm golden light from upper-right */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
        
        {/* Corners: Soft vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]" />

        {/* Floating dust particles (Extremely slow) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] opacity-30 will-change-transform"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 61) % 100}%`,
                width: `${(i % 2) + 2}px`,
                height: `${(i % 2) + 2}px`,
              }}
              animate={{ 
                y: [0, -20, 0], 
                x: [0, 10, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 25 + i * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
        </div>
      </div>


      {/* ────────────────────────────────────────────────────────
          LARGE BREATHING SPACE FOR LION EYES
          ──────────────────────────────────────────────────────── */}
      <div className="flex-grow flex-shrink-0 min-h-[25vh] lg:min-h-[35vh]" />

      {/* ────────────────────────────────────────────────────────
          MAIN CONTENT
          ──────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center pb-24 lg:pb-32 flex-shrink-0">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-7xl font-medium text-white mb-6 lg:mb-8 tracking-tight max-w-[850px] text-balance drop-shadow-2xl"
        >
          Experience the True Essence of{" "}
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] relative inline-block whitespace-nowrap"
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Sasan Gir
          </motion.span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-[16px] sm:text-lg lg:text-[19px] font-light leading-[1.8] lg:leading-[1.9] max-w-[680px] mb-10 lg:mb-12 text-balance drop-shadow-md"
        >
          Every journey into Gir begins with trust, comfort, and unforgettable hospitality. We carefully curate exceptional stays that allow you to experience the untamed beauty of the wild without compromising luxury.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto h-[54px] lg:h-[56px] px-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-medium uppercase tracking-[0.15em] text-[11px] lg:text-[12px] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98] flex items-center justify-center">
            Discover Our Story
          </button>
          
          <button className="w-full sm:w-auto h-[54px] lg:h-[56px] px-8 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-medium uppercase tracking-[0.15em] text-[11px] lg:text-[12px] transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-[0.98] flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            Watch Brand Film
          </button>
        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────
          SCROLL INDICATOR
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <Mouse className="w-5 h-5 text-white/50" strokeWidth={1.5} />
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1 rounded-full bg-white/50 mt-1"
        />
      </motion.div>

    </section>
  );
}

