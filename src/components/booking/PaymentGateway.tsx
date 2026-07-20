"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Wallet, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Shield, 
  AlertCircle,
  Loader2
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { LuxuryButton } from "@/components/ui/LuxuryButton";

type PaymentState = "IDLE" | "PROCESSING" | "ERROR" | "SUCCESS";

interface PaymentGatewayProps {
  advanceAmount: number;
  totalAmount: number;
  onPreviousStep: () => void;
}

const PAYMENT_METHODS = [
  { id: "upi", title: "UPI (GPay, PhonePe, Paytm)", description: "Pay instantly via your UPI app", icon: <Smartphone className="w-5 h-5" /> },
  { id: "card", title: "Credit / Debit Card", description: "Visa, Mastercard, Amex, RuPay", icon: <CreditCard className="w-5 h-5" /> },
  { id: "netbanking", title: "Net Banking", description: "All major Indian banks supported", icon: <Building2 className="w-5 h-5" /> },
  { id: "wallet", title: "Wallets", description: "Mobikwik, Freecharge, OlaMoney", icon: <Wallet className="w-5 h-5" /> },
];

const PROCESSING_STEPS = [
  "Verifying booking details...",
  "Securing your dates...",
  "Establishing secure connection...",
  "Confirming payment...",
];

export function PaymentGateway({ advanceAmount, totalAmount, onPreviousStep }: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [paymentState, setPaymentState] = useState<PaymentState>("IDLE");
  const [processingStepIndex, setProcessingStepIndex] = useState(0);

  // Simulated Payment State Machine
  useEffect(() => {
    let stepInterval: NodeJS.Timeout;
    let finishTimeout: NodeJS.Timeout;

    if (paymentState === "PROCESSING") {
      setProcessingStepIndex(0);
      
      // Cycle through processing messages
      stepInterval = setInterval(() => {
        setProcessingStepIndex((prev) => (prev < PROCESSING_STEPS.length - 1 ? prev + 1 : prev));
      }, 800);

      // Simulate a network outcome after 3.5 seconds
      finishTimeout = setTimeout(() => {
        clearInterval(stepInterval);
        // Randomly simulate an error 10% of the time for demonstration, otherwise success.
        // (In a real app, this would be Razorpay's callback)
        const isError = Math.random() < 0.1;
        setPaymentState(isError ? "ERROR" : "SUCCESS");
      }, 3500);
    }

    if (paymentState === "SUCCESS") {
      // Route to confirmation after 2 seconds
      setTimeout(() => {
        window.location.href = "/booking/confirmation";
      }, 2000);
    }

    return () => {
      clearInterval(stepInterval);
      clearTimeout(finishTimeout);
    };
  }, [paymentState]);

  const handlePaySecurely = () => {
    setPaymentState("PROCESSING");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {paymentState === "IDLE" || paymentState === "ERROR" ? (
          <m.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Error Message */}
            <AnimatePresence>
              {paymentState === "ERROR" && (
                <m.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-red-400 font-medium text-sm">Payment Failed</h4>
                    <p className="text-red-400/80 text-xs mt-1">We couldn't process your payment. Your booking details are saved. Please try again or select a different payment method.</p>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

            {/* Methods */}
            <div className="space-y-3">
              <h3 className="font-heading font-medium text-white/90 mb-4 text-lg">Select Payment Method</h3>
              {PAYMENT_METHODS.map((method) => (
                <PaymentMethodCard
                  key={method.id}
                  id={method.id}
                  title={method.title}
                  description={method.description}
                  icon={method.icon}
                  isSelected={selectedMethod === method.id}
                  onSelect={setSelectedMethod}
                  disabled={paymentState !== "IDLE" && paymentState !== "ERROR"}
                />
              ))}
            </div>

            {/* Desktop Navigation & CTA (Hidden on Mobile) */}
            <div className="hidden lg:flex justify-between items-center pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onPreviousStep}
                className="px-6 py-3 text-white/60 hover:text-white transition-colors"
              >
                Back
              </button>
              <LuxuryButton 
                onClick={handlePaySecurely}
                className="px-8 h-14 text-base"
              >
                <Lock className="w-4 h-4 mr-2" />
                Pay {formatPrice(advanceAmount)} Securely
              </LuxuryButton>
            </div>

            {/* Mobile Sticky CTA */}
            <m.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4 pb-safe-offset lg:hidden flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
              <button
                type="button"
                onClick={onPreviousStep}
                className="px-4 py-3 border border-white/20 rounded-xl text-white/80 active:bg-white/10 shrink-0"
              >
                Back
              </button>
              <LuxuryButton 
                onClick={handlePaySecurely}
                className="flex-1 h-[52px]"
              >
                <Lock className="w-4 h-4 mr-2 opacity-70" />
                Pay {formatPrice(advanceAmount)}
              </LuxuryButton>
            </m.div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 pb-20 lg:pb-0">
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D9A94D]" />
                <span>256-bit SSL Secure</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                <Lock className="w-4 h-4 text-[#D9A94D]" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#D9A94D]" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-[#D9A94D]" />
                <span>Privacy Protected</span>
              </div>
            </div>
          </m.div>
        ) : paymentState === "PROCESSING" ? (
          <m.div
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-20 px-4 min-h-[400px]"
          >
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
              <div className="absolute inset-0 border-4 border-[#D9A94D] border-t-transparent rounded-full animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-[#D9A94D] animate-pulse" />
              </div>
            </div>
            
            <h3 className="luxury-heading text-2xl text-center mb-2">Processing Payment</h3>
            
            <div className="h-6 relative w-full max-w-[240px] flex justify-center overflow-hidden">
              <AnimatePresence mode="popLayout">
                <m.p
                  key={processingStepIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="text-sm text-white/60 absolute"
                >
                  {PROCESSING_STEPS[processingStepIndex]}
                </m.p>
              </AnimatePresence>
            </div>
            <p className="text-xs text-white/40 mt-8 text-center max-w-xs">
              Please do not close this window or press the back button.
            </p>
          </m.div>
        ) : (
          <m.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col items-center justify-center py-20 px-4 min-h-[400px]"
          >
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30 relative"
            >
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-50" />
              <Check className="w-12 h-12 text-emerald-400" />
            </m.div>
            
            <h3 className="luxury-heading text-3xl text-center mb-3">Payment Successful</h3>
            <p className="text-white/60 text-center mb-8">
              Your booking at GirStay Premium has been confirmed.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-[#D9A94D]">
              <Loader2 className="w-4 h-4 animate-spin" />
              Redirecting to your itinerary...
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
