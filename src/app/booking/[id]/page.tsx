"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import {
  CalendarDays,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  CreditCard,
  Check,
  ArrowRight,
  ArrowLeft,
  Shield,
  Tag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockProperties } from "@/data/mockProperties";
import { formatPrice, cn } from "@/lib/utils";
import { luxuryEasing } from "@/lib/motion";

const steps = [
  { id: 1, label: "Dates & Room", icon: CalendarDays },
  { id: 2, label: "Guest Details", icon: User },
  { id: 3, label: "Add-ons", icon: Sparkles },
  { id: 4, label: "Payment", icon: CreditCard },
];

const addOns = [
  { id: "safari", name: "Gir Safari Package", description: "Morning jeep safari with expert naturalist", price: 3500, icon: "🦁" },
  { id: "airport", name: "Airport Pickup", description: "Rajkot/Ahmedabad airport transfer", price: 4500, icon: "✈️" },
  { id: "dinner", name: "Bonfire Dinner", description: "Special outdoor dining experience", price: 2000, icon: "🔥" },
  { id: "spa", name: "Couples Spa Package", description: "90-min rejuvenation therapy", price: 5000, icon: "💆" },
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState("");

  // Use first property as demo
  const property = mockProperties[0];
  const room = property.rooms[0];
  const nights = 3;
  const roomCharges = room.basePrice * nights;
  const addOnTotal = addOns
    .filter((a) => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  const subtotal = roomCharges + addOnTotal;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;
  const advance = Math.round(total * 0.5);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden sm:overflow-visible">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: luxuryEasing }}
          className="mb-8"
        >
          <Link
            href={`/properties/${property.slug}`}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {property.name}
          </Link>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold">
            Complete Your <span className="gradient-gold-text">Booking</span>
          </h1>
        </motion.div>

        {/* Step Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-xl">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                      currentStep > step.id
                        ? "gradient-gold text-black"
                        : currentStep === step.id
                        ? "bg-primary text-primary-foreground shadow-gold"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={cn(
                      "text-[10px] sm:text-xs mt-2 block",
                      currentStep >= step.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-12 sm:w-20 h-0.5 mx-2 sm:mx-4 rounded-full transition-all",
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 relative">
            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1: Dates & Room */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.4, ease: luxuryEasing }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <h2 className="font-heading text-lg font-semibold mb-4">
                      Booking Details
                    </h2>

                    {/* Property summary */}
                    <div className="flex gap-4 p-4 rounded-xl bg-muted/50 mb-6">
                      <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={property.images[0]?.url || ""}
                          alt={property.name}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{property.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {room.name} • Up to {room.capacity} guests
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {property.type === "resort" ? "Resort" : property.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Check-in Date</label>
                        <div className="relative">
                          <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="date"
                            className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-border bg-background"
                            defaultValue="2025-12-20"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Check-out Date</label>
                        <div className="relative">
                          <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="date"
                            className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-border bg-background"
                            defaultValue="2025-12-23"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Adults</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-border bg-background appearance-none">
                            {[1, 2, 3, 4].map((n) => (
                              <option key={n} value={n}>{n} Adult{n > 1 ? "s" : ""}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Children</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-border bg-background appearance-none">
                            {[0, 1, 2, 3].map((n) => (
                              <option key={n} value={n}>{n} Child{n !== 1 ? "ren" : ""}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Guest Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.4, ease: luxuryEasing }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <h2 className="font-heading text-lg font-semibold mb-4">Guest Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">First Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="John" className="pl-10 h-12 rounded-xl" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Last Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Doe" className="pl-10 h-12 rounded-xl" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input type="email" placeholder="you@example.com" className="pl-10 h-12 rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input type="tel" placeholder="+91 98765 43210" className="pl-10 h-12 rounded-xl" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Special Requests (Optional)</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <textarea
                            placeholder="Early check-in, birthday surprise, dietary requirements..."
                            rows={3}
                            className="w-full pl-10 pr-3 py-3 text-sm rounded-xl border border-border bg-background resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Add-ons */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.4, ease: luxuryEasing }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <h2 className="font-heading text-lg font-semibold mb-2">Enhance Your Stay</h2>
                    <p className="text-sm text-muted-foreground mb-6">Add premium experiences to your booking</p>

                    <div className="space-y-3">
                      {addOns.map((addon) => (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all",
                            selectedAddOns.includes(addon.id)
                              ? "border-primary bg-primary/5 shadow-gold"
                              : "border-border/50 hover:border-primary/30"
                          )}
                        >
                          <span className="text-2xl">{addon.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{addon.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{addon.description}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="price-number font-bold text-sm">{formatPrice(addon.price)}</p>
                            <div
                              className={cn(
                                "mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                selectedAddOns.includes(addon.id)
                                  ? "border-primary bg-primary"
                                  : "border-muted-foreground/30"
                              )}
                            >
                              {selectedAddOns.includes(addon.id) && (
                                <Check className="w-3 h-3 text-primary-foreground" />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <Separator className="my-6" />

                    {/* Coupon */}
                    <div>
                      <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-primary" />
                        Have a coupon code?
                      </h3>
                      <div className="flex gap-2">
                        <Input
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          placeholder="Enter coupon code"
                          className="h-11 rounded-xl uppercase"
                        />
                        <Button variant="outline" className="h-11 px-6 rounded-xl shrink-0">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.4, ease: luxuryEasing }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-card border border-border/50">
                    <h2 className="font-heading text-lg font-semibold mb-4">Payment Summary</h2>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-emerald-gir" />
                        <span className="text-sm font-medium">50% Advance Payment</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Pay {formatPrice(advance)} now to confirm your booking. Remaining {formatPrice(total - advance)} at check-in.
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{room.name} × {nights} nights</span>
                        <span className="price-number font-medium">{formatPrice(roomCharges)}</span>
                      </div>
                      {selectedAddOns.length > 0 && (
                        <>
                          {addOns
                            .filter((a) => selectedAddOns.includes(a.id))
                            .map((a) => (
                              <div key={a.id} className="flex justify-between">
                                <span className="text-muted-foreground">{a.name}</span>
                                <span className="price-number font-medium">{formatPrice(a.price)}</span>
                              </div>
                            ))}
                        </>
                      )}
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="price-number font-medium">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">GST (18%)</span>
                        <span className="price-number font-medium">{formatPrice(gst)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-base font-bold">
                        <span>Total</span>
                        <span className="price-number gradient-gold-text">{formatPrice(total)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-primary font-semibold">
                        <span>Pay Now (50%)</span>
                        <span className="price-number">{formatPrice(advance)}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Pay at Check-in</span>
                        <span className="price-number">{formatPrice(total - advance)}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full h-14 mt-6 gradient-gold text-black font-bold text-base rounded-xl shadow-gold hover:shadow-gold-lg transition-all gap-2"
                      onClick={() => {
                        // Razorpay integration would go here
                        window.location.href = "/booking/confirmation";
                      }}
                    >
                      <CreditCard className="w-5 h-5" />
                      Pay {formatPrice(advance)} Now
                    </Button>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 256-bit SSL</span>
                      <span>UPI</span>
                      <span>Cards</span>
                      <span>Net Banking</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    setDirection(-1);
                    setCurrentStep(currentStep - 1);
                  }}
                  className="gap-2 h-12 px-6 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4" /> Previous
                </Button>
              ) : (
                <div />
              )}
              {currentStep < 4 && (
                <Button
                  onClick={() => {
                    setDirection(1);
                    setCurrentStep(currentStep + 1);
                  }}
                  className="gradient-gold text-black font-semibold gap-2 h-12 px-8 rounded-xl shadow-gold"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Price Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl bg-card border border-border/50 shadow-luxury">
              <h3 className="font-heading font-semibold mb-4">Price Summary</h3>

              <div className="flex gap-3 mb-4">
                <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0">
                  <Image src={property.images[0]?.url || ""} alt={property.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <p className="font-medium text-sm line-clamp-1">{property.name}</p>
                  <p className="text-xs text-muted-foreground">{room.name}</p>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{nights} nights</span>
                  <span className="price-number">{formatPrice(roomCharges)}</span>
                </div>
                {addOnTotal > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Add-ons</span>
                    <span className="price-number">{formatPrice(addOnTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST</span>
                  <span className="price-number">{formatPrice(gst)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span className="price-number gradient-gold-text">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-primary/5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 inline text-emerald-gir mr-1" />
                Free cancellation up to 48 hours before check-in
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
