"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Leaf, ShieldCheck, HeartHandshake, Sparkles, Quote } from "lucide-react";

const commitments = [
  { 
    icon: ShieldCheck, 
    title: "Wildlife Respect", 
    desc: "Rigorous guidelines ensure our partner properties maintain absolute minimal impact on the natural habitats and migration corridors of the Asiatic Lion." 
  },
  { 
    icon: HeartHandshake, 
    title: "Support Communities", 
    desc: "We prioritize partnerships with locally-owned estates and indigenous guides, empowering the Maldhari tribes and surrounding villages." 
  },
  { 
    icon: Leaf, 
    title: "Sustainable Hospitality", 
    desc: "Curating eco-conscious luxury—from zero single-use plastics to solar-powered lodges that blend seamlessly into the forest buffer zones." 
  },
];

export function WildlifeCommitment() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Hardware-accelerated parallax for the main image
  const imgScale = useTransform(scrollYProgress, [0.2, 0.8], [1.05, 1]);
  const imgY = useTransform(scrollYProgress, [0.2, 0.8], [30, -30]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-48 overflow-hidden bg-[#050505]"
      aria-label="Conservation and Sustainability"
    >
      {/* ────────────────────────────────────────────────────────
          PREMIUM BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080B08] to-[#050505]" />
        
        {/* Forest green radial glow (anchored to the cards side) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[70vh] bg-[radial-gradient(circle_at_center_right,rgba(14,24,14,0.5)_0%,transparent_60%)]" />
        
        {/* Warm gold ambient lighting (anchored to the image side) */}
        <div className="absolute top-1/4 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center_left,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
        
        {/* Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
        />

        {/* Floating particles mimicking forest spores/dust */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 hidden sm:block overflow-hidden">
             {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#A3B8A3] opacity-20 blur-[1px] will-change-transform [transform:translateZ(0)]"
                  style={{
                    top: `${10 + (i * 25)}%`,
                    left: `${5 + (i * 30)}%`,
                    width: `${(i % 2) + 2}px`,
                    height: `${(i % 2) + 2}px`,
                  }}
                  animate={{
                    y: [0, -60, 0],
                    x: [0, 30, 0],
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{ duration: 30 + i * 5, repeat: Infinity, ease: "linear", delay: i * 3 }}
                />
             ))}
          </div>
        )}

        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
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
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Our Commitment
            </span>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] font-medium text-white max-w-3xl lg:max-w-4xl tracking-tight text-balance drop-shadow-xl mb-6">
              Protecting the Spirit of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Sasan Gir
              </span>
            </h2>
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light max-w-2xl text-balance drop-shadow-md">
              Sasan Gir is not just a destination; it is a delicate, ancient ecosystem. We believe that true luxury must coexist in perfect harmony with nature, enriching the land rather than depleting it.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            TWO COLUMN LAYOUT: IMAGE & CARDS
            ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          
          {/* Left: Cinematic Panoramic Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5] h-full">
            {/* Soft Ambient Glows Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-bl from-[#1A241A]/60 via-[#D4AF37]/10 to-transparent blur-3xl rounded-[32px] z-0 pointer-events-none opacity-60 transition-opacity duration-1000 group-hover:opacity-100" aria-hidden="true" />
            
            <motion.div
              style={prefersReducedMotion ? {} : { scale: imgScale, y: imgY }}
              className="relative w-full h-full rounded-[32px] overflow-hidden group will-change-transform [transform:translateZ(0)] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-700 hover:shadow-[0_30px_70px_rgba(212,175,55,0.15)] bg-black"
            >
              <div className="absolute inset-[-5%] w-[110%] h-[110%] will-change-transform origin-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <Image
                  src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=1200&h=1600&fit=crop&q=90&auto=format"
                  alt="Sun rays peering through the lush canopy of Sasan Gir forest"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  lazyBoundary="800px"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAADwAQCdASoIAAYAAUAmJaQAA3AA/vhL3oAA/v02XqX0Y38hQo1eT9r2e+3x//nK739u/7y/98z/2D/P//gY42V9H+b/8j4A/9f/O+wz+h/3voDf6T1ZPQH/wAA="
                />
              </div>

              {/* Subtle Cinematic Gradient Overlay: Dark at bottom, warm gold in one corner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.25)_0%,transparent_60%)] mix-blend-screen z-10 pointer-events-none" />
              
              {/* Subtle Glass Border Accent */}
              <div className="absolute inset-0 border border-white/10 rounded-[32px] z-20 pointer-events-none transition-colors duration-700 group-hover:border-white/20" />
            </motion.div>
          </div>

          {/* Right: Commitment Cards */}
          <div className="flex flex-col justify-center">
            <motion.div
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              {commitments.map((item, i) => (
                <motion.div
                  key={i}
                  variants={prefersReducedMotion ? {} : itemVariants}
                  whileHover={prefersReducedMotion ? {} : { x: 10 }}
                  className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-[2rem] bg-[#0A0D0A]/80 backdrop-blur-xl border border-[#1A241A] hover:border-[#D4AF37]/30 transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] overflow-hidden will-change-transform"
                >
                  {/* Subtle card glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/[0.05] group-hover:to-transparent transition-all duration-700 pointer-events-none" aria-hidden="true" />
                  
                  <div className="shrink-0 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#121812] border border-[#2E3C2E] flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:scale-110 transition-all duration-500 will-change-transform">
                      <item.icon className="w-6 h-6 text-[#A3B8A3] group-hover:text-[#D4AF37] transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-[#F8E7B5] transition-colors duration-500 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-[14.5px] sm:text-[15.5px] leading-[1.7] font-light group-hover:text-white/80 transition-colors duration-500 text-balance">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ────────────────────────────────────────────────────────
            CLOSING QUOTE
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37]/40 to-transparent mb-10" aria-hidden="true" />
            <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-6" aria-hidden="true" strokeWidth={1} />
            <p className="text-white/80 font-serif text-[clamp(1.25rem,3vw,1.75rem)] leading-[1.6] font-light tracking-wide max-w-4xl text-balance">
              "Luxury travel becomes truly meaningful when it respects the destination, supports local communities, and preserves nature for future generations."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
