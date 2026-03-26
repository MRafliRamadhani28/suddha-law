"use client";

import { CheckCircle2 } from "lucide-react";
import { companyInfo, aboutStory } from "@/constants/data";

const legalItems = [
  {
    label: "Nomor AHU",
    value: companyInfo.legality.ahu,
  },
  {
    label: "NIB",
    value: companyInfo.legality.nib,
  },
  {
    label: "Tanggal Terdaftar",
    value: companyInfo.legality.ahuDate,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Story */}
          <div>
            <p className="section-label">01 — {aboutStory.heading}</p>
            <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-6">
              Mitra Hukum Terpercaya
              <span className="italic text-suddha-gold"> Sejak 2020</span>
            </h2>
            
            <div className="space-y-4">
              {aboutStory.paragraphs.map((para, i) => (
                <p
                  key={i}
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
                &ldquo;{companyInfo.notaris}&rdquo;
              </p>
            </div>
          </div>

          {/* Legality card */}
          <div>
            <div className="bg-gradient-to-br from-suddha-blue to-suddha-teal text-white p-8 rounded-2xl shadow-lg shadow-suddha-blue/10">
              <p className="text-suddha-gold font-semibold mb-4">
                Legalitas Perusahaan
              </p>
              <h3 className="font-display font-bold text-2xl mb-4 leading-tight">
                Terdaftar Resmi di Kemenkumham RI
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {companyInfo.legality.description}
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
