"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { companyInfo, features } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

function LanguageSwitcher({ scrolled }: Readonly<{ scrolled: boolean }>) {
  const { lang, setLang } = useLanguage();
  const base =
    "px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-lg p-0.5",
        scrolled ? "border border-gray-200" : "border border-white/20"
      )}
      aria-label="Language selector"
    >
      {(["id", "en"] as const).map((l) => {
        const isActive = lang === l;
        const activeClass   = scrolled ? "bg-suddha-blue text-white shadow-sm" : "bg-white/20 text-white shadow-sm";
        const inactiveClass = scrolled ? "text-gray-400 hover:text-gray-700" : "text-white/50 hover:text-white";
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={isActive}
            className={cn(base, isActive ? activeClass : inactiveClass)}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const navLinks = [
    { label: tx(t.nav.home,         lang), href: "/#hero" },
    { label: tx(t.nav.about,        lang), href: "/#about" },
    { label: tx(t.nav.commitment,   lang), href: "/#commitment" },
    { label: tx(t.nav.practices,    lang), href: "/#practices" },
    { label: tx(t.nav.services,     lang), href: "/#services" },
    ...(features.testimonials ? [{ label: tx(t.nav.testimonials, lang), href: "/#testimonials" }] : []),
    ...(features.team         ? [{ label: tx(t.nav.team,         lang), href: "/#team" }]         : []),
    ...(features.faq          ? [{ label: tx(t.nav.faq,          lang), href: "/#faq" }]          : []),
    { label: tx(t.nav.contact,      lang), href: "/#contact" },
  ];

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
            : "bg-gradient-to-b from-suddha-blue/45 via-suddha-blue/20 to-transparent"
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
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled ? "text-gray-700 hover:text-suddha-blue" : "text-white hover:text-suddha-gold drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right — language switcher + CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <LanguageSwitcher scrolled={scrolled} />
            <a
              href={companyInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <Phone size={14} />
              {tx(t.nav.cta, lang)}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "xl:hidden p-2 rounded-lg transition-all duration-200",
              scrolled ? "text-suddha-blue hover:bg-suddha-blue/10" : "text-white hover:bg-white/15"
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
          "fixed inset-0 z-40 xl:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-suddha-blue/95 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          role="button"
          tabIndex={-1}
          aria-label="Close menu"
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

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 px-3 pt-2 border-t border-white/10">
            <span className="text-white/50 text-xs uppercase tracking-wider">
              {lang === "id" ? "Bahasa" : "Language"}
            </span>
            <div className="flex items-center gap-1 border border-white/20 rounded-lg p-0.5 ml-auto">
              {(["id", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200",
                    lang === l ? "bg-white/20 text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <a
            href={companyInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2 text-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={16} />
            {tx(t.nav.ctaMobile, lang)}
          </a>
        </nav>
      </div>
    </>
  );
}
