"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import { 
  Star, 
  Heart, 
  Wifi, 
  Car, 
  Waves, 
  UtensilsCrossed, 
  Snowflake, 
  ShieldCheck, 
  MapPin,
  TrendingUp,
  Award,
  Clock,
  Leaf
} from "lucide-react";
import { Property } from "@/types/property";
import { formatPrice, cn } from "@/lib/utils";

// ────────────────────────────────────────────────────────
// CONFIGURATION & MAPPING
// ────────────────────────────────────────────────────────

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3.5 h-3.5" />,
  parking: <Car className="w-3.5 h-3.5" />,
  pool: <Waves className="w-3.5 h-3.5" />,
  restaurant: <UtensilsCrossed className="w-3.5 h-3.5" />,
  ac: <Snowflake className="w-3.5 h-3.5" />,
};

const typeLabels: Record<string, string> = {
  resort: "Luxury Resort",
  villa: "Private Villa",
  cottage: "Cottage",
  farmhouse: "Farm Stay",
  jungle_stay: "Jungle Lodge",
};

// Simulated dynamic badges based on property properties for the demo
const getPremiumBadge = (prop: Property) => {
  if (prop.rating >= 4.9) return { label: "Guest Favorite", icon: Award, color: "text-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/20" };
  if (prop.reviewCount > 100) return { label: "Trending", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" };
  if (prop.basePrice < 5000) return { label: "Only 2 rooms left", icon: Clock, color: "text-red-500", bg: "bg-red-500/10 border-red-500/20" };
  return { label: "Eco Friendly", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/20" };
};

// ────────────────────────────────────────────────────────
// COMPONENT
// ────────────────────────────────────────────────────────

interface PropertyCardProps {
  property: Property;
  index?: number;
  variant?: "default" | "featured" | "compact";
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const primaryImage = property.images.find((img) => img.isPrimary) || property.images[0];
  const premiumBadge = getPremiumBadge(property);
  const BadgeIcon = premiumBadge.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <Link href={`/properties/${property.slug}`} className="block focus-ring rounded-[2rem]">
        <div className="relative rounded-[2rem] overflow-hidden bg-card/40 border border-border/50 shadow-sm hover:shadow-luxury-lg hover:border-primary/40 transition-all duration-500">
          
          {/* ────────────────────────────────────────────────────────
              IMAGE EXPERIENCE
              ──────────────────────────────────────────────────────── */}
          <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-muted">
            {/* Ken Burns effect on hover */}
            <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
              <Image
                src={primaryImage?.url || ""}
                alt={primaryImage?.alt || property.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                showSkeleton={true}
              />
            </div>

            {/* Gradient Overlays */}
            {/* Top gradient for badges */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none opacity-80" />
            
            {/* Heavy bottom gradient for text readability (Price) */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            {/* ────────────────────────────────────────────────────────
                FLOATING BADGES & ACTIONS
                ──────────────────────────────────────────────────────── */}
            
            {/* Top Left: Property Type */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              <div className="glass-dark px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                <span className="text-[10px] font-bold tracking-[0.1em] text-white uppercase">
                  {typeLabels[property.type]}
                </span>
              </div>
              
              {/* Premium Dynamic Badge */}
              <div className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm w-fit", premiumBadge.bg)}>
                <BadgeIcon className={cn("w-3 h-3", premiumBadge.color)} />
                <span className="text-[10px] font-bold tracking-wide text-white">
                  {premiumBadge.label}
                </span>
              </div>
            </div>

            {/* Top Right: Animated Wishlist Heart */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full glass flex items-center justify-center transition-transform hover:scale-110 active:scale-90"
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <motion.div animate={isWishlisted ? { scale: [1, 1.4, 1] } : { scale: 1 }} transition={{ duration: 0.3 }}>
                <Heart
                  className={cn(
                    "w-4 h-4 transition-colors duration-300",
                    isWishlisted ? "fill-red-500 text-red-500" : "text-white"
                  )}
                />
              </motion.div>
            </button>

            {/* Bottom Right: Price */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end">
              <span className="text-[10px] text-white/80 font-medium tracking-wide uppercase mb-0.5">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-heading font-bold text-white drop-shadow-md">
                  {formatPrice(property.basePrice)}
                </span>
                <span className="text-xs text-white/70 font-medium">/night</span>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────
              CONTENT PANEL
              ──────────────────────────────────────────────────────── */}
          <div className="p-5 sm:p-6 bg-card relative z-20">
            
            {/* Title & Rating Row */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-heading text-xl font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300">
                {property.name}
              </h3>
              <div className="flex items-center gap-1 shrink-0 glass px-2 py-1 rounded-lg border-border/50 bg-background/50">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-sm font-bold text-foreground">{property.rating}</span>
                <span className="text-[10px] text-muted-foreground">({property.reviewCount})</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
              <MapPin className="w-3.5 h-3.5 text-primary/70" />
              <span className="font-medium">
                {property.city}, {property.state}
              </span>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-5 bg-emerald-500/10 w-fit px-2 py-1 rounded-md">
              <ShieldCheck className="w-3.5 h-3.5" />
              Free cancellation available
            </div>

            {/* Divider */}
            <hr className="border-border/60 mb-5" />

            {/* Bottom Row: Amenities & CTA */}
            <div className="flex items-center justify-between gap-4">
              
              {/* Amenities Row */}
              <div className="flex items-center gap-3">
                {property.amenities.slice(0, 4).map((amenity) => 
                  amenityIcons[amenity] && (
                    <div 
                      key={amenity} 
                      className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center text-primary/80"
                      title={amenity}
                    >
                      {amenityIcons[amenity]}
                    </div>
                  )
                )}
                {property.amenities.length > 4 && (
                  <div className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                    +{property.amenities.length - 4}
                  </div>
                )}
              </div>

              {/* Hover CTA Button */}
              <div className="px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-bold opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Book
              </div>

            </div>
          </div>
          
        </div>
      </Link>
    </motion.article>
  );
}
