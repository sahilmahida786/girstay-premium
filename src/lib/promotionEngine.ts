import { ACTIVE_PROMOTIONS, Promotion } from "@/data/mockPromotions";
import { EXPERIENCES_DATA } from "@/data/mockAddOns";
import { parseISO, getDay, isBefore, isAfter } from "date-fns";

export interface PromotionContext {
  propertyId: string;
  checkIn: string; // ISO string
  subtotal: number;
  selectedAddOnIds: string[];
}

export interface PromotionResult {
  valid: boolean;
  discountAmount: number;
  message: string;
}

export function validatePromotion(code: string, context: PromotionContext): PromotionResult {
  const promo = ACTIVE_PROMOTIONS.find(p => p.code.toUpperCase() === code.toUpperCase());

  if (!promo) {
    return { valid: false, discountAmount: 0, message: "Invalid promotion code." };
  }

  if (!promo.isActive) {
    return { valid: false, discountAmount: 0, message: "This promotion is no longer active." };
  }

  // Check Usage Limits
  if (promo.usageLimit !== undefined && promo.usageCount >= promo.usageLimit) {
    return { valid: false, discountAmount: 0, message: "This promotion has reached its redemption limit." };
  }

  // Check Dates
  const now = new Date();
  if (promo.startDate && isBefore(now, parseISO(promo.startDate))) {
    return { valid: false, discountAmount: 0, message: "This promotion is not yet active." };
  }
  if (promo.endDate && isAfter(now, parseISO(promo.endDate))) {
    return { valid: false, discountAmount: 0, message: "This promotion has expired." };
  }

  // Check Property Restrictions
  if (promo.applicablePropertyIds && promo.applicablePropertyIds.length > 0) {
    if (!promo.applicablePropertyIds.includes(context.propertyId)) {
      return { valid: false, discountAmount: 0, message: "This promotion is not applicable to the selected property." };
    }
  }

  // Check Minimum Booking Value
  if (promo.minBookingValue !== undefined && context.subtotal < promo.minBookingValue) {
    return { valid: false, discountAmount: 0, message: `This promotion requires a minimum booking value of ₹${promo.minBookingValue.toLocaleString()}.` };
  }

  // Custom Rules (e.g., Weekend Check-ins)
  if (promo.code === "GIRWEEKEND") {
    const checkInDate = parseISO(context.checkIn);
    const day = getDay(checkInDate);
    // Friday = 5, Saturday = 6
    if (day !== 5 && day !== 6) {
      return { valid: false, discountAmount: 0, message: "This promotion is only valid for weekend check-ins (Friday or Saturday)." };
    }
  }

  // Calculate Discount
  let calculatedDiscount = 0;

  switch (promo.type) {
    case 'FLAT':
      calculatedDiscount = promo.value;
      break;
    case 'PERCENTAGE':
      calculatedDiscount = (context.subtotal * promo.value) / 100;
      break;
    case 'FREE_ADDON':
      if (!promo.freeAddonId) {
        return { valid: false, discountAmount: 0, message: "Invalid free add-on configuration." };
      }
      if (!context.selectedAddOnIds.includes(promo.freeAddonId)) {
        return { valid: false, discountAmount: 0, message: `Please add the complimentary experience to your booking to use this code.` };
      }
      const addonDef = EXPERIENCES_DATA.find(e => e.id === promo.freeAddonId);
      if (addonDef) {
        calculatedDiscount = addonDef.price;
      }
      break;
  }

  // Apply Maximum Discount Cap
  if (promo.maxDiscount !== undefined && calculatedDiscount > promo.maxDiscount) {
    calculatedDiscount = promo.maxDiscount;
  }

  // Ensure discount doesn't exceed subtotal
  if (calculatedDiscount > context.subtotal) {
    calculatedDiscount = context.subtotal;
  }

  return {
    valid: true,
    discountAmount: Math.round(calculatedDiscount),
    message: "Promotion applied successfully!"
  };
}
