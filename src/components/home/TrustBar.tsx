"use client";

import { motion } from "framer-motion";
import { Shield, Star, Clock, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Star,
    text: "4.8/5 from 500+ reviews",
    accent: "text-gold",
  },
  {
    icon: Clock,
    text: "Free cancellation up to 48 hrs",
    accent: "text-emerald-400",
  },
  {
    icon: Shield,
    text: "Best price guarantee",
    accent: "text-blue-400",
  },
  {
    icon: BadgeCheck,
    text: "Personally inspected properties",
    accent: "text-primary",
  },
];

export function TrustBar() {
  return (
    <section className="py-6 sm:py-8 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6 sm:gap-8 lg:gap-12 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center"
        >
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2.5 shrink-0"
            >
              <item.icon
                className={`w-4 h-4 sm:w-5 sm:h-5 ${item.accent} shrink-0`}
              />
              <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
