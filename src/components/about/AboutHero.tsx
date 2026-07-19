"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, Play, Award, Gem } from "lucide-react";

const trustPills = [
  { icon: Users, label: "10,000+ Guests" },
  { icon: ShieldCheck, label: "Verified Properties" },
  { icon: Star, label: "Premium Hospitality" },
  { icon: Award, label: "4.9 Rating" },
  { icon: Gem, label: "24×7 Concierge" },
];

const floatingCards = [
  { icon: ShieldCheck, label: "Verified Partner", position: "top-[15%] left-[3%]", delay: 0 },
  { icon: Award, label: "Trusted Since 2019", position: "top-[30%] right-[3%]", delay: 2 },
  { icon: Gem, label: "Luxury Collection", position: "bottom-[20%] left-[3%]", delay: 4 },
  { icon: Star, label: "Curated Experiences", position: "bottom-[25%] right-[3%]", delay: 6 },
];

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Fade out scroll indicator on scroll
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 50 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Parallax constraints (-10px to 10px movement)
  const xOffset = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const yOffset = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates between -0.5 and 0.5
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    // Only apply mouse tracking on non-touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] lg:h-[95vh] w-full flex flex-col justify-end lg:justify-center overflow-hidden bg-black pb-safe-offset lg:pb-0"
    >
      
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] absolute will-change-transform"
          style={{ x: xOffset, y: yOffset }}
        >
          {/* Slow Ken Burns zoom */}
          <motion.div
            className="w-full h-full will-change-transform"
            animate={{ scale: [1.02, 1.05, 1.02] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
              alt="Cinematic Lion close-up in Sasan Gir"
              fill
              priority // Critical for Hero LCP
              className="object-cover object-center opacity-[0.85]" 
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Soft dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Large radial gold glow behind heading */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)]" />

        {/* Forest green ambient lighting (top left & right) */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top_left,rgba(14,24,14,0.4)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top_right,rgba(14,24,14,0.3)_0%,transparent_50%)]" />

        {/* Floating dust particles & Fireflies (GPU Accelerated) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] animate-dust-float will-change-transform"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 61) % 100}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                animationDelay: `-${i * 2}s`,
                animationDuration: `${15 + i * 3}s`,
                transform: 'translate3d(0,0,0)',
                opacity: 0.4 + (i % 3) * 0.2
              }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={`firefly-${i}`}
              className="absolute rounded-full bg-[#A8FFAA] blur-[1px] animate-pulse-slow will-change-transform"
              style={{
                bottom: `${10 + (i * 20)}%`,
                left: `${10 + (i * 25)}%`,
                width: '3px',
                height: '3px',
                animationDelay: `${i * 1.5}s`,
                transform: 'translate3d(0,0,0)',
              }}
            />
          ))}
        </div>

        {/* Subtle moving light rays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_50%)] animate-light-ray-sweep will-change-transform" />

        {/* Transition: Bottom fog overlay, dark gradient, gold light */}
        <div className="absolute bottom-0 inset-x-0 h-[40vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.1)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* ────────────────────────────────────────────────────────
          FLOATING GLASS CARDS (Desktop Only)
          ──────────────────────────────────────────────────────── */}
      <div className="hidden xl:block absolute inset-0 z-20 pointer-events-none">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + (i * 0.2), duration: 1 }}
            className={`absolute ${card.position} animate-float`}
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#D4AF37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20">
                <card.icon className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">{card.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ────────────────────────────────────────────────────────
          MAIN CONTENT
          ──────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center mt-auto lg:mt-0 pt-24 lg:pt-32 xl:pt-40">
        
        {/* Mobile Swipeable Trust Badges */}
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
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 shadow-[0_4px_15px_rgba(0,0,0,0.2)] cursor-default transition-colors hover:bg-white/10 group"
              >
                <pill.icon className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[1px] bg-[#D4AF37]/50 hidden lg:block" />
          <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.4em]">OUR STORY</span>
          <span className="w-12 h-[1px] bg-[#D4AF37]/50 hidden lg:block" />
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-[900px] text-balance"
        >
          Experience the True Essence of <span className="gradient-gold-text bg-[length:200%_auto] animate-shimmer-slow relative inline-block whitespace-nowrap">Sasan Gir</span>
        </motion.h1>
        
        {/* Emotional Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 text-[15px] sm:text-lg lg:text-xl font-light leading-[1.8] max-w-[620px] mb-10 lg:mb-12"
        >
          A world where untamed wilderness meets unparalleled luxury. We curate exclusive, personally verified stays so you can immerse yourself entirely in the majesty of the forest.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="relative w-full sm:w-auto h-[56px] px-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 shadow-gold hover:scale-[1.02] active:scale-95 group overflow-hidden flex items-center justify-center gap-2">
            {/* Sweep animation */}
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.4)_50%,transparent_80%)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" />
            Discover Our Story
          </button>
          
          <button className="w-full sm:w-auto h-[56px] px-8 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 active:scale-95 flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D4AF37]/80 transition-colors">
              <Play className="w-3.5 h-3.5 text-white group-hover:text-[#D4AF37] fill-white group-hover:fill-[#D4AF37] transition-colors ml-0.5" />
            </div>
            Watch Brand Film
          </button>
        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────
          SCROLL INDICATOR
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.3em]">Scroll to Discover</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-[#D4AF37] rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}
