"use client";

import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { Check, ArrowRight, Sparkles, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experiencePackages } from "@/data/mockActivities";
import { formatPrice, cn } from "@/lib/utils";

const colorStyles = {
  gold: {
    gradient: "from-amber-600 to-yellow-500",
    badge: "gradient-gold text-black",
    border: "border-primary/30 hover:border-primary/60",
    cta: "gradient-gold text-black shadow-gold hover:shadow-gold-lg",
  },
  emerald: {
    gradient: "from-emerald-600 to-green-500",
    badge: "gradient-emerald text-white",
    border: "border-emerald-gir/30 hover:border-emerald-gir/60",
    cta: "gradient-emerald text-white shadow-luxury hover:shadow-luxury-lg",
  },
  purple: {
    gradient: "from-violet-600 to-purple-500",
    badge: "bg-gradient-to-r from-violet-600 to-purple-500 text-white",
    border: "border-violet-500/30 hover:border-violet-500/60",
    cta: "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-luxury hover:shadow-luxury-lg",
  },
};

export function ExperiencePackages() {
  return (
    <section id="packages" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Save More, Experience More
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience{" "}
            <span className="gradient-gold-text">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bundled luxury experiences at unbeatable prices — choose the package
            that matches your dream vacation
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiencePackages.map((pkg, index) => {
            const style = colorStyles[pkg.color];
            const discount = Math.round(
              ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
            );

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-card overflow-hidden transition-all duration-500 hover:shadow-luxury-lg",
                  style.border,
                  pkg.badge === "Most Popular" && "ring-2 ring-primary/30 scale-[1.02]"
                )}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={cn("font-bold text-xs gap-1", style.badge)}>
                      <Sparkles className="w-3 h-3" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t opacity-60",
                      style.gradient
                    )}
                  />
                  <div className="absolute bottom-4 left-5 right-5 z-10">
                    <p className="text-white/80 text-xs font-medium">
                      {pkg.tagline}
                    </p>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {pkg.description}
                  </p>

                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-emerald-gir shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & CTA */}
                <div className="p-6 pt-0">
                  <Separator className="mb-5" />
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="price-number text-2xl font-bold gradient-gold-text">
                          {formatPrice(pkg.price)}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-xs gap-1 text-emerald-gir border-emerald-gir/30"
                        >
                          <Percent className="w-3 h-3" />
                          {discount}% off
                        </Badge>
                      </div>
                      <span className="price-number text-sm text-muted-foreground line-through">
                        {formatPrice(pkg.originalPrice)}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      per person
                    </span>
                  </div>

                  <Button
                    className={cn(
                      "w-full h-12 font-bold text-base gap-2 transition-all duration-300 hover:scale-[1.02]",
                      style.cta
                    )}
                  >
                    Book Package
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
