"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Determine the color based on the rating
    let color = "#10b981"; // green / good
    if (metric.rating === "needs-improvement") color = "#f59e0b"; // yellow
    if (metric.rating === "poor") color = "#ef4444"; // red

    if (process.env.NODE_ENV !== "production") {
      console.log(
        `%c[Web Vitals] %c${metric.name}: ${Math.round(metric.value * 10) / 10}`,
        "color: #888; font-weight: bold;",
        `color: ${color}; font-weight: bold;`
      );
    }

    // In a real production app, you would send this to Google Analytics or a custom endpoint:
    // fetch('/api/analytics', { body: JSON.stringify(metric), method: 'POST' })
  });

  return null;
}
