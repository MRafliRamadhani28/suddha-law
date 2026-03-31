"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { companyInfo, aboutStory } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

export default function AboutSection() {
  const { lang } = useLanguage();

  const legalItems = [
    { label: tx(t.about.labelAhu,  lang), value: companyInfo.legality.ahu  },
    { label: tx(t.about.labelNib,  lang), value: companyInfo.legality.nib  },
    { label: tx(t.about.labelDate, lang), value: companyInfo.legality.ahuDate },
  ];

  const paragraphs = lang === "en" ? aboutStory.paragraphsEn : aboutStory.paragraphs;
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Story */}
          <div>
            <p className="section-label">{tx(t.about.sectionLabel, lang)}</p>
            <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-6">
              {tx(t.about.heading, lang)}
              <span className="italic text-suddha-gold"> {tx(t.about.headingSince, lang)}</span>
            </h2>
            
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p
                  key={para.slice(0, 30)}
                  className="text-gray-700 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Founder note */}
            <div className="flex gap-3 mt-8 p-4 bg-suddha-gray rounded-xl">
              <div className="w-1 h-full bg-suddha-gold rounded-full shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{lang === "en" ? companyInfo.notarisEn : companyInfo.notaris}&rdquo;
              </p>
            </div>
          </div>

          {/* Right column — photo stacked above legality card */}
          <div className="flex flex-col gap-6">

            {/* Office / team photo */}
            <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/DSC09214.webp"
                alt="Tim Suddha Partnership berdiskusi di kantor"
                fill
                className="object-cover object-center"
              />
              {/* Subtle scrim for visual weight */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Legality card */}
            <div className="bg-gradient-to-br from-suddha-blue to-suddha-teal text-white p-8 rounded-2xl shadow-lg shadow-suddha-blue/10">
              <p className="text-suddha-gold font-semibold mb-4">
                {tx(t.about.legalityTitle, lang)}
              </p>
              <h3 className="font-display font-bold text-2xl mb-4 leading-tight">
                {tx(t.about.legalityHeading, lang)}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {lang === "en" ? companyInfo.legality.descriptionEn : companyInfo.legality.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {legalItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-suddha-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="text-white/50 text-xs uppercase block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-white font-mono text-sm">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
