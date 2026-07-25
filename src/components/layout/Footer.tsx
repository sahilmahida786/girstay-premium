"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { SOCIAL_LINKS, CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";

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

const SOCIAL = [
  {
    key: "instagram",
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "youtube",
    label: "YouTube",
    href: SOCIAL_LINKS.youtube,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sahil-mahida-115835317",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

// ─────────────────────────────────────────────
//  CONTACT ITEM (reusable micro-component)
// ─────────────────────────────────────────────

function ContactItem({
  href,
  external = false,
  icon,
  label,
  text,
  reduced,
}: {
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  text: string;
  reduced: boolean | null;
}) {
  const Tag = href ? "a" : "span";
  const props = {
    ...(href && { href }),
    ...(external && { target: "_blank", rel: "noopener noreferrer" }),
    "aria-label": label,
    className:
      "group flex items-center gap-4 text-[15px] text-white/60 hover:text-[#D9A94D] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:rounded-lg min-h-[52px]",
  };

  return (
    // @ts-expect-error dynamic tag
    <Tag {...props}>
      <m.span
        whileHover={reduced ? {} : { scale: 1.08 }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="shrink-0 w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#D9A94D] will-change-transform"
        aria-hidden="true"
      >
        {icon}
      </m.span>
      <span className="leading-relaxed tracking-wide">{text}</span>
    </Tag>
  );
}

// ─────────────────────────────────────────────
//  MAIN FOOTER
// ─────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();
  const reduced = useReducedMotion();

  // Stagger container
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <footer
      className="relative overflow-hidden"
      aria-label="Site footer"
      style={{ background: "#070605" }}
    >
      {/* ── CINEMATIC BACKGROUND LAYERS ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Layer 1: Deep charcoal base */}
        <div className="absolute inset-0 bg-[#070605]" />

        {/* Layer 2: Forest green radial – anchored bottom-left */}
        <div className="absolute -bottom-32 -left-24 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,60,36,0.45)_0%,transparent_70%)] blur-[120px]" />

        {/* Layer 3: Warm gold ambient – anchored top-right */}
        <div className="absolute -top-20 -right-20 w-[50vw] h-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,169,77,0.12)_0%,transparent_65%)] blur-[100px]" />

        {/* Layer 4: Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Layer 5: Luxury noise texture <2% opacity */}
        <div
          className="absolute inset-0 opacity-[0.018] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Seamless blend from previous section */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070605] to-transparent" />
      </div>

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(217,169,77,0.4) 30%, rgba(247,213,139,0.6) 50%, rgba(217,169,77,0.4) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── MAIN BODY ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <m.div
          variants={reduced ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10"
        >

          {/* ── COL 1 — Brand + CTA ── */}
          <m.div
            variants={reduced ? {} : item}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {/* Logo */}
            <Logo size="lg" />

            {/* Luxury tagline */}
            <div className="flex flex-col gap-1">
              <p className="text-white/90 text-[17px] font-light tracking-wide leading-relaxed font-serif italic">
                Luxury wildlife experiences in Sasan Gir.
              </p>
              <p className="text-white/40 text-[14px] tracking-[0.06em] uppercase leading-relaxed">
                Handpicked resorts · Uncompromising standards
              </p>
            </div>

            {/* Primary CTA */}
            <m.div whileHover={reduced ? {} : { y: -2 }} transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}>
              <Link
                href="/properties"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto h-[56px] px-9 rounded-full font-semibold text-[13px] uppercase tracking-[0.18em] text-[#070605] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 will-change-transform overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #F7D58B 0%, #D9A94D 50%, #B8832C 100%)",
                  boxShadow:
                    "0 8px 28px rgba(217,169,77,0.25), 0 2px 8px rgba(217,169,77,0.15)",
                }}
                aria-label="Book your stay at GirStay Premium"
              >
                {/* Shimmer sweep on hover */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    transform: "skewX(-20deg)",
                  }}
                  aria-hidden="true"
                />
                <span className="relative z-10">Book Your Stay</span>
                <ArrowRight
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </m.div>
          </m.div>

          {/* ── COL 2 — Quick Navigation ── */}
          <m.nav
            variants={reduced ? {} : item}
            className="lg:col-span-3 flex flex-col gap-7"
            aria-label="Quick navigation"
          >
            <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
              Explore
            </h2>

            {/* Subtle gold rule under heading */}
            <div
              className="h-px w-8 -mt-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)",
              }}
              aria-hidden="true"
            />

            <ul className="flex flex-col gap-[14px]" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <m.div
                    whileHover={reduced ? {} : { x: 4 }}
                    transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/55 hover:text-white tracking-wide leading-relaxed transition-colors duration-300 focus:outline-none focus-visible:underline focus-visible:text-[#D9A94D]"
                    >
                      {link.label}
                    </Link>
                  </m.div>
                </li>
              ))}
            </ul>
          </m.nav>

          {/* ── COL 3 — Contact ── */}
          <m.address
            variants={reduced ? {} : item}
            className="lg:col-span-3 not-italic flex flex-col gap-7"
          >
            <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
              Contact
            </h2>
            <div
              className="h-px w-8 -mt-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)",
              }}
              aria-hidden="true"
            />

            <ul className="flex flex-col gap-2" role="list">
              <li>
                <ContactItem
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  icon={<Phone className="w-4 h-4" strokeWidth={1.5} />}
                  label={`Call us at ${CONTACT_INFO.phone}`}
                  text={CONTACT_INFO.phone}
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href={`mailto:${CONTACT_INFO.email}`}
                  icon={<Mail className="w-4 h-4" strokeWidth={1.5} />}
                  label={`Email us at ${CONTACT_INFO.email}`}
                  text={CONTACT_INFO.email}
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href=""
                  icon={<MapPin className="w-4 h-4" strokeWidth={1.5} />}
                  label="Our location"
                  text="Sasan Gir, Gujarat, India"
                  reduced={reduced}
                />
              </li>
              <li>
                <ContactItem
                  href={SOCIAL_LINKS.whatsapp}
                  external
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  }
                  label="Chat with us on WhatsApp"
                  text="WhatsApp Us"
                  reduced={reduced}
                />
              </li>
            </ul>
          </m.address>

          {/* ── COL 4 — Social Links ── */}
          <m.div
            variants={reduced ? {} : item}
            className="lg:col-span-2 flex flex-col gap-7"
          >
            <h2 className="text-[#D9A94D] text-[11px] font-semibold uppercase tracking-[0.25em]">
              Follow Us
            </h2>
            <div
              className="h-px w-8 -mt-4"
              style={{
                background:
                  "linear-gradient(90deg, rgba(217,169,77,0.6), transparent)",
              }}
              aria-hidden="true"
            />

            {/* 4 circles — large tap targets, circular glass surface */}
            <ul className="flex flex-row flex-wrap lg:flex-col gap-3" role="list">
              {SOCIAL.map(({ key, label, href, svg }) => (
                <li key={key}>
                  <m.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow GirStay Premium on ${label}`}
                    whileHover={
                      reduced
                        ? {}
                        : {
                            scale: 1.08,
                            boxShadow:
                              "0 0 20px rgba(217,169,77,0.3), 0 4px 16px rgba(0,0,0,0.5)",
                          }
                    }
                    whileTap={reduced ? {} : { scale: 0.94 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center justify-center w-[52px] h-[52px] rounded-full text-white/55 hover:text-[#D9A94D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 will-change-transform transition-colors duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
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

      {/* ── ELEGANT GRADIENT DIVIDER ── */}
      <div className="relative z-10 px-5 sm:px-8">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(217,169,77,0.2) 20%, rgba(255,255,255,0.06) 50%, rgba(217,169,77,0.2) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ── BOTTOM BAR — Policies + Copyright ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Policy Links */}
          <nav aria-label="Legal and policy links">
            <ul
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
              role="list"
            >
              {POLICY_LINKS.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/30 hover:text-white/60 tracking-wide transition-colors duration-300 focus:outline-none focus-visible:underline focus-visible:text-[#D9A94D]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-[13px] text-white/25 tracking-wide">
            © {currentYear}{" "}
            <span className="text-white/40">{SITE_NAME}</span>. All rights reserved.
          </p>

        </div>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <m.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={reduced ? {} : { scale: 1.1 }}
        whileTap={reduced ? {} : { scale: 0.93 }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="fixed bottom-[104px] lg:bottom-6 right-3 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center will-change-transform"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow:
            "0 8px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.4)",
        }}
        aria-label="Chat with GirStay Premium on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </m.a>
    </footer>
  );
}
