import { useReducedMotion } from "framer-motion";

export function useAnimationConfig() {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    initial: shouldReduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-50px" },
  };
}
