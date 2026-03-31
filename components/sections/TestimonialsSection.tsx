"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials, features } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

export default function TestimonialsSection() {
  const { lang } = useLanguage();

  if (!features.testimonials) return null;

  return (
    <section
      id="testimonials"
      className="py-20 bg-suddha-gray/50"
    >
      <div className="section-padding">
        {/* Header */}
        <motion.div
          className="max-w-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">
            {tx(t.testimonials.sectionLabel, lang)}
          </p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            {tx(t.testimonials.heading, lang)}{" "}
            <span className="italic text-suddha-gold">
              {tx(t.testimonials.headingAccent, lang)}
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(t.testimonials.subHeading, lang)}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col gap-4 bg-gradient-to-br from-suddha-blue to-suddha-teal rounded-2xl p-6 shadow-md shadow-suddha-blue/15 hover:shadow-xl hover:shadow-suddha-blue/25 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative quote */}
              <Quote
                size={28}
                className="text-suddha-gold/40 shrink-0"
                aria-hidden="true"
              />

              {/* Stars */}
              <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={`${item.id}-star-${j}`}
                    size={14}
                    className="fill-suddha-gold text-suddha-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 text-sm leading-relaxed italic flex-1">
                &ldquo;{lang === "id" ? item.quote : item.quoteEn}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full bg-suddha-gold flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-suddha-blue font-bold text-xs font-display">
                    {item.avatar}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {item.name}
                  </p>
                  <p className="text-white/75 text-xs truncate">
                    {lang === "id" ? item.role : item.roleEn} &mdash; {item.company}
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div>
                <span className="inline-flex items-center gap-1 text-xs bg-suddha-gold/15 text-suddha-gold px-2.5 py-1 rounded-full border border-suddha-gold/30">
                  <span aria-hidden="true">✓</span>
                  {tx(t.testimonials.badge, lang)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
