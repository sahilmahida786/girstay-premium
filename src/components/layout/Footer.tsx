"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { SOCIAL_LINKS, CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────
//  DATA — defined once, easy to maintain
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

// Social icons as inline SVG — no JS dependency, no icon library overhead
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
//  COMPONENT
// ─────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-card border-t border-border/50"
      aria-label="Site footer"
    >
      {/* Luxury top-edge separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />

      {/* ──────────────────────────────────────────
          MAIN FOOTER BODY
          Layout: single column on mobile, 4-col grid on desktop
          ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-14 pb-10 sm:pt-16 sm:pb-12">

        {/* Desktop grid wrapper — on mobile every child stacks naturally */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ── COL 1 — Brand block (spans 4 of 12 cols on desktop) ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* 1 · Brand Identity */}
            <Logo size="lg" />

            {/* 2 · Luxury Description — 2 lines max */}
            <p className="text-muted-foreground text-base leading-relaxed max-w-[280px]">
              Luxury wildlife experiences in Sasan Gir.
              <br />
              Handpicked resorts. Uncompromising standards.
            </p>

            {/* 3 · Primary CTA — most important footer element */}
            <Link
              href="/properties"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 rounded-2xl gradient-gold text-black font-semibold text-[15px] uppercase tracking-widest shadow-[0_8px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Book your stay at GirStay Premium"
            >
              Book Your Stay
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* ── COL 2 — Quick Navigation (3 of 12) ── */}
          <nav
            className="lg:col-span-3 flex flex-col gap-4"
            aria-label="Quick navigation"
          >
            <h2 className="font-heading font-semibold text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </h2>
            <ul className="flex flex-col gap-3" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── COL 3 — Contact (3 of 12) ── */}
          <address
            className="lg:col-span-3 not-italic flex flex-col gap-4"
          >
            <h2 className="font-heading font-semibold text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h2>
            <ul className="flex flex-col gap-4" role="list">
              {/* Phone */}
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 text-base text-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:underline min-h-[44px]"
                  aria-label={`Call us at ${CONTACT_INFO.phone}`}
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200" aria-hidden="true">
                    <Phone className="w-4 h-4 text-primary" />
                  </span>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex items-center gap-3 text-base text-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:underline min-h-[44px]"
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200" aria-hidden="true">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>

              {/* Location */}
              <li>
                <span className="group flex items-start gap-3 text-base text-foreground/80 min-h-[44px]">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5" aria-hidden="true">
                    <MapPin className="w-4 h-4 text-primary" />
                  </span>
                  <span className="leading-relaxed">Sasan Gir, Gujarat, India</span>
                </span>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-base text-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:underline min-h-[44px]"
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary fill-current" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </address>

          {/* ── COL 4 — Social Links (2 of 12) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h2 className="font-heading font-semibold text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Follow Us
            </h2>
            {/* Large touch targets: 48px minimum */}
            <ul className="flex flex-row lg:flex-col gap-3" role="list">
              {SOCIAL.map(({ key, label, href, svg }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow GirStay Premium on ${label}`}
                    className="flex items-center justify-center lg:justify-start gap-3 w-12 h-12 lg:w-auto lg:h-auto lg:py-2 rounded-2xl lg:rounded-none text-foreground/70 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-xl glass flex items-center justify-center hover:shadow-gold transition-all duration-300" aria-hidden="true">
                      {svg}
                    </span>
                    <span className="hidden lg:block text-base">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ──────────────────────────────────────────
          BOTTOM BAR — Policies + Copyright
          Full-width separator, then a compact
          horizontal scroll on mobile, wrap on desktop
          ────────────────────────────────────────── */}
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-6">

          {/* Policy Links — horizontal scroll on small screens */}
          <nav
            aria-label="Legal and policy links"
            className="mb-5"
          >
            <ul
              className="flex items-center gap-x-5 gap-y-2 flex-wrap text-sm text-muted-foreground"
              role="list"
            >
              {POLICY_LINKS.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/70">
            © {currentYear} {SITE_NAME}. All rights reserved. Sasan Gir, Gujarat, India.
          </p>

        </div>
      </div>

      {/* ──────────────────────────────────────────
          WHATSAPP FLOATING BUTTON
          Kept outside the footer content flow so
          it never interferes with the footer layout
          ────────────────────────────────────────── */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[104px] lg:bottom-6 right-3 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with GirStay Premium on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
