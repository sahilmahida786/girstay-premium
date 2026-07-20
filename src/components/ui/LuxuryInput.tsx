import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const LuxuryInput = React.forwardRef<HTMLInputElement, LuxuryInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2",
          "text-sm sm:text-base text-white shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-white/40 focus-visible:outline-none focus-visible:border-[#D9A94D]/50 focus-visible:ring-1 focus-visible:ring-[#D9A94D]/50",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

LuxuryInput.displayName = "LuxuryInput";
