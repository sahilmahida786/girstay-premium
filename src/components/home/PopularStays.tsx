"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { mockProperties } from "@/data/mockProperties";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Trees,
  Home,
  Waves,
  Map,
  PawPrint,
  Trophy,
  ArrowRight,
  Headset,
} from "lucide-react";
import Link from "next/link";
import { luxuryEasing, fadeUpStagger, staggerContainer } from "@/lib/motion";

const categories = [
  { id: "all", label: "All Stays", icon: Sparkles, count: 24 },
  { id: "resort", label: "Luxury Resorts", icon: Map, count: 8 },
  { id: "villa", label: "Private Villas", icon: Home, count: 5 },
  { id: "cottage", label: "Cottages", icon: Trees, count: 6 },
  { id: "farmhouse", label: "Farm Stays", icon: PawPrint, count: 3 },
  { id: "jungle_stay", label: "Jungle Lodges", icon: Waves, count: 2 },
];

export function PopularStays() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? mockProperties
      : mockProperties.filter((p) => p.type === activeCategory);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden atmosphere-espresso">
      {/* ────────────────────────────────────────────────────────
          LUXURY BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      
      {/* Section transition from Hero/above */}
      <div className="absolute top-0 inset-x-0 h-40 section-fade-top z-10" />
      
      {/* Warm golden spotlight — left side, behind heading */}
      <div className="absolute top-[10%] -left-[20%] w-[600px] h-[600px] glow-gold animate-breathe-slow" />
      
      {/* Deep forest accent — right side, behind cards */}
      <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] glow-forest animate-breathe-slow" style={{ animationDelay: "4s" }} />
      
      {/* Bronze warmth — center bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] glow-bronze" />

      {/* Noise texture for film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay" />
      
      {/* Soft vignette for depth */}
      <div className="absolute inset-0 vignette-soft" />

      {/* Bottom transition into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 section-fade-bottom z-10" />

      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 relative z-20">
        
        {/* ────────────────────────────────────────────────────────
            CINEMATIC HEADER
            ──────────────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          {/* Small Badge */}
          <motion.div variants={fadeUpStagger} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <Trophy className="w-4 h-4 text-[#FFD27A]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#FFD27A] uppercase">
                Discover Gir
              </span>
            </div>
          </motion.div>

          {/* Large Editorial Heading */}
          <motion.h2 
            variants={fadeUpStagger}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Luxury Stays for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5]">Every Traveler</span>
          </motion.h2>

          {/* Elegant Description */}
          <motion.p 
            variants={fadeUpStagger}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From private pool villas and rustic jungle lodges to heritage farm stays, 
            discover handpicked destinations across Sasan Gir.
          </motion.p>
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            LUXURY CATEGORY FILTER (GLASS PILLS)
            ──────────────────────────────────────────────────────── */}
        <div className="sticky top-20 z-30 -mx-5 px-5 sm:mx-0 sm:px-0 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: luxuryEasing }}
            className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-4 sm:flex-wrap sm:justify-center"
            ref={scrollRef}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "relative group flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap shrink-0",
                    "border backdrop-blur-md overflow-hidden active:scale-95",
                    isActive
                      ? "text-black border-transparent shadow-gold"
                      : "bg-white/[0.03] text-white/80 border-white/10 hover:bg-white/[0.08] hover:border-white/20 hover:text-white shadow-sm"
                  )}
                >
                  {/* Active Background Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 gradient-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  
                  {/* Subtle Hover Gradient for inactive pills */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-[#FFD27A]/70 group-hover:text-[#FFD27A]")} />
                    {cat.label}
                  </span>
                  
                  {/* Property Count */}
                  <span className={cn(
                    "relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold ml-1 transition-colors",
                    isActive ? "bg-black/10 text-black" : "bg-white/5 text-white/50 group-hover:bg-[#D4AF37]/10 group-hover:text-[#FFD27A]"
                  )}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            PROPERTY CARDS GRID
            ──────────────────────────────────────────────────────── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.5, ease: luxuryEasing }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {filtered.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 rounded-3xl mx-auto max-w-2xl mt-8 border border-white/10 border-dashed bg-white/[0.02] backdrop-blur-md"
          >
            <Trees className="w-12 h-12 text-[#FFD27A]/30 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-white mb-2">No retreats available</h3>
            <p className="text-white/50">
              We are currently curating more exquisite properties in this category. Please explore our other collections.
            </p>
          </motion.div>
        )}

        {/* ────────────────────────────────────────────────────────
            BOTTOM CTA (EXPERT ASSISTANCE)
            ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: luxuryEasing }}
          className="mt-24 sm:mt-32 max-w-4xl mx-auto"
        >
          <div className="relative rounded-[2rem] p-[1px] overflow-hidden group">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/60 to-[#D4AF37]/20 opacity-50 group-hover:opacity-100 animate-gradient transition-opacity duration-700" />
            
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[31px] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left overflow-hidden border border-white/[0.03]">
              
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 glow-gold-strong rounded-full blur-[60px] group-hover:opacity-100 opacity-60 transition-opacity duration-700" />
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <Headset className="w-5 h-5 text-[#FFD27A]" />
                  <span className="text-xs font-bold tracking-widest text-[#FFD27A] uppercase">Concierge Service</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Can&apos;t decide where to stay?
                </h3>
                <p className="text-white/50 text-sm sm:text-base max-w-md">
                  Let our travel experts curate the perfect personalized resort experience for your Gir safari.
                </p>
              </div>

              <div className="relative z-10 w-full sm:w-auto shrink-0">
                <Link href="/properties">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-full gradient-gold text-black font-bold flex items-center justify-center gap-2 shadow-gold hover:shadow-gold-lg hover:scale-[1.02] active:scale-95 transition-all duration-300">
                    Explore All Resorts
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
