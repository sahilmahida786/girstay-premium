"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alexander Rothschild",
    country: "United Kingdom",
    duration: "4 Days / 3 Nights",
    property: "The Fern Gir Forest Resort",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "The concierge team orchestrated an absolutely flawless experience. From the private helicopter transfer to the exclusive sunrise safari, every detail was executed with Aman-level precision.",
  },
  {
    name: "Eleanor Sterling",
    country: "United States",
    duration: "7 Days / 6 Nights",
    property: "Aramness Luxury Lodge",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "We've traveled extensively across Africa, and the service here rivals the best lodges in the Serengeti. The dedicated travel expert made our anniversary celebration deeply magical.",
  },
  {
    name: "Hiroshi Tanaka",
    country: "Japan",
    duration: "5 Days / 4 Nights",
    property: "Woods at Sasan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote: "Unparalleled hospitality. The 24/7 WhatsApp concierge was incredibly responsive, adjusting our itineraries in real-time. A truly world-class luxury platform.",
  },
];

export function ContactTestimonials() {
  return (
    <div className="max-w-7xl mx-auto mb-32 relative z-10 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Guest Experiences</h2>
        <p className="text-white/60">Stories from travelers who expected the best.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-0 sm:px-12"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/2">
                <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 h-full flex flex-col justify-between group hover:bg-white/[0.05] transition-colors">
                  
                  {/* Top Section */}
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-white/80 text-lg sm:text-xl font-light italic leading-relaxed mb-8 line-clamp-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 border-2 border-white/10 group-hover:border-[#D4AF37]/50 transition-colors">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold">
                        <span>{testimonial.country}</span>
                        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[#D4AF37]">{testimonial.property}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 border-white/10 bg-black/50 hover:bg-white/10 hover:text-white text-white/50" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 border-white/10 bg-black/50 hover:bg-white/10 hover:text-white text-white/50" />
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}
