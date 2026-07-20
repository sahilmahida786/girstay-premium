export type PromotionType = 'FLAT' | 'PERCENTAGE' | 'FREE_ADDON';

export interface Promotion {
  id: string;
  code: string;
  name: string;
  description: string;
  type: PromotionType;
  value: number; // Represents amount for FLAT, percentage (0-100) for PERCENTAGE
  freeAddonId?: string; // Applicable only when type is FREE_ADDON
  maxDiscount?: number;
  minBookingValue?: number;
  startDate?: string;
  endDate?: string;
  usageLimit?: number;
  usageCount: number;
  applicablePropertyIds?: string[];
  isActive: boolean;
}

export const ACTIVE_PROMOTIONS: Promotion[] = [
  {
    id: "promo_1",
    code: "LUXURY",
    name: "Luxury Experience Discount",
    description: "Flat ₹2,500 off on your booking.",
    type: "FLAT",
    value: 2500,
    isActive: true,
    usageCount: 142,
  },
  {
    id: "promo_2",
    code: "EARLYBIRD",
    name: "Early Bird Special",
    description: "15% off on your stay, up to ₹5,000.",
    type: "PERCENTAGE",
    value: 15,
    maxDiscount: 5000,
    isActive: true,
    usageCount: 45,
  },
  {
    id: "promo_3",
    code: "FESTIVAL50",
    name: "Festival Grand Offer",
    description: "50% off on premium bookings above ₹20,000.",
    type: "PERCENTAGE",
    value: 50,
    maxDiscount: 10000,
    minBookingValue: 20000,
    startDate: new Date().toISOString(), // Valid starting now
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    isActive: true,
    usageCount: 8,
  },
  {
    id: "promo_4",
    code: "FREESAFARI",
    name: "Complimentary Jungle Safari",
    description: "Get the Private Jeep Safari add-on for free.",
    type: "FREE_ADDON",
    value: 0,
    freeAddonId: "safari_jeep", // Must match an ID in mockAddOns.ts
    isActive: true,
    usageCount: 22,
  },
  {
    id: "promo_5",
    code: "GIRWEEKEND",
    name: "Weekend Escape",
    description: "Special flat ₹3,000 off for weekend check-ins.",
    type: "FLAT",
    value: 3000,
    isActive: true,
    usageCount: 56,
  },
  {
    id: "promo_6",
    code: "SUMMER2023",
    name: "Summer Blast 2023",
    description: "Old campaign, expired.",
    type: "FLAT",
    value: 1000,
    isActive: false, // Inactive
    usageCount: 500,
  }
];
