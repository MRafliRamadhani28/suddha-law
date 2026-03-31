"use client";

import { motion } from "framer-motion";
import { Linkedin, GraduationCap } from "lucide-react";
import { teamMembers, features } from "@/constants/data";
import { useLanguage } from "@/lib/language-context";
import { t, tx } from "@/constants/translations";

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function TeamSection() {
  const { lang } = useLanguage();

  if (!features.team) return null;

  return (
    <section id="team" className="py-20 bg-white">
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
            {tx(t.team.sectionLabel, lang)}
          </p>
          <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-4">
            {tx(t.team.heading, lang)}{" "}
            <span className="italic text-suddha-gold">
              {tx(t.team.headingAccent, lang)}
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {tx(t.team.subHeading, lang)}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border border-suddha-gray shadow-sm hover:shadow-xl hover:shadow-suddha-blue/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card top — dark gradient */}
              <div className="bg-gradient-to-br from-suddha-blue to-suddha-teal px-8 pt-10 pb-8 flex flex-col items-center gap-4 text-center relative">
                {/* Decorative ring */}
                <div className="w-[88px] h-[88px] rounded-full ring-4 ring-suddha-gold/30 ring-offset-4 ring-offset-suddha-teal flex items-center justify-center bg-suddha-gold shrink-0">
                  <span className="text-suddha-blue font-bold font-display text-2xl">
                    {getInitials(member.name)}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-display font-bold text-lg leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-suddha-gold/90 text-sm mt-1 font-medium">
                    {lang === "id" ? member.title : member.titleEn}
                  </p>
                </div>

                {/* {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-suddha-gold transition-colors duration-200"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <Linkedin size={18} />
                  </a>
                )} */}
              </div>

              {/* Card body — light */}
              <div className="p-6 flex flex-col gap-5 bg-white">
                {/* Education */}
                <div className="flex items-start gap-2.5">
                  <GraduationCap
                    size={16}
                    className="text-suddha-gold mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-700 text-sm leading-snug">
                    {lang === "id" ? member.education : member.educationEn}
                  </p>
                </div>

                {/* Specialization chips */}
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2.5">
                    {tx(t.team.specializationLabel, lang)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(lang === "id"
                      ? member.specialization
                      : member.specializationEn
                    ).map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-suddha-blue/5 text-suddha-blue border border-suddha-blue/15 px-2.5 py-1 rounded-full font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {lang === "id" ? member.bio : member.bioEn}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
