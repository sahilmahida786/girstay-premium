"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, Award } from "lucide-react";
import { SectionBackground } from "./SectionBackground";

const badges = [
  { icon: ShieldCheck, label: "Verified Collection" },
  { icon: Users, label: "10,000+ Guests" },
  { icon: Star, label: "Premium Hospitality" },
  { icon: Award, label: "Trusted Since 2019" },
];

export function AboutHero() {
  const title = "Experience the True Essence of Sasan Gir";
  const words = title.split(" ");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Pan */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-full h-full"
          animate={{ scale: [1, 1.05, 1], filter: ["brightness(0.7)", "brightness(0.9)", "brightness(0.7)"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop"
            alt="Cinematic Gir Forest"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* 9-Layer Background Engine overlaid on image */}
      <SectionBackground theme="espresso" intensity="heavy" hasBottomFade />

      {/* Floating Badges */}
      <div className="absolute top-32 left-0 right-0 z-20 flex justify-center overflow-hidden pointer-events-none">
        <div className="flex gap-4 sm:gap-8 px-4 w-max animate-cinematic-pan opacity-60">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full border border-white/10">
              <badge.icon className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-white tracking-widest uppercase">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6 block"
        >
          Our Story
        </motion.span>
        
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: "easeOut" }}
              className="inline-block mr-[0.25em]"
            >
              {word === "Sasan" || word === "Gir" ? (
                <span className="gradient-gold-text italic">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Born from a passion for wildlife and hospitality, GirStay Premium connects travelers with the finest stays in Sasan Gir — the last home of the Asiatic Lion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        >
          <button className="gradient-gold text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 shadow-gold-lg">
            Discover Our Vision
          </button>
        </motion.div>
      </div>
    </section>
  );
}
