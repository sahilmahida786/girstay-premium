"use client";

import { motion } from "framer-motion";
import { ActivitiesHeroBackground } from "./hero/ActivitiesHeroBackground";
import { ActivitiesHeroContent } from "./hero/ActivitiesHeroContent";
import { ActivitiesHeroCTAs } from "./hero/ActivitiesHeroCTAs";
import { ActivitiesHeroTrust } from "./hero/ActivitiesHeroTrust";

export function ActivitiesHero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      
      {/* 9-Layer Cinematic Background */}
      <ActivitiesHeroBackground />

      {/* Main Content & Hierarchy */}
      <ActivitiesHeroContent />

      {/* 3-Button Layout */}
      <ActivitiesHeroCTAs />

      {/* Floating Card & Trust Bar */}
      <ActivitiesHeroTrust />

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
          Explore Activities
        </span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-20, 60] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
}
