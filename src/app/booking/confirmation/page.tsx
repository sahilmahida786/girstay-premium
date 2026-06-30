"use client";

import { motion } from "framer-motion";
import { Check, Download, Calendar, MapPin, ArrowRight, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/constants";

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-8 shadow-gold-lg"
        >
          <Check className="w-10 h-10 text-black" strokeWidth={3} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
        >
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            Booking <span className="gradient-gold-text">Confirmed!</span>
          </h1>
          <p className="text-muted-foreground">
            Your reservation has been confirmed. A confirmation email has been sent to your inbox.
          </p>
        </motion.div>

        {/* Booking Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-card border border-border/50 shadow-luxury overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 gradient-gold">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-black/60 text-xs font-medium uppercase tracking-wider">Booking Reference</p>
                <p className="text-black text-2xl font-heading font-bold mt-1">GIR-2025-87432</p>
              </div>
              <div className="text-right">
                <p className="text-black/60 text-xs font-medium">Status</p>
                <span className="inline-flex items-center gap-1.5 bg-black/10 px-3 py-1 rounded-full mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="text-black font-semibold text-sm">Confirmed</span>
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-5">
            <div>
              <h3 className="font-heading font-semibold text-lg">The Fern Gir Forest Resort</h3>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin className="w-4 h-4 text-primary" />
                Sasan Gir Road, Talala, Gujarat
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-muted/50">
                <p className="text-xs text-muted-foreground">Check-in</p>
                <p className="font-semibold text-sm mt-0.5">Sat, 20 Dec 2025</p>
                <p className="text-xs text-muted-foreground">After 2:00 PM</p>
              </div>
              <div className="p-3 rounded-xl bg-muted/50">
                <p className="text-xs text-muted-foreground">Check-out</p>
                <p className="font-semibold text-sm mt-0.5">Tue, 23 Dec 2025</p>
                <p className="text-xs text-muted-foreground">Before 11:00 AM</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Room</p>
                <p className="font-medium text-sm">Forest View Deluxe Room</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Guests</p>
                <p className="font-medium text-sm">2 Adults</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="font-medium text-sm">3 Nights</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Booking Date</p>
                <p className="font-medium text-sm">1 Jun 2025</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Room charges (3 nights)</span>
                <span className="price-number">{formatPrice(25500)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gir Safari Package</span>
                <span className="price-number">{formatPrice(3500)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="price-number">{formatPrice(5220)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="price-number gradient-gold-text text-base">{formatPrice(34220)}</span>
              </div>
              <div className="flex justify-between text-emerald-gir font-medium">
                <span>Paid (Advance 50%)</span>
                <span className="price-number">{formatPrice(17110)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Due at Check-in</span>
                <span className="price-number">{formatPrice(17110)}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 space-y-3"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Button variant="outline" className="gap-2 h-12 rounded-xl text-sm">
              <Download className="w-4 h-4" />
              Invoice
            </Button>
            <Button variant="outline" className="gap-2 h-12 rounded-xl text-sm">
              <Calendar className="w-4 h-4" />
              Add to Cal
            </Button>
            <Button variant="outline" className="gap-2 h-12 rounded-xl text-sm">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>
              <Button variant="outline" className="gap-2 h-12 rounded-xl text-sm w-full">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
            </a>
          </div>

          <Link href="/properties">
            <Button className="w-full h-14 gradient-gold text-black font-bold text-base rounded-xl shadow-gold gap-2 mt-4">
              Explore More Properties
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
