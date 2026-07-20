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
            {/* Soft Ambient Glows Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1A241A]/60 via-[#D4AF37]/10 to-transparent blur-3xl rounded-[32px] z-0 pointer-events-none opacity-60 transition-opacity duration-1000 group-hover:opacity-100" aria-hidden="true" />

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-[32px] overflow-hidden group will-change-transform [transform:translateZ(0)] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-700 hover:shadow-[0_30px_70px_rgba(212,175,55,0.15)] bg-black"
            >
              {/* Image Container with Gentle Scroll Parallax and Hover Scale (1.02) */}
              <motion.div 
                className="absolute inset-[-5%] w-[110%] h-[110%] will-change-transform origin-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={prefersReducedMotion ? {} : { scale: imgScale, y: imgY }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=1200&h=1600&fit=crop&q=90&auto=format"
                  alt="Golden sunrise lighting up a luxury eco-resort nestled deep within the Sasan Gir forest"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  lazyBoundary="800px"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAQCdASoIAAYAAUAmJaQAA3AA/vhL3oAA/v02XqX0Y38hQo1eT9r2e+3x//nK739u/7y/98z/2D/P//gY42V9H+b/8j4A/9f/O+wz+h/3voDf6T1ZPQH/wAA="
                />
              </motion.div>

              {/* Subtle Cinematic Gradient Overlay: Dark at bottom, warm gold in one corner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.25)_0%,transparent_60%)] mix-blend-screen z-10 pointer-events-none" />
              
              {/* Subtle Glass Border Accent */}
              <div className="absolute inset-0 border border-white/10 rounded-[32px] z-20 pointer-events-none transition-colors duration-700 group-hover:border-white/20" />
            </motion.div>
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
