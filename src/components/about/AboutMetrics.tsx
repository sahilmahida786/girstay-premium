"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ShieldCheck, Heart, CalendarClock, Zap, CheckCircle2, Star, Sparkles, Quote, Clock, Shield } from "lucide-react";
import { SafeImage as Image } from "@/components/ui/SafeImage";

// These values are designed to be swapped with API/CMS data later
const metrics = [
  { id: "verified-properties", value: 50, suffix: "+", title: "Verified Properties", description: "Exclusive access to Gir's most stringently vetted luxury accommodations.", icon: ShieldCheck },
  { id: "bookings-completed", value: 10000, suffix: "+", title: "Bookings Completed", description: "Trusted by thousands of luxury travelers from across the globe.", icon: CheckCircle2 },
  { id: "guest-satisfaction", value: 99, suffix: "%", title: "Guest Satisfaction", description: "Consistently delivering uncompromising quality and unforgettable memories.", icon: Heart },
  { id: "response-time", value: 15, suffix: "m", title: "Response Time", description: "Dedicated concierge team ready to assist you almost instantly.", icon: Zap },
  { id: "support-availability", value: 24, suffix: "/7", title: "Support Availability", description: "Around-the-clock premium assistance, every single day of the year.", icon: Clock },
  { id: "years-experience", value: 10, suffix: "+", title: "Years of Experience", description: "A decade of deep-rooted expertise in premium eco-tourism.", icon: CalendarClock },
];

const trustBadges = [
  "Verified Listings",
  "Secure Payments",
  "Transparent Pricing",
  "Mobile Optimized",
  "Fast Support",
  "No Hidden Charges"
];

// Reusable smooth counter component
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
      
      // Smooth easeOutExpo for premium feel (no bouncing)
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

  return <span ref={nodeRef}>{Math.floor(count).toLocaleString()}</span>;
}

export function AboutMetrics() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black" 
      aria-label="Platform Credibility and Social Proof"
    >
      {/* ────────────────────────────────────────────────────────
          LUXURY BACKGROUND LAYERS
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Seamless blend from previous section */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
        
        {/* Layer 1: Dark charcoal base */}
        <div className="absolute inset-0 bg-[#060606]" />
        
        {/* Layer 2: Forest green ambient glow (Center Left) */}
        <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(14,24,14,0.4)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Layer 3: Warm gold ambient lighting (Bottom Right) */}
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Layer 4: Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} 
        />
        
        {/* Bottom blend to next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ────────────────────────────────────────────────────────
            HEADER
            ──────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="will-change-transform"
          >
            {/* Luxury Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em]">
                Platform Credibility
              </span>
              <div className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            </div>
            
            {/* Editorial Heading */}
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-medium text-white mb-6 tracking-tight text-balance">
              The Standard of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Trust & Excellence
              </span>
            </h2>
            
            {/* Short Introduction */}
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light text-balance max-w-2xl mx-auto">
              Our commitment to delivering exceptional hospitality is proven by the thousands of luxury travelers who trust us with their journey into the wilderness.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            PREMIUM STATISTICS GRID
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={prefersReducedMotion ? {} : itemVariants}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative rounded-[30px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#D4AF37]/40 p-8 sm:p-10 backdrop-blur-2xl transition-all duration-700 ease-out flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] overflow-hidden will-change-transform"
            >
              {/* Soft Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[30px]" aria-hidden="true" />
              
              {/* Animated Divider */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-500 will-change-transform group-hover:scale-110">
                  <metric.icon className="w-6 h-6 text-white/70 group-hover:text-[#D4AF37] transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                </div>
                
                <div className="flex items-baseline justify-center font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-white mb-3 group-hover:text-[#F8E7B5] transition-colors duration-500 drop-shadow-xl tracking-tight">
                  <Counter from={0} to={metric.value} />
                  <span className="text-[clamp(1.5rem,2vw,2rem)] ml-1 text-[#D4AF37] font-sans font-light">{metric.suffix}</span>
                </div>
                
                <h3 className="text-white/90 font-medium text-lg tracking-wide mb-3 group-hover:text-white transition-colors duration-500">
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
            TRUST BADGES
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-5 mb-24 lg:mb-32"
        >
          {trustBadges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2.5 px-5 sm:px-6 py-3 min-h-[48px] rounded-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-[#D4AF37]/30 shadow-sm backdrop-blur-md transition-all duration-300 cursor-default"
            >
              <Shield className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} aria-hidden="true" />
              <span className="text-white/80 text-[13px] sm:text-sm font-medium tracking-wide">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            GUEST REVIEW HIGHLIGHT (Social Proof)
            ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto rounded-[30px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-[#D4AF37]/30 transition-colors duration-700 mb-20 lg:mb-24 backdrop-blur-3xl"
        >
          {/* Decorative Quote Icon Background */}
          <div className="absolute top-8 right-8 text-[#D4AF37]/5 w-32 h-32 rotate-12 group-hover:rotate-6 group-hover:text-[#D4AF37]/10 transition-all duration-1000 pointer-events-none" aria-hidden="true">
            <Quote className="w-full h-full" strokeWidth={0.5} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-8" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" aria-hidden="true" />
              ))}
            </div>

            <blockquote className="font-serif text-[clamp(1.25rem,4vw,2rem)] leading-[1.6] text-white/95 mb-10 max-w-3xl text-balance drop-shadow-md">
              "Booking through GirStay Premium was the best decision for our safari trip. The resort was utterly breathtaking, the service was flawless, and knowing the property was thoroughly verified gave us absolute peace of mind."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 relative shadow-lg">
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
                <span className="text-[#D4AF37] text-sm uppercase tracking-wider">Luxury Traveler</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            PLATFORM PROMISE
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center">
            <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mb-8" aria-hidden="true" />
            <h4 className="text-white font-serif text-xl sm:text-2xl mb-4">Our Premium Promise</h4>
            <p className="text-white/60 font-light text-[15px] sm:text-[16px] leading-[1.8] max-w-2xl text-balance">
              Every property is carefully reviewed before listing. We guarantee transparent pricing with absolutely no hidden surprises, accompanied by dedicated local support before and during your stay.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
