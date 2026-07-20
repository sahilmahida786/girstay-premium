"use client";

import React, { useEffect } from "react";
import { m } from "framer-motion";
import { ConfirmationHeader } from "@/components/booking/confirmation/ConfirmationHeader";
import { BookingSummaryCard } from "@/components/booking/confirmation/BookingSummaryCard";
import { QuickActionsGrid } from "@/components/booking/confirmation/QuickActionsGrid";
import { BookingTimeline } from "@/components/booking/confirmation/BookingTimeline";
import { TripPreparation } from "@/components/booking/confirmation/TripPreparation";
import { Crown } from "lucide-react";

// Mock Data for the Dashboard (Would normally come from API / Global State)
const MOCK_BOOKING = {
  id: "GIR-7829-XL",
  guestName: "Alexander",
  resortName: "GirStay Premium Resort & Spa",
  roomName: "Luxury Wilderness Tent",
  checkIn: "24 Oct 2026",
  checkOut: "27 Oct 2026",
  guests: 2,
  nights: 3,
  amountPaid: 24500,
  balanceRemaining: 24500,
};

export default function BookingConfirmationPage() {
  // Scroll to top on load to ensure animation is seen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D9A94D]/30 pb-32">
      {/* Cinematic Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-[#D9A94D]/10 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        
        {/* The Orchestrator - Staggers all children seamlessly */}
        <m.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Header */}
          <ConfirmationHeader guestName={MOCK_BOOKING.guestName} />

          {/* Main Booking Summary */}
          <BookingSummaryCard 
            bookingId={MOCK_BOOKING.id}
            resortName={MOCK_BOOKING.resortName}
            roomName={MOCK_BOOKING.roomName}
            checkIn={MOCK_BOOKING.checkIn}
            checkOut={MOCK_BOOKING.checkOut}
            guests={MOCK_BOOKING.guests}
            nights={MOCK_BOOKING.nights}
            amountPaid={MOCK_BOOKING.amountPaid}
            balanceRemaining={MOCK_BOOKING.balanceRemaining}
          />

          {/* Quick Actions (Buttons) */}
          <QuickActionsGrid />

          {/* Journey Timeline */}
          <BookingTimeline />

          {/* Trip Prep */}
          <TripPreparation />

          {/* Loyalty Upsell Banner */}
          <m.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
            }}
            className="bg-gradient-to-br from-[#D9A94D] to-[#B8832C] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 flex items-center gap-4 text-black">
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl mb-1">Join GirStay Rewards</h4>
                <p className="text-black/70 text-sm max-w-md">Create an account to save this booking and earn complimentary room upgrades on future stays.</p>
              </div>
            </div>
            <button className="relative z-10 w-full sm:w-auto px-8 py-4 bg-black text-[#D9A94D] font-semibold rounded-xl hover:bg-black/90 transition-colors shadow-lg active:scale-95">
              Create Account
            </button>
          </m.div>

        </m.div>
      </div>
    </div>
  );
}
