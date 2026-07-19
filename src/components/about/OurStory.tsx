"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Compass, Target, Sparkles } from "lucide-react";

// Content matching premium documentary storytelling
const timeline = [
  { year: "2019", title: "Idea Born", text: "Founded with a vision to redefine luxury wildlife tourism in India." },
  { year: "2021", title: "Research", text: "Partnered with our first 10 luxury eco-resorts after extensive vetting." },
  { year: "2022", title: "Verified Resorts", text: "Established the industry's highest standards for verified luxury stays." },
  { year: "2023", title: "First Guests", text: "Hosted over 5,000 discerning guests in the heart of Sasan Gir." },
  { year: "2024", title: "Luxury Platform", text: "The most trusted luxury travel platform for the Gir forest." },
  { year: "Future", title: "Future Vision", text: "Expanding our footprint while protecting the delicate ecosystem." },
];

export function OurStory() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  // Cinematic scroll binding
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Hardware accelerated transform animations
  const imgScale = useTransform(scrollYProgress, [0.2, 0.8], [1.05, 1]);
  const imgY = useTransform(scrollYProgress, [0.2, 0.8], [40, -40]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-48 overflow-hidden bg-black"
      aria-label="The Story of GirStay Premium"
    >
      {/* ────────────────────────────────────────────────────────
          LUXURY CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Layer 1: Deep charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]" />
        
        {/* Layer 2: Forest green radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(14,24,14,0.3)_0%,transparent_50%)]" />
        
        {/* Layer 3: Warm gold lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_80%,rgba(212,175,55,0.04)_0%,transparent_50%)]" />
        
        {/* Layer 4: Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
        />

        {/* Layer 5: Very subtle moving particles (Reduced count, CSS driven in production) */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 hidden sm:block">
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#D4AF37] opacity-20 blur-[1px] will-change-transform [transform:translateZ(0)]"
                  style={{
                    top: `${20 + (i * 30)}%`,
                    left: `${10 + (i * 40)}%`,
                    width: '3px',
                    height: '3px',
                  }}
                  animate={{
                    y: [0, -50, 0],
                    x: [0, 20, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                />
             ))}
          </div>
        )}

        {/* Layer 6: Bottom fog fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            SECTION HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="mb-16 lg:mb-24 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform"
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Our Story
            </span>
            <h2 className="font-serif text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-medium text-white max-w-3xl lg:max-w-4xl tracking-tight text-balance drop-shadow-xl">
              More Than A <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Booking Platform
              </span>
            </h2>
            <p className="mt-6 text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light max-w-2xl text-balance drop-shadow-md">
              Sasan Gir is India's crown jewel for wildlife. Yet, finding quality accommodation with verified photos, transparent pricing, and reliable luxury service was a challenge. GirStay Premium was born to solve this.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            SPLIT LAYOUT: TIMELINE & MEDIA
            ──────────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Interactive Timeline */}
          <div className="w-full lg:w-5/12 relative">
            {/* Elegant vertical line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-[#D4AF37]/50 via-[#D4AF37]/10 to-transparent hidden sm:block" aria-hidden="true" />
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#D4AF37]/30 sm:hidden" aria-hidden="true" />
            
            <div className="space-y-12 sm:space-y-16 pl-12 sm:pl-16">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group will-change-transform"
                >
                  {/* Glowing Timeline Node */}
                  <div className="absolute -left-[48px] sm:-left-[64px] top-1.5 w-[30px] h-[30px] rounded-full bg-black border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.05)] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-700" aria-hidden="true">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                  </div>
                  
                  <span className="block text-[#D4AF37] font-semibold text-xs tracking-widest uppercase mb-2 group-hover:text-[#F8E7B5] transition-colors">{item.year}</span>
                  <h3 className="text-white text-xl sm:text-2xl font-serif font-medium mb-3 group-hover:text-[#F9E5A8] transition-colors duration-500">{item.title}</h3>
                  <p className="text-white/60 text-[15px] sm:text-[16px] leading-[1.7] font-light group-hover:text-white/80 transition-colors duration-500">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Immersive Media & Floating Cards */}
          <div className="w-full lg:w-7/12 relative h-full pt-8 lg:pt-0">
            {/* Main Cinematic Image */}
            <motion.div 
              style={prefersReducedMotion ? {} : { scale: imgScale, y: imgY }}
              className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] will-change-transform [transform:translateZ(0)]"
            >
              {/* Glass Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 z-10 pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10 pointer-events-none" aria-hidden="true" />

              <Image
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=1600&fit=crop"
                alt="Luxury resort overlooking Sasan Gir forest"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={90}
                lazyBoundary="800px"
              />
            </motion.div>

            {/* Mission Card (Floating Over Image) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="absolute -bottom-6 -left-2 sm:-left-12 lg:-left-20 w-[90%] sm:w-[320px] bg-[#0A0A0A]/70 backdrop-blur-3xl border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 will-change-transform group transition-colors hover:border-[#D4AF37]/60"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center border border-[#D4AF37]/30 mb-5 group-hover:bg-[#D4AF37]/30 transition-colors duration-500" aria-hidden="true">
                <Compass className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
              </div>
              <h4 className="text-white font-serif text-xl sm:text-2xl mb-2">Our Mission</h4>
              <p className="text-white/70 text-[13px] sm:text-sm leading-[1.6] font-light">
                To curate India's most exclusive wildlife stays, ensuring every guest experiences the wild in uncompromising luxury and comfort.
              </p>
            </motion.div>

            {/* Vision Card (Floating Top Right - Hidden on small mobile to avoid clutter) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="absolute -top-6 -right-2 sm:-right-8 lg:-right-16 w-[80%] sm:w-[280px] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.3)] z-20 will-change-transform hidden xs:block group transition-colors hover:border-white/40"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4 group-hover:bg-white/20 transition-colors duration-500" aria-hidden="true">
                <Target className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h4 className="text-white font-serif text-lg mb-2">The Vision</h4>
              <p className="text-white/80 text-xs sm:text-[13px] leading-[1.6] font-light">
                Setting the global standard for premium eco-tourism in protected wildlife reserves.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
