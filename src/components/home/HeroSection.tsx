"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import {
  Star,
  Trophy,
  ArrowRight,
  Flame,
  ShieldCheck,
  Sparkles,
  Trees,
  Waves,
  PawPrint,
  Zap,
  Dog,
} from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
   ANIMATION VARIANTS — GPU-only transforms (no layout shifts)
   ───────────────────────────────────────────────────────── */
const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: luxuryEasing },
  },
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: luxuryEasing },
  },
};

/* ─────────────────────────────────────────────────────────
   QUICK ACTION CHIPS
   ───────────────────────────────────────────────────────── */
const QUICK_ACTIONS = [
  { label: "Luxury Resorts", icon: Sparkles },
  { label: "Safari", icon: Trees },
  { label: "Pool Villas", icon: Waves },
  { label: "Farm Stays", icon: PawPrint },
  { label: "Instant Book", icon: Zap },
  { label: "Pet Friendly", icon: Dog },
];

/* ═══════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════ */
export function HeroSection() {
  const [browsing, setBrowsing] = useState(0);
  const chipScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = 28 + Math.floor(Math.random() * 12);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBrowsing(base);
    const id = setInterval(() => {
      setBrowsing((p) =>
        Math.max(22, Math.min(48, p + (Math.random() > 0.5 ? 1 : -1)))
      );
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#060606]"
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════════════════════
          LAYER 0 — CINEMATIC BACKGROUND IMAGE
          ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image with Ken Burns */}
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="https://images.unsplash.com/photo-1542314831-c6a4d14b407a?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury resort surrounded by nature in Sasan Gir"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Multi-layer cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/70 via-[#060606]/30 to-[#060606]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/85 to-transparent" />

        {/* Warm gold ambient glow — bottom center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════════════════════
          LAYER 1 — CONTENT
          ══════════════════════════════════════════════════════ */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-5xl mx-auto px-5 sm:px-8 pb-8 pt-28 gap-7 sm:gap-10"
      >
        {/* ── Badge ───────────────────────────────────────── */}
        <motion.div variants={fadeSlideUp} className="flex">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.08)]">
            <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#D4AF37] uppercase">
              #1 Luxury Resort Platform
            </span>
          </div>
        </motion.div>

        {/* ── Headline ───────────────────────────────────── */}
        <motion.div variants={fadeSlideUp} className="flex flex-col gap-1">
          <h1 className="font-heading text-[2.6rem] sm:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            Sasan Gir&apos;s
          </h1>
          <h1 className="font-heading text-[2.6rem] sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.02em] bg-gradient-to-r from-[#D4AF37] via-[#F5E6C5] to-[#D4AF37] bg-clip-text text-transparent">
            Finest Escapes
          </h1>
        </motion.div>

        {/* ── Description ────────────────────────────────── */}
        <motion.p
          variants={fadeSlideUp}
          className="text-white/55 text-[15px] sm:text-lg max-w-md font-normal leading-[1.65] tracking-[0.01em]"
        >
          Handpicked luxury resorts, heritage farm stays &amp; jungle lodges in
          the heart of Asiatic Lion country.
        </motion.p>

        {/* ── Trust Metrics Row ──────────────────────────── */}
        <motion.div
          variants={fadeSlideUp}
          className="flex items-center flex-wrap gap-x-5 gap-y-3"
        >
          {/* Live visitors */}
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              {[11, 15, 28].map((id, i) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/80?img=${id}`}
                  alt="Traveler"
                  width={26}
                  height={26}
                  className="rounded-full border-[1.5px] border-[#111]"
                  style={{ zIndex: 3 - i }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[13px] text-white/70 font-medium">
                <span className="text-white font-semibold">{browsing}</span>{" "}
                browsing now
              </span>
            </div>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-white/15" />

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-[13px] font-bold text-white">
              4.9
              <span className="text-white/40 font-normal ml-0.5">/ 5</span>
            </span>
          </div>

          <span className="hidden sm:block w-px h-4 bg-white/15" />

          {/* Verified */}
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[13px] text-white/70 font-medium">
              Verified Platform
            </span>
          </div>
        </motion.div>

        {/* ── Search Widget ──────────────────────────────── */}
        <motion.div variants={scaleReveal} className="w-full">
          <SearchWidget />
        </motion.div>

        {/* ── Quick Action Chips ─────────────────────────── */}
        <motion.div variants={fadeSlideUp} className="w-full -mx-5 px-5">
          <div
            ref={chipScrollRef}
            className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1"
          >
            {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[13px] text-white/80 font-medium tracking-wide whitespace-nowrap active:scale-95 transition-all duration-200 hover:bg-white/[0.1] hover:border-white/[0.15] hover:text-white"
              >
                <Icon className="w-3.5 h-3.5 text-[#D4AF37]/80" />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Seasonal Offer Card ────────────────────────── */}
        <motion.div
          variants={fadeSlideUp}
          className="relative group cursor-pointer active:scale-[0.98] transition-transform duration-200"
        >
          <div className="relative bg-[#110f08] border border-[#D4AF37]/20 rounded-2xl sm:rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 mb-2">
                <Flame className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-orange-500 uppercase">
                  Seasonal Offer
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-0.5 leading-snug">
                Up to 25% Off This Season
              </h3>
              <p className="text-xs text-white/45 font-medium">
                Book early &amp; secure the finest luxury suites.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-1.5 text-sm font-bold text-[#D4AF37] group-hover:text-[#F5E6C5] transition-colors">
              Explore Offers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* ── Scroll Indicator ───────────────────────────── */}
        <motion.div
          variants={fadeSlideUp}
          className="flex justify-center pb-2"
        >
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[1px] h-6 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
