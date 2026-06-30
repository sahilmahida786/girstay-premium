"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Travelers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-10"
          >
            <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-black" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Planning Your{" "}
              <span className="gradient-gold-text">Gir Trip?</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our travel experts will help you find the perfect resort, arrange
              safari permits, and plan your entire Gir itinerary — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>
                <Button className="gradient-gold text-black font-semibold gap-2 h-12 px-6 w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Link href="/properties">
                <Button
                  variant="outline"
                  className="gap-2 h-12 px-6 w-full sm:w-auto group"
                >
                  Browse Properties
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* For Property Owners */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 sm:p-10"
          >
            <div className="w-14 h-14 rounded-2xl gradient-emerald flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              Own a Property in{" "}
              <span className="gradient-gold-text">Gir?</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join GirStay and reach thousands of travelers looking for premium
              stays. Get a professional dashboard, booking management, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/list-property">
                <Button className="gradient-emerald text-white font-semibold gap-2 h-12 px-6 w-full sm:w-auto">
                  <Building2 className="w-4 h-4" />
                  List Your Property
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="gap-2 h-12 px-6 w-full sm:w-auto group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: "50+", label: "Premium Properties" },
            { value: "10,000+", label: "Happy Guests" },
            { value: "4.8★", label: "Average Rating" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl glass"
            >
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-gold-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
