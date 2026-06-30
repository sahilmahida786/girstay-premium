"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ChevronDown, Star, MapPin, Shield } from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing, staggerContainer, fadeUpStagger, fadeUp } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image — optimized via Next.js Image for LCP */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: luxuryEasing }}
        className="absolute inset-0 z-0" style={{ willChange: 'transform' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop"
          alt="Aerial view of Gir forest landscape"
          fill
          priority
          quality={80}
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        {/* Animated subtle shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-amber-900/10 animate-gradient" style={{ backgroundSize: "400% 400%" }} />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              #1 Rated Booking Platform for Sasan Gir
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight sm:leading-[1.1] mb-5 sm:mb-6 overflow-hidden flex flex-wrap justify-center gap-x-2 sm:gap-x-4"
          >
            {["Discover", "the"].map((word, i) => (
              <motion.span key={i} variants={fadeUpStagger} className="inline-block">
                {word}
              </motion.span>
            ))}
            <motion.span variants={fadeUpStagger} className="inline-block gradient-gold-text">
              Wild Luxury
            </motion.span>
            {["of", "Gir"].map((word, i) => (
              <motion.span key={i} variants={fadeUpStagger} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 font-light leading-relaxed px-2"
          >
            Handpicked luxury resorts, heritage farm stays, and exclusive jungle
            lodges in the heart of Asiatic Lion country
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 text-xs sm:text-sm text-white/60"
          >
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold fill-gold" />
              <span>4.8/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span>50+ Premium Properties</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span>Best Price Guarantee</span>
            </div>
          </motion.div>

          {/* Search Widget */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SearchWidget />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small mobile to save space */}
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
