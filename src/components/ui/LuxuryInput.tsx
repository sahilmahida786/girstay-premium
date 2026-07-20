import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const LuxuryInput = React.forwardRef<HTMLInputElement, LuxuryInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("luxury-input", className)}
        {...props}
      />
    );
  }
);

LuxuryInput.displayName = "LuxuryInput";
