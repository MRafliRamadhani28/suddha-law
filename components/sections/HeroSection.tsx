"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { companyInfo, stats } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-gradient-to-br from-suddha-blue via-suddha-teal to-suddha-blue overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-suddha-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-suddha-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Split grid: content left, image right (desktop only) */}
      <div className="relative z-10 grid lg:grid-cols-[3fr_2fr] min-h-[90vh]">

        {/* Left column — content */}
        <div className="section-padding py-20 flex flex-col justify-center">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-suddha-gold font-semibold text-sm">
              {tx(t.hero.partner, lang)}
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Solve Your
            <br />
            <span className="text-suddha-gold">Problem.</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            {lang === "en" ? companyInfo.subTaglineEn : companyInfo.subTagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={companyInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Phone size={18} />
              {tx(t.hero.ctaPrimary, lang)}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              href="/#practices"
              className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-white/20 hover:text-suddha-gold focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {tx(t.hero.ctaSecondary, lang)}
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-suddha-gold">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80 text-sm mt-1">
                  {lang === "en" ? stat.labelEn : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — photo panel (hidden on mobile) */}
        <div className="hidden lg:block relative">
          <Image
            src="/images/11-08.webp"
            alt="Suddha Partnership — attorney at work"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Left-edge gradient: blends photo into hero background */}
          <div className="absolute inset-0 bg-gradient-to-r from-suddha-blue via-suddha-blue/40 to-transparent pointer-events-none" />
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-suddha-blue/70 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
