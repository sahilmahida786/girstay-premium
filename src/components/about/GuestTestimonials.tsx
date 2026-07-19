"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SectionBackground } from "./SectionBackground";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Richards",
    country: "United Kingdom",
    rating: 5,
    quote: "An absolutely flawless experience. GirStay Premium anticipated our every need. The wildlife encounters were breathtaking, and the luxury tent was beyond expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "James Chen",
    country: "Singapore",
    rating: 5,
    quote: "The transparent pricing and curated properties gave us complete peace of mind. The local concierge arranged a private safari that we will never forget.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Aisha Patel",
    country: "India",
    rating: 5,
    quote: "I've been to Gir many times, but booking through GirStay elevated the entire journey. True luxury that respects the forest ecosystem. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export function GuestTestimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <SectionBackground theme="espresso" intensity="light" hasTopFade />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            Guest Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Stories from the <span className="gradient-gold-text">Forest</span>
          </motion.h2>
        </div>

        {/* Mobile-optimized horizontal scroll container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] lg:w-1/3 p-8 rounded-[2rem] glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-white/80 text-lg leading-relaxed font-light mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/30">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
