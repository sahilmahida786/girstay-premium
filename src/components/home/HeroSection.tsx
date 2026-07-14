"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Star, Trophy, ArrowRight, Flame } from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing, staggerContainer, fadeUpStagger } from "@/lib/motion";

export function HeroSection() {
  const [browsing, setBrowsing] = useState(0);
  const { scrollY } = useScroll();
  
  // High-performance Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], ["0%", "15%"]);
  const textY = useTransform(scrollY, [0, 500], ["0%", "25%"]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const base = 28 + Math.floor(Math.random() * 8); // e.g. 34 Guests
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBrowsing(base);
    const interval = setInterval(() => {
      setBrowsing((prev) => Math.max(25, Math.min(45, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-safe pt-28 bg-[#050505]">
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND & PARALLAX
          ──────────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-top"
      >
        <Image
          src="https://images.unsplash.com/photo-1542314831-c6a4d14b407a?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Resort at Night"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Cinematic darkness masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent h-4/5 bottom-0" />
        <div className="absolute inset-0 gradient-aurora opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          HERO CONTENT (STACKED LAYOUT)
          ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-6 sm:gap-10 pb-8">
        
        {/* 1. Headlines & Typography */}
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left flex flex-col gap-3"
        >
          {/* Badge */}
          <motion.div variants={fadeUpStagger} className="inline-flex items-center gap-2">
            <div className="flex items-center gap-1.5 glass-dark px-3 py-1.5 rounded-full border border-yellow-700/30 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <Trophy className="w-3.5 h-3.5 text-yellow-500" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-yellow-500 uppercase">
                #1 Luxury Resort Platform
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col gap-0.5 mt-2">
            <motion.h1 variants={fadeUpStagger} className="font-heading text-[2.75rem] sm:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Sasan Gir&apos;s
            </motion.h1>
            <motion.h1 variants={fadeUpStagger} className="font-heading text-[2.75rem] sm:text-7xl font-bold gradient-gold-text leading-[1.05] tracking-tight">
              Finest Escapes
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p variants={fadeUpStagger} className="text-white/60 text-[15px] sm:text-lg max-w-sm sm:max-w-md font-normal leading-relaxed mt-1 tracking-wide">
            Handpicked luxury resorts, heritage farm stays, and jungle lodges in Asiatic Lion country.
          </motion.p>
        </motion.div>

        {/* 2. Floating Search Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: luxuryEasing }}
          className="w-full relative z-30"
        >
          <SearchWidget />
        </motion.div>

        {/* 3. Trust & Social Proof Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: luxuryEasing }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-5 backdrop-blur-md"
        >
          {/* Live Visitors */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5 shrink-0">
              <Image src="https://i.pravatar.cc/100?img=11" alt="Traveler" width={28} height={28} className="rounded-full border-2 border-[#1a1a1a] z-30" />
              <Image src="https://i.pravatar.cc/100?img=15" alt="Traveler" width={28} height={28} className="rounded-full border-2 border-[#1a1a1a] z-20" />
              <Image src="https://i.pravatar.cc/100?img=28" alt="Traveler" width={28} height={28} className="rounded-full border-2 border-[#1a1a1a] z-10" />
            </div>
            <span className="text-sm text-white/90 font-medium">
              <span className="text-white font-bold">{browsing} Guests</span> browsing now
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* Rating */}
          <div className="flex items-center gap-2 border-t border-white/10 sm:border-none pt-3 sm:pt-0">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-white">4.9 <span className="text-white/50 font-normal">Rating</span></span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* Trust Badge */}
          <div className="flex items-center gap-2 pb-1 sm:pb-0">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-white/90 font-medium">Trusted by Premium Resorts</span>
          </div>
        </motion.div>

        {/* 4. Seasonal Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: luxuryEasing }}
          className="relative group cursor-pointer active:scale-[0.98] transition-transform"
        >
          {/* Animated glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative bg-gradient-to-br from-[#1a1505] to-[#0a0802] border border-yellow-700/40 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-2">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase">Seasonal Offer</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1 leading-tight tracking-tight">Up to 25% Off This Season</h3>
              <p className="text-xs sm:text-sm text-white/50 font-medium">Book early & secure the finest luxury suites.</p>
            </div>
            
            <div className="relative z-10 flex items-center justify-between sm:justify-start gap-2 text-sm font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors bg-white/5 sm:bg-transparent px-4 py-2 sm:p-0 rounded-full sm:rounded-none mt-2 sm:mt-0">
              Explore Offers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
