"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Shield, TreePine, Heart, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "50+", label: "Premium Properties" },
  { value: "10K+", label: "Happy Guests" },
  { value: "4.8★", label: "Average Rating" },
  { value: "5+", label: "Years Experience" },
];

const team = [
  { name: "Jayesh Patel", role: "Founder & CEO", initials: "JP" },
  { name: "Priya Desai", role: "Head of Operations", initials: "PD" },
  { name: "Arjun Mehta", role: "Lead Engineer", initials: "AM" },
  { name: "Divya Shah", role: "Marketing Head", initials: "DS" },
];

const values = [
  { icon: Shield, title: "Trust & Transparency", description: "Every property is personally verified. No hidden fees, no surprises." },
  { icon: TreePine, title: "Eco-Conscious Tourism", description: "We promote responsible wildlife tourism and partner with eco-friendly properties." },
  { icon: Heart, title: "Hospitality First", description: "Every guest interaction is treated as an opportunity to exceed expectations." },
  { icon: Sparkles, title: "Premium Experience", description: "We curate only the finest stays to ensure a world-class experience." },
];

export function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=800&fit=crop"
            alt="Gir forest"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Our Story</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="gradient-gold-text">GirStay</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Born from a passion for wildlife and hospitality, GirStay Premium connects travelers with the finest stays in Sasan Gir — the last home of the Asiatic Lion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-luxury"
            >
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-gold-text">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">Our Mission</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Making Wildlife Tourism <span className="gradient-gold-text">Accessible</span> & Premium
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sasan Gir is India&apos;s crown jewel for wildlife tourism. Yet for years, finding quality accommodation with verified photos, transparent pricing, and reliable service was a challenge.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              GirStay Premium was born to solve this. We personally visit, verify, and photograph every property before listing it. We negotiate the best rates, ensure quality standards, and provide 24/7 support — so your only worry is whether you&apos;ll spot the lion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From luxury resorts to rustic jungle stays, we curate options for every budget and every kind of traveler.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop"
              alt="Gir forest landscape"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Values */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">What Drives Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Our <span className="gradient-gold-text">Values</span></h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-luxury transition-all"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Team */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">The People</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Our <span className="gradient-gold-text">Team</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 text-black font-heading font-bold text-xl">
                {member.initials}
              </div>
              <h3 className="font-heading font-semibold text-sm">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
