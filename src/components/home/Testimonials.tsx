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
    <section className="relative py-24 sm:py-32 overflow-hidden atmosphere-forest">
      {/* ── LUXURY BACKGROUND SYSTEM ── */}
      
      {/* Section transition from above */}
      <div className="absolute top-0 inset-x-0 h-40 section-fade-top z-[1]" />

      {/* Soft luxury image in background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="https://images.unsplash.com/photo-1542314831-c6a4d1424b61?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Resort Background"
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Heavy gradients to contain the image within the atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #0B0B0B 0%, rgba(14,18,14,0.7) 30%, rgba(14,18,14,0.6) 70%, #0B0B0B 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0B0B0B 0%, rgba(14,18,14,0.4) 30%, rgba(14,18,14,0.4) 70%, #0B0B0B 100%)",
          }}
        />
      </div>
        
      {/* Warm ambient glow behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] glow-gold animate-breathe-slow z-[1]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay z-[1]" />
      
      {/* Soft vignette */}
      <div className="absolute inset-0 vignette z-[1]" />
      
      {/* Section transition into below */}
      <div className="absolute bottom-0 inset-x-0 h-40 section-fade-bottom z-[1]" />

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
