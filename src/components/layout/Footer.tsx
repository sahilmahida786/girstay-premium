import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { SOCIAL_LINKS, CONTACT_INFO, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
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
  Lock,
  BadgeCheck,
  Smile,
} from "lucide-react";

import {
  LazyMotionProvider,
  MotionBackgroundFade,
  MotionTrustBadgeRow,
  MotionTrustBadge,
  MotionContainer,
  MotionItem,
  MotionItemNav,
  MotionItemAddress,
  MotionBottomBar,
  PrimaryCTAClient,
  SecondaryCTAClient,
  QuickLinkClient,
  ContactItemClient,
  SocialIconClient,
  WhatsAppFloatClient,
  NewsletterForm,
} from "./FooterClient";

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
    key: "github",
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

// ─────────────────────────────────────────────
//  MAIN FOOTER (React Server Component)
// ─────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sasan Gir",
      addressLocality: "Junagadh District",
      addressRegion: "Gujarat",
      postalCode: "362135",
      addressCountry: "IN"
    },
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin
    ]
  };

  return (
    <LazyMotionProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <footer
        className="relative overflow-hidden pb-[90px] lg:pb-0"
        aria-label="Site footer"
        style={{ background: "#070605" }}
      >
        {/* ── CINEMATIC BACKGROUND LAYERS ── */}
        <MotionBackgroundFade className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#070605]" />
          <div className="absolute -bottom-32 -left-24 w-[60vw] h-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,60,36,0.45)_0%,transparent_70%)] blur-[120px]" />
          <div className="absolute -top-20 -right-20 w-[50vw] h-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,169,77,0.12)_0%,transparent_65%)] blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.018] max-sm:hidden mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070605] to-transparent" />
        </MotionBackgroundFade>

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
        <MotionTrustBadgeRow className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20">
          <ul
            className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
            role="list"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <li key={label} className="shrink-0">
                <MotionTrustBadge>
                  <Icon className="w-3.5 h-3.5 text-[#D9A94D] shrink-0" strokeWidth={1.8} aria-hidden="true" />
                  <span>{label}</span>
                </MotionTrustBadge>
              </li>
            ))}
          </ul>
        </MotionTrustBadgeRow>

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
            ══════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <MotionContainer className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">

            {/* ══ COL 1 — Brand block (desktop spans 4/12) ══ */}
            <MotionItem className="lg:col-span-4 flex flex-col gap-8">
              {/* Logo */}
              <Logo size="lg" />

              {/* Editorial brand statement */}
              <div className="flex flex-col gap-2">
                <p className="text-white/90 text-[17px] font-light tracking-wide leading-relaxed font-serif italic">
                  Where the last Asiatic Lion roams free.
                </p>
                <p className="text-white/70 text-[15px] font-light leading-relaxed tracking-wide">
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
                      <span className="block text-[14px] text-white/90 font-medium tracking-wide leading-snug">
                        {title}
                      </span>
                      <span className="block text-[13px] text-white/70 font-light leading-relaxed mt-0.5">
                        {desc}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* PRIMARY CTA */}
              <div className="flex flex-col gap-3">
                <PrimaryCTAClient href="/properties" ariaLabel="Reserve your luxury Gir experience — browse handpicked resorts">
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-[800ms] ease-out pointer-events-none -skew-x-12"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">Reserve Your Luxury Stay</span>
                  <ArrowRight
                    className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </PrimaryCTAClient>

                {/* Trust micro-badges */}
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
                      className="flex items-center gap-1.5 text-[11px] text-white/60 uppercase tracking-[0.08em]"
                    >
                      <Icon
                        className="w-3 h-3 text-[#D9A94D] shrink-0"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECONDARY CTA */}
              <SecondaryCTAClient href={SOCIAL_LINKS.whatsapp} ariaLabel="Chat with GirStay Premium on WhatsApp to plan your stay">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current text-[#25D366] shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat With Our Team</span>
              </SecondaryCTAClient>

              {/* NEWSLETTER */}
              <NewsletterForm />
            </MotionItem>

            {/* ══ COL 2 — Quick Navigation ══ */}
            <MotionItemNav className="lg:col-span-3 flex flex-col gap-6" ariaLabel="Quick navigation">
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

              <ul className="flex flex-col" role="list">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href} className="group relative">
                    <QuickLinkClient href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </MotionItemNav>

            {/* ══ COL 3 — Contact ══ */}
            <MotionItemAddress className="lg:col-span-3 not-italic flex flex-col gap-6">
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
                  <ContactItemClient
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    icon={<Phone className="w-4 h-4" strokeWidth={1.5} />}
                    label={`Tap to call GirStay Premium at ${CONTACT_INFO.phone}`}
                    text={CONTACT_INFO.phone}
                    action="Tap to Call"
                  />
                </li>
                <li>
                  <ContactItemClient
                    href={`mailto:${CONTACT_INFO.email}`}
                    icon={<Mail className="w-4 h-4" strokeWidth={1.5} />}
                    label={`Send an email to GirStay Premium at ${CONTACT_INFO.email}`}
                    text={CONTACT_INFO.email}
                    action="Tap to Email"
                  />
                </li>
                <li>
                  <ContactItemClient
                    href="https://maps.google.com/?q=Sasan+Gir+Gujarat+India"
                    external
                    icon={<MapPin className="w-4 h-4" strokeWidth={1.5} />}
                    label="Open Sasan Gir location in Google Maps"
                    text="Sasan Gir, Gujarat"
                    action="Open Maps"
                  />
                </li>
                <li>
                  <ContactItemClient
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
                  />
                </li>
              </ul>
            </MotionItemAddress>

            {/* ══ COL 4 — Social Links ══ */}
            <MotionItem className="lg:col-span-2 flex flex-col gap-6">
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

              <ul className="flex flex-row justify-between lg:flex-col lg:justify-start lg:gap-3" role="list">
                {SOCIAL.map(({ key, label, href, svg }) => (
                  <li key={key} className="flex items-center justify-center lg:justify-start">
                    <SocialIconClient href={href} label={label}>
                      {svg}
                    </SocialIconClient>
                  </li>
                ))}
              </ul>
            </MotionItem>

          </MotionContainer>
        </div>

        {/* ── GRADIENT DIVIDER before bottom bar ── */}
        <MotionBottomBar className="relative z-10 px-5 sm:px-8">
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(217,169,77,0.18) 20%, rgba(255,255,255,0.05) 50%, rgba(217,169,77,0.18) 80%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </MotionBottomBar>

        {/* Bottom bar fades up after the grid settles */}
        <MotionBottomBar
          className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-6"
          style={{ paddingBottom: "max(2rem, calc(env(safe-area-inset-bottom) + 1.5rem))" }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <nav aria-label="Legal and policy links">
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-3" role="list">
                {POLICY_LINKS.map((link) => (
                  <li key={link.href} className="shrink-0">
                    <Link
                      href={link.href}
                      className="text-[12.5px] text-white/60 hover:text-white/90 tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A94D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070605] min-h-[48px] rounded-md px-2 py-1 flex items-center touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-1 lg:text-right">
              <p className="text-[12.5px] text-white/60 tracking-wide">
                © {currentYear}{" "}
                <span className="text-white/80">{SITE_NAME}</span>. All rights reserved.
              </p>
              <p className="text-[11px] text-white/60 tracking-[0.1em] uppercase">
                Made with care in Gujarat, India
              </p>
            </div>
          </div>
        </MotionBottomBar>

        <WhatsAppFloatClient href={SOCIAL_LINKS.whatsapp}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </WhatsAppFloatClient>
      </footer>
    </LazyMotionProvider>
  );
}
