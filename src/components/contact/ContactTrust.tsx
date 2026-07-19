"use client";

import { motion } from "framer-motion";
import { Star, Users, Home, Compass, Headphones, ShieldCheck, Map, BadgeCheck, Award } from "lucide-react";

const metrics = [
  { icon: Star, value: "4.9", label: "Guest Rating" },
  { icon: Users, value: "10,000+", label: "Happy Travelers" },
  { icon: Home, value: "150+", label: "Verified Luxury Properties" },
  { icon: Compass, value: "5000+", label: "Safari Experiences" },
  { icon: Headphones, value: "24×7", label: "Concierge Support" },
  { icon: ShieldCheck, value: "100%", label: "Secure Booking" },
  { icon: Map, value: "15+", label: "Years Local Knowledge" },
  { icon: Award, value: "Best Price", label: "Guarantee" },
  { icon: BadgeCheck, value: "Verified", label: "Luxury Partners" },
];

export function ContactTrust() {
  return (
    <div className="max-w-7xl mx-auto mb-32 relative z-10 px-4 sm:px-6">
      
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Why Travelers Trust GirStay</h2>
        <p className="text-white/60">A legacy of delivering unparalleled luxury experiences.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col items-center justify-center p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <metric.icon className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FFD27A] transition-colors duration-500">
              {metric.value}
            </div>
            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-semibold group-hover:text-white/80 transition-colors">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
