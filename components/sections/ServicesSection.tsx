"use client";

import { motion } from "framer-motion";
import {
  Search, MessageCircle, BookOpen, FileText, Stamp, ScrollText,
  Activity, Calendar, Gavel, Landmark, ClipboardList, Users,
} from "lucide-react";
import { services } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

const iconMap: Record<string, React.ElementType> = {
  Search, MessageCircle, BookOpen, FileText, Stamp, ScrollText,
  Activity, Calendar, Gavel, Landmark, ClipboardList, Users,
};

export default function ServicesSection() {
  const { lang } = useLanguage();
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-suddha-blue via-suddha-teal to-suddha-blue">
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-suddha-gold font-semibold mb-4">
            {tx(t.services.sectionLabel, lang)}
          </p>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            {lang === "en" ? "Operational" : "Layanan"}
            <span className="italic text-suddha-gold"> {lang === "en" ? "Services" : "Operasional"}</span>
          </h2>
          <p className="text-white/90 leading-relaxed">
            {tx(t.services.subHeading, lang)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/15 p-6 rounded-2xl hover:bg-white/20 hover:border-suddha-gold/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-suddha-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-suddha-gold/35 transition-colors">
                  {Icon && (
                    <Icon
                      size={18}
                      className="text-suddha-gold"
                      strokeWidth={1.5}
                    />
                  )}
                </div>

                {/* Title */}
                <h4 className="font-display font-semibold text-white text-sm mb-2">
                  {lang === "en" ? service.titleEn : service.title}
                </h4>

                {/* Description */}
                <p className="text-white/90 text-xs leading-relaxed">
                  {lang === "en" ? service.descriptionEn : service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          className="mt-10 text-white/90 text-sm text-center max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {lang === "en"
            ? "All services are tailored to each client\u2019s specific needs. Contact us to receive a targeted proposal."
            : "Semua layanan disesuaikan dengan kebutuhan spesifik klien. Hubungi kami untuk mendapatkan penawaran yang tepat sasaran."}
        </motion.p>
      </div>
    </section>
  );
}
