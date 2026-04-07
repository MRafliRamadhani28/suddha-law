"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Building2, BarChart3, ArrowRight } from "lucide-react";
import { commitments, companyInfo } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Building2,
  BarChart3,
};

export default function CommitmentSection() {
  const { lang } = useLanguage();
  return (
    <section id="commitment" className="bg-suddha-gray/50">
      {/* Header + Cards */}
      <div className="section-padding pt-20 pb-12">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="section-label">{tx(t.commitment.sectionLabel, lang)}</p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            {tx(t.commitment.heading, lang)}
            <span className="italic text-suddha-gold"> SUDDHA?</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(t.commitment.subHeading, lang)}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commitments.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-suddha-blue/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-suddha-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-suddha-gold/25 transition-colors">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-suddha-gold"
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-suddha-blue mb-3">
                  {lang === "en" ? item.titleEn : item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {lang === "en" ? item.descriptionEn : item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-bleed cinematic brand strip */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src="/images/DSC09191.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        {/* Top fade from section background */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-suddha-gray/50 to-transparent pointer-events-none" />
        {/* Bottom fade into CTA area */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-suddha-gray/50 to-transparent pointer-events-none" />
        {/* Text layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
          <p className="text-suddha-gold font-semibold text-xs uppercase tracking-widest">
            {lang === "en" ? "Our Team in Action" : "Tim Kami Beraksi"}
          </p>
          <p className="text-white font-display font-bold text-2xl md:text-3xl leading-tight max-w-lg">
            {lang === "en"
              ? "Knowledge Sharing Every Month"
              : "Berbagi Ilmu Setiap Bulannya"}
          </p>
          <p className="text-white/70 text-sm max-w-sm leading-relaxed">
            {lang === "en"
              ? "Suddha's Review — building sharper minds for better counsel."
              : "Suddha's Review — mengasah kemampuan untuk pelayanan hukum yang lebih baik."}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="section-padding pb-20 pt-12">
        <div className="flex justify-center">
          <a
            href={companyInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            {tx(t.commitment.cta, lang)}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
