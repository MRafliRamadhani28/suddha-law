import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import type { ElementType } from "react";
import {
  ArrowLeft, Phone, CheckCircle2, ArrowRight,
  Briefcase, Scale, Home, Lightbulb, CreditCard,
} from "lucide-react";
import { practices, companyInfo } from "@/constants/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const iconMap: Record<string, ElementType> = {
  Briefcase, Scale, Home, Lightbulb, CreditCard,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) return { title: "Not Found" };
  return {
    title: `${practice.title} | SUDDHA Law Office`,
    description: practice.shortDescription,
  };
}

export default async function PracticeDetailPage({ params }: Props) {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) notFound();

  const Icon = iconMap[practice.icon] ?? Briefcase;
  const currentIndex = practices.findIndex((p) => p.slug === slug);
  const nextPractice = practices[(currentIndex + 1) % practices.length];
  const prevPractice = practices[(currentIndex - 1 + practices.length) % practices.length];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-suddha-blue via-suddha-teal to-suddha-blue pt-32 pb-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-suddha-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-suddha-gold/5 rounded-full blur-3xl" />

          <div className="section-padding relative z-10">
            {/* Back button */}
            <Link
              href="/#practices"
              className="inline-flex items-center gap-2 text-white/80 hover:text-suddha-gold text-sm font-medium transition-all duration-200 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg mb-8 group w-fit"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Kembali
            </Link>

            {/* Content */}
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-suddha-gold/20 rounded-xl flex items-center justify-center">
                  <Icon size={32} className="text-suddha-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-suddha-gold text-xs tracking-[0.2em] uppercase font-semibold mb-1">
                    Bidang Jasa Hukum
                  </p>
                  <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {practice.title}
                  </h1>
                  <p className="text-white/70 text-sm tracking-wider uppercase mt-2">
                    {practice.titleEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-12">
                  <p className="text-suddha-gold font-semibold text-sm mb-3">
                    Tentang Layanan Ini
                  </p>
                  <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-6">
                    Solusi Hukum
                    <span className="italic text-suddha-gold"> Terpercaya</span>
                  </h2>
                  <div className="h-1 w-12 bg-suddha-gold mb-6" />
                  <p className="text-gray-700 text-base leading-relaxed">
                    {practice.fullDescription}
                  </p>
                </div>

                {/* Services List */}
                <div className="mb-12">
                  <p className="text-suddha-gold font-semibold text-sm mb-3">
                    Layanan yang Kami Berikan
                  </p>
                  <h2 className="font-display font-bold text-suddha-blue text-3xl md:text-4xl leading-tight mb-6">
                    Apa yang Kami
                    <span className="italic text-suddha-gold"> Tawarkan</span>
                  </h2>
                  <div className="h-1 w-12 bg-suddha-gold mb-6" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {practice.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-start gap-3 p-4 bg-suddha-gray/50 hover:bg-suddha-gray transition-colors rounded-xl"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-suddha-gold mt-0.5 shrink-0"
                        />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 bg-gradient-to-br from-suddha-blue to-suddha-teal rounded-2xl text-white">
                  <p className="font-display font-bold text-white text-xl mb-3">
                    Butuh bantuan hukum di bidang ini?
                  </p>
                  <p className="text-white/80 text-sm mb-6">
                    Tim {companyInfo.name} siap membantu Anda. Konsultasi pertama gratis dan tanpa komitmen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`${companyInfo.contact.whatsapp}?text=${encodeURIComponent(`Halo ${companyInfo.name}, saya ingin konsultasi mengenai ${practice.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group"
                    >
                      <Phone size={16} />
                      Konsultasi via WhatsApp
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                    <a
                      href={`mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(`Konsultasi ${practice.title}`)}`}
                      className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition-all duration-200"
                    >
                      Kirim Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Contact card */}
                  <div className="bg-suddha-blue text-white p-6 rounded-2xl">
                    <p className="text-suddha-gold text-xs tracking-widest uppercase font-bold mb-4">
                      Hubungi Kami
                    </p>
                    <h4 className="font-display font-bold text-lg mb-4">
                      {companyInfo.name}
                    </h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <Phone size={14} className="text-suddha-gold mt-0.5 shrink-0" />
                        <a href={companyInfo.contact.whatsapp} className="text-white/90 hover:text-suddha-gold transition-colors">
                          {companyInfo.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={14} className="text-suddha-gold mt-0.5 shrink-0" />
                        <a href={`mailto:${companyInfo.contact.email}`} className="text-white/90 hover:text-suddha-gold transition-colors">
                          {companyInfo.contact.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={14} className="text-suddha-gold mt-0.5 shrink-0" />
                        <span className="text-white/90">
                          {companyInfo.contact.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Other practices */}
                  <div className="bg-suddha-gray/50 p-6 rounded-2xl">
                    <p className="text-suddha-blue text-xs tracking-widest uppercase font-bold mb-4">
                      Bidang Lainnya
                    </p>
                    <div className="space-y-2">
                      {practices
                        .filter((p) => p.slug !== practice.slug)
                        .map((p) => {
                          const PIcon = iconMap[p.icon] ?? Briefcase;
                          return (
                            <Link
                              key={p.slug}
                              href={`/practices/${p.slug}`}
                              className="flex items-center gap-3 p-3 hover:bg-white rounded-xl transition-all duration-200 group"
                            >
                              <div className="w-8 h-8 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0">
                                <PIcon size={14} className="text-suddha-gold" strokeWidth={1.5} />
                              </div>
                              <span className="text-gray-700 group-hover:text-suddha-blue text-sm font-medium transition-colors flex-1">
                                {p.title}
                              </span>
                              <ArrowRight size={12} className="text-gray-400 group-hover:text-suddha-gold group-hover:translate-x-1 transition-all" />
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next / Prev navigation */}
        <section className="bg-suddha-gray/50 py-12">
          <div className="section-padding">
            <p className="text-center text-gray-600 text-sm mb-8">
              Jelajahi bidang jasa hukum lainnya
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href={`/practices/${prevPractice.slug}`}
                className="group p-6 bg-white hover:bg-suddha-blue transition-all duration-300 rounded-xl border border-gray-100 hover:border-suddha-blue"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ArrowLeft size={16} className="text-suddha-gold group-hover:translate-x-[-2px] transition-transform" />
                  </div>
                  <div>
                    <span className="text-suddha-gold text-xs tracking-widest uppercase font-semibold block mb-1">
                      Sebelumnya
                    </span>
                    <span className="font-display font-bold text-suddha-blue group-hover:text-white transition-colors text-lg">
                      {prevPractice.title}
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href={`/practices/${nextPractice.slug}`}
                className="group p-6 bg-white hover:bg-suddha-blue transition-all duration-300 rounded-xl border border-gray-100 hover:border-suddha-blue"
              >
                <div className="flex items-center gap-3 justify-end text-right">
                  <div>
                    <span className="text-suddha-gold text-xs tracking-widest uppercase font-semibold block mb-1">
                      Berikutnya
                    </span>
                    <span className="font-display font-bold text-suddha-blue group-hover:text-white transition-colors text-lg">
                      {nextPractice.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-suddha-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ArrowRight size={16} className="text-suddha-gold group-hover:translate-x-[2px] transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
