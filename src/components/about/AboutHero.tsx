"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, MapPin, Play, Award, Gem } from "lucide-react";
import { SectionBackground } from "./SectionBackground";

const trustPills = [
  { icon: Users, label: "10,000+ Guests" },
  { icon: ShieldCheck, label: "Verified Properties" },
  { icon: Star, label: "Premium Hospitality" },
  { icon: Award, label: "4.9 Rating" },
  { icon: Gem, label: "24×7 Concierge" },
];

const floatingBadges = [
  { icon: ShieldCheck, label: "Verified Partner", position: "top-[25%] left-[5%]" },
  { icon: Award, label: "Trusted Since 2019", position: "top-[40%] right-[10%]" },
  { icon: Gem, label: "Luxury Collection", position: "bottom-[25%] left-[10%]" },
  { icon: Star, label: "Curated Experiences", position: "bottom-[35%] right-[5%]" },
];

export function AboutHero() {
  const titleWords = ["Experience", "the", "True", "Essence", "of"];
  
  return (
    <section className="relative h-[100svh] lg:h-[95vh] w-full flex flex-col justify-end lg:justify-center overflow-hidden bg-black pb-16 lg:pb-0">
      
      {/* Background Image - GPU Accelerated Zoom (No heavy CSS filters) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-full h-full will-change-transform"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
            alt="Cinematic Lion in Gir Forest"
            fill
            priority // Critical for Hero LCP
            className="object-cover object-[70%_center] sm:object-center opacity-80" 
            sizes="100vw"
          />
        </motion.div>
        {/* Dark Luxury Overlay (Pre-rendered CSS gradient instead of backdrop-blur) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* Optimized 9-Layer Background Engine */}
      <SectionBackground theme="gold" intensity="medium" hasBottomFade className="mix-blend-lighten" />

      {/* Floating Badges (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + (i * 0.2), duration: 0.8 }}
            className={`absolute ${badge.position} flex items-center gap-2 glass-dark px-5 py-3 rounded-full border border-white/10 shadow-luxury-lg`}
          >
            <badge.icon className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-white tracking-widest uppercase">{badge.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center mt-auto lg:mt-0">
        
        {/* Mobile Swipeable Trust Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 lg:mb-8"
        >
          <div className="flex lg:justify-center items-center gap-3 w-max">
            {trustPills.map((pill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#D4AF37]/20 shadow-[0_4px_20px_rgba(212,175,55,0.05)] cursor-default transition-colors hover:bg-white/5"
              >
                <pill.icon className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                <span className="text-[11px] font-bold text-white uppercase tracking-widest whitespace-nowrap">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-2 mb-4 lg:mb-6"
        >
          <span className="w-8 h-[1px] bg-[#D4AF37] hidden lg:block" />
          <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">OUR STORY</span>
          <span className="w-8 h-[1px] bg-[#D4AF37] hidden lg:block" />
        </motion.div>
        
        {/* Main Heading (Staggered words) */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (titleWords.length * 0.1) }}
            className="inline-block gradient-gold-text bg-[length:200%_auto] animate-shimmer-slow relative"
          >
            Sasan Gir
            <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50 blur-[1px]" />
          </motion.span>
        </h1>
        
        {/* Emotional Subheading */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/70 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-[620px] mb-10 lg:mb-12"
        >
          Discover a world where untamed wilderness meets unparalleled luxury. We curate the most exclusive, personally verified stays so you can focus entirely on the majesty of the forest.
        </motion.p>

        {/* Dual CTAs (56px mobile ergonomic height) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="relative w-full sm:w-auto h-[56px] px-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 shadow-gold hover:scale-[1.02] active:scale-95 group overflow-hidden flex items-center justify-center gap-2">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" />
            <MapPin className="w-4 h-4" />
            Discover Our Story
          </button>
          
          <button className="w-full sm:w-auto h-[56px] px-8 rounded-full glass border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 active:scale-95 flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <Play className="w-3.5 h-3.5 text-white group-hover:text-[#D4AF37] fill-white group-hover:fill-[#D4AF37] transition-colors ml-0.5" />
            </div>
            Watch Brand Film
          </button>
        </motion.div>

      </div>
    </section>
  );
}
