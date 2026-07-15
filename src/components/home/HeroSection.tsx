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
  ChevronDown,
} from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { luxuryEasing } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────
   ANIMATION VARIANTS — GPU-only (opacity, y, scale, filter)
   ───────────────────────────────────────────────────────── */
const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const fadeBlurUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: luxuryEasing },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: luxuryEasing },
  },
};

/* ─────────────────────────────────────────────────────────
   QUICK ACTION CHIPS — categories visible above the fold
   ───────────────────────────────────────────────────────── */
const CHIPS = [
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
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = 28 + Math.floor(Math.random() * 15);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBrowsing(base);
    const id = setInterval(() => {
      setBrowsing((p) =>
        Math.max(20, Math.min(55, p + (Math.random() > 0.5 ? 1 : -1)))
      );
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════════════════════
          LAYER 0 — CINEMATIC FULL-SCREEN IMAGE
          The image IS the hero. It must be clearly visible.
          ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Ken Burns slow zoom — pure CSS, zero JS */}
        <div className="absolute inset-0 animate-ken-burns will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury resort infinity pool surrounded by lush tropical forest at golden hour in Sasan Gir"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* ── Overlay Layers ─────────────────────────────────
            IMPORTANT: Keep overlays light so the image shines.
            Bottom-heavy gradient for text readability only.
            ──────────────────────────────────────────────────── */}

        {/* Layer 2: Bottom-heavy darkness for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 60%, rgba(6,6,6,0.88) 85%, rgba(6,6,6,0.97) 100%)",
          }}
        />

        {/* Layer 3: Warm golden radial glow — bottom center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, rgba(255,210,122,0.06) 40%, transparent 70%)",
          }}
        />

        {/* Layer 4: Very subtle vignette — top corners */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />

        {/* Layer 5: Noise texture — ultra-subtle film grain */}
        <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none" />
      </div>

      {/* ══════════════════════════════════════════════════════
          LAYER 1 — CONTENT
          Pinned to bottom, flowing upwards. Image stays visible.
          ══════════════════════════════════════════════════════ */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-5xl mx-auto px-5 sm:px-8 pb-6 sm:pb-10 pt-28 gap-5 sm:gap-7"
      >
        {/* ── Badge ──────────────────────────────────────── */}
        <motion.div variants={fadeBlurUp} className="flex">
          <div className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-full bg-black/30 border border-white/15 backdrop-blur-lg shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <Trophy className="w-3.5 h-3.5 text-[#FFD27A]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#FFD27A] uppercase">
              #1 Luxury Resort Platform
            </span>
          </div>
        </motion.div>

        {/* ── Headline ──────────────────────────────────── */}
        <motion.div variants={fadeBlurUp} className="flex flex-col gap-0">
          <h1 className="font-heading text-[2.8rem] sm:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-[-0.025em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Sasan Gir&apos;s
          </h1>
          <h1
            className="font-heading text-[2.8rem] sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-[-0.025em] bg-clip-text text-transparent drop-shadow-none"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #D4AF37 0%, #F8E7B5 40%, #FFD27A 60%, #D4AF37 100%)",
            }}
          >
            Finest Escapes
          </h1>
        </motion.div>

        {/* ── Description ───────────────────────────────── */}
        <motion.p
          variants={fadeBlurUp}
          className="text-white/70 text-[15px] sm:text-lg max-w-md leading-[1.7] tracking-[0.005em] drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
        >
          Handpicked luxury resorts, heritage farm stays &amp; jungle lodges
          in the heart of Asiatic Lion country.
        </motion.p>

        {/* ── Trust Metrics ─────────────────────────────── */}
        <motion.div
          variants={fadeBlurUp}
          className="flex items-center flex-wrap gap-x-5 gap-y-2.5"
        >
          {/* Live visitors */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[11, 15, 28].map((id, i) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/80?img=${id}`}
                  alt="Guest"
                  width={24}
                  height={24}
                  className="rounded-full border-[1.5px] border-black/40"
                  style={{ zIndex: 3 - i }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-[6px] w-[6px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-400" />
              </span>
              <span className="text-[13px] text-white/80 font-medium drop-shadow-sm">
                <span className="text-white font-semibold">{browsing}</span>{" "}
                browsing
              </span>
            </div>
          </div>

          <span className="w-px h-3.5 bg-white/20 hidden sm:block" />

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#FFD27A] fill-[#FFD27A]" />
            <span className="text-[13px] font-bold text-white drop-shadow-sm">
              4.9<span className="text-white/40 font-normal">/5</span>
            </span>
          </div>

          <span className="w-px h-3.5 bg-white/20 hidden sm:block" />

          {/* Verified */}
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD27A]" />
            <span className="text-[13px] text-white/80 font-medium drop-shadow-sm">
              Verified
            </span>
          </div>
        </motion.div>

        {/* ── Floating Search Card ──────────────────────── */}
        <motion.div variants={scaleIn} className="w-full">
          <SearchWidget />
        </motion.div>

        {/* ── Quick Action Chips ─────────────────────────── */}
        <motion.div variants={fadeBlurUp} className="w-full">
          <div
            ref={chipRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1"
          >
            {CHIPS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur-md text-[12px] sm:text-[13px] text-white/85 font-medium whitespace-nowrap active:scale-[0.96] transition-all duration-200 hover:bg-white/[0.14] hover:border-white/[0.18] hover:text-white"
              >
                <Icon className="w-3.5 h-3.5 text-[#FFD27A]/80" />
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Seasonal Offer ────────────────────────────── */}
        <motion.div
          variants={fadeBlurUp}
          className="group cursor-pointer active:scale-[0.98] transition-transform duration-200"
        >
          <div className="relative rounded-2xl p-[1px] overflow-hidden" style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(212,175,55,0.15) 100%)",
          }}>
            <div className="rounded-[15px] bg-[#0a0906]/90 backdrop-blur-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/[0.05] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-[10px] font-bold tracking-[0.14em] text-orange-400 uppercase">
                    Seasonal Offer
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                  Up to 25% Off This Season
                </h3>
                <p className="text-[11px] sm:text-xs text-white/40 mt-0.5">
                  Book early &amp; secure the finest luxury suites.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-1.5 text-sm font-bold text-[#FFD27A] group-hover:text-[#F8E7B5] transition-colors">
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Scroll Indicator ──────────────────────────── */}
        <motion.div variants={fadeBlurUp} className="flex justify-center pt-1 pb-2">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 opacity-40"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/60 font-medium">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4 text-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
