import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function LuxuryCard({ children, className, ...props }: LuxuryCardProps) {
  return (
    <div className={cn("luxury-card", className)} {...props}>
      {children}
    </div>
  );
}
