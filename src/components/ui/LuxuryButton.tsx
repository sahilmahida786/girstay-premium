import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const LuxuryButton = React.forwardRef<HTMLButtonElement, LuxuryButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "luxury-button px-6 sm:px-8 py-3.5 sm:py-3 min-h-[52px]", 
          "active:scale-[0.97] transition-transform touch-manipulation", // Deep press feedback for mobile
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";
