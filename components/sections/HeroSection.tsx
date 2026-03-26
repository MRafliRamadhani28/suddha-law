"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { companyInfo, stats } from "@/constants/data";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

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
      className="relative min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-suddha-blue via-suddha-teal to-suddha-blue overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-suddha-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-suddha-gold/5 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="section-padding relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-suddha-gold font-semibold text-sm">
              Suddha — Your Partner
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
            {companyInfo.subTagline}
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
              Konsultasi Sekarang
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <Link
              href="/#practices"
              className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-white/20 hover:text-suddha-gold focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Lihat Layanan Kami
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-suddha-gold">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-white/80 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
