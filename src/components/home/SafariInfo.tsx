"use client";

import { motion } from "framer-motion";
import { Clock, Camera, Ticket, Car } from "lucide-react";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { SafariQuickBook } from "@/components/shared/SafariQuickBook";

const safariInfo = [
  {
    icon: Clock,
    title: "Safari Timings",
    details: [
      "Morning: 6:00 AM - 9:00 AM",
      "Afternoon: 3:00 PM - 6:00 PM",
      "Closed: Mid-June to Mid-October",
    ],
  },
  {
    icon: Ticket,
    title: "Permit Booking",
    details: [
      "Book online at girlion.in",
      "Book 45-90 days in advance",
      "₹800-₹5,000 per person",
    ],
  },
  {
    icon: Camera,
    title: "What You'll See",
    details: [
      "Asiatic Lions (last wild population)",
      "Leopards, Spotted Deer, Nilgai",
      "300+ bird species",
    ],
  },
  {
    icon: Car,
    title: "Safari Zones",
    details: [
      "Sasan (Main Zone)",
      "Devalia Safari Park (Fenced)",
      "6 zones, 18 routes total",
    ],
  },
];

export function SafariInfo() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop"
          alt="Gir National Park safari"
          fill
          className="object-cover opacity-15 dark:opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            🦁 The Ultimate Wildlife Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Gir <span className="gradient-gold-text">Safari</span> Guide
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Home to the last wild population of Asiatic Lions, Gir National Park
            is India&apos;s premier wildlife destination. Plan your safari right.
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safariInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-luxury transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-3">
                {info.title}
              </h3>
              <ul className="space-y-2">
                {info.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <SafariQuickBook />
        </motion.div>
      </div>
    </section>
  );
}
