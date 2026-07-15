"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, Sparkles, Mail } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);



export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Refs for pure DOM manipulation to bypass React render cycle for extreme performance
  const headerRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // ────────────────────────────────────────────────────────
  // OPTIMIZED SCROLL LISTENER (60FPS)
  // ────────────────────────────────────────────────────────
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Update state for major structural changes (triggers re-render)
      const scrolled = currentScrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }

      // Hide/Show logic (Desktop only)
      if (window.innerWidth >= 1024) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    updateHeader();
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled]);

  // Route change handler
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* ────────────────────────────────────────────────────────
          MAIN NAVIGATION (Floating, Transparent, GPU Accelerated)
          ──────────────────────────────────────────────────────── */}
      <motion.header
        ref={headerRef}
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 inset-x-0 z-50 w-full flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
        role="navigation"
      >
        <div 
          ref={navContainerRef}
          className={cn(
            "w-full max-w-7xl mx-auto rounded-full transition-all duration-500 ease-out pointer-events-auto will-change-transform flex items-center justify-between",
            isScrolled
              ? "bg-[#060606]/70 backdrop-blur-2xl border border-white/10 px-4 py-2.5 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] scale-100"
              : "bg-transparent border-transparent px-2 py-4 sm:px-4 scale-100"
          )}
        >
          {/* Logo (Scales down on scroll) */}
          <motion.div 
            className="origin-left transition-transform duration-500 ease-out shrink-0"
            style={{ transform: isScrolled ? "scale(0.85)" : "scale(1)" }}
          >
            <Link href="/" className="block focus:outline-none focus-visible:ring-2 ring-primary rounded-lg">
              <Logo size="md" />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2.5 text-[13px] font-bold tracking-wide uppercase rounded-full transition-all duration-300 group overflow-hidden",
                  isActive(link.href) ? "text-[#FFD27A]" : "text-white/80 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="desktop-nav-indicator"
                    className="absolute inset-0 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    "absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#FFD27A] rounded-full transition-all duration-300",
                    isActive(link.href) ? "w-4" : "w-0 group-hover:w-3 opacity-0 group-hover:opacity-50"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Theme Toggle (Hidden on mobile for cleaner look) */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            {/* Desktop Book Now Button */}
            <Link href="/properties" className="hidden lg:block relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] rounded-full blur-[8px] opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse-slow pointer-events-none" />
              <button className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] text-black text-[13px] font-bold uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
                Book Now
              </button>
            </Link>

            {/* Mobile Menu Toggle (Glass Circle) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 relative overflow-hidden group border",
                isScrolled ? "bg-white/10 border-white/20 backdrop-blur-md" : "bg-black/20 border-white/10 backdrop-blur-sm"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ────────────────────────────────────────────────────────
          FULL-SCREEN MOBILE MENU (Luxury Glassmorphism)
          ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden overflow-hidden touch-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
          >
            {/* Deep Glass Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-[#060606]/80 backdrop-blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Warm Luxury Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Menu Content Container */}
            <motion.div
              initial={{ y: "10%" }}
              animate={{ y: "0%" }}
              exit={{ y: "10%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 flex flex-col px-6 pt-24 pb-8 overflow-y-auto"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-1 mb-12">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-white/5 active:bg-white/5 transition-colors"
                    >
                      <span className={cn(
                        "text-3xl font-heading font-bold tracking-tight",
                        isActive(link.href) ? "text-[#FFD27A]" : "text-white/90 group-hover:text-white"
                      )}>
                        {link.label}
                      </span>
                      <ChevronRight className={cn(
                        "w-6 h-6 transition-transform group-active:translate-x-2",
                        isActive(link.href) ? "text-[#FFD27A]" : "text-white/30"
                      )} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <Link href="/properties" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-full relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] rounded-2xl blur-[12px] opacity-20 group-active:opacity-40 transition-opacity" />
                    <button className="relative w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F8E7B5] text-black text-[15px] font-bold uppercase tracking-widest active:scale-[0.98] transition-transform">
                      <Sparkles className="w-4 h-4" />
                      Book Your Stay
                    </button>
                  </div>
                </Link>
              </motion.div>

              {/* Footer Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto flex items-center justify-between pt-6 border-t border-white/10"
              >
                <div className="flex gap-4">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 active:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 active:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/nexvora.dev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
