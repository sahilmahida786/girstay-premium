"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

export function ConciergeProfile() {
  const WHATSAPP_LINK = "https://wa.me/917984592173";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/sahil-mahida-115835317";
  const INSTAGRAM_LINK = "https://www.instagram.com/nexvora.dev";

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-24 sm:mb-32">
      
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
        >
          Website Designed & Developed
        </motion.span>
        <motion.h2 
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Meet The <span className="gradient-gold-text">Developer</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-sm sm:text-base max-w-xl mx-auto font-light"
        >
          Built with attention to detail, performance, and premium user experience.
        </motion.p>
      </div>

      {/* Main Developer Card container with 9-layer background */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* === 9-Layer Background === */}
        {/* Layer 1: Deep Black */}
        <div className="absolute inset-0 bg-[#050505] -z-20" />
        {/* Layer 2: Espresso Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A140D] via-transparent to-[#0a0a0a] -z-20 opacity-80" />
        {/* Layer 3: Golden Radial Glow */}
        <div className="absolute inset-0 glow-gold-strong -z-20 opacity-40 animate-breathe" />
        {/* Layer 4: Soft Vignette */}
        <div className="absolute inset-0 vignette-luxury -z-20" />
        {/* Layer 5: Moving Spotlight */}
        <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_50%)] -z-20 animate-ken-burns" />
        {/* Layer 6 & 7: Floating Particles & Gold Dust */}
        <div className="absolute inset-0 -z-10 opacity-30">
          {[...Array(10)].map((_, i) => (
            <div
              key={`dust-${i}`}
              className="absolute rounded-full bg-[#FFD27A] blur-[1px] animate-dust-float"
              style={{
                top: `${(i * 17) % 100}%`,
                left: `${(i * 23) % 100}%`,
                width: `${(i % 3) + 1}px`,
                height: `${(i % 3) + 1}px`,
                animationDelay: `-${(i * 2) % 10}s`,
                animationDuration: `${(i % 10) + 15}s`,
              }}
            />
          ))}
        </div>
        {/* Layer 8: Glass Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-xl bg-white/[0.02] -z-10" />
        {/* Layer 9: Subtle animated border/gradient inside */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent opacity-50 -z-10 mix-blend-overlay" />
        

        {/* Content Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 sm:p-10 md:p-12 items-center">
          
          {/* Left: Profile Image (col-span-3) */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Gold Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-[2px] bg-gradient-to-br from-[#D4AF37] via-[#8B7355] to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0B0B0B] border-[4px] border-[#0B0B0B]">
                  <Image
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
                    alt="Sahil Mahida - Premium Website Developer"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 160px, 192px"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-[#FFD27A] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_5px_20px_rgba(212,175,55,0.3)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Premium
              </div>
            </div>
          </div>

          {/* Center: Identity & Story (col-span-5) */}
          <div className="md:col-span-8 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              SAHIL MAHIDA
            </h3>
            <p className="text-[#D4AF37] text-sm sm:text-base font-semibold uppercase tracking-widest mb-6">
              Premium Website Developer
            </p>

            <div className="space-y-4 text-white/70 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                Specializing in premium websites for luxury resorts, travel companies, startups, hotels, and businesses worldwide.
              </p>
              <p>
                Creating beautiful digital experiences with modern UI/UX, blazing-fast performance, and a strict mobile-first architecture.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row w-full gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] hover:to-[#D4AF37] text-black font-bold h-14 sm:h-12 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Hire Me
              </a>
              <a 
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold h-14 sm:h-12 px-6 rounded-xl transition-all duration-300 hover:border-[#D4AF37]/50 group"
              >
                <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                View LinkedIn
                <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Right: Professional Specs (col-span-4) */}
          <div className="md:col-span-12 lg:col-span-4 w-full h-full bg-white/[0.02] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-center">
            
            <div className="space-y-5">
              
              <div className="flex items-start justify-between border-b border-white/5 pb-4">
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Experience</p>
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> 2+ Years
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between border-b border-white/5 pb-4">
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Focus</p>
                  <p className="text-white text-sm font-medium">Luxury Website Design</p>
                </div>
              </div>

              <div className="flex items-start justify-between border-b border-white/5 pb-4">
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Performance</p>
                  <p className="text-[#D4AF37] text-sm font-bold tracking-wide">95+ Lighthouse Score</p>
                </div>
              </div>

              <div className="flex items-start justify-between pb-2">
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">Responsive</p>
                  <p className="text-white text-sm font-medium">100% Mobile Optimized</p>
                </div>
              </div>

            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Socials minimal */}
            <div className="mt-6 flex justify-end gap-3">
               <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
               </a>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
