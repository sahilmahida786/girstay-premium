"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Lock, Clock, Compass, Sparkles } from "lucide-react";
import { SafeImage as Image } from "@/components/ui/SafeImage";

const trustIndicators = [
  { icon: ShieldCheck, label: "Verified Resort Partners" },
  { icon: Lock, label: "Secure Booking Experience" },
  { icon: Clock, label: "Responsive Support" },
  { icon: Compass, label: "Curated Local Experiences" },
];

export function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();
  const WHATSAPP_LINK = "https://wa.me/917984592173";

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
      className="relative py-32 sm:py-48 lg:py-56 overflow-hidden bg-black flex flex-col items-center justify-center min-h-[800px]"
      aria-label="Call to Action"
    >
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Full-width cinematic image */}
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1542408381-8b2b9db33fc7?w=2000&h=1200&fit=crop"
            alt="Warm golden sunset in the wilderness"
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            lazyBoundary="800px"
          />
        </div>

        {/* Luxury gradient overlays for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80" />
        
        {/* Warm golden vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,rgba(0,0,0,0.8)_80%)] mix-blend-multiply" />
        
        {/* Soft forest silhouettes (gradient mimic) */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#0A0700] to-transparent mix-blend-multiply" />

        {/* Floating particles mimicking golden hour dust */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 hidden sm:block overflow-hidden mix-blend-screen opacity-30">
             {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#F8E7B5] blur-[1.5px] will-change-transform [transform:translateZ(0)]"
                  style={{
                    top: `${40 + (i * 10)}%`,
                    left: `${10 + (i * 15)}%`,
                    width: `${(i % 3) + 2}px`,
                    height: `${(i % 3) + 2}px`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
                />
             ))}
          </div>
        )}

        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        
        {/* ────────────────────────────────────────────────────────
            MAIN CONTENT
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center will-change-transform"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-[#F8E7B5] text-xs font-semibold uppercase tracking-[0.3em] mb-6 drop-shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Start Your Journey
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-medium text-white max-w-4xl tracking-tight text-balance mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            Your Luxury Stay in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
              Sasan Gir Awaits
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] font-light max-w-2xl text-balance mb-12 drop-shadow-lg"
          >
            Leave the ordinary behind. Let our concierge curate a flawless wilderness escape tailored precisely to your desires.
          </motion.p>

          {/* ────────────────────────────────────────────────────────
              CTAS
              ──────────────────────────────────────────────────────── */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16 lg:mb-24"
          >
            {/* Primary Button */}
            <Link 
              href="/properties"
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] text-black font-semibold uppercase tracking-widest text-[14px] h-16 px-10 rounded-2xl transition-all duration-500 shadow-[0_15px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:translate-y-0 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              {/* Button light sweep */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out]" />
              
              <span className="relative z-10">Explore Premium Resorts</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            {/* Secondary Button */}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 w-full sm:w-auto bg-black/40 backdrop-blur-xl border border-white/15 text-white font-semibold uppercase tracking-widest text-[14px] h-16 px-10 rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-1 active:translate-y-0 group shadow-[0_15px_30px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
              Contact Our Concierge
            </a>
          </motion.div>

          {/* ────────────────────────────────────────────────────────
              TRUST INDICATORS
              ──────────────────────────────────────────────────────── */}
          <motion.div 
            variants={containerVariants}
            className="w-full pt-10 border-t border-white/10 flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6"
          >
            {trustIndicators.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md border border-white/5 hover:border-white/20 text-white/70 hover:text-white px-5 py-3 rounded-full transition-colors duration-300 shadow-xl"
              >
                <item.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
