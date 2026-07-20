"use server";

import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";

const GST_RATE = 0.18;
const EXTRA_GUEST_FEE = 2500;
const WEEKEND_SURGE_MULTIPLIER = 1.15;

export type PricingSummary = {
  baseTotal: number;
  extraGuestTotal: number;
  weekendSurgeTotal: number;
  gstTotal: number;
  grandTotal: number;
  nights: number;
};

export async function calculateBookingTotal(
  propertyId: string,
  checkInStr: string,
  checkOutStr: string,
  guests: number
): Promise<PricingSummary | { error: string }> {
  try {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
    });

    if (!property) return { error: "Property not found" };

    const checkIn = new Date(checkInStr);
    const checkOut = new Date(checkOutStr);

    if (checkOut <= checkIn) {
      return { error: "Check-out date must be after check-in date" };
    }

    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let weekendSurgeTotal = 0;
    let baseTotal = 0;

    for (let i = 0; i < nights; i++) {
      const currentDate = new Date(checkIn);
      currentDate.setDate(checkIn.getDate() + i);
      const dayOfWeek = currentDate.getDay(); // 0 = Sun, 6 = Sat
      
      if (dayOfWeek === 5 || dayOfWeek === 6) {
        weekendSurgeTotal += property.basePrice * (WEEKEND_SURGE_MULTIPLIER - 1);
        baseTotal += property.basePrice * WEEKEND_SURGE_MULTIPLIER;
      } else {
        baseTotal += property.basePrice;
      }
    }

    const extraGuests = Math.max(0, guests - 2); // Assuming base price covers 2 guests
    const extraGuestTotal = extraGuests * EXTRA_GUEST_FEE * nights;

    const preTaxTotal = baseTotal + extraGuestTotal;
    const gstTotal = preTaxTotal * GST_RATE;
    const grandTotal = preTaxTotal + gstTotal;

    return {
      baseTotal,
      extraGuestTotal,
      weekendSurgeTotal,
      gstTotal,
      grandTotal,
      nights,
    };
  } catch (error) {
    console.error("Pricing Error:", error);
    return { error: "Failed to calculate pricing" };
  }
}

export async function createBookingHold(
  propertyId: string,
  checkInStr: string,
  checkOutStr: string
) {
  try {
    const checkIn = new Date(checkInStr);
    const checkOut = new Date(checkOutStr);

    // 1. Find a room in the property that has NO overlapping holds OR confirmed bookings
    const availableRoom = await prisma.room.findFirst({
      where: {
        propertyId,
        AND: [
          {
            holds: {
              none: {
                expiresAt: { gt: new Date() },
                NOT: [
                  { checkOut: { lte: checkIn } },
                  { checkIn: { gte: checkOut } },
                ],
              },
            },
          },
          {
            bookings: {
              none: {
                status: { in: ["CONFIRMED", "PAYMENT_PENDING"] },
                NOT: [
                  { checkOut: { lte: checkIn } },
                  { checkIn: { gte: checkOut } },
                ],
              },
            },
          },
        ],
      },
    });

    if (!availableRoom) {
      return { error: "No rooms available for selected dates." };
    }

    // 2. Create the hold (15 minutes expiry)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const hold = await prisma.bookingHold.create({
      data: {
        roomId: availableRoom.id,
        checkIn,
        checkOut,
        expiresAt,
      },
    });

    return { holdId: hold.id, expiresAt };
  } catch (error) {
    console.error("Hold Error:", error);
    return { error: "Failed to create booking hold" };
  }
}
