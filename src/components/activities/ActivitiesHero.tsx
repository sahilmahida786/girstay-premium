"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ChevronDown, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ActivitiesHero() {
  return (
    <section className="relative min-h-[90dvh] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background with Ken Burns — Next.js Image for LCP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-ken-burns" style={{ transformOrigin: "center center" }}>
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop"
            alt="Gir National Park safari landscape"
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        {/* Animated shimmer */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-emerald-900/15 via-transparent to-amber-900/15 animate-hero-shimmer"
        />
      </div>

      {/* Floating Particles — hidden on mobile for battery savings */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40"
            style={{
              left: `${10 + i * 18}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-dark rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8"
        >
          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold fill-gold" />
          <span className="text-xs sm:text-sm text-white/80 font-medium">
            A Day in the Wild — Full Experience Journey
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6"
        >
          Experience the{" "}
          <span className="gradient-gold-text">Wild Heart</span>
          <br className="hidden sm:block" /> of Gir
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2"
        >
          From sunrise tea to starlit dinners — immerse yourself in 18 hours of
          curated luxury, adventure, culture, and nature at Sasan Gir
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="#experiences">
            <Button className="w-full sm:w-auto h-13 sm:h-14 px-8 sm:px-10 text-base font-bold gradient-gold text-black shadow-gold-lg hover:shadow-gold-lg hover:scale-105 active:scale-[0.98] transition-all duration-300 gap-2">
              Book Your Experience
            </Button>
          </Link>
          <Link href="#packages">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-13 sm:h-14 px-8 sm:px-10 text-base font-medium border-white/20 text-white bg-white/5 hover:bg-white/10 active:scale-[0.98] backdrop-blur-sm gap-2"
            >
              View Resort Packages
            </Button>
          </Link>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-14 text-xs sm:text-sm text-white/50"
        >
          {[
            { value: "12+", label: "Daily Activities" },
            { value: "18hrs", label: "Full Day Experience" },
            { value: "4.9★", label: "Guest Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-xl sm:text-2xl font-bold text-white/80">
                {stat.value}
              </div>
              <div className="text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator — hidden on small mobile */}
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
          <span className="text-xs uppercase tracking-widest">
            Explore Activities
          </span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
