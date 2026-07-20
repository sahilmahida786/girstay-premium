"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Phone, Mail, MessageSquare, Sparkles } from "lucide-react";
import { LuxuryFloatingInput } from "@/components/ui/LuxuryFloatingInput";
import { LuxuryButton } from "@/components/ui/LuxuryButton";
import { m, AnimatePresence } from "framer-motion";
import { useBookingStore } from "@/store/useBookingStore";

// 1. Zod Validation Schema
const guestFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").transform(val => val.trim()),
  lastName: z.string().min(2, "Last name must be at least 2 characters").transform(val => val.trim()),
  email: z.string().email("Please enter a valid email address").transform(val => val.toLowerCase().trim()),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number").regex(/^[0-9+\-\s()]*$/, "Invalid characters in phone number"),
  specialRequests: z.string().max(500, "Maximum 500 characters").optional(),
});

type GuestFormValues = z.infer<typeof guestFormSchema>;

const SMART_SUGGESTIONS = [
  "Airport Pickup",
  "Early Check-in",
  "Late Check-out",
  "Anniversary",
  "Birthday Celebration",
  "Dietary Requirements"
];

interface GuestFormProps {
  propertyId: string;
  onNextStep: () => void;
  onPreviousStep: () => void;
}

export function GuestForm({ propertyId, onNextStep, onPreviousStep }: GuestFormProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const getBooking = useBookingStore(state => state.getBooking);
  const updateBooking = useBookingStore(state => state.updateBooking);

  // 2. React Hook Form Setup
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, touchedFields },
  } = useForm<GuestFormValues>({
    resolver: zodResolver(guestFormSchema),
    mode: "onChange", // Instant validation
  });

  const specialRequests = watch("specialRequests");

  // 3. Auto Save / Restore (Zustand Store)
  useEffect(() => {
    const booking = getBooking(propertyId);
    if (booking.guestInfo) {
      Object.keys(booking.guestInfo).forEach((key) => {
        setValue(key as keyof GuestFormValues, (booking.guestInfo as any)[key], { shouldValidate: true });
      });
    }
    setIsLoaded(true);
  }, [propertyId, getBooking, setValue]);

  // Save on every valid change
  useEffect(() => {
    if (isLoaded) {
      const subscription = watch((value) => {
        updateBooking(propertyId, { guestInfo: value as GuestFormValues });
      });
      return () => subscription.unsubscribe();
    }
  }, [watch, isLoaded, propertyId, updateBooking]);

  const onSubmit = (data: GuestFormValues) => {
    // Optionally save to global state or API here before moving to next step
    onNextStep();
  };

  const handleSuggestionClick = (suggestion: string) => {
    const currentText = specialRequests || "";
    // Avoid duplicates
    if (currentText.includes(suggestion)) return;
    
    const newText = currentText ? `${currentText}, ${suggestion}` : suggestion;
    setValue("specialRequests", newText, { shouldValidate: true, shouldDirty: true });
  };

  if (!isLoaded) return null; // Prevent hydration mismatch flash

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Fields */}
        <LuxuryFloatingInput
          id="firstName"
          label="First Name"
          icon={<User className="w-5 h-5" />}
          error={errors.firstName?.message}
          isValid={!errors.firstName && touchedFields.firstName}
          {...register("firstName", {
            onChange: (e) => {
              // Auto-capitalize first letter
              const val = e.target.value;
              if (val.length > 0) {
                e.target.value = val.charAt(0).toUpperCase() + val.slice(1);
              }
            }
          })}
        />
        
        <LuxuryFloatingInput
          id="lastName"
          label="Last Name"
          icon={<User className="w-5 h-5" />}
          error={errors.lastName?.message}
          isValid={!errors.lastName && touchedFields.lastName}
          {...register("lastName", {
            onChange: (e) => {
              const val = e.target.value;
              if (val.length > 0) {
                e.target.value = val.charAt(0).toUpperCase() + val.slice(1);
              }
            }
          })}
        />

        {/* Contact Fields */}
        <LuxuryFloatingInput
          id="email"
          type="email"
          label="Email Address"
          icon={<Mail className="w-5 h-5" />}
          error={errors.email?.message}
          isValid={!errors.email && touchedFields.email}
          {...register("email")}
        />

        <LuxuryFloatingInput
          id="phone"
          type="tel"
          label="Phone Number"
          icon={<Phone className="w-5 h-5" />}
          error={errors.phone?.message}
          isValid={!errors.phone && touchedFields.phone}
          placeholder="+91 98765 43210" // shown only briefly before label floats
          {...register("phone")}
        />

        {/* Special Requests */}
        <div className="md:col-span-2 space-y-3">
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-white/40 group-focus-within:text-[#D9A94D] transition-colors" />
            <textarea
              id="specialRequests"
              placeholder="Any special requests? (Optional)"
              className="w-full min-h-[120px] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 focus:border-[#D9A94D] focus:shadow-[0_0_0_4px_rgba(217,169,77,0.1)] focus:bg-white/10 rounded-xl px-12 py-5 text-white/90 text-sm sm:text-base outline-none resize-none transition-all"
              {...register("specialRequests")}
            />
          </div>
          
          {/* Smart Suggestions */}
          <div className="flex flex-wrap gap-2">
            {SMART_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 min-h-[48px] rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs sm:text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 active:scale-95 touch-manipulation"
              >
                <Sparkles className="w-3 h-3 text-[#D9A94D]" />
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation (Hidden on Mobile, as Mobile has Sticky Footer) */}
      <div className="hidden lg:flex justify-between items-center pt-6 border-t border-white/10">
        <button
          type="button"
          onClick={onPreviousStep}
          className="px-6 py-3 text-white/60 hover:text-white transition-colors"
        >
          Back
        </button>
        <LuxuryButton type="submit" className="px-10 h-14" disabled={!isValid}>
          Continue to Add-ons
        </LuxuryButton>
      </div>

      {/* Mobile Sticky Action Footer */}
      <m.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 pb-safe-offset lg:hidden"
      >
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onPreviousStep}
            className="px-4 py-3 min-h-[52px] border border-white/20 rounded-xl text-white/80 active:bg-white/10 active:scale-[0.98] transition-transform touch-manipulation"
          >
            Back
          </button>
          <LuxuryButton type="submit" className="flex-1 h-[52px]" disabled={!isValid}>
            Continue
          </LuxuryButton>
        </div>
      </m.div>
    </form>
  );
}
