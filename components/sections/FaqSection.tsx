"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs, features, companyInfo } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

export default function FaqSection() {
  const { lang } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  if (!features.faq) return null;

  // Canonical category IDs are in Indonesian
  const uniqueCategories = Array.from(new Set(faqs.map((f) => f.category)));

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  function getCategoryLabel(cat: string): string {
    if (cat === "all") return tx(t.faq.all, lang);
    const match = faqs.find((f) => f.category === cat);
    return lang === "id" ? cat : (match?.categoryEn ?? cat);
  }

  function getCategoryCount(cat: string): number {
    if (cat === "all") return faqs.length;
    return faqs.filter((f) => f.category === cat).length;
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* ── Left panel — sticky dark sidebar ── */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-suddha-blue to-suddha-teal rounded-2xl p-8 shadow-lg shadow-suddha-blue/10 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-suddha-gold font-semibold text-sm mb-4">
              {tx(t.faq.sectionLabel, lang)}
            </p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
              {tx(t.faq.heading, lang)}{" "}
              <span className="italic text-suddha-gold">
                {tx(t.faq.headingAccent, lang)}
              </span>
            </h2>
            <p className="text-white/85 text-sm leading-relaxed mb-8">
              {tx(t.faq.subHeading, lang)}
            </p>

            {/* Vertical category nav */}
            <div className="border-t border-white/10 pt-6 mb-8 space-y-1">
              {["all", ...uniqueCategories].map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenId(null);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left",
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200",
                          isActive ? "bg-suddha-gold" : "bg-white/20"
                        )}
                      />
                      {getCategoryLabel(cat)}
                    </span>
                    <span
                      className={cn(
                        "text-xs tabular-nums font-mono transition-colors duration-200",
                        isActive ? "text-suddha-gold" : "text-white/55"
                      )}
                    >
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white/80 text-xs leading-relaxed mb-4">
                {tx(t.faq.cta, lang)}
              </p>
              <a
                href={companyInfo.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center group"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {tx(t.faq.ctaLabel, lang)}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* ── Right panel — editorial accordion ── */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-gray-100">
              {filtered.map((item, i) => {
                const isOpen = openId === item.id;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full py-6 flex items-start gap-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-suddha-blue focus-visible:ring-inset"
                      aria-expanded={isOpen}
                    >
                      {/* Number */}
                      <span
                        className={cn(
                          "font-display font-bold text-2xl leading-none tabular-nums shrink-0 transition-colors duration-200 pt-0.5",
                          isOpen
                            ? "text-suddha-gold"
                            : "text-gray-200 group-hover:text-suddha-gold/50"
                        )}
                      >
                        {num}
                      </span>

                      {/* Question */}
                      <span
                        className={cn(
                          "font-display font-semibold text-base md:text-lg leading-snug flex-1 transition-colors duration-200",
                          isOpen
                            ? "text-suddha-blue"
                            : "text-suddha-dark group-hover:text-suddha-blue"
                        )}
                      >
                        {lang === "id" ? item.question : item.questionEn}
                      </span>

                      {/* Chevron */}
                      <ChevronDown
                        size={20}
                        className={cn(
                          "shrink-0 mt-1 transition-all duration-300",
                          isOpen
                            ? "rotate-180 text-suddha-gold"
                            : "text-gray-300 group-hover:text-suddha-gold/70"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-[52px] pr-7">
                            <div className="flex gap-4">
                              <div className="w-0.5 self-stretch bg-suddha-gold/40 rounded-full shrink-0" />
                              <p className="text-gray-700 leading-relaxed text-sm">
                                {lang === "id" ? item.answer : item.answerEn}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
