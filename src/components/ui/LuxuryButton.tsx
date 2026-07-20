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
        className={cn("luxury-button px-8 py-3", className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LuxuryButton.displayName = "LuxuryButton";
