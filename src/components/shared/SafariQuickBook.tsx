"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Users, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SafariQuickBook() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");

  const handleBook = () => {
    // In a real app, this would pass params to the booking engine
    router.push("/activities/safari");
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-gir/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
          Quick <span className="gradient-gold-text">Permit Check</span>
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Safari permits sell out 45 days in advance. Check availability now.
        </p>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Safari Date
            </label>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="date"
                min={todayStr}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-9 pr-3 py-3 text-sm rounded-xl border border-border/50 bg-background/50 focus:bg-background outline-none transition-colors [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Passengers
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-9 pr-3 py-3 text-sm rounded-xl border border-border/50 bg-background/50 focus:bg-background outline-none appearance-none transition-colors"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n} className="bg-background">
                    {n} {n === 1 ? "Person" : "People"} (1 Jeep)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button
            onClick={handleBook}
            className="w-full h-12 mt-2 gradient-emerald text-white shadow-luxury font-bold rounded-xl gap-2 hover:scale-[1.02] transition-transform"
          >
            Check Availability
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Official Government Permit Provider
          </div>
        </div>
      </div>
    </div>
  );
}
