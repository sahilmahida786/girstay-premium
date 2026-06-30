"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, User, Phone, ChevronRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { snappyEasing } from "@/lib/motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Track viewport for mobile-specific behavior
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Background glass effect
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up — DESKTOP ONLY
    // Mobile users need persistent header access
    if (!isMobile && latest > previous && latest > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Close menu on route change (covers browser back/forward)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Escape key to close
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setIsMobileMenuOpen(false);
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* Top bar — desktop only */}
      <div
        className="hidden lg:block bg-card/60 backdrop-blur-sm border-b border-border/30 text-sm"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
              aria-label={`Call us at ${CONTACT_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
              {CONTACT_INFO.phone}
            </a>
            <span className="text-border/50">|</span>
            <span>{CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-xs">🌍 English</span>
            <span className="text-border/50">|</span>
            <span className="text-xs">₹ INR</span>
          </div>
        </div>
      </div>

      {/* Main header — glassmorphism navbar */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: snappyEasing }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "glass-strong shadow-luxury-lg border-b border-border/30"
            : "bg-background/5 backdrop-blur-md border-b border-transparent"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300 group",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
                      isActive(link.href)
                        ? "w-2/3"
                        : "w-0 group-hover:w-2/3"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {/* Login — desktop */}
              <Link href="/login" className="hidden sm:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-sm hover:bg-primary/10"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline">Sign In</span>
                </Button>
              </Link>

              {/* Book Now CTA — desktop */}
              <Link href="/properties" className="hidden md:block">
                <Button className="gradient-gold text-black font-semibold px-6 shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Now
                </Button>
              </Link>

              {/* Mobile menu toggle — accessible */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center hover:shadow-gold transition-all active:scale-95"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[45] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Full background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/98 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content — safe area for notch devices */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-[400px] bg-background/95 backdrop-blur-3xl shadow-2xl border-l border-border/50 flex flex-col pt-20 px-6 pb-safe overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 px-5 text-xl font-heading font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98]",
                        isActive(link.href)
                          ? "text-primary bg-primary/8"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-colors",
                          isActive(link.href)
                            ? "text-primary"
                            : "text-muted-foreground/40"
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom actions — pushed to bottom */}
              <div className="mt-auto pt-8 space-y-3 pb-8">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="outline"
                    className="w-full h-13 text-base gap-2 rounded-2xl"
                  >
                    <User className="w-5 h-5" />
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/properties"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full h-14 text-lg font-semibold gradient-gold text-black shadow-gold-lg rounded-2xl mt-2 gap-2">
                    <Sparkles className="w-5 h-5" />
                    Book Your Stay
                  </Button>
                </Link>

                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    aria-label="Call us"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
