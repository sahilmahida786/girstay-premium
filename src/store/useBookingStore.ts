import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { differenceInCalendarDays, parseISO, isValid } from 'date-fns';
import { CheckoutPricing } from '@/actions/checkout';

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface PropertyBookingData {
  step: number;
  date: { from?: string; to?: string };
  adults: number;
  children: number;
  selectedAddOns: string[];
  couponCode: string;
  guestInfo: GuestInfo | null;
  paymentMethod: string;
  updatedAt: number;
  verifiedPricing: CheckoutPricing | null;
  isCalculating: boolean;
  pricingError: string | null;
}

interface BookingState {
  bookings: Record<string, PropertyBookingData>;
  // Selectors/Getters
  getBooking: (propertyId: string) => PropertyBookingData;
  // Updaters
  updateBooking: (propertyId: string, data: Partial<PropertyBookingData>) => void;
  resetBooking: (propertyId: string) => void;
  validateAndHydrate: (propertyId: string) => void;
}

export const DEFAULT_BOOKING: PropertyBookingData = {
  step: 1,
  date: {},
  adults: 2,
  children: 0,
  selectedAddOns: [],
  couponCode: "",
  guestInfo: null,
  paymentMethod: "upi",
  updatedAt: Date.now(),
  verifiedPricing: null,
  isCalculating: false,
  pricingError: null,
};

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      bookings: {},

      getBooking: (propertyId: string) => {
        const state = get();
        return state.bookings[propertyId] || { ...DEFAULT_BOOKING, updatedAt: Date.now() };
      },

      updateBooking: (propertyId, data) => set((state) => {
        const currentBooking = state.bookings[propertyId] || { ...DEFAULT_BOOKING, updatedAt: Date.now() };
        return {
          bookings: {
            ...state.bookings,
            [propertyId]: {
              ...currentBooking,
              ...data,
              updatedAt: Date.now(),
            },
          },
        };
      }),

      resetBooking: (propertyId) => set((state) => {
        const newBookings = { ...state.bookings };
        delete newBookings[propertyId];
        return { bookings: newBookings };
      }),

      validateAndHydrate: (propertyId) => set((state) => {
        const currentBooking = state.bookings[propertyId];
        if (!currentBooking) return state;

        // 1. Expiration check
        if (Date.now() - currentBooking.updatedAt > EXPIRATION_TIME) {
          console.warn(`Booking for ${propertyId} expired. Resetting.`);
          const newBookings = { ...state.bookings };
          delete newBookings[propertyId];
          return { bookings: newBookings };
        }

        // 2. Data integrity check
        let isDataValid = true;

        if (currentBooking.adults < 1) isDataValid = false;
        
        if (currentBooking.date.from && currentBooking.date.to) {
          const from = parseISO(currentBooking.date.from);
          const to = parseISO(currentBooking.date.to);
          
          if (!isValid(from) || !isValid(to)) {
            isDataValid = false;
          } else {
            const nights = differenceInCalendarDays(to, from);
            if (nights <= 0) isDataValid = false;
          }
        }

        if (!isDataValid) {
          console.warn(`Invalid booking state for ${propertyId}. Resetting.`);
          const newBookings = { ...state.bookings };
          delete newBookings[propertyId];
          return { bookings: newBookings };
        }

        const newBookings = { ...state.bookings };
        newBookings[propertyId] = {
           ...currentBooking,
           isCalculating: false
        };
        return { bookings: newBookings };
      }),
    }),
    {
      name: 'girstay-booking-store',
      version: 1, // support future migrations
    }
  )
);
