"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ShieldCheck, Heart, CalendarClock, Zap, CheckCircle2, Star, Sparkles, Quote } from "lucide-react";
import { SafeImage as Image } from "@/components/ui/SafeImage";

const metrics = [
  { value: 50, suffix: "+", title: "Verified Partners", description: "Exclusive access to Gir's finest, heavily vetted luxury properties.", icon: ShieldCheck },
  { value: 99, suffix: "%", title: "Guest Satisfaction", description: "Consistently delivering uncompromising quality and unforgettable experiences.", icon: Heart },
  { value: 5000, suffix: "+", title: "Successful Stays", description: "Trusted by thousands of luxury travelers from across the globe.", icon: CheckCircle2 },
  { value: 10, suffix: "Yrs", title: "Hospitality Expertise", description: "A decade of deep-rooted expertise in premium eco-tourism.", icon: CalendarClock },
  { value: 15, suffix: "Min", title: "Response Time", description: "Dedicated concierge team ready to assist you almost instantly.", icon: Zap },
  { value: 24, suffix: "/7", title: "Support Availability", description: "Around-the-clock premium assistance, every single day.", icon: Star },
];

function Counter({ from, to, duration = 2.5 }: { from: number, to: number, duration?: number }) {
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
      
      // easeOutExpo
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

  return <span ref={nodeRef}>{Math.floor(count)}</span>;
}

export function AboutMetrics() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black" aria-label="Our Impact and Trust Metrics">
      {/* ────────────────────────────────────────────────────────
          LUXURY BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]" />
        
        {/* Forest green radial glow */}
        <div className="absolute top-1/4 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(14,24,14,0.3)_0%,transparent_60%)]" />
        
        {/* Warm gold ambient lighting */}
        <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
        />
        
        {/* Fades */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform"
          >
            <span className="inline-flex items-center justify-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Our Impact
            </span>
            
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-medium text-white mb-6 tracking-tight text-balance">
              Trusted by Travelers. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Built for Exceptional Stays.
              </span>
            </h2>
            
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light text-balance max-w-2xl mx-auto">
              Our commitment to excellence isn't just a promise—it's measured in the countless unforgettable memories created by our guests in the heart of Sasan Gir.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            METRICS GRID
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : itemVariants}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="group relative rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 sm:p-10 backdrop-blur-xl transition-all duration-700 hover:border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.08)] overflow-hidden flex flex-col items-center text-center will-change-transform"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-transparent to-[#D4AF37]/0 group-hover:from-[#D4AF37]/[0.06] group-hover:to-transparent transition-all duration-700 pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-500 will-change-transform">
                  <metric.icon className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" strokeWidth={1.5} />
                </div>
                
                <div className="flex items-baseline justify-center font-serif text-5xl sm:text-6xl text-white mb-4 group-hover:text-[#F8E7B5] transition-colors duration-500 drop-shadow-lg">
                  <Counter from={0} to={metric.value} />
                  <span className="text-3xl sm:text-4xl ml-1 text-[#D4AF37]">{metric.suffix}</span>
                </div>
                
                <h3 className="text-white/90 font-medium text-lg tracking-wide uppercase mb-3 group-hover:text-white transition-colors duration-500">
                  {metric.title}
                </h3>
                
                <p className="text-white/60 text-[14px] sm:text-[15px] leading-[1.6] font-light max-w-xs group-hover:text-white/80 transition-colors duration-500">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            TESTIMONIAL HIGHLIGHT
            ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/10 transition-colors duration-700"
        >
          {/* Decorative Quote Icon Background */}
          <div className="absolute top-8 right-8 text-[#D4AF37]/10 w-32 h-32 rotate-12 group-hover:rotate-6 transition-transform duration-1000 pointer-events-none" aria-hidden="true">
            <Quote className="w-full h-full" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" aria-hidden="true" />
              ))}
            </div>

            <blockquote className="font-serif text-[clamp(1.25rem,4vw,2rem)] leading-[1.6] text-white/90 mb-10 max-w-3xl text-balance">
              "Booking through GirStay Premium was the best decision for our safari trip. The resort was utterly breathtaking, the service was flawless, and knowing the property was thoroughly verified gave us absolute peace of mind."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
                  alt="Guest Portrait"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-medium text-lg">Priya Sharma</span>
                <span className="text-[#D4AF37] text-sm uppercase tracking-wider">Luxury Traveler, Mumbai</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
