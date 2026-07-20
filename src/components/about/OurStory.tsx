"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";

export function OurStory() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  // Cinematic scroll binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Hardware accelerated transform animations for the image parallax
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  // Background gradient blend (fades in slightly as user scrolls down)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-black"
      aria-label="The Story of GirStay Premium"
    >
      {/* ────────────────────────────────────────────────────────
          LUXURY CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Layer 1: Seamless blend from Hero (Black top) */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* Layer 2: Deep charcoal base */}
        <div className="absolute inset-0 bg-[#060606]" />
        
        {/* Layer 3: Dynamic forest green & gold glow (tied to scroll) */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,24,10,0.4)_0%,transparent_70%)] blur-[120px]" />
        </motion.div>
        
        {/* Layer 4: Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ────────────────────────────────────────────────────────
              MOBILE FIRST: IMAGE (Right on Desktop, Top on Mobile)
              ──────────────────────────────────────────────────────── */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 relative h-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-2xl lg:rounded-[2rem] overflow-hidden group will-change-transform [transform:translateZ(0)] border border-white/5 bg-white/5"
            >
              {/* Image Container with Scroll Parallax */}
              <motion.div 
                className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform origin-center"
                style={prefersReducedMotion ? {} : { scale: imgScale, y: imgY }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=1600&fit=crop"
                  alt="Golden sunrise lighting up a luxury eco-resort nestled deep within the Sasan Gir forest"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  lazyBoundary="800px"
                />
              </motion.div>

              {/* Luxury Overlays & Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/10 mix-blend-overlay z-10 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] z-10 pointer-events-none transition-shadow duration-700 group-hover:shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]" />
              
              {/* Glass Border Accent */}
              <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-2xl lg:rounded-[2rem] z-20 pointer-events-none transition-colors duration-700 group-hover:border-[#D4AF37]/30" />

              {/* Subtle animated accent lines on hover */}
              <div className="absolute top-8 left-8 w-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent z-20 transition-all duration-700 ease-out group-hover:w-32 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-8 right-8 w-0 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent z-20 transition-all duration-700 ease-out group-hover:w-32 opacity-0 group-hover:opacity-100" />
            </motion.div>

            {/* Premium External Shadow */}
            <div className="absolute -inset-4 bg-[#D4AF37]/5 blur-3xl rounded-full z-0 pointer-events-none opacity-0 lg:opacity-50 transition-opacity duration-1000 group-hover:opacity-70" />
          </div>

          {/* ────────────────────────────────────────────────────────
              EDITORIAL CONTENT (Left on Desktop, Bottom on Mobile)
              ──────────────────────────────────────────────────────── */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15%" }}
              className="will-change-transform max-w-[600px]"
            >
              {/* Eyebrow */}
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em]">
                  The Genesis
                </span>
              </motion.div>
              
              {/* Headline */}
              <motion.h2 
                variants={itemVariants}
                className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-medium text-white mb-8 tracking-tight text-balance"
              >
                Born from a reverence for the wild.
              </motion.h2>
              
              {/* Editorial Paragraphs */}
              <div className="space-y-6 text-white/70 text-[clamp(1rem,2vw,1.125rem)] leading-[1.8] font-light">
                <motion.p variants={itemVariants}>
                  Sasan Gir holds a rare and fragile beauty—the final sanctuary of the Asiatic Lion. For years, travelers seeking to witness this majesty were met with fragmented booking experiences that rarely matched the profound nature of the forest itself.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  GirStay Premium was conceived to bridge this divide. We believed that a journey into one of the world's most significant wildlife reserves demanded an equally exceptional standard of hospitality. We set out to curate a collection of stays that respect the ecosystem while offering uncompromising comfort.
                </motion.p>
                
                <motion.p variants={itemVariants}>
                  Today, we stand as the definitive luxury gateway to Sasan Gir. Every property in our portfolio is meticulously vetted, ensuring that your sanctuary within the forest is as awe-inspiring as the wilderness that surrounds it.
                </motion.p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
