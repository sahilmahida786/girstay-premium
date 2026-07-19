"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionBackground } from "./SectionBackground";

const metrics = [
  { value: 10000, suffix: "+", label: "Guests Hosted" },
  { value: 4.9, suffix: "★", label: "Average Rating", isFloat: true },
  { value: 52, suffix: "+", label: "Verified Properties" },
  { value: 24, suffix: "×7", label: "Luxury Concierge" },
  { value: 100, suffix: "%", label: "Verified Listings" },
  { value: 2500, suffix: "+", label: "Safari Experiences" },
];

function Counter({ from, to, duration = 2, isFloat = false }: { from: number, to: number, duration?: number, isFloat?: boolean }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = from + (to - from) * easeProgress;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{isFloat ? count.toFixed(1) : Math.floor(count)}</span>;
}

export function AboutMetrics() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="charcoal" intensity="medium" hasTopFade hasBottomFade />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 sm:p-10 rounded-3xl glass-dark border border-white/5 hover:border-[#D4AF37]/30 transition-colors group overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="font-heading text-4xl sm:text-5xl font-bold gradient-gold-text mb-2 drop-shadow-md">
                  <Counter from={0} to={metric.value} isFloat={metric.isFloat} />
                  {metric.suffix}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-widest group-hover:text-white/90 transition-colors">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
