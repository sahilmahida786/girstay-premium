"use client";

import React, { useState, useId } from "react";
import { m, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LuxuryFloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isValid?: boolean;
  icon?: React.ReactNode;
}

export const LuxuryFloatingInput = React.forwardRef<HTMLInputElement, LuxuryFloatingInputProps>(
  ({ label, error, isValid, icon, className, id: externalId, value, onChange, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const id = externalId || generatedId;
    const errorId = `${id}-error`;
    
    // Check if the input has content (either controlled value or uncontrolled default)
    const hasValue = value !== undefined && value !== null && value !== "";

    return (
      <div className={cn("relative w-full group", className)}>
        {/* Main Input Container */}
        <div 
          className={cn(
            "relative flex items-center w-full min-h-[56px] rounded-xl border transition-all duration-300",
            "bg-white/5 backdrop-blur-sm",
            isFocused 
              ? "border-[#D9A94D] shadow-[0_0_0_4px_rgba(217,169,77,0.1)] bg-white/10" 
              : error 
                ? "border-red-500/50 bg-red-500/5"
                : "border-white/10 hover:border-white/30"
          )}
        >
          {/* Left Icon */}
          {icon && (
            <div 
              aria-hidden="true"
              className={cn(
                "absolute left-4 transition-colors duration-300 pointer-events-none",
                isFocused ? "text-[#D9A94D]" : error ? "text-red-400" : "text-white/40"
              )}
            >
              {icon}
            </div>
          )}

          {/* Floating Label */}
          <label
            htmlFor={id}
            className={cn(
              "absolute transition-all duration-300 pointer-events-none z-10",
              icon ? "left-12" : "left-4",
              isFocused || hasValue
                ? "top-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#D9A94D]"
                : "top-1/2 -translate-y-1/2 text-base text-white/50"
            )}
          >
            {label}
            {props.required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
          </label>

          {/* Actual Input */}
          <input
            id={id}
            ref={ref}
            value={value}
            onChange={onChange}
            onFocus={(e) => {
              setIsFocused(true);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              if (onBlur) onBlur(e);
            }}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "w-full h-full bg-transparent outline-none text-white/90 text-base font-medium px-4 pt-5 pb-1.5",
              icon && "pl-12",
              "placeholder:text-transparent", // Hide default placeholder in favor of floating label
              // Mobile specific improvements
              "touch-manipulation"
            )}
            // Prevent zoom on mobile by forcing 16px font-size if necessary, but text-base should be 16px.
            {...props}
          />

          {/* Right Validation Icon */}
          <div className="absolute right-4 flex items-center pointer-events-none" aria-hidden="true">
            <AnimatePresence mode="wait">
              {isValid && !error && hasValue && (
                <m.div
                  key="valid"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </m.div>
              )}
              {error && (
                <m.div
                  key="error"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Error Message Helper */}
        <div aria-live="polite" aria-atomic="true">
          <AnimatePresence>
            {error && (
              <m.p
                id={errorId}
                initial={{ opacity: 0, height: 0, y: -5 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -5 }}
                className="text-sm text-red-400 mt-2 pl-2 font-medium"
              >
                {error}
              </m.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

LuxuryFloatingInput.displayName = "LuxuryFloatingInput";
