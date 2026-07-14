"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

// Animated counter hook — counts up when element enters viewport
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return { count, ref };
}

const stats = [
  { value: 50, suffix: "+", label: "Premium Properties" },
  { value: 10000, suffix: "+", label: "Happy Guests" },
  { value: 4.8, suffix: "★", label: "Average Rating", isDecimal: true },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
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
              <Link href="/contact">
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

        {/* Stats bar with animated counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  stat,
}: {
  stat: { value: number; suffix: string; label: string; isDecimal?: boolean };
}) {
  const { count, ref } = useCountUp(
    stat.isDecimal ? Math.floor(stat.value * 10) : stat.value,
    stat.value > 1000 ? 2500 : 1800
  );

  const displayValue = stat.isDecimal
    ? (count / 10).toFixed(1)
    : count.toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-center p-4 rounded-xl glass"
    >
      <div className="font-heading text-2xl sm:text-3xl font-bold gradient-gold-text mb-1">
        {displayValue}
        {stat.suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground">
        {stat.label}
      </div>
    </motion.div>
  );
}
