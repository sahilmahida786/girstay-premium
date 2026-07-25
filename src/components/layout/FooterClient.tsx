"use client";

import { useRef, useState, useId } from "react";
import { m, LazyMotion, domAnimation, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";
import { Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────
//  LUXURY MOTION CONSTANTS
// ─────────────────────────────────────────────
const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;
const EASE_SNAP = [0.25, 1, 0.5, 1] as const;
const DUR_ENTER = 0.72;
const DUR_MICRO = 0.26;
const DUR_CONFIRM = 0.48;

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

export function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation} strict>{children}</LazyMotion>;
}

export function MotionBackgroundFade({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={className}
      aria-hidden="true"
    >
      {children}
    </m.div>
  );
}

export function MotionTrustBadgeRow({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      initial={reduced ? {} : { opacity: 0, y: 10 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
      className={className}
      aria-label="Trust indicators"
    >
      {children}
    </m.div>
  );
}

export function MotionTrustBadge({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      whileHover={reduced ? {} : { y: -2, scale: 1.02 }}
      transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
      className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-white/80 text-[11.5px] tracking-[0.06em] uppercase whitespace-nowrap select-none will-change-transform cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {children}
    </m.div>
  );
}

export function MotionContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      variants={reduced ? {} : container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function MotionItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div variants={reduced ? {} : item} className={className}>
      {children}
    </m.div>
  );
}

export function MotionItemNav({ children, className, ariaLabel }: { children: React.ReactNode; className?: string; ariaLabel?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.nav variants={reduced ? {} : item} className={className} aria-label={ariaLabel}>
      {children}
    </m.nav>
  );
}

export function MotionItemAddress({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <m.address variants={reduced ? {} : item} className={className}>
      {children}
    </m.address>
  );
}

export function MotionBottomBar({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      variants={reduced ? {} : bottomBar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}

export function PrimaryCTAClient({ children, href, ariaLabel }: { children: React.ReactNode; href: string; ariaLabel: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
      whileTap={reduced ? {} : { scale: 0.97 }}
      transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
      className="w-full"
    >
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center gap-3 w-full h-[60px] px-9 rounded-2xl font-semibold text-[14px] uppercase tracking-[0.16em] text-[#070605] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] will-change-transform overflow-hidden touch-manipulation"
        style={{
          background: "linear-gradient(135deg, #F7D58B 0%, #D9A94D 50%, #B8832C 100%)",
          boxShadow: "0 10px 32px rgba(217,169,77,0.30), 0 2px 10px rgba(217,169,77,0.15)",
        }}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    </m.div>
  );
}

export function SecondaryCTAClient({ children, href, ariaLabel }: { children: React.ReactNode; href: string; ariaLabel: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      whileHover={reduced ? {} : { y: -1 }}
      whileTap={reduced ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-2.5 w-full h-[52px] px-7 rounded-2xl text-[13px] font-medium uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] will-change-transform touch-manipulation"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </m.div>
  );
}

export function QuickLinkClient({ href, label }: { href: string; label: string }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      whileHover={reduced ? {} : { x: 4 }}
      transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
      className="relative block w-fit"
    >
      <Link
        href={href}
        className="group relative flex items-center min-h-[48px] text-[15px] text-white/70 hover:text-[#D9A94D] tracking-wide leading-relaxed transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] rounded-md px-2 -ml-2 touch-manipulation pb-[3px]"
      >
        <span className="relative inline-block">
          {label}
          {!reduced && (
            <span
              className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ background: "rgba(217,169,77,0.45)" }}
              aria-hidden="true"
            />
          )}
        </span>
      </Link>
    </m.div>
  );
}

export function ContactItemClient({
  href,
  external = false,
  icon,
  label,
  text,
  action,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  text: string;
  action: string;
}) {
  const reduced = useReducedMotion();
  const Tag = href ? "a" : "span";
  const props = {
    ...(href && { href }),
    ...(external && { target: "_blank", rel: "noopener noreferrer" }),
    "aria-label": label,
    className:
      "group relative flex items-center gap-4 min-h-[52px] py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] focus-visible:rounded-xl touch-manipulation w-fit pr-2",
  };

  return (
    <Tag {...(props as any)}>
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

      <span className="flex flex-col min-w-0 relative pb-[3px]">
        <span className="text-[15px] text-white/80 group-hover:text-[#D9A94D] tracking-wide leading-snug transition-colors duration-300 truncate relative inline-block w-fit">
          {text}
          {!reduced && (
            <span
              className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              style={{ background: "rgba(217,169,77,0.45)" }}
              aria-hidden="true"
            />
          )}
        </span>
        <span className="text-[11px] text-white/60 uppercase tracking-[0.15em] mt-0.5">
          {action}
        </span>
      </span>
    </Tag>
  );
}

export function SocialIconClient({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <m.a
      href={href}
      target="_blank"
      rel="me noopener noreferrer"
      aria-label={`Follow GirStay Premium on ${label}`}
      whileHover={
        reduced
          ? {}
          : {
              scale: 1.05,
              rotate: 2,
            }
      }
      whileTap={reduced ? {} : { scale: 0.96 }}
      transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
      className="flex items-center justify-center w-14 h-14 lg:w-[52px] lg:h-[52px] rounded-full text-white/70 hover:text-[#D9A94D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] will-change-transform transition-colors duration-300 touch-manipulation"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {children}
      <span className="sr-only">{label}</span>
    </m.a>
  );
}

export function WhatsAppFloatClient({ href, children }: { href: string; children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduced ? {} : { scale: 1.1 }}
      whileTap={reduced ? {} : { scale: 0.92 }}
      transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
      className="fixed bottom-[104px] lg:bottom-6 right-4 sm:right-6 z-40 w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 will-change-transform touch-manipulation"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 8px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.4)",
      }}
      aria-label="Open WhatsApp chat with GirStay Premium"
    >
      {children}
    </m.a>
  );
}

type NLStatus = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const reduced = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NLStatus>("idle");
  const [touched, setTouched] = useState(false);
  const inputId = useId();
  const statusId = useId();

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const hasError = touched && email.length > 0 && !isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!email || !isValidEmail(email)) return;

    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
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

  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  return (
    <section aria-labelledby="newsletter-heading" className="flex flex-col gap-4">
      <div>
        <h2 id="newsletter-heading" className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
          Stay Inspired
        </h2>
        <div className="h-px w-8 mt-2" style={{ background: "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)" }} aria-hidden="true" />
      </div>

      <p className="text-[14px] text-white/70 leading-relaxed tracking-wide">
        Receive exclusive offers, seasonal escapes, and wildlife stories — curated for discerning travelers.
      </p>

      <form onSubmit={handleSubmit} noValidate aria-describedby={statusId}>
        {/* Anti-spam honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label htmlFor={inputId} className="sr-only">Your email address</label>

        <m.div
          animate={reduced ? {} : { y: focused ? -1 : 0 }}
          transition={{ duration: DUR_MICRO, ease: EASE_SNAP }}
          className="flex items-center w-full rounded-2xl overflow-hidden will-change-transform"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: hasError ? "1px solid rgba(239,68,68,0.8)" : focused ? "1px solid rgba(217,169,77,0.80)" : "1px solid rgba(255,255,255,0.15)",
            boxShadow: hasError ? "0 0 0 2px #070605, 0 0 0 4px rgba(239,68,68,0.8)" : focused ? "0 0 0 2px #070605, 0 0 0 4px #D9A94D, 0 4px 16px rgba(217,169,77,0.06)" : undefined,
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
        >
          <input
            id={inputId}
            name="email"
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
            className="flex-1 h-[56px] bg-transparent px-5 text-[15px] text-white/90 placeholder:text-white/60 placeholder:tracking-wide focus:outline-none caret-[#D9A94D] min-w-0 disabled:opacity-50"
          />
          <m.button
            type="submit"
            disabled={isBusy || status === "success"}
            whileHover={reduced || isBusy ? {} : { scale: 1.06 }}
            whileTap={reduced || isBusy ? {} : { scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="shrink-0 w-12 h-12 mr-2 rounded-xl flex items-center justify-center will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] touch-manipulation disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, #F7D58B 0%, #D9A94D 60%, #B8832C 100%)",
              boxShadow: "0 4px 14px rgba(217,169,77,0.2)",
            }}
            aria-label={isBusy ? "Subscribing…" : "Subscribe to GirStay Premium newsletter"}
          >
            {isBusy ? <Loader2 className="w-4 h-4 text-[#070605] animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4 text-[#070605]" strokeWidth={2} aria-hidden="true" />}
          </m.button>
        </m.div>

        {hasError && (
          <p id={`${inputId}-error`} className="mt-2 flex items-center gap-1.5 text-[12px] text-red-400 tracking-wide font-medium" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            Please enter a valid email address.
          </p>
        )}

        <div id={statusId} aria-live="polite" aria-atomic="true" className="sr-only">
          {status === "loading" && "Subscribing, please wait…"}
          {status === "success" && "You're now part of the GirStay Premium community. Welcome."}
          {status === "error" && "Something went wrong. Please try again."}
        </div>

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
              <CheckCircle2 className="w-4 h-4 text-[#D9A94D] shrink-0 mt-0.5" strokeWidth={1.8} aria-hidden="true" />
              <p className="text-[13px] text-white/80 leading-relaxed tracking-wide">
                You&apos;re now part of the <span className="text-[#D9A94D] font-medium">GirStay Premium</span> community. Expect only the finest in your inbox.
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
              className="mt-3 flex items-center gap-1.5 text-[13px] text-red-400 tracking-wide font-medium"
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
