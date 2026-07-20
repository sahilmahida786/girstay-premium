"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SectionBackground } from "./SectionBackground";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=1200&fit=crop&q=90&auto=format",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-2",
    alt: "Luxury Safari Tent",
  },
  {
    src: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1200&h=800&fit=crop&q=90&auto=format",
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-1",
    alt: "Gir Forest Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=800&fit=crop&q=90&auto=format",
    colSpan: "col-span-6 md:col-span-4",
    rowSpan: "row-span-1",
    alt: "Premium Dining Experience",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=800&fit=crop&q=90&auto=format",
    colSpan: "col-span-6 md:col-span-4",
    rowSpan: "row-span-1",
    alt: "Luxury Villa Interior",
  },
];

export function LuxuryGallery() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="charcoal" intensity="heavy" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            A Glimpse of <span className="gradient-gold-text">Luxury</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className={cn(
                "relative group overflow-hidden rounded-[2rem] bg-[#0B0B0B] border border-white/5",
                img.colSpan,
                img.rowSpan
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Luxury Vignette & Light Reflection */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.4)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Hover Light Sweep */}
              <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.1)_50%,transparent_80%)] -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
