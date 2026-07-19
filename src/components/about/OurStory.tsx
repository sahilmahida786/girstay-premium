"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SectionBackground } from "./SectionBackground";
import { ShieldCheck, Leaf, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const timeline = [
  { year: "2019", text: "Founded with a vision to redefine wildlife tourism." },
  { year: "2021", text: "Partnered with our first 10 luxury eco-resorts." },
  { year: "2023", text: "Hosted over 5,000 guests in Sasan Gir." },
  { year: "Today", text: "The most trusted luxury travel platform for Gir." },
];

const floatingBadges = [
  { icon: ShieldCheck, label: "Verified", position: "top-[10%] -left-[15%]" },
  { icon: Star, label: "Guest Favorite", position: "top-[40%] -right-[10%]" },
  { icon: Leaf, label: "Eco Tourism", position: "bottom-[20%] -left-[10%]" },
];

export function OurStory() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="forest" intensity="heavy" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Timeline & Narrative */}
          <div className="relative">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <Sparkles className="w-4 h-4" /> The Journey
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-white">
                Making Wildlife Tourism <span className="gradient-gold-text">Accessible</span> & Premium
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">
                Sasan Gir is India&apos;s crown jewel for wildlife. Yet, finding quality accommodation with verified photos, transparent pricing, and reliable service was a challenge. GirStay Premium was born to solve this.
              </p>
            </motion.div>

            {/* Luxury Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] ring-4 ring-[#0B0B0B]" />
                  
                  <h3 className="text-[#FFD27A] font-bold text-xl mb-1">{item.year}</h3>
                  <p className="text-white/50 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Immersive Image with Floating Badges */}
          <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden group">
            {/* Image Parallax & Zoom */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=1600&fit=crop"
                alt="Gir forest landscape"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Inner Vignette for Image */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />

            {/* Floating Badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.5, type: "spring" }}
                className={cn(
                  "absolute z-20 flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-white/20 shadow-luxury animate-float",
                  badge.position
                )}
                style={{ animationDelay: `${i * 1.5}s` }}
              >
                <badge.icon className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">{badge.label}</span>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
