"use client";

import React, { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { luxuryEase, duration } from "@/lib/motion-tokens";
import { cn } from "@/lib/utils";

interface LuxuryBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function LuxuryBottomSheet({ isOpen, onClose, title, children, className }: LuxuryBottomSheetProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.normal, ease: luxuryEase }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          
          {/* Sheet */}
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
            className={cn(
              "fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl luxury-bg border-t border-white/10 lg:hidden overflow-hidden pb-safe",
              className
            )}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-4 pb-2 w-full touch-none" onClick={onClose}>
              <div className="w-12 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            {title && (
              <div className="flex items-center justify-between px-6 pb-4 border-b luxury-divider">
                <h3 className="luxury-heading text-lg">{title}</h3>
                <button 
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
