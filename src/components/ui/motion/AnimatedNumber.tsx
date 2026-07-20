"use client";

import React, { useEffect, useState } from "react";
import { m, useSpring, useTransform, animate } from "framer-motion";
import { luxuryEase } from "@/lib/motion-tokens";

interface AnimatedNumberProps {
  value: number;
  format?: (val: number) => string;
  className?: string;
}

export function AnimatedNumber({ value, format, className }: AnimatedNumberProps) {
  // Use a spring for a smooth, organic count-up/down
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.5,
  });

  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [springValue]);

  const defaultFormat = (val: number) => Math.round(val).toLocaleString();
  const formatter = format || defaultFormat;

  return (
    <m.span className={className}>
      {formatter(displayValue)}
    </m.span>
  );
}
