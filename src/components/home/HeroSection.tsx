"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Headphones, Diamond, Star, ArrowRight } from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing, staggerContainer, fadeUpStagger } from "@/lib/motion";

export function HeroSection() {
  const [browsing, setBrowsing] = useState(0);

  useEffect(() => {
    const base = 15 + Math.floor(Math.random() * 5);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBrowsing(base);
    const interval = setInterval(() => {
      setBrowsing((prev) => Math.max(12, Math.min(25, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden pb-nav pt-24 bg-background">
      {/* ────────────────────────────────────────────────────────
          BACKGROUND & CINEMATIC EFFECTS
          ──────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: luxuryEasing }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1542314831-c6a4d14b407a?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Resort at Night"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Cinematic darkness masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent h-3/4 bottom-0" />
        <div className="absolute inset-0 gradient-aurora opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-noise opacity-20" />
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          HERO CONTENT
          ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 flex flex-col gap-6">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: luxuryEasing }}
          className="flex flex-col items-center sm:items-start mb-2"
        >
          <div className="inline-flex items-center gap-3 px-1 py-1">
            {/* Left Laurel */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-500 opacity-80 rotate-180 scale-y-[-1]">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col items-center">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mb-0.5" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">
                #1 Rated in Sasan Gir
              </span>
            </div>
            {/* Right Laurel */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-yellow-500 opacity-80">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center sm:text-left flex flex-col gap-2"
        >
          <motion.h1 variants={fadeUpStagger} className="font-heading text-5xl sm:text-7xl font-bold text-white leading-none tracking-tight">
            Sasan Gir&apos;s
          </motion.h1>
          <motion.h1 variants={fadeUpStagger} className="font-heading text-5xl sm:text-7xl font-bold gradient-gold-text leading-tight tracking-tight pb-1">
            Finest Escapes
          </motion.h1>
          <motion.p variants={fadeUpStagger} className="text-white/70 text-[15px] sm:text-lg max-w-md mx-auto sm:mx-0 font-light leading-relaxed mt-2 text-pretty">
            Handpicked luxury resorts, heritage farm stays, and jungle lodges in the heart of Asiatic Lion country.
          </motion.p>
        </motion.div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: luxuryEasing }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-4 py-2"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-yellow-900/40 border border-yellow-700/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <Diamond className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-xs text-white/80 font-medium leading-tight">Premium<br/>Stays</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-yellow-900/40 border border-yellow-700/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <ShieldCheck className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-xs text-white/80 font-medium leading-tight">Best Price<br/>Guarantee</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-yellow-900/40 border border-yellow-700/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <Headphones className="w-4 h-4 text-yellow-500" />
            </div>
            <span className="text-xs text-white/80 font-medium leading-tight">24/7 Guest<br/>Support</span>
          </div>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: luxuryEasing }}
          className="w-full mt-2"
        >
          <SearchWidget />
        </motion.div>

        {/* Live Visitors & Rating Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mt-2"
        >
          {/* Visitors */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <Image src="https://i.pravatar.cc/100?img=1" alt="Traveler" width={32} height={32} className="rounded-full border-2 border-[#0a0a0a] z-30" />
              <Image src="https://i.pravatar.cc/100?img=5" alt="Traveler" width={32} height={32} className="rounded-full border-2 border-[#0a0a0a] z-20" />
              <Image src="https://i.pravatar.cc/100?img=8" alt="Traveler" width={32} height={32} className="rounded-full border-2 border-[#0a0a0a] z-10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm text-white font-medium">{browsing}+ travelers</span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-xs text-white/50">browsing right now</span>
              </div>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 glass-dark border border-white/10 rounded-2xl px-4 py-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-white leading-tight">4.8<span className="text-white/50 font-medium">/5</span></span>
              <span className="text-[10px] text-white/50">From 500+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Special Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: luxuryEasing }}
          className="mt-4 relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/20 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative glass border border-yellow-700/30 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 text-left">
              <span className="text-[11px] font-bold tracking-widest text-yellow-500 uppercase mb-1.5 block">Special Offer</span>
              <h3 className="font-heading text-xl font-bold text-white mb-1">Up to 25% Off This Season</h3>
              <p className="text-xs text-white/60">Book early & save more on luxury stays</p>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-yellow-500 group-hover:text-yellow-400 transition-colors">
              Explore Offers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
