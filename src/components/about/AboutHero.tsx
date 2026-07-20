"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { ShieldCheck, Star, Users, Award, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const trustPills = [
  { icon: ShieldCheck, label: "Verified Luxury Properties" },
  { icon: Users, label: "10,000+ Happy Guests" },
  { icon: Star, label: "4.9 Guest Rating" },
  { icon: Award, label: "Premium Hospitality" },
  { icon: Phone, label: "24×7 Concierge" },
];

export function AboutHero() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Elegant fade into Story section as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroZoom = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const lightDim = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  // Cinematic Parallax Engine (Max ±20px horizontal, ±12px vertical)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 40, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const xOffset = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const yOffset = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    // Only enable mouse parallax on devices with a cursor
    if (!window.matchMedia("(hover: hover)").matches) return;

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

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  // Staggered Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[85vh] w-full flex flex-col justify-end overflow-hidden pb-12 pt-32 lg:pb-20 lg:pt-40 bg-black"
      aria-label="About GirStay Premium"
    >
      
      {/* ────────────────────────────────────────────────────────
          CINEMATIC BACKGROUND LAYERS (Only these move with mouse parallax)
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none origin-center"
        style={{ opacity: heroOpacity, scale: heroZoom }}
      >
        <motion.div 
          className="w-[110%] h-[110%] -left-[5%] -top-[5%] absolute will-change-transform [transform:translateZ(0)]"
          style={prefersReducedMotion ? {} : { x: xOffset, y: yOffset }}
        >
          {/* Layer 1: Ultra high-quality lion image */}
          <Image
            src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
            alt="Majestic Asiatic Lion in Sasan Gir forest"
            fill
            priority
            quality={95}
            className="object-cover object-[50%_30%] opacity-90" 
            sizes="100vw"
          />

          {/* Layer 2: Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

          {/* Layer 3: Luxury gold ambient light (Fades slightly on scroll) */}
          <motion.div 
            style={{ opacity: lightDim }}
            className="absolute top-0 inset-x-0 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_70%)]" 
          />

          {/* Layer 4: Forest green ambient glow */}
          <div className="absolute bottom-0 inset-x-0 h-[60vh] bg-gradient-to-t from-[#0A120A]/80 to-transparent" />

          {/* Refined Particles (Moving with parallax) */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                className="absolute rounded-full bg-[#FFD27A] blur-[1px] will-change-transform [transform:translateZ(0)]"
                style={{
                  top: `${(i * 37) % 100}%`,
                  left: `${(i * 41) % 100}%`,
                  width: `${(i % 2) + 2}px`,
                  height: `${(i % 2) + 2}px`,
                  opacity: 0.15
                }}
                animate={prefersReducedMotion ? {} : { 
                  y: [0, -30, 0], 
                  x: [0, 15, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 20 + i * 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 2
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Layer 5: Very subtle vignette (Static, does not move with parallax) */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
        
        {/* Layer 6: Noise texture below 2% (Static) */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.015%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />

        {/* Seamless Blend into Story Section (No abrupt black screen) */}
        <div className="absolute bottom-0 inset-x-0 h-[30vh] bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      {/* ────────────────────────────────────────────────────────
          MAIN CONTENT (Static, never moves with parallax)
          ──────────────────────────────────────────────────────── */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-start lg:items-center text-left lg:text-center will-change-transform">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col lg:items-center"
        >
          {/* Staggered Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] font-medium text-white mb-6 lg:mb-8 tracking-tight max-w-[900px] text-balance drop-shadow-2xl flex flex-col"
          >
            <span className="block text-white/95">Experience the True</span>
            <span className="block mt-1">
              Essence of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] relative inline-block animate-shimmer-slow pb-2">Sasan Gir</span>
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-white/80 text-[clamp(1rem,3vw,1.15rem)] leading-[1.6] font-light max-w-[700px] mb-8 lg:mb-12 text-balance drop-shadow-lg"
          >
            Every journey into the wilderness begins with trust, comfort, and unforgettable hospitality. We curate exceptional stays that allow you to experience the untamed beauty of the forest without ever compromising on luxury.
          </motion.p>

          {/* Desktop & Mobile CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-start lg:justify-center gap-4 w-full sm:w-auto mb-10 lg:mb-14"
          >
            <button 
              className="w-full sm:w-auto h-[56px] min-w-[200px] rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8E7B5] to-[#D4AF37] bg-[length:200%_auto] hover:bg-[100%_auto] text-black font-semibold uppercase tracking-widest text-xs transition-all duration-500 shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              Book Your Stay
            </button>
            
            <button 
              className="w-full sm:w-auto h-[56px] min-w-[200px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium uppercase tracking-widest text-xs transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/40 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              Explore Our Story
            </button>
          </motion.div>

          {/* Mobile Swipeable Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 py-2"
            role="region"
            aria-label="Trust Badges"
          >
            <div className="flex lg:justify-center items-center gap-3 lg:gap-4 w-max lg:w-auto pr-8 lg:pr-0">
              {trustPills.map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl lg:rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg cursor-default transition-all duration-500 hover:bg-white/10 hover:border-[#D4AF37]/30 flex-shrink-0 snap-center"
                >
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/20" aria-hidden="true">
                    <pill.icon className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-medium text-white/90 uppercase tracking-wider whitespace-nowrap">{pill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────
          LUXURY SCROLL INDICATOR
          ──────────────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.0 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 hidden lg:flex"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1 backdrop-blur-sm bg-white/5 shadow-lg">
          <motion.div 
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#D4AF37]"
          />
        </div>
      </motion.div>

    </section>
  );
}
