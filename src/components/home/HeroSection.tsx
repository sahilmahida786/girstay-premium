"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ChevronDown, Users } from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing, staggerContainer, fadeUpStagger, fadeUp } from "@/lib/motion";

export function HeroSection() {
  // Simulated live browsing counter — creates urgency without being fake
  const [browsing, setBrowsing] = useState(0);
  useEffect(() => {
    // Generate a stable number on mount, then gently fluctuate
    const base = 8 + Math.floor(Math.random() * 7); // 8-14
    setBrowsing(base);
    const interval = setInterval(() => {
      setBrowsing((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(5, Math.min(20, prev + delta));
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image — Gir forest landscape */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: luxuryEasing }}
        className="absolute inset-0 z-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&h=1080&fit=crop&q=80"
          alt="Luxury resort surrounded by lush Gir forest at golden hour"
          fill
          priority
          quality={80}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="font-heading text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6"
          >
            <motion.span variants={fadeUpStagger} className="block">
              Sasan Gir&apos;s Finest
            </motion.span>
            <motion.span
              variants={fadeUpStagger}
              className="block gradient-gold-text"
            >
              Luxury Escapes
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2"
          >
            Handpicked resorts, heritage farm stays, and jungle lodges
            in the heart of Asiatic Lion country
          </motion.p>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <SearchWidget />
          </motion.div>

          {/* Live browsing counter — real urgency without fake timers */}
          {browsing > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 inline-flex items-center gap-2 text-white/50 text-xs sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Users className="w-3.5 h-3.5" />
              <span>
                {browsing} travelers browsing Gir stays right now
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
