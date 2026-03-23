"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navLinks = [
  { label: "サービス", href: "/#services" },
  { label: "実績・プロフィール", href: "/#results" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="text-xl font-bold text-primary">b-jam</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted-light transition-colors"
                aria-label="メニューを閉じる"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col px-6 py-6 gap-2 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="py-3 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full text-center bg-primary text-white font-medium rounded-lg px-6 py-3 hover:bg-primary-dark transition-colors"
                >
                  無料相談する
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
