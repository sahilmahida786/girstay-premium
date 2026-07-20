"use server";

import { z } from "zod";
import { getPropertyById } from "@/data/mockProperties";
import { EXPERIENCES_DATA } from "@/data/mockAddOns";
import { differenceInCalendarDays, parseISO, isValid } from "date-fns";

const checkoutSchema = z.object({
  propertyId: z.string(),
  checkIn: z.string(),
  checkOut: z.string(),
  adults: z.number().min(1),
  children: z.number().min(0),
  selectedAddOns: z.array(z.string()),
  couponCode: z.string().optional(),
});

export type CheckoutPricing = {
  nights: number;
  roomCharges: number;
  addOnTotal: number;
  bundleSavings: number;
  subtotal: number;
  discountAmount: number;
  taxableAmount: number;
  gst: number;
  total: number;
  advance: number;
};

export type CheckoutResponse = {
  status: "success";
  bookingId: string;
  expiresAt: number;
  pricing: CheckoutPricing;
} | {
  status: "error";
  code: string;
  message: string;
};

export async function validateCheckout(payload: unknown): Promise<CheckoutResponse> {
  // Simulate network/db delay
  await new Promise(resolve => setTimeout(resolve, 800));

  try {
    const data = checkoutSchema.parse(payload);

    // 1. Validate property
    const property = getPropertyById(data.propertyId);
    if (!property) {
      return { status: "error", code: "INVALID_PROPERTY", message: "Property not found." };
    }

    // 2. Validate dates & nights
    const from = parseISO(data.checkIn);
    const to = parseISO(data.checkOut);
    
    if (!isValid(from) || !isValid(to)) {
      return { status: "error", code: "INVALID_DATES", message: "Invalid dates provided." };
    }

    const nights = differenceInCalendarDays(to, from);
    if (nights <= 0) {
      return { status: "error", code: "INVALID_DATES", message: "Check-out must be after check-in." };
    }

    // 3. Room availability
    const room = property.rooms[0];
    if (!room || !room.isActive) {
      return { status: "error", code: "ROOM_UNAVAILABLE", message: "Room is not available." };
    }

    if (data.adults + data.children > room.capacity) {
      return { status: "error", code: "CAPACITY_EXCEEDED", message: "Guest count exceeds room capacity." };
    }

    // 4. Calculate Room Base
    const roomCharges = room.basePrice * nights;

    // 5. Validate Add-ons
    let addOnTotal = 0;
    let bundleSavings = 0;
    
    for (const addonId of data.selectedAddOns) {
      const addonDef = EXPERIENCES_DATA.find(e => e.id === addonId);
      if (!addonDef) {
         return { status: "error", code: "INVALID_ADDON", message: `Add-on ${addonId} is invalid.` };
      }
      addOnTotal += addonDef.price;
      if (addonDef.isBundle && addonDef.savings) {
         bundleSavings += addonDef.savings;
      }
    }

    // 6. Validate Coupon
    let couponDiscount = 0;
    if (data.couponCode) {
      if (data.couponCode.toUpperCase() === "LUXURY") {
        couponDiscount = 2500;
      } else {
        return { status: "error", code: "INVALID_COUPON", message: "Invalid or expired coupon code." };
      }
    }

    // 7. Recalculate Secure Totals
    const subtotal = roomCharges + addOnTotal;
    const discountAmount = couponDiscount + bundleSavings;
    const taxableAmount = Math.max(0, subtotal - discountAmount);
    const gst = Math.round(taxableAmount * 0.18);
    const total = taxableAmount + gst;
    const advance = Math.round(total * 0.5);

    return {
      status: "success",
      bookingId: `BKG-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      expiresAt: Date.now() + 15 * 60 * 1000,
      pricing: {
        nights,
        roomCharges,
        addOnTotal,
        bundleSavings,
        subtotal,
        discountAmount,
        taxableAmount,
        gst,
        total,
        advance
      }
    };

  } catch (error) {
    if (error instanceof z.ZodError) {
      return { status: "error", code: "VALIDATION_FAILED", message: "Invalid checkout data format." };
    }
    return { status: "error", code: "SERVER_ERROR", message: "An unexpected error occurred." };
  }
}
