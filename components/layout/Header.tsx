"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "サービス", href: "/#services" },
  { label: "実績・プロフィール", href: "/#results" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              b-jam
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center bg-primary text-white text-sm font-medium rounded-lg px-5 py-2.5 hover:bg-primary-dark transition-colors"
              >
                無料相談する
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-muted-light transition-colors"
                aria-label="メニューを開く"
              >
                <Menu className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
