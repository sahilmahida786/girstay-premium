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
    <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND EFFECTS
          ──────────────────────────────────────────────────────── */}
      {/* Subtle top gradient blending into the section above */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10" />
      
      {/* Soft animated ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-float opacity-50 dark:opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-float opacity-50 dark:opacity-20" style={{ animationDelay: '2s' }} />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 shadow-luxury">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Discover Gir
              </span>
            </div>
          </motion.div>

          {/* Large Editorial Heading */}
          <motion.h2 
            variants={fadeUpStagger}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
          >
            Luxury Stays for <br className="hidden sm:block" />
            <span className="gradient-gold-text">Every Traveler</span>
          </motion.h2>

          {/* Elegant Description */}
          <motion.p 
            variants={fadeUpStagger}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
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
                      : "bg-card/50 text-foreground/80 border-border/40 hover:bg-card hover:border-primary/30 hover:text-foreground shadow-sm"
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-primary/70 group-hover:text-primary")} />
                    {cat.label}
                  </span>
                  
                  {/* Property Count */}
                  <span className={cn(
                    "relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold ml-1 transition-colors",
                    isActive ? "bg-black/10 text-black" : "bg-foreground/5 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
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
            className="text-center py-20 glass-card rounded-3xl mx-auto max-w-2xl mt-8 border-dashed"
          >
            <Trees className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">No retreats available</h3>
            <p className="text-muted-foreground">
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 opacity-50 group-hover:opacity-100 animate-gradient transition-opacity duration-700" />
            
            <div className="relative glass-card bg-card/60 rounded-[31px] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left overflow-hidden">
              
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <Headset className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Concierge Service</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
                  Can&apos;t decide where to stay?
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md">
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
