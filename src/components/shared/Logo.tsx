"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 group", className)}
    >
      {/* Lion icon SVG */}
      <div className="relative">
        <svg
          viewBox="0 0 40 40"
          className={cn(
            "transition-transform duration-500 group-hover:scale-110",
            size === "sm" ? "w-7 h-7" : size === "md" ? "w-9 h-9" : "w-12 h-12"
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized lion paw / crown mark */}
          <circle cx="20" cy="20" r="18" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
          <path
            d="M12 24C12 24 14 16 20 14C26 16 28 24 28 24"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="16" cy="20" r="1.5" className="fill-primary" />
          <circle cx="24" cy="20" r="1.5" className="fill-primary" />
          <path
            d="M18 23C18 23 20 25 22 23"
            className="stroke-primary"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M14 12L16 15M26 12L24 15M20 10L20 13"
            className="stroke-primary"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-gir animate-pulse" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading font-bold tracking-tight gradient-gold-text",
              sizes[size]
            )}
          >
            GirStay
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Premium
          </span>
        </div>
      )}
    </Link>
  );
}
