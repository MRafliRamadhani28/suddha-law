import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { companyInfo, practices } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="bg-suddha-blue text-white">
      {/* Top Section */}
      <div className="section-padding py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0">
              <Image
                src="/logo/LOGO-white.webp"
                alt="SUDDHA Law Office Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-5">
            Partner hukum terpercaya yang berdedikasi memberikan edukasi jernih
            dan solusi tepat sasaran untuk bisnis dan individu Anda.
          </p>
          {/* Social Media */}
          <div className="flex items-center gap-3">
            <a
              href={companyInfo.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-suddha-gold rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-white" />
            </a>
            <a
              href={companyInfo.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-suddha-gold rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="WhatsApp"
            >
              <Phone size={18} className="text-white" />
            </a>
            <a
              href={companyInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-suddha-gold rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Bidang Jasa */}
        <div>
          <h4 className="font-semibold text-suddha-gold mb-4 text-sm uppercase tracking-wide">
            Bidang Jasa
          </h4>
          <ul className="space-y-2">
            {practices.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/practices/${p.slug}`}
                  className="text-white/80 text-sm hover:text-suddha-gold transition-colors duration-200 block py-1"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-suddha-gold mb-4 text-sm uppercase tracking-wide">
            Navigasi
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Beranda",       href: "/#hero" },
              { label: "Tentang Kami", href: "/#about" },
              { label: "Komitmen",     href: "/#commitment" },
              { label: "Layanan",      href: "/#services" },
              { label: "Kontak",       href: "/#contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 text-sm hover:text-suddha-gold transition-colors duration-200 block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-suddha-gold mb-4 text-sm uppercase tracking-wide">
            Kontak
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-suddha-gold mt-0.5 shrink-0" />
              <span className="text-white/80 text-sm leading-relaxed">
                {companyInfo.contact.address}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-suddha-gold shrink-0" />
              <a
                href={companyInfo.contact.whatsapp}
                className="text-white/80 text-sm hover:text-suddha-gold transition-colors duration-200"
              >
                {companyInfo.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-suddha-gold shrink-0" />
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="text-white/80 text-sm hover:text-suddha-gold transition-colors duration-200"
              >
                {companyInfo.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="section-padding border-t border-white/10 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/60 text-xs">
          © {new Date().getFullYear()} {companyInfo.name}. Semua hak dilindungi.
        </p>
        <p className="text-white/60 text-xs">
          Terdaftar di Kemenkumham RI — {companyInfo.legality.ahu}
        </p>
      </div>
    </footer>
  );
}
