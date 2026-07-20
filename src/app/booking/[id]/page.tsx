"use client";

import { useState, useMemo } from "react";
import { differenceInCalendarDays, addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage as Image } from "@/components/ui/SafeImage";
import Link from "next/link";
import { MobilePriceSummary } from "@/components/booking/MobilePriceSummary";
import { GuestSelector } from "@/components/booking/GuestSelector";
import { DateSelector } from "@/components/booking/DateSelector";
import { GuestForm } from "@/components/booking/GuestForm";
import { AddOnsMarketplace, EXPERIENCES_DATA } from "@/components/booking/AddOnsMarketplace";
import { PaymentGateway } from "@/components/booking/PaymentGateway";
import { LuxuryInput } from "@/components/ui/LuxuryInput";
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

// Removed old mock addOns array

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState("");

  // Use first property as demo
  const property = mockProperties[0];
  const room = property.rooms[0];
  
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  const nights = useMemo(() => {
    if (date?.from && date?.to) {
      return Math.max(0, differenceInCalendarDays(date.to, date.from));
    }
    return 0;
  }, [date]);

  const isValidDate = nights > 0;
  
  const roomCharges = room.basePrice * nights;
  
  const addOnTotal = selectedAddOns.reduce((sum, id) => {
    const exp = EXPERIENCES_DATA.find(e => e.id === id);
    return sum + (exp?.price || 0);
  }, 0);
  
  const bundleSavings = selectedAddOns.reduce((sum, id) => {
    const exp = EXPERIENCES_DATA.find(e => e.id === id);
    return sum + (exp?.savings || 0);
  }, 0);

  const subtotal = roomCharges + addOnTotal;
  const discountAmount = (couponCode === "LUXURY" ? 2500 : 0) + bundleSavings;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gst = Math.round(taxableAmount * 0.18);
  const total = taxableAmount + gst;
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

        {/* Mobile Sticky Progress Bar */}
        <div className="-mx-4 mb-6 sm:mx-0 sm:mb-0">
          <MobileStepIndicator 
            currentStep={currentStep} 
            totalSteps={4} 
            stepLabel={steps[currentStep - 1].label} 
          />
        </div>

        {/* Desktop Step Progress */}
        <div className="hidden lg:block mb-10">
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
                      <div className="lg:col-span-2 space-y-4">
                        <label className="text-sm font-medium mb-1.5 block">Dates</label>
                        <DateSelector date={date} onDateChange={setDate} />
                      </div>
                      
                      <div className="lg:col-span-2 space-y-4">
                        <label className="text-sm font-medium mb-1.5 block">Guests</label>
                        <GuestSelector />
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
                  <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-luxury">
                    <h2 className="luxury-heading text-2xl mb-6">Guest Information</h2>
                    
                    <GuestForm 
                      onNextStep={() => {
                        setDirection(1);
                        setCurrentStep(currentStep + 1);
                      }}
                      onPreviousStep={() => {
                        setDirection(-1);
                        setCurrentStep(currentStep - 1);
                      }}
                    />
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
                  <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-luxury">
                    <div className="mb-8">
                      <h2 className="luxury-heading text-2xl mb-2">Enhance Your Stay</h2>
                      <p className="text-sm text-white/50">Add premium curated experiences to your booking</p>
                    </div>

                    <AddOnsMarketplace 
                      selectedIds={selectedAddOns} 
                      onToggle={toggleAddOn} 
                    />

                    <Separator className="my-8 opacity-50" />

                    {/* Coupon */}
                    <div>
                      <h3 className="text-sm font-medium mb-3 flex items-center gap-2 text-[#D9A94D]">
                        <Tag className="w-4 h-4" />
                        Have a coupon code?
                      </h3>
                      <div className="flex gap-2 max-w-sm">
                        <Input
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          placeholder="Try 'LUXURY'"
                          className="h-12 rounded-xl uppercase bg-white/5 border-white/10"
                        />
                        <Button variant="outline" className="h-12 px-6 rounded-xl shrink-0 border-[#D9A94D]/30 text-[#D9A94D] hover:bg-[#D9A94D]/10">
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
                  <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 shadow-luxury overflow-hidden">
                    <h2 className="luxury-heading text-2xl mb-6">Complete Booking</h2>
                    
                    <PaymentGateway 
                      advanceAmount={advance}
                      totalAmount={total}
                      onPreviousStep={() => {
                        setDirection(-1);
                        setCurrentStep(currentStep - 1);
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Navigation Buttons (Hidden on Mobile) */}
            {/* Hidden for Steps 2 and 4 because GuestForm and PaymentGateway handle their own actions */}
            {currentStep !== 2 && currentStep !== 4 && (
              <div className="hidden lg:flex justify-between mt-6">
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
                      if (currentStep === 1 && !isValidDate) return;
                      setDirection(1);
                      setCurrentStep(currentStep + 1);
                    }}
                    disabled={currentStep === 1 && !isValidDate}
                    className="gradient-gold text-black font-semibold gap-2 h-12 px-8 rounded-xl shadow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === 1 && !isValidDate ? "Select valid dates" : (
                      <>Next Step <ArrowRight className="w-4 h-4" /></>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Price Summary Sidebar (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-1">
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

              <Separator className="mb-6 opacity-50" />

              <PriceSummaryDetails 
                roomName={room.name}
                nights={nights}
                roomCharges={roomCharges}
                addOnTotal={addOnTotal}
                discountAmount={discountAmount}
                gst={gst}
                total={total}
                advance={advance}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Price Summary & CTA */}
      {currentStep !== 4 && (
        <MobilePriceSummary
          roomName={room.name}
          nights={nights}
          roomCharges={roomCharges}
          addOnTotal={addOnTotal}
          discountAmount={discountAmount}
          gst={gst}
          total={total}
          advance={advance}
          onNextStep={() => {
            if (currentStep === 1 && !isValidDate) return;
            if (currentStep < 4) {
              setDirection(1);
              setCurrentStep(currentStep + 1);
            }
          }}
          nextStepLabel={currentStep === 1 && !isValidDate ? "Select valid dates" : "Next Step"}
          isLastStep={false}
          disabled={currentStep === 1 && !isValidDate}
        />
      )}
    </div>
  );
}
