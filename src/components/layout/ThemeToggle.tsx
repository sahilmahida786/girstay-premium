"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "relative w-10 h-10 rounded-full glass flex items-center justify-center",
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 rounded-full bg-muted animate-pulse" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-10 h-10 rounded-full glass flex items-center justify-center",
        "hover:shadow-gold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun
        className={cn(
          "w-5 h-5 absolute transition-all duration-500",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-gold"
        )}
      />
      <Moon
        className={cn(
          "w-5 h-5 absolute transition-all duration-500",
          isDark
            ? "rotate-0 scale-100 opacity-100 text-gold"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  );
}
