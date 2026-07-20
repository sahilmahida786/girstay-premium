"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Phone, ArrowRight, ShieldCheck, Mail, Target, CheckCircle2, MapPin, Heart, Sparkles } from "lucide-react";

const principles = [
  { label: "Guest-first mindset", icon: Heart },
  { label: "Verified quality", icon: ShieldCheck },
  { label: "Honest recommendations", icon: Target },
  { label: "Local partnerships", icon: MapPin },
  { label: "Continuous improvement", icon: CheckCircle2 },
];

export function FounderStory() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Hardware-accelerated portrait parallax
  const imgScale = useTransform(scrollYProgress, [0.2, 0.8], [1.05, 1]);
  const imgY = useTransform(scrollYProgress, [0.2, 0.8], [30, -30]);

  const WHATSAPP_LINK = "https://wa.me/917984592173";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/sahil-mahida-115835317";
  const CONTACT_LINK = "/contact";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-48 overflow-hidden bg-black"
      aria-label="Founder and Leadership"
    >
      {/* ────────────────────────────────────────────────────────
          PREMIUM BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Deep charcoal gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0D0D0D] to-[#050505]" />
        
        {/* Subtle forest green accents (Top Left & Bottom Right) */}
        <div className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_top_left,rgba(14,24,14,0.4)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_bottom_right,rgba(14,24,14,0.4)_0%,transparent_60%)]" />
        
        {/* Warm gold highlights (Center behind portrait) */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[50vw] h-[50vh] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        
        {/* Texture & Fog */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
        />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="mb-16 lg:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Meet The Founder
            </span>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] font-medium text-white max-w-4xl tracking-tight text-balance drop-shadow-xl mb-6">
              Driven by Passion. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Inspired by Gir.
              </span>
            </h2>
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light max-w-2xl text-balance drop-shadow-md">
              A personal dedication to bringing the untamed beauty of Sasan Gir to the world, wrapped in absolute luxury and authentic hospitality.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            TWO COLUMN LAYOUT
            ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Cinematic Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] p-2 glass-strong border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group"
            >
              {/* Outer soft gold glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10" />

              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-[#D4AF37]/30 bg-[#0A0A0A]">
                <motion.div
                  style={prefersReducedMotion ? {} : { scale: imgScale, y: imgY }}
                  className="w-full h-full will-change-transform origin-center"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=90&auto=format"
                    alt="Sahil Mahida - Founder of GirStay Premium"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    quality={90}
                    lazyBoundary="600px"
                  />
                  {/* Glass overlay highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 pointer-events-none mix-blend-overlay" />
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
                </motion.div>
                
                {/* Verified Nameplate overlay */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-[#D4AF37]/50 text-[#F9E5A8] text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <ShieldCheck className="w-4 h-4" />
                  Founder
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Story & Principles */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              variants={prefersReducedMotion ? {} : containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              
              {/* Profile Intro */}
              <motion.div variants={itemVariants}>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">
                  Sahil Mahida
                </h3>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                  <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">Founder & Developer</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Luxury UX Architect</span>
                </div>
              </motion.div>

              {/* Story */}
              <motion.div variants={itemVariants} className="space-y-6 text-white/75 text-[15px] sm:text-[17px] font-light leading-[1.8] mb-12 max-w-2xl text-balance">
                <p>
                  "GirStay Premium was built with a singular vision: to create the most transparent, luxurious, and seamless booking experience for wildlife enthusiasts."
                </p>
                <p>
                  With extensive expertise in enterprise software architecture and high-end brand design, Sahil engineers platforms that merge world-class technical performance with breathtaking aesthetic elegance. The goal is simple—ensure your luxury journey begins the moment you open the website.
                </p>
              </motion.div>

              {/* Core Principles */}
              <motion.div variants={itemVariants} className="mb-12 w-full">
                <h4 className="text-white/90 font-serif text-lg mb-5 italic tracking-wide">Core Principles</h4>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {principles.map((principle, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/40 text-white/80 hover:text-white px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 text-sm font-medium tracking-wide shadow-sm"
                    >
                      <principle.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                      {principle.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest text-[13px] h-14 px-8 rounded-2xl transition-all duration-500 shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
                
                <a 
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold uppercase tracking-widest text-[13px] h-14 px-8 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 active:translate-y-0 group shadow-[0_10px_20px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#D4AF37] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href={CONTACT_LINK}
                  className="relative flex items-center justify-center gap-3 bg-transparent border border-transparent text-white/70 hover:text-white font-medium uppercase tracking-widest text-[13px] h-14 px-6 rounded-2xl transition-all duration-300 hover:bg-white/5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Contact Us
                </a>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
