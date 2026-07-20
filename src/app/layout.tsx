import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { LazyMotionProvider } from "@/components/ui/motion/LazyMotionProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "GirStay Premium | Luxury Resorts & Farm Stays in Sasan Gir, Gujarat",
    template: "%s | GirStay Premium",
  },
  description:
    "Discover handpicked luxury resorts, farm stays, villas, cottages, and jungle lodges in Sasan Gir, Gujarat. Book your premium wildlife getaway with best price guarantee.",
  keywords: [
    "Sasan Gir resorts",
    "Gir forest resort",
    "luxury resort Gujarat",
    "farm stay Gir",
    "Gir National Park accommodation",
    "jungle lodge Sasan Gir",
    "lion safari Gir",
    "Gujarat tourism",
    "wildlife resort India",
    "Asiatic lion",
  ],
  authors: [{ name: "GirStay Premium" }],
  creator: "GirStay Premium",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://girstay-premium.vercel.app",
    siteName: "GirStay Premium",
    title: "GirStay Premium | Luxury Resorts & Farm Stays in Sasan Gir",
    description:
      "Discover handpicked luxury resorts, farm stays, villas, and jungle lodges in Sasan Gir, Gujarat.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GirStay Premium - Luxury Resorts in Sasan Gir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GirStay Premium | Luxury Resorts in Sasan Gir",
    description:
      "Book handpicked luxury resorts, farm stays, and jungle lodges in Sasan Gir.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://girstay-premium.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        {/* Preconnect to image CDN for faster LCP */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Mobile web app support */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Viewport for proper mobile rendering */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://girstay-premium.vercel.app/#organization",
                  name: "GirStay Premium",
                  url: "https://girstay-premium.vercel.app",
                  logo: "https://girstay-premium.vercel.app/favicon.ico",
                  description:
                    "Premium luxury resort booking platform for Sasan Gir, Gujarat. Handpicked resorts, farm stays, villas, and jungle lodges.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-98765-43210",
                    contactType: "reservations",
                    availableLanguage: ["English", "Hindi", "Gujarati"],
                  },
                  sameAs: [
                    "https://instagram.com/girstay",
                    "https://facebook.com/girstay",
                    "https://twitter.com/girstay",
                    "https://youtube.com/@girstay",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://girstay-premium.vercel.app/#localbusiness",
                  name: "GirStay Premium",
                  image: "https://girstay-premium.vercel.app/og-image.jpg",
                  url: "https://girstay-premium.vercel.app",
                  telephone: "+91-98765-43210",
                  email: "booking@girstay.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Sasan Gir",
                    addressLocality: "Junagadh",
                    addressRegion: "Gujarat",
                    postalCode: "362135",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 21.1243,
                    longitude: 70.5792,
                  },
                  priceRange: "₹₹₹",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "500",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://girstay-premium.vercel.app/#website",
                  url: "https://girstay-premium.vercel.app",
                  name: "GirStay Premium",
                  publisher: {
                    "@id": "https://girstay-premium.vercel.app/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://girstay-premium.vercel.app/properties?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <LazyMotionProvider>
          <ThemeProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1 pb-nav lg:pb-0">{children}</main>
            <Footer />
            <BottomNav />
          </ThemeProvider>
        </LazyMotionProvider>
        
        {/* Analytics & Tracking (Placeholder IDs - replace in production) */}
        <GoogleAnalytics gaId="G-XXXXXXX" />
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      </body>
    </html>
  );
}
