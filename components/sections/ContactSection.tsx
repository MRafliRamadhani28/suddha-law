"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { companyInfo } from "@/constants/data";

export default function ContactSection() {
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
          <p className="section-label">05 — Hubungi Kami</p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            Let&apos;s
            <span className="italic text-suddha-gold"> Discuss.</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ceritakan masalah Anda kepada kami. Konsultasi pertama gratis —
            kami siap membantu menemukan solusi terbaik.
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
              Informasi Kontak
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-suddha-gold" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase mb-1">Alamat</p>
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
                  <p className="text-white/60 text-xs uppercase mb-1">Telepon / WhatsApp</p>
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
                  <p className="text-white/60 text-xs uppercase mb-1">Email</p>
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
                  <p className="text-white/60 text-xs uppercase mb-1">Jam Operasional</p>
                  <p className="text-white text-sm">{companyInfo.operatingHours.days}</p>
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
                Chat via WhatsApp
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
                Kirim Email
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.121491939834!2d107.58248217588314!3d-6.876044367281214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c4c0b72a8b%3A0x35767dbdbed80f41!2sJl.%20Setrasari%20Kulon%20III%20No.10-12%2C%20Sukarasa%2C%20Kec.%20Sukasari%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040152!5e0!3m2!1sid!2sid!4v1773495681962!5m2!1sid!2sid"
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
                  Kota
                </p>
                <p className="text-suddha-blue font-display font-bold text-xl">Bandung</p>
                <p className="text-gray-600 text-sm">Jawa Barat, Indonesia</p>
              </div>
              <div className="bg-suddha-gray p-5 rounded-xl">
                <p className="text-suddha-gold font-semibold text-sm mb-1">
                  Respon Waktu
                </p>
                <p className="text-suddha-blue font-display font-bold text-xl">&lt; 2 Jam</p>
                <p className="text-gray-600 text-sm">Hari kerja</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
