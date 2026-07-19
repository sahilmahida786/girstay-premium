"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SectionBackground } from "./SectionBackground";
import { Leaf, ShieldAlert, HeartHandshake } from "lucide-react";

const commitments = [
  { icon: Leaf, title: "Eco-Tourism", desc: "We partner exclusively with resorts that practice sustainable, low-impact operations in the forest buffer zones." },
  { icon: ShieldAlert, title: "Conservation", desc: "A portion of every premium booking goes towards local Asiatic Lion conservation and anti-poaching initiatives." },
  { icon: HeartHandshake, title: "Community", desc: "We empower the local Maldhari tribes and surrounding villages by generating sustainable employment." },
];

export function WildlifeCommitment() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-32 sm:py-48 overflow-hidden bg-[#0A0D0A]">
      <SectionBackground theme="forest" intensity="heavy" hasTopFade hasBottomFade />

      {/* Parallax Lion Silhouette Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1920&h=1080&fit=crop"
          alt="Lion Silhouette"
          fill
          className="object-cover object-center mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0A] via-transparent to-[#0A0D0A]" />
      </motion.div>

      {/* Animated Leaves (CSS generated) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#2E3C2E] w-4 h-4 rounded-full blur-[2px] animate-leaf-fall"
            style={{
              left: `${(i * 15) % 100}%`,
              top: `-5%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${15 + i * 2}s`,
              borderRadius: "0 100% 0 100%", // Leaf shape
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div style={{ y: y2 }}>
            <span className="text-[#A3B8A3] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">
              Beyond Hospitality
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Commitment to the <span className="text-[#D4AF37]">Forest</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
              Sasan Gir is not just a destination; it is a delicate ecosystem. We believe that true luxury must coexist in perfect harmony with nature.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex gap-6 p-6 sm:p-8 rounded-[2rem] bg-[#121812]/80 backdrop-blur-md border border-[#2E3C2E]/50 hover:border-[#D4AF37]/30 transition-colors group shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#1C241C] border border-[#2E3C2E] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-5 h-5 text-[#A3B8A3] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
