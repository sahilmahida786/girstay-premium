"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/data/mockReviews";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance with pause support (6 seconds)
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const t = testimonials[current];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]">
      {/* ────────────────────────────────────────────────────────
          PHOTOGRAPHIC LUXURY BACKGROUND
          ──────────────────────────────────────────────────────── */}
      
      {/* Base Image with Ken Burns Pan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute inset-[-5%] w-[110%] h-[110%] animate-cinematic-pan">
          <Image 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2500&auto=format&fit=crop"
            alt="Luxury Resort Lounge Sunrise"
            fill
            className="object-cover object-[70%_center] sm:object-center opacity-[0.85]"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Layer: Glass Shadow Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-[#080808]/85 backdrop-blur-[2px] pointer-events-none z-[2]" />

      {/* Layer: Warm Light Bloom (Sunrise feeling) */}
      <div className="absolute top-0 right-0 w-[150vw] h-[150vw] sm:w-[1000px] sm:h-[1000px] translate-x-1/4 -translate-y-1/4 pointer-events-none z-[3]"
           style={{ background: "radial-gradient(circle at center, rgba(255, 180, 100, 0.15) 0%, transparent 70%)" }} />

      {/* LAYER: Animated Light Dust (Bokeh) */}
      <div className="absolute inset-0 pointer-events-none z-[4]">
        {[...Array(15)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-[#FFD27A] blur-[2px] animate-dust-float"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 31) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              opacity: ((i * 7) % 30) / 100 + 0.05,
              animationDelay: `-${(i * 3) % 15}s`,
              animationDuration: `${(i % 10) + 20}s`,
            }}
          />
        ))}
      </div>

      {/* Layer: Vignette (Heavy edges) */}
      <div className="absolute inset-0 vignette-heavy z-[5]" />

      {/* Section transition dividers for seamless scrolling */}
      <div className="absolute top-0 inset-x-0 h-40 section-fade-top z-[6]" />
      <div className="absolute bottom-0 inset-x-0 h-40 section-fade-bottom z-[6]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
            <Star className="w-3.5 h-3.5 text-[#FFD27A] fill-[#FFD27A]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#FFD27A] uppercase">
              Guest Experiences
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5]">Guests</span> Say
          </h2>
        </motion.div>

        {/* ── TESTIMONIAL CARD ── */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="relative rounded-[32px] p-[1px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(255,255,255,0.02) 50%, rgba(212,175,55,0.1) 100%)",
            }}
          >
            <div
              className="relative rounded-[31px] bg-[#0a0a0a]/80 backdrop-blur-3xl px-6 py-12 sm:p-16 lg:p-20 min-h-[400px] flex flex-col justify-center touch-pan-y"
              onPointerEnter={() => setIsPaused(true)}
              onPointerLeave={() => setIsPaused(false)}
              style={{ cursor: "grab" }}
            >
              
              {/* Floating Quote Icon */}
              <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-white/[0.03] rotate-180" />
              </div>

              {/* Internal ambient glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 glow-gold rounded-full blur-[60px] opacity-40" />

              {/* Slider Content */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="relative z-10 flex flex-col items-center text-center"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -2000 || offset.x < -50) navigate(1);
                    else if (swipe > 2000 || offset.x > 50) navigate(-1);
                  }}
                >
                  
                  {/* Animated Stars */}
                  <div className="flex items-center gap-1.5 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                      >
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD27A] fill-[#FFD27A] drop-shadow-[0_0_10px_rgba(255,210,122,0.4)]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed mb-10 text-white/90">
                    &ldquo;{t.comment}&rdquo;
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 text-left">
                    {/* Minimal Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F8E7B5] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      <span className="text-black font-bold text-lg sm:text-xl font-heading">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-heading font-bold text-lg text-white">
                          {t.name}
                        </p>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-sm text-white/50 font-medium">
                        {t.location}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#FFD27A] mt-1 font-bold tracking-wide uppercase">
                        Stayed at {t.propertyName}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>

        {/* ── PAGINATION & NAVIGATION ── */}
        <div className="flex flex-col items-center justify-center mt-12 gap-6">
          
          {/* Premium Pagination Lines */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="group relative flex items-center justify-center w-8 h-8 focus:outline-none"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span
                  className={cn(
                    "h-1 rounded-full transition-all duration-500 ease-out",
                    i === current
                      ? "w-8 bg-[#FFD27A] shadow-[0_0_10px_rgba(255,210,122,0.5)]"
                      : "w-2 bg-white/20 group-hover:bg-white/40 group-hover:w-4"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.05] active:scale-90 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.05] active:scale-90 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
}
