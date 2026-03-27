"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase, Scale, Home, Lightbulb, CreditCard, ArrowRight,
} from "lucide-react";
import { practices } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

const iconMap: Record<string, React.ElementType> = {
  Briefcase, Scale, Home, Lightbulb, CreditCard,
};

export default function PracticesSection() {
  const { lang } = useLanguage();
  return (
    <section id="practices" className="py-20 bg-white">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{tx(t.practices.sectionLabel, lang)}</p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            Area of
            <span className="italic text-suddha-gold"> Practices</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(t.practices.subHeading, lang)}
          </p>
        </motion.div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, i) => {
            const Icon = iconMap[practice.icon];
            return (
              <motion.div
                key={practice.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/practices/${practice.slug}`}
                  className="group flex flex-col h-full bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-suddha-blue/10 hover:border-suddha-gold/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-suddha-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-suddha-gold/25 transition-colors">
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-suddha-blue group-hover:text-suddha-gold transition-colors"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-suddha-blue mb-1 group-hover:text-suddha-teal transition-colors">
                    {lang === "en" ? practice.titleEn : practice.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">
                    {lang === "en" ? practice.title : practice.titleEn}
                  </p>

                  {/* Short desc */}
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {lang === "en" ? practice.shortDescriptionEn : practice.shortDescription}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 mt-6 text-suddha-gold font-semibold text-sm">
                    <span>{tx(t.practices.cta, lang)}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
