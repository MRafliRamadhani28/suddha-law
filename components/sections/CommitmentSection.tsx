"use client";

import { motion } from "framer-motion";
import { Shield, Building2, BarChart3, ArrowRight } from "lucide-react";
import { commitments } from "@/constants/data";
import { companyInfo } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Building2,
  BarChart3,
};

export default function CommitmentSection() {
  return (
    <section id="commitment" className="py-20 bg-suddha-gray/50">
      <div className="section-padding">
        {/* Header */}
        <div className="max-w-xl mb-12">
          <p className="section-label">02 — Komitmen Kami</p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            Mengapa Memilih
            <span className="italic text-suddha-gold"> SUDDHA?</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Kami berkomitmen untuk memberikan jasa hukum yang dapat diandalkan,
            fokus terhadap industri, dengan biaya yang efisien bagi klien.
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
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={companyInfo.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Jadwalkan Konsultasi
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
