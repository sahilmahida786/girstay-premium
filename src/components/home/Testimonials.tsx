"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/mockReviews";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance with pause support
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
    // Reset auto-play timer on manual navigation
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden gradient-section-warm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Guest Experiences
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our <span className="gradient-gold-text">Guests</span> Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative glass-card rounded-3xl p-6 sm:p-12 min-h-[240px] sm:min-h-[300px]"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center text-center"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl font-light leading-relaxed mb-8 text-foreground/90 italic">
                  &ldquo;{t.comment}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-3 text-black font-bold text-lg">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <p className="font-heading font-semibold text-base">
                    {t.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t.location}
                  </p>
                  <p className="text-xs text-primary mt-1 font-medium">
                    Stayed at {t.propertyName} • {t.stayDate}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => navigate(-1)}
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:shadow-gold active:scale-90 transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className="group relative flex items-center justify-center w-11 h-11 sm:w-6 sm:h-6"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        i === current
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                      )}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => navigate(1)}
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:shadow-gold active:scale-90 transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
