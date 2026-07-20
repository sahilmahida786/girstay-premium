import React from "react";
import { cn } from "@/lib/utils";

interface LuxuryDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LuxuryDivider({ className, ...props }: LuxuryDividerProps) {
  return <div className={cn("luxury-divider", className)} {...props} />;
}
