"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { companyInfo } from "@/constants/data";

const navLinks = [
  { label: "Beranda",    href: "/#hero" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Komitmen",  href: "/#commitment" },
  { label: "Bidang Jasa", href: "/#practices" },
  { label: "Layanan",   href: "/#services" },
  { label: "Kontak",    href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="section-padding flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0">
              <Image
                src={scrolled ? "/logo/LOGO-blue.webp" : "/logo/LOGO-amber.webp"}
                alt="SUDDHA Law Office Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled ? "text-gray-700 hover:text-suddha-blue" : "text-white hover:text-suddha-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={companyInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <Phone size={14} />
              Konsultasi
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-all duration-200",
              scrolled ? "text-suddha-blue hover:bg-suddha-blue/10" : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-suddha-blue/95 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav className="absolute top-16 left-0 right-0 bg-suddha-blue px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white hover:text-suddha-gold hover:bg-white/5 font-medium text-lg px-3 py-2 rounded-lg transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={companyInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 text-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            Konsultasi Sekarang
          </a>
        </nav>
      </div>
    </>
  );
}
