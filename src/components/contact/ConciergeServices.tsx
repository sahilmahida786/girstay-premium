"use client";

import { motion } from "framer-motion";
import { Building2, Ticket, Compass, Plane, Users, Briefcase, Heart, Gift, GlassWater, Flame, Utensils, Camera } from "lucide-react";

const services = [
  { icon: Building2, title: "Luxury Resort Booking" },
  { icon: Ticket, title: "Safari Permit Assistance" },
  { icon: Compass, title: "VIP Safari Planning" },
  { icon: Plane, title: "Airport Transfers" },
  { icon: Users, title: "Family Tours" },
  { icon: Briefcase, title: "Corporate Retreats" },
  { icon: Heart, title: "Honeymoon Packages" },
  { icon: Gift, title: "Birthday Decoration" },
  { icon: GlassWater, title: "Anniversary Celebration" },
  { icon: Flame, title: "Private Bonfire" },
  { icon: Utensils, title: "Luxury Dining" },
  { icon: Camera, title: "Photography Tours" },
];

export function ConciergeServices() {
  return (
    <div className="max-w-7xl mx-auto mb-32 relative z-10 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Luxury Concierge Services</h2>
        <p className="text-white/60">Comprehensive assistance for every aspect of your journey.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-default overflow-hidden hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD27A]" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base text-white/90 group-hover:text-white transition-colors">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
