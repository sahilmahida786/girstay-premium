"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  HeartHandshake, 
  Map, 
  Lock, 
  Star, 
  Smartphone,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Luxury Properties",
    description: "Every resort is rigorously inspected in-person to meet our strict luxury standards before being listed."
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "What you see is what you pay. Absolutely no hidden fees or surprise charges at checkout."
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "No waiting for host approvals. Your booking is instantly secured directly with the resort's system."
  },
  {
    icon: HeartHandshake,
    title: "Premium Guest Support",
    description: "24/7 access to our local concierge team dedicated to making your Gir journey flawless."
  },
  {
    icon: Map,
    title: "Exclusive Gir Experiences",
    description: "Gain access to curated safari packages and private forest experiences unavailable elsewhere."
  },
  {
    icon: Lock,
    title: "Fast & Secure Payments",
    description: "Bank-grade encryption ensures your payment data is completely secure during transactions."
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Authentic feedback from real guests who have actually stayed at the properties."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Booking",
    description: "A world-class booking experience designed specifically for travelers on the go."
  },
];

const trustIndicators = [
  "Verified Luxury Resorts",
  "Secure Booking",
  "Trusted by Thousands of Guests",
  "Premium Concierge Support"
];

export function WhyTrustUs() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
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
      aria-labelledby="why-choose-us-heading"
    >
      {/* ────────────────────────────────────────────────────────
          CINEMATIC LAYERED BACKGROUND
          ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Seamless blend from previous section */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
        
        {/* Layer 1: Dark charcoal base */}
        <div className="absolute inset-0 bg-[#070707]" />
        
        {/* Layer 2: Forest green ambient glow (Bottom Left) */}
        <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(14,24,14,0.5)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Layer 3: Warm gold ambient lighting (Top Right) */}
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] blur-[100px]" />
        
        {/* Layer 4: Luxury grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} 
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
                Why Choose Us
              </span>
              <div className="w-8 h-[1px] bg-[#D4AF37]" aria-hidden="true" />
            </div>
            
            {/* Editorial Heading */}
            <h2 id="why-choose-us-heading" className="font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] font-medium text-white mb-6 tracking-tight text-balance">
              The GirStay <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9E5A8] via-[#D4AF37] to-[#F9E5A8] bg-[length:200%_auto] animate-shimmer-slow pb-2 inline-block">
                Premium Difference
              </span>
            </h2>
            
            {/* Short Introduction */}
            <p className="text-white/70 text-[16px] sm:text-[18px] leading-[1.8] font-light text-balance max-w-2xl mx-auto">
              We engineered a platform that eliminates the anxiety of travel planning. Discover why discerning travelers trust us to secure their stay in the wilderness.
            </p>
          </motion.div>
        </div>

        {/* ────────────────────────────────────────────────────────
            FEATURE CARDS GRID (3-Column Desktop, 1-Column Mobile)
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-16 lg:mb-24"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? {} : cardVariants}
              whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
              className="group relative h-full rounded-[28px] bg-[#121212]/50 hover:bg-[#181818]/60 border border-white/5 hover:border-[#D4AF37]/30 p-8 sm:p-10 backdrop-blur-xl transition-all duration-700 ease-out will-change-transform flex flex-col overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]"
            >
              {/* Subtle Gold Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[28px]" aria-hidden="true" />
              
              {/* Bottom Accent Line Animation */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent group-hover:w-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" aria-hidden="true" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/40 transition-all duration-500 will-change-transform group-hover:rotate-[8deg]">
                  <feature.icon className="w-6 h-6 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-500" aria-hidden="true" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-3 group-hover:text-[#F8E7B5] transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 text-[15px] sm:text-base leading-[1.6] font-light group-hover:text-white/80 transition-colors duration-500 mt-auto">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            TRUST BAR (Elegant Premium Chips)
            ──────────────────────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6"
        >
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index}
              className="flex items-center gap-2.5 px-4 sm:px-6 py-3 min-h-[52px] rounded-full bg-white/[0.02] border border-white/10 shadow-sm backdrop-blur-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.5} aria-hidden="true" />
              <span className="text-white/80 text-[13px] sm:text-sm font-medium tracking-wide">
                {indicator}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
