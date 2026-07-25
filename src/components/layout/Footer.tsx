"use client";

import Link from "next/link";
import { useState, useId, useRef } from "react";
import { Logo } from "@/components/shared/Logo";
import { SOCIAL_LINKS, CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Star,
  Headphones,
  Gem,
  CheckCircle2,
  Leaf,
  Binoculars,
  Send,
  Lock,
  BadgeCheck,
  Smile,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { m, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";

// ─────────────────────────────────────────────
//  LUXURY MOTION CONSTANTS
//  Single source of truth for all easing curves.
//  GPU-only: only transform + opacity are animated.
// ─────────────────────────────────────────────

// Primary luxury ease — slow-in, crisp-out (Apple-esque)
const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
// Snappy micro-interaction ease — for press/hover responses
const EASE_SNAP = [0.25, 1, 0.5, 1] as const;
// Duration constants (ms converted to seconds for framer-motion)
const DUR_ENTER = 0.72;     // Page-entry stagger children
const DUR_MICRO = 0.26;     // Hover / press response
const DUR_CONFIRM = 0.48;   // Success / confirmation fade

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "Explore Resorts", href: "/properties" },
  { label: "Safari & Activities", href: "/activities" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gir Jungle Safari", href: "/activities/safari" },
] as const;

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/contact" },
  { label: "Terms of Service", href: "/contact" },
  { label: "Cancellation", href: "/contact" },
  { label: "Refund Policy", href: "/contact" },
  { label: "Cookie Policy", href: "/contact" },
] as const;

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Verified Luxury Properties" },
  { icon: Star, label: "Premium Guest Support" },
  { icon: Headphones, label: "Concierge Assistance" },
  { icon: Gem, label: "Carefully Curated Stays" },
  { icon: CheckCircle2, label: "Secure Booking" },
] as const;

const BRAND_HIGHLIGHTS = [
  {
    icon: Gem,
    title: "Handpicked Luxury Resorts",
    desc: "Every property is personally vetted to meet our exacting standards.",
  },
  {
    icon: Leaf,
    title: "Trusted Local Hospitality",
    desc: "Rooted in Sasan Gir, trusted by thousands of discerning travelers.",
  },
  {
    icon: Binoculars,
    title: "Curated Wildlife Experiences",
    desc: "Exclusive safaris and nature encounters, reserved for our guests.",
  },
] as const;

const SOCIAL = [
  {
    key: "instagram",
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahil-mahida-115835317",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

// ─────────────────────────────────────────────
//  CONTACT ITEM
//  ─ 52px tap target (WCAG + Apple HIG)
//  ─ Gold underline grows L→R on hover (scaleX, GPU-only)
//  ─ Icon badge lifts on hover
// ─────────────────────────────────────────────

function ContactItem({
  href,
  external = false,
  icon,
  label,
  text,
  action,
  reduced,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  text: string;
  action: string;
  reduced: boolean | null;
}) {
  const Tag = href ? "a" : "span";
  const props = {
    ...(href && { href }),
    ...(external && { target: "_blank", rel: "noopener noreferrer" }),
    "aria-label": label,
    className:
      "group relative flex items-center gap-4 min-h-[52px] py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:rounded-xl touch-manipulation",
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag {...(props as any)}>
      {/* Icon badge — lifts 2px, scales 1.08 on hover */}
      <m.span
        whileHover={reduced ? {} : { scale: 1.08, y: -2 }}
        whileTap={reduced ? {} : { scale: 0.94 }}
        transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
        className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center text-[#D9A94D] will-change-transform"
        style={{ background: "rgba(217,169,77,0.07)", border: "1px solid rgba(217,169,77,0.12)" }}
        aria-hidden="true"
      >
        {icon}
      </m.span>

      {/* Text + action label + gold underline grow */}
      <span className="flex flex-col min-w-0 relative pb-[3px]">
        <span className="text-[15px] text-white/70 group-hover:text-[#D9A94D] tracking-wide leading-snug transition-colors duration-300 truncate">
          {text}
        </span>
        <span className="text-[11px] text-white/30 uppercase tracking-[0.15em] mt-0.5">
          {action}
        </span>
        {/* Underline grows L→R on hover — GPU transform only */}
        {!reduced && (
          <m.span
            className="absolute bottom-0 left-0 h-px w-full origin-left"
            style={{ background: "rgba(217,169,77,0.45)" }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
            aria-hidden="true"
          />
        )}
      </span>
    </Tag>
  );
}

// ─────────────────────────────────────────────
//  NEWSLETTER — Premium conversion form
//  States: idle → loading → success | error
//  Fully accessible: live regions, labels, aria
// ─────────────────────────────────────────────

type NLStatus = "idle" | "loading" | "success" | "error";

function NewsletterForm({ reduced }: { reduced: boolean | null }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NLStatus>("idle");
  const [touched, setTouched] = useState(false);
  const inputId = useId();
  const statusId = useId();

  // Simple RFC-5322 light validation
  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const hasError = touched && email.length > 0 && !isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!email || !isValidEmail(email)) return;

    setStatus("loading");
    try {
      // ── Wire to your email provider here ──
      // e.g. await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
      await new Promise((r) => setTimeout(r, 900)); // simulated latency
      setStatus("success");
      setEmail("");
      setTouched(false);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isBusy = status === "loading";

  // Newsletter input focus tracking — drives gold ring via JS
  // (CSS :focus-within is unreliable across some mobile browsers)
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  return (
    <section aria-labelledby="newsletter-heading" className="flex flex-col gap-4">
      {/* Heading + gold rule */}
      <div>
        <h2
          id="newsletter-heading"
          className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]"
        >
          Stay Inspired
        </h2>
        <div
          className="h-px w-8 mt-2"
          style={{ background: "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)" }}
          aria-hidden="true"
        />
      </div>

      {/* Premium copy — never generic "subscribe" language */}
      <p className="text-[14px] text-white/45 leading-relaxed tracking-wide">
        Receive exclusive offers, seasonal escapes, and wildlife stories —
        curated for discerning travelers.
      </p>

      <form onSubmit={handleSubmit} noValidate aria-describedby={statusId}>
        <label htmlFor={inputId} className="sr-only">
          Your email address
        </label>

        {/* Input wrapper — animated gold border on focus, red on error. GPU: opacity via CSS transition */}
        <m.div
          animate={reduced ? {} : {
            // Subtle lift when focused — transform only
            y: focused ? -1 : 0,
          }}
          transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
          className="flex items-center w-full rounded-2xl overflow-hidden will-change-transform"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: hasError
              ? "1px solid rgba(239,68,68,0.5)"
              : focused
              ? "1px solid rgba(217,169,77,0.50)"
              : "1px solid rgba(255,255,255,0.09)",
            // Subtle glow on focus — kept very faint so it feels premium not aggressive
            boxShadow: hasError
              ? "0 0 0 3px rgba(239,68,68,0.08)"
              : focused
              ? "0 0 0 3px rgba(217,169,77,0.08), 0 4px 16px rgba(217,169,77,0.06)"
              : undefined,
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
        >
          <input
            id={inputId}
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); setTouched(true); }}
            placeholder="Your email address"
            autoComplete="email"
            inputMode="email"
            disabled={isBusy || status === "success"}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={hasError ? `${inputId}-error` : undefined}
            className="flex-1 h-[56px] bg-transparent px-5 text-[15px] text-white/80 placeholder:text-white/25 placeholder:tracking-wide focus:outline-none caret-[#D9A94D] min-w-0 disabled:opacity-50"
          />
          {/* Submit button — 48×48px, gold gradient */}
          <m.button
            type="submit"
            disabled={isBusy || status === "success"}
            whileHover={reduced || isBusy ? {} : { scale: 1.06 }}
            whileTap={reduced || isBusy ? {} : { scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="shrink-0 w-12 h-12 mr-2 rounded-xl flex items-center justify-center will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] touch-manipulation disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #F7D58B 0%, #D9A94D 60%, #B8832C 100%)",
              boxShadow: "0 4px 14px rgba(217,169,77,0.2)",
            }}
            aria-label={isBusy ? "Subscribing…" : "Subscribe to GirStay Premium newsletter"}
          >
            {isBusy ? (
              <Loader2
                className="w-4 h-4 text-[#070605] animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Send className="w-4 h-4 text-[#070605]" strokeWidth={2} aria-hidden="true" />
            )}
          </m.button>
        </m.div>

        {/* Inline error message */}
        {hasError && (
          <p
            id={`${inputId}-error`}
            className="mt-2 flex items-center gap-1.5 text-[12px] text-red-400/80 tracking-wide"
            role="alert"
          >
            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
            Please enter a valid email address.
          </p>
        )}

        {/* ARIA live region — announces state changes to screen readers */}
        <div id={statusId} aria-live="polite" aria-atomic="true" className="sr-only">
          {status === "loading" && "Subscribing, please wait…"}
          {status === "success" && "You're now part of the GirStay Premium community. Welcome."}
          {status === "error" && "Something went wrong. Please try again."}
        </div>

        {/* Success confirmation — elegant fade-up, not intrusive */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <m.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: DUR_CONFIRM, ease: EASE_LUXURY }}
              className="mt-3 flex items-start gap-2.5"
              role="status"
            >
              <CheckCircle2
                className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <p className="text-[13px] text-white/60 leading-relaxed tracking-wide">
                You&apos;re now part of the{" "}
                <span className="text-[#D9A94D] font-medium">GirStay Premium</span>{" "}
                community. Expect only the finest in your inbox.
              </p>
            </m.div>
          )}

          {status === "error" && (
            <m.p
              key="error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: EASE_SNAP }}
              className="mt-3 flex items-center gap-1.5 text-[13px] text-red-400/70 tracking-wide"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Something went wrong. Please try again.
            </m.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}

// ─────────────────────────────────────────────
//  MAIN FOOTER
// ─────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();
  const reduced = useReducedMotion();

  // ─────────────────────────────────────────────
  //  LUXURY MOTION VARIANTS
  //  container: stagger 80ms between children, 50ms initial delay
  //  item: y:20→0, opacity:0→1, 720ms with luxury ease
  //  bottomBar: own fade-up with 160ms delay after grid
  // ─────────────────────────────────────────────
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DUR_ENTER,
        ease: EASE_LUXURY as [number, number, number, number],
      },
    },
  };
  const bottomBar: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_LUXURY as [number, number, number, number], delay: 0.16 },
    },
  };

  return (
    <footer
      className="relative overflow-hidden"
      aria-label="Site footer"
      style={{ background: "#070605" }}
    >
      {/* ── CINEMATIC BACKGROUND LAYERS ── 
          Fades in softly as user reaches the footer (no parallax) */}
      <m.div
        initial={reduced ? {} : { opacity: 0 }}
        whileInView={reduced ? {} : { opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#070605]" />
        <div className="absolute -bottom-32 -left-24 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,60,36,0.45)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute -top-20 -right-20 w-[50vw] h-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,169,77,0.12)_0%,transparent_65%)] blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070605] to-transparent" />
      </m.div>

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(217,169,77,0.4) 30%, rgba(247,213,139,0.6) 50%, rgba(217,169,77,0.4) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════
          TRUST BADGES ROW
          Horizontal scroll on mobile (320–768px)
          No overflow, no clipping, -webkit-overflow-scrolling for momentum
          ══════════════════════════════════════════════ */}
      <m.div
        initial={reduced ? {} : { opacity: 0, y: 10 }}
        whileInView={reduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20"
        aria-label="Trust indicators"
      >
        <ul
          className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
          role="list"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <li key={label} className="shrink-0">
              {/* Soft lift + background highlight on hover — GPU transform only */}
              <m.div
                whileHover={reduced ? {} : { y: -2, scale: 1.02 }}
                transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-white/50 text-[11.5px] tracking-[0.06em] uppercase whitespace-nowrap select-none will-change-transform cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Icon className="w-3.5 h-3.5 text-[#D9A94D] shrink-0" strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </m.div>
            </li>
          ))}
        </ul>
      </m.div>

      {/* Separator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 mt-8">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(217,169,77,0.1) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT

          MOBILE STACKING ORDER (natural top→bottom):
          1. Brand + Statement
          2. Brand Highlights (Why Book)
          3. Primary CTA (highest priority)
          4. Newsletter
          5. Quick Links
          6. Contact (tap-to-action)
          7. Social (large circles, even spacing)

          DESKTOP: 12-col grid (preserved, unchanged)
          ══════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <m.div
          variants={reduced ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10"
        >

          {/* ══ COL 1 — Brand block (desktop spans 4/12) ══ */}
          <m.div
            variants={reduced ? {} : item}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {/* Logo */}
            <Logo size="lg" />

            {/* Editorial brand statement */}
            <div className="flex flex-col gap-2">
              <p className="text-white/90 text-[17px] font-light tracking-wide leading-relaxed font-serif italic">
                Where the last Asiatic Lion roams free.
              </p>
              <p className="text-white/55 text-[15px] font-light leading-relaxed tracking-wide">
                We connect discerning travelers with Sasan Gir's finest
                handpicked resorts — so your only focus is the wilderness.
              </p>
            </div>

            {/* Why Book highlights */}
            <ul className="flex flex-col gap-5" role="list" aria-label="Why book with GirStay Premium">
              {BRAND_HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3.5">
                  <span
                    className="shrink-0 mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center text-[#D9A94D]"
                    style={{ background: "rgba(217,169,77,0.08)", border: "1px solid rgba(217,169,77,0.12)" }}
                    aria-hidden="true"
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[14px] text-white/85 font-medium tracking-wide leading-snug">
                      {title}
                    </span>
                    <span className="block text-[13px] text-white/40 font-light leading-relaxed mt-0.5">
                      {desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* ════════════════════════════════════════
                PRIMARY CTA — Dominant conversion action
                Full-width on mobile. 60px height.
                Gold gradient + shimmer + glow shadow.
                ════════════════════════════════════════ */}
            <div className="flex flex-col gap-3">
              <m.div
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
                transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
              >
                <Link
                  href="/properties"
                  className="group relative inline-flex items-center justify-center gap-3 w-full h-[60px] px-9 rounded-2xl font-semibold text-[14px] uppercase tracking-[0.16em] text-[#070605] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 will-change-transform overflow-hidden touch-manipulation"
                  style={{
                    background: "linear-gradient(135deg, #F7D58B 0%, #D9A94D 50%, #B8832C 100%)",
                    boxShadow:
                      "0 10px 32px rgba(217,169,77,0.30), 0 2px 10px rgba(217,169,77,0.15)",
                  }}
                  aria-label="Reserve your luxury Gir experience — browse handpicked resorts"
                >
                  {/* Shimmer sweep on hover */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transform: "skewX(-18deg)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">Reserve Your Luxury Stay</span>
                  <ArrowRight
                    className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </Link>
              </m.div>

              {/* Trust micro-badges — below CTA, understated reassurance */}
              <ul
                className="flex items-center gap-4 flex-wrap"
                role="list"
                aria-label="Booking assurances"
              >
                {[
                  { icon: Lock, text: "Secure Booking" },
                  { icon: BadgeCheck, text: "No Hidden Charges" },
                  { icon: Smile, text: "Trusted Hospitality" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-1.5 text-[11px] text-white/30 uppercase tracking-[0.08em]"
                  >
                    <Icon
                      className="w-3 h-3 text-[#D9A94D]/60 shrink-0"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SECONDARY CTA — lighter visual weight, ghost style */}
            <m.div
              whileHover={reduced ? {} : { y: -1 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 w-full h-[52px] px-7 rounded-2xl text-[13px] font-medium uppercase tracking-[0.14em] text-white/60 hover:text-white/90 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 will-change-transform touch-manipulation"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
                aria-label="Chat with GirStay Premium on WhatsApp to plan your stay"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-[#25D366] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat With Our Team</span>
              </a>
            </m.div>

            {/* ── NEWSLETTER — Full-width, mobile-optimized ── */}
            <NewsletterForm reduced={reduced} />
          </m.div>

          {/* ══ COL 2 — Quick Navigation ══ */}
          <m.nav
            variants={reduced ? {} : item}
            className="lg:col-span-3 flex flex-col gap-6"
            aria-label="Quick navigation"
          >
            <div>
              <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
                Explore
              </h2>
              <div
                className="h-px w-8 mt-2"
                style={{ background: "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)" }}
                aria-hidden="true"
              />
            </div>

            {/* Each link has min-h-[48px] for mobile touch compliance */}
            <ul className="flex flex-col" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href} className="group relative">
                  <m.div
                    whileHover={reduced ? {} : { x: 4 }}
                    transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center min-h-[48px] text-[15px] text-white/55 hover:text-[#D9A94D] tracking-wide leading-relaxed transition-colors duration-300 focus:outline-none focus-visible:underline focus-visible:text-[#D9A94D] touch-manipulation pb-[3px]"
                    >
                      {link.label}
                    </Link>
                    {/* Underline grows L→R on hover — GPU scaleX only */}
                    {!reduced && (
                      <m.span
                        className="absolute bottom-0 left-0 h-px w-full origin-left"
                        style={{ background: "rgba(217,169,77,0.4)" }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
                        aria-hidden="true"
                      />
                    )}
                  </m.div>
                </li>
              ))}
            </ul>
          </m.nav>

          {/* ══ COL 3 — Contact: tap-to-action ══ */}
          <m.address
            variants={reduced ? {} : item}
            className="lg:col-span-3 not-italic flex flex-col gap-6"
          >
            <div>
              <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
                Contact
              </h2>
              <div
                className="h-px w-8 mt-2"
                style={{ background: "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)" }}
                aria-hidden="true"
              />
            </div>

            <ul className="flex flex-col gap-1" role="list">
              <li>
                <ContactItem
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  icon={<Phone className="w-4 h-4" strokeWidth={1.5} />}
                  label={`Tap to call GirStay Premium at ${CONTACT_INFO.phone}`}
                  text={CONTACT_INFO.phone}
                  action="Tap to Call"
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href={`mailto:${CONTACT_INFO.email}`}
                  icon={<Mail className="w-4 h-4" strokeWidth={1.5} />}
                  label={`Send an email to GirStay Premium at ${CONTACT_INFO.email}`}
                  text={CONTACT_INFO.email}
                  action="Tap to Email"
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href="https://maps.google.com/?q=Sasan+Gir+Gujarat+India"
                  external
                  icon={<MapPin className="w-4 h-4" strokeWidth={1.5} />}
                  label="Open Sasan Gir location in Google Maps"
                  text="Sasan Gir, Gujarat"
                  action="Open Maps"
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href={SOCIAL_LINKS.whatsapp}
                  external
                  icon={
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  }
                  label="Open WhatsApp chat with GirStay Premium"
                  text="WhatsApp Us"
                  action="Open Chat"
                  reduced={reduced}
                />
              </li>
            </ul>
          </m.address>

          {/* ══ COL 4 — Social Links ══
              Mobile: 4 circles evenly spread across full width (justify-between)
              Desktop: stacked column  */}
          <m.div
            variants={reduced ? {} : item}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
                Follow Us
              </h2>
              <div
                className="h-px w-8 mt-2"
                style={{ background: "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)" }}
                aria-hidden="true"
              />
            </div>

            {/* Mobile: justify-between fills the row evenly (max 430px = ~90px per icon).
                Desktop: flex-col stacks them. Each circle is 56px for generous tap zone. */}
            <ul className="flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-3" role="list">
              {SOCIAL.map(({ key, label, href, svg }) => (
                <li key={key} className="flex items-center justify-center lg:justify-start">
                  <m.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow GirStay Premium on ${label}`}
                    whileHover={
                      reduced
                        ? {}
                        : {
                            scale: 1.05,
                            // Max 2° rotation — subtle, never dizzying
                            rotate: 2,
                          }
                    }
                    whileTap={reduced ? {} : { scale: 0.96 }}
                    transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
                    className="flex items-center justify-center w-14 h-14 lg:w-[52px] lg:h-[52px] rounded-full text-white/55 hover:text-[#D9A94D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 will-change-transform transition-colors duration-300 touch-manipulation"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    {svg}
                    <span className="sr-only">{label}</span>
                  </m.a>
                </li>
              ))}
            </ul>
          </m.div>

        </m.div>
      </div>

      {/* ── GRADIENT DIVIDER before bottom bar ── */}
      <m.div
        variants={reduced ? {} : bottomBar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="relative z-10 px-5 sm:px-8"
      >
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(217,169,77,0.18) 20%, rgba(255,255,255,0.05) 50%, rgba(217,169,77,0.18) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </m.div>

      {/* Bottom bar fades up after the grid settles */}
      <m.div
        variants={reduced ? {} : bottomBar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-6"
        style={{ paddingBottom: "max(2rem, calc(env(safe-area-inset-bottom) + 1.5rem))" }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Policy links — flex-wrap so they break cleanly at 320px */}
          <nav aria-label="Legal and policy links">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-3" role="list">
              {POLICY_LINKS.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-white/30 hover:text-white/60 tracking-wide transition-colors duration-300 focus:outline-none focus-visible:underline focus-visible:text-[#D9A94D] min-h-[44px] flex items-center touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright + Made in Gujarat */}
          <div className="flex flex-col gap-1 lg:text-right">
            <p className="text-[12.5px] text-white/25 tracking-wide">
              © {currentYear}{" "}
              <span className="text-white/40">{SITE_NAME}</span>. All rights reserved.
            </p>
            <p className="text-[11px] text-white/18 tracking-[0.1em] uppercase">
              Made with care in Gujarat, India
            </p>
          </div>

        </div>
      </m.div>

      {/* ── WHATSAPP FLOATING BUTTON ──
          bottom-[104px] on mobile clears the BottomNav (80px pill + 24px offset).
          Safe-area inset added so it also clears the iPhone home indicator on
          devices without a BottomNav overlap. */}
      <m.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={reduced ? {} : { scale: 1.1 }}
        whileTap={reduced ? {} : { scale: 0.92 }}
        transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
        // 56px on mobile — exceeds 48px minimum; large for one-handed tap
        className="fixed bottom-[104px] lg:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center will-change-transform touch-manipulation"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 8px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.4)",
        }}
        aria-label="Open WhatsApp chat with GirStay Premium"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </m.a>
    </footer>
  );
}
