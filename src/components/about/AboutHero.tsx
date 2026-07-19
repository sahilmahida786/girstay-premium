"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, Play, Award, Gem, Mouse, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const trustPills = [
  { icon: ShieldCheck, label: "Verified Luxury Properties" },
  { icon: Users, label: "10,000+ Happy Guests" },
  { icon: Star, label: "4.9 Guest Rating" },
  { icon: Award, label: "Premium Hospitality" },
  { icon: Phone, label: "24×7 Concierge" },
];

const floatingCards = [
  { icon: ShieldCheck, label: "Verified Partner", position: "top-[15%] left-[3%]", delay: 0 },
  { icon: Award, label: "Trusted Since 2019", position: "top-[30%] right-[3%]", delay: 2 },
  { icon: Gem, label: "Luxury Collection", position: "bottom-[20%] left-[3%]", delay: 4 },
  { icon: Star, label: "Curated Experiences", position: "bottom-[25%] right-[3%]", delay: 6 },
];

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Scroll Experience: Fade out and move up slightly to blend smoothly
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Mouse Parallax Logic (Very Subtle)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 40 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Parallax constraints (-8px to 8px movement for extreme subtlety)
  const xOffset = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const yOffset = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] w-full flex flex-col justify-start lg:justify-between overflow-hidden bg-black pb-safe-offset lg:pb-0"
    >
      
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ opacity: heroOpacity }}
      >
        <motion.div 
          className="w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] absolute will-change-transform"
          style={{ x: xOffset, y: yOffset }}
        >
          {/* Slow Ken Burns zoom (1.02 -> 1.05 over 35 seconds) */}
          <motion.div
            className="w-full h-full will-change-transform"
            animate={{ scale: [1.02, 1.05, 1.02] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
              alt="Cinematic Lion close-up in Sasan Gir"
              fill
              priority
              className="object-cover object-[50%_35%] opacity-90" 
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Soft dark luxury overlay (55-65%) */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Forest green ambient lighting (soft tint) */}
        <div className="absolute inset-0 bg-[rgba(14,24,14,0.15)] mix-blend-multiply" />

        {/* Top Fade */}
        <div className="absolute top-0 inset-x-0 h-[30vh] bg-gradient-to-b from-black/80 to-transparent" />
        
        {/* Bottom Dark forest fade (smooth blend to next section) */}
        <div className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-t from-[#0A120A] via-[#0A120A]/80 to-transparent" />
        
        {/* Center: Warm golden radial glow behind headline */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        </div>
        
        {/* Warm golden volumetric light rays from upper-right */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
        
        {/* Corners: Soft vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]" />

        {/* Floating dust particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] opacity-30 will-change-transform"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 61) % 100}%`,
                width: `${(i % 2) + 2}px`,
                height: `${(i % 2) + 2}px`,
              }}
              animate={{ 
                y: [0, -30, 0], 
                x: [0, 15, 0],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{ 
                duration: 25 + i * 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
          {/* Tiny fireflies */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`firefly-${i}`}
              className="absolute rounded-full bg-[#A8FFAA] blur-[1px] will-change-transform"
              style={{
                bottom: `${10 + (i * 15)}%`,
                left: `${20 + (i * 20)}%`,
                width: '3px',
                height: '3px',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -10, 0],
                x: [0, (i % 2 === 0 ? 5 : -5), 0]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          FLOATING GLASS CARDS (Desktop Only)
          ──────────────────────────────────────────────────────── */}
      <div className="hidden xl:block absolute inset-0 z-20 pointer-events-none">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${card.position}`}
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-2xl border border-[#D4AF37]/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] pointer-events-auto cursor-default hover:bg-white/10 hover:border-[#D4AF37]/60 transition-all duration-500 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center border border-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <span className="text-xs font-semibold text-white/90 tracking-wide uppercase group-hover:text-white transition-colors">{card.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ────────────────────────────────────────────────────────
          LARGE BREATHING SPACE FOR LION EYES
          ──────────────────────────────────────────────────────── */}
      <div className="flex-grow flex-shrink-0 min-h-[25vh] lg:min-h-[30vh]" />

      {/* ────────────────────────────────────────────────────────
          MAIN CONTENT
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ y: heroY }}
        className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center pb-24 lg:pb-32 flex-shrink-0 pt-24 lg:pt-0"
      >
        
        {/* Mobile Swipeable Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} // Starts after Nav
          className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 lg:mb-8"
        >
          <div className="flex lg:justify-center items-center gap-3 w-max">
            {trustPills.map((pill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-[#D4AF37]/20 shadow-[0_4px_15px_rgba(0,0,0,0.2)] cursor-default transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] group relative overflow-hidden"
              >
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" />
                
                <pill.icon className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.5} />
                <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest whitespace-nowrap">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-7xl font-medium text-white mb-6 lg:mb-8 tracking-tight max-w-[900px] text-balance drop-shadow-2xl"
        >
          Experience the True Essence of{" "}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] relative inline-block whitespace-nowrap animate-shimmer-slow"
          >
            Sasan Gir
          </span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-[16px] sm:text-lg lg:text-[19px] font-light leading-[1.8] lg:leading-[1.9] max-w-[680px] mb-10 lg:mb-12 text-balance drop-shadow-md"
        >
          Every journey into Gir begins with trust, comfort, and unforgettable hospitality. We carefully curate exceptional stays that allow you to experience the untamed beauty of Sasan Gir without compromising luxury.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <button className="relative w-full sm:w-auto h-[54px] lg:h-[56px] px-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-medium uppercase tracking-[0.15em] text-[11px] lg:text-[12px] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group overflow-hidden">
            {/* Light sweep */}
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.5)_50%,transparent_80%)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" />
            Discover Our Story
          </button>
          
          {/* Secondary Button */}
          <button className="relative w-full sm:w-auto h-[54px] lg:h-[56px] px-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white font-medium uppercase tracking-[0.15em] text-[11px] lg:text-[12px] transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 active:scale-[0.98] flex items-center justify-center gap-3 group overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] pointer-events-none" />
            
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5 group-hover:text-[#D4AF37] group-hover:fill-[#D4AF37] transition-colors" />
            </div>
            Watch Brand Film
          </button>
        </motion.div>
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          SCROLL INDICATOR
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }} // Appears last
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <Mouse className="w-5 h-5 text-white/50" strokeWidth={1.5} />
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-1 rounded-full bg-[#D4AF37] mt-1 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        />
        <span className="text-[9px] font-semibold text-white/40 uppercase tracking-[0.3em] mt-1">Scroll to Discover</span>
      </motion.div>

    </section>
  );
}
