"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, ArrowRight, Award, Gem, Phone } from "lucide-react";
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
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Elegant fade into Story section
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Subtle Parallax (Max 8px movement for true luxury feel)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 40 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const xOffset = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const yOffset = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const updateMousePosition = () => {
      mouseX.set(targetX);
      mouseY.set(targetY);
      rafId = requestAnimationFrame(updateMousePosition);
    };

    if (window.matchMedia("(hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      rafId = requestAnimationFrame(updateMousePosition);
    }
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  // Staggered Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[100svh] w-full flex flex-col justify-start lg:justify-between overflow-hidden bg-black pb-safe-offset lg:pb-0"
      aria-label="About GirStay Premium"
    >
      
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ opacity: heroOpacity }}
      >
        <motion.div 
          className="w-[105%] h-[105%] -left-[2.5%] -top-[2.5%] absolute will-change-transform [transform:translateZ(0)]"
          style={prefersReducedMotion ? {} : { x: xOffset, y: yOffset }}
        >
          {/* Subtle breathing Ken Burns (1.00 -> 1.04) */}
          <motion.div
            className="w-full h-full will-change-transform [transform:translateZ(0)] origin-center"
            animate={prefersReducedMotion ? { scale: 1 } : { scale: [1.00, 1.04, 1.00] }}
            transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
              alt="Majestic Asiatic Lion in Sasan Gir forest"
              fill
              priority
              quality={95}
              className="object-cover object-[50%_20%] lg:object-[50%_35%] opacity-90" 
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Natural Vignette & Overlays */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
        
        {/* Soft Warm Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.1)_0%,transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-t from-[#0A120A] via-[#0A120A]/90 to-transparent" />

        {/* Refined Particles (Few, elegant, sparse) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] blur-[1px] will-change-transform [transform:translateZ(0)]"
              style={{
                top: `${(i * 41) % 100}%`,
                left: `${(i * 53) % 100}%`,
                width: `${(i % 2) + 2}px`,
                height: `${(i % 2) + 2}px`,
                opacity: 0.2
              }}
              animate={prefersReducedMotion ? {} : { 
                y: [0, -40, 0], 
                x: [0, 20, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ 
                duration: 30 + i * 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 3
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          FLOATING GLASS CARDS (Desktop Only)
          ──────────────────────────────────────────────────────── */}
      <div className="hidden xl:block absolute inset-0 z-20 pointer-events-none" aria-hidden="true">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + (i * 0.15), duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${card.position}`}
          >
            <motion.div 
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
              className="flex items-center gap-3 bg-[#0A120A]/40 backdrop-blur-2xl px-5 py-3.5 rounded-2xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] pointer-events-auto cursor-default hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-700 group will-change-transform"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors duration-500">
                <card.icon className="w-4 h-4 text-[#D4AF37] group-hover:rotate-[15deg] transition-transform duration-700 ease-out" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-semibold text-white/80 tracking-widest uppercase group-hover:text-white transition-colors duration-500">{card.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="flex-grow flex-shrink-0 min-h-[15vh] lg:min-h-[25vh]" aria-hidden="true" />

      {/* ────────────────────────────────────────────────────────
          MAIN CONTENT
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        style={{ y: heroY }}
        className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center pb-20 lg:pb-32 flex-shrink-0 pt-20 lg:pt-0 will-change-transform"
      >
        
        {/* Mobile Swipeable Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-4 lg:order-1 w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 lg:mb-10 mt-4 lg:mt-0 py-2"
          role="region"
          aria-label="Trust Badges"
        >
          <div className="flex lg:justify-center items-center gap-3 lg:gap-4 w-max lg:w-auto pr-8 lg:pr-0">
            {trustPills.map((pill, i) => (
              <motion.div
                key={i}
                whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="flex items-center gap-4 lg:gap-3 px-6 lg:px-5 py-4 lg:py-2.5 rounded-2xl lg:rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] cursor-default transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/40 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] group relative overflow-hidden w-[80vw] sm:w-[320px] lg:w-auto flex-shrink-0 snap-center justify-start lg:justify-center will-change-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" aria-hidden="true" />
                
                <div className="w-10 h-10 lg:w-auto lg:h-auto rounded-full bg-[#D4AF37]/5 lg:bg-transparent flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20 lg:border-none group-hover:bg-[#D4AF37]/10 transition-colors duration-500" aria-hidden="true">
                  <pill.icon className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] lg:text-[11px] font-semibold text-white/90 uppercase tracking-widest whitespace-nowrap group-hover:text-white transition-colors duration-500">{pill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Staggered Heading */}
        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 font-serif text-[clamp(2.75rem,11vw,5.5rem)] leading-[1.05] sm:text-5xl lg:text-7xl font-medium text-white mb-6 lg:mb-8 tracking-tight max-w-[900px] text-balance drop-shadow-2xl will-change-transform flex flex-col"
        >
          <motion.span variants={itemVariants} className="block text-white/95">Experience the</motion.span>
          <motion.span variants={itemVariants} className="block text-white/95">True Essence of</motion.span>
          <motion.span variants={itemVariants} className="block mt-1 lg:mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] relative inline-block whitespace-nowrap animate-shimmer-slow pb-2">
              Sasan Gir
            </span>
          </motion.span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-3 text-white/80 text-[16px] leading-[26px] sm:text-lg lg:text-[19px] lg:leading-[2] font-light max-w-[320px] sm:max-w-[420px] lg:max-w-[720px] mb-8 lg:mb-14 text-balance drop-shadow-lg will-change-transform"
        >
          Every journey into Gir begins with trust, comfort, and unforgettable hospitality. We carefully curate exceptional stays that allow you to experience the untamed beauty of the forest without compromising luxury.
        </motion.p>

        {/* Desktop CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex order-4 flex-row items-center gap-6 w-auto will-change-transform"
        >
          <button 
            className="relative h-[56px] px-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[100%_auto] text-black font-semibold uppercase tracking-[0.15em] text-[12px] transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Discover our story about Sasan Gir"
          >
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.6)_50%,transparent_80%)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" aria-hidden="true" />
            Discover Our Story
          </button>
          
          <button 
            className="relative h-[56px] px-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium uppercase tracking-[0.15em] text-[12px] transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            aria-label="Watch the GirStay Premium brand film"
          >
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_30px_rgba(212,175,55,0.15)] pointer-events-none" aria-hidden="true" />
            Watch Brand Film
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-500 border border-white/10 group-hover:border-[#D4AF37]" aria-hidden="true">
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors duration-500 group-hover:translate-x-0.5 ease-out" strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>

        {/* Mobile Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden order-3 w-full mb-2 will-change-transform"
        >
          <button 
            className="relative w-full h-[56px] rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] text-black font-semibold uppercase tracking-[0.15em] text-[13px] transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.2)] active:scale-[0.98] flex items-center justify-center group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Discover our story about Sasan Gir"
          >
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.6)_50%,transparent_80%)] -translate-x-[150%] group-active:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none" aria-hidden="true" />
            Discover Our Story
          </button>
        </motion.div>

        {/* Mobile Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden order-5 w-full mt-4 will-change-transform"
        >
          <button 
            className="relative w-full h-[56px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium uppercase tracking-[0.15em] text-[13px] transition-all duration-500 active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
            aria-label="Watch the GirStay Premium brand film"
          >
            Watch Brand Film
            <ArrowRight className="w-4 h-4 text-white/70 group-active:text-white transition-colors group-active:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </motion.div>

      </motion.div>

      {/* ────────────────────────────────────────────────────────
          LUXURY SCROLL INDICATOR
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.6 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 will-change-transform"
        aria-hidden="true"
      >
        <div className="w-[26px] h-[42px] rounded-full border border-white/20 flex justify-center p-1.5 backdrop-blur-sm bg-white/5 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
          <motion.div 
            animate={prefersReducedMotion ? {} : { y: [0, 16, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,1)]"
          />
        </div>
      </motion.div>

    </section>
  );
}
