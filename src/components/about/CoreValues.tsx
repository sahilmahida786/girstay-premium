"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "./SectionBackground";
import { Shield, Gem, Trees, Leaf, Search, HeartHandshake } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust", description: "Every property is personally vetted. We promise what we deliver." },
  { icon: Gem, title: "Luxury", description: "Curated aesthetic experiences that prioritize unparalleled comfort." },
  { icon: Trees, title: "Wildlife", description: "Deep respect for the Gir forest ecosystem and its majestic inhabitants." },
  { icon: Leaf, title: "Sustainability", description: "Partnering with eco-friendly resorts that minimize carbon footprints." },
  { icon: Search, title: "Transparency", description: "Clear pricing. No hidden fees. Complete honesty at every step." },
  { icon: HeartHandshake, title: "Guest First", description: "A dedicated luxury concierge anticipating your every need." },
];

export function CoreValues() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="gold" intensity="medium" hasTopFade hasBottomFade />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16 sm:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            What Drives Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Our Core <span className="gradient-gold-text">Values</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 sm:p-10 rounded-3xl glass-dark border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-gold"
            >
              {/* Hover Glow & Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 rounded-3xl transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                  <value.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-white/60 text-sm sm:text-base leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
