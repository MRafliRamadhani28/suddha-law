"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { companyInfo } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

export default function ContactSection() {
  const { lang } = useLanguage();
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{tx(t.contact.sectionLabel, lang)}</p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            Let&apos;s
            <span className="italic text-suddha-gold"> Discuss.</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {lang === "en"
              ? "Tell us about your issue. First consultation is free \u2014 we are ready to help find the best solution."
              : "Ceritakan masalah Anda kepada kami. Konsultasi pertama gratis \u2014 kami siap membantu menemukan solusi terbaik."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-suddha-blue to-suddha-teal text-white p-8 rounded-2xl shadow-lg shadow-suddha-blue/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-suddha-gold font-semibold mb-6">
              {lang === "en" ? "Contact Information" : "Informasi Kontak"}
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-suddha-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase mb-1">{tx(t.contact.labelAddress, lang)}</p>
                  <p className="text-white text-sm leading-relaxed">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-suddha-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase mb-1">{lang === "en" ? "Phone / WhatsApp" : "Telepon / WhatsApp"}</p>
                  <a
                    href={companyInfo.contact.whatsapp}
                    className="text-white hover:text-suddha-gold transition-colors"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-suddha-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase mb-1">{tx(t.contact.labelEmail, lang)}</p>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-white hover:text-suddha-gold transition-colors"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-suddha-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase mb-1">{tx(t.contact.labelHours, lang)}</p>
                  <p className="text-white text-sm">{lang === "en" ? companyInfo.operatingHours.daysEn : companyInfo.operatingHours.days}</p>
                  <p className="text-white text-sm">{companyInfo.operatingHours.hours}</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="space-y-3 mt-8 pt-6 border-t border-white/10">
              <a
                href={companyInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-suddha-gold text-suddha-blue font-semibold text-sm px-5 py-3 rounded-full hover:bg-[#ffd900] transition-all duration-200 hover:shadow-lg hover:shadow-suddha-gold/30 hover:-translate-y-0.5 group"
              >
                <MessageCircle size={16} />
                {tx(t.contact.ctaWhatsapp, lang)}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center justify-center gap-2 w-full border border-white/30 text-white font-medium text-sm px-5 py-3 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <Mail size={16} />
                {tx(t.contact.ctaEmail, lang)}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform text-white group-hover:text-suddha-gold"
                />
              </a>
            </div>
          </motion.div>

          {/* Map + info */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Map */}
            <div className="flex-1 min-h-72 bg-suddha-gray rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.1224863055972!2d107.58316417499611!3d-6.875925093122872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInMzMuMyJTIDEwN8KwMzUnMDguNyJF!5e0!3m2!1sen!2sid!4v1774599784653!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SUDDHA Law Office Location"
                className="w-full h-full"
              />
            </div>

            {/* Info strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-suddha-gray p-5 rounded-xl">
                <p className="text-suddha-gold font-semibold text-sm mb-1">
                  {lang === "en" ? "City" : "Kota"}
                </p>
                <p className="text-suddha-blue font-display font-bold text-xl">Bandung</p>
                <p className="text-gray-600 text-sm">Jawa Barat, Indonesia</p>
              </div>
              <div className="bg-suddha-gray p-5 rounded-xl">
                <p className="text-suddha-gold font-semibold text-sm mb-1">
                  {lang === "en" ? "Response Time" : "Respon Waktu"}
                </p>
                <p className="text-suddha-blue font-display font-bold text-xl">&lt; 2 {lang === "en" ? "Hours" : "Jam"}</p>
                <p className="text-gray-600 text-sm">{lang === "en" ? "Working days" : "Hari kerja"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
