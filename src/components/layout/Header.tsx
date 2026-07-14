"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { Menu, X, User, Phone, ChevronRight, Sparkles, Mail, Globe } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Smooth scroll values for header scaling
  const smoothY = useSpring(scrollY, { stiffness: 300, damping: 30, restDelta: 0.001 });
  const headerPadding = useTransform(smoothY, [0, 100], ["1rem", "0.5rem"]);
  const headerScale = useTransform(smoothY, [0, 100], [1, 0.98]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 20) setIsScrolled(true);
    else setIsScrolled(false);

    // Hide on scroll down, show on scroll up (only on desktop to ensure mobile always has menu)
    if (window.innerWidth >= 1024) {
      if (latest > previous && latest > 150) setIsHidden(true);
      else setIsHidden(false);
    }
  });

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

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
      {/* ────────────────────────────────────────────────────────
          TOP BAR (Desktop Only)
          ──────────────────────────────────────────────────────── */}
      <div className="hidden lg:block bg-card/60 backdrop-blur-md border-b border-border/30 text-xs font-medium z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-muted-foreground/80">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-5 text-muted-foreground/80">
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/nexvora.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/sahil-mahida-115835317" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/sahilmahida786/PYTHON_ALL_PROGRAM" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
            <span className="w-px h-3 bg-border/50" />
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span>EN</span>
            </div>
            <span className="w-px h-3 bg-border/50" />
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-primary transition-colors">
              <span>₹ INR</span>
            </div>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          MAIN NAVIGATION
          ──────────────────────────────────────────────────────── */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="sticky top-0 z-40 w-full flex justify-center px-4 sm:px-6 pt-2 pb-2 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div 
          style={{ paddingTop: headerPadding, paddingBottom: headerPadding, scale: headerScale }}
          className={cn(
            "w-full max-w-7xl mx-auto rounded-2xl transition-all duration-500 ease-out border pointer-events-auto",
            isScrolled
              ? "glass-strong shadow-luxury-lg border-border/30 px-4 sm:px-6"
              : "bg-background/20 backdrop-blur-md border-border/10 px-4 sm:px-6 shadow-sm"
          )}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Logo size="md" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-card/30 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/30" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 group overflow-hidden",
                    isActive(link.href) ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="desktop-nav-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full transition-all duration-300",
                      isActive(link.href) ? "w-1/2" : "w-0 group-hover:w-1/3 opacity-0 group-hover:opacity-50"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />

              {/* Book Now CTA — desktop */}
              <Link href="/properties" className="hidden lg:block relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 animate-pulse-slow"></div>
                <Button className="relative gradient-gold text-black font-bold px-6 h-10 rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.02] gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Now
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:shadow-gold transition-all active:scale-90 relative overflow-hidden group"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: 90, scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <X className="w-5 h-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div key="m" initial={{ rotate: 90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} exit={{ rotate: -90, scale: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                      <Menu className="w-5 h-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ────────────────────────────────────────────────────────
          FULL-SCREEN MOBILE MENU (Apple Style)
          ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden overflow-hidden touch-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Background Blur & Noise */}
            <motion.div 
              className="absolute inset-0 bg-background/60 backdrop-blur-2xl"
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(30px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
            />
            <div className="absolute inset-0 gradient-aurora opacity-50" />
            <div className="absolute inset-0 bg-noise opacity-30" />

            {/* Menu Panel — Swipe to close */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => { if (info.offset.y > 100) setIsMobileMenuOpen(false); }}
              initial={{ y: "100%", scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-x-0 bottom-0 top-0 bg-card/40 border-t border-white/10 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)] flex flex-col px-6 pt-8 pb-nav overflow-y-auto"
            >
              {/* Drag Handle */}
              <div className="w-12 h-1.5 bg-foreground/20 rounded-full mx-auto mb-8 shrink-0" />

              {/* Close Button & Logo */}
              <div className="flex items-center justify-between mb-8">
                <Logo size="md" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center active:scale-90 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mb-10">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl transition-colors active:scale-[0.98]",
                        isActive(link.href)
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-foreground/5 hover:bg-foreground/10"
                      )}
                    >
                      <span className={cn("text-xl font-heading font-semibold", isActive(link.href) ? "text-primary gradient-gold-text" : "text-foreground")}>
                        {link.label}
                      </span>
                      <ChevronRight className={cn("w-5 h-5", isActive(link.href) ? "text-primary" : "text-muted-foreground")} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-foreground/5 rounded-3xl p-5 mb-8 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Need help?</h4>
                    <p className="text-xs text-muted-foreground">Talk to our concierge</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="flex-1 flex items-center justify-center gap-2 bg-background/50 py-3 rounded-xl text-sm font-medium active:scale-95 transition-transform">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex-1 flex items-center justify-center gap-2 bg-background/50 py-3 rounded-xl text-sm font-medium active:scale-95 transition-transform">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </div>
              </motion.div>

              {/* Social & Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto flex items-center justify-between pt-6 border-t border-border/50 pb-8"
              >
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/nexvora.dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/80 hover:text-primary active:scale-90 transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/sahil-mahida-115835317" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/80 hover:text-primary active:scale-90 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/sahilmahida786/PYTHON_ALL_PROGRAM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/80 hover:text-primary active:scale-90 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-foreground/5 px-3 py-1.5 rounded-full">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-medium">EN</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
