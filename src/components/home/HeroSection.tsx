"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import {
  Trophy,
  Sparkles,
  Trees,
  Waves,
  PawPrint,
  Zap,
  Dog,
} from "lucide-react";
import { SearchWidget } from "./SearchWidget";
import { HeroBottomPanel } from "./hero/HeroBottomPanel";
import { ScrollIndicator } from "./hero/ScrollIndicator";
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
  const chipRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#0B0B0B]"
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════════════════════
          LAYER 0 — CINEMATIC FULL-SCREEN IMAGE
          ══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Ken Burns slow zoom — pure CSS */}
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

        {/* ── Overlay Layers ───────────────────────────────── */}
        
        {/* Layer 2: Bottom-heavy darkness for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 60%, rgba(6,6,6,0.85) 80%, rgba(6,6,6,1) 100%)",
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

        {/* Layer 4: Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none mix-blend-overlay" />
      </div>

      {/* ══════════════════════════════════════════════════════
          LAYER 1 — CONTENT
          ══════════════════════════════════════════════════════ */}
      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-5xl mx-auto px-5 sm:px-8 pb-8 pt-28 gap-6 sm:gap-7"
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

        {/* ── Floating Search Card ──────────────────────── */}
        <motion.div variants={scaleIn} className="w-full relative z-20">
          <SearchWidget />
        </motion.div>

        {/* ── Quick Action Chips ─────────────────────────── */}
        <motion.div variants={fadeBlurUp} className="w-full relative z-20">
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

        {/* ── BOTTOM EXPERIENCE (Panel & Scroll) ─ */}
        <div className="flex flex-col gap-6 mt-4 relative z-20">
          <motion.div variants={fadeBlurUp} className="w-full">
            <HeroBottomPanel />
          </motion.div>

          <motion.div variants={fadeBlurUp} className="flex justify-center">
            <ScrollIndicator />
          </motion.div>
        </div>
        
      </motion.div>

      {/* ══════════════════════════════════════════════════════
          LAYER 2 — CINEMATIC BOTTOM TRANSITION
          Blends the hero seamlessly into the next dark section.
          ══════════════════════════════════════════════════════ */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
