"use client";

import { motion } from "framer-motion";
import { Shield, BadgeCheck, Sparkles, Headphones, TreePine, CreditCard } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Wildlife Expertise",
    description:
      "All our properties are vetted by Gir wildlife experts. Get insider tips on the best safari routes and timings.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: BadgeCheck,
    title: "Handpicked Properties",
    description:
      "Every property is personally inspected for quality, cleanliness, and hospitality standards before listing.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: CreditCard,
    title: "Best Price Guarantee",
    description:
      "Found a lower price elsewhere? We'll match it and give you an additional 10% off. No questions asked.",
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your payments are protected with bank-grade encryption. Book with confidence — 100% secure transactions.",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Complimentary welcome drinks, safari coordination, and 24/7 concierge support for all bookings.",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated team is always available via phone, chat, or WhatsApp to assist you before and during your stay.",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 relative gradient-section-cool">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Why GirStay
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="gradient-gold-text">GirStay Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We go beyond booking — we create experiences that you&apos;ll cherish
            forever.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 sm:p-8 rounded-2xl glass-card hover:gradient-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
