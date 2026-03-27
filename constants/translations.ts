// constants/translations.ts
// All UI-only strings (hardcoded in components) in Indonesian and English.
// Data-driven content (descriptions, paragraphs) lives as *En fields in data.ts.

export type Lang = "id" | "en";

export const t = {
  nav: {
    home:       { id: "Beranda",      en: "Home" },
    about:      { id: "Tentang Kami", en: "About Us" },
    commitment: { id: "Komitmen",     en: "Commitment" },
    practices:  { id: "Bidang Jasa",  en: "Practice Areas" },
    services:   { id: "Layanan",      en: "Services" },
    contact:    { id: "Kontak",       en: "Contact" },
    cta:        { id: "Konsultasi",   en: "Consultation" },
    ctaMobile:  { id: "Konsultasi Sekarang", en: "Consult Now" },
  },

  hero: {
    partner:   { id: "Suddha — Your Partner", en: "Suddha — Your Partner" },
    ctaPrimary:{ id: "Konsultasi Sekarang",   en: "Consult Now" },
    ctaSecondary: { id: "Lihat Layanan Kami", en: "View Our Services" },
    foundedLabel: { id: "Berdiri",   en: "Founded" },
  },

  about: {
    sectionLabel:  { id: "01 — Tentang Kami", en: "01 — About Us" },
    heading:       { id: "Mitra Hukum Terpercaya", en: "Your Trusted Legal Partner" },
    headingSince:  { id: "Sejak 2020",          en: "Since 2020" },
    legalityTitle: { id: "Legalitas Perusahaan",    en: "Company Legality" },
    legalityHeading: { id: "Terdaftar Resmi di Kemenkumham RI", en: "Officially Registered at the Ministry of Law & Human Rights" },
    labelAhu:      { id: "Nomor AHU",        en: "AHU Number" },
    labelNib:      { id: "NIB",              en: "NIB" },
    labelDate:     { id: "Tanggal Terdaftar",en: "Registration Date" },
  },

  commitment: {
    sectionLabel: { id: "02 — Komitmen Kami", en: "02 — Our Commitment" },
    heading:      { id: "Mengapa Memilih",    en: "Why Choose" },
    subHeading:   {
      id: "Kami berkomitmen untuk memberikan jasa hukum yang dapat diandalkan, fokus terhadap industri, dengan biaya yang efisien bagi klien.",
      en: "We are committed to delivering reliable legal services, industry-focused expertise, and cost-efficient solutions for our clients.",
    },
    cta: { id: "Jadwalkan Konsultasi", en: "Schedule a Consultation" },
  },

  practices: {
    sectionLabel: { id: "03 — Bidang Jasa",  en: "03 — Practice Areas" },
    heading:      { id: "Bidang Praktik Kami",en: "Our Practice Areas" },
    subHeading:   {
      id: "Kami memberikan layanan hukum komprehensif di berbagai bidang untuk memenuhi kebutuhan hukum Anda.",
      en: "We provide comprehensive legal services across multiple areas to meet all your legal needs.",
    },
    cta:     { id: "Lihat Detail",      en: "View Details" },
    explore: { id: "Eksplorasi Semua",  en: "Explore All" },
  },

  services: {
    sectionLabel: { id: "04 — Layanan",  en: "04 — Services" },
    heading:      { id: "Layanan Operasional Kami", en: "Our Operational Services" },
    subHeading:   {
      id: "Rangkaian layanan hukum spesifik yang kami tawarkan untuk mendukung kebutuhan bisnis dan personal Anda.",
      en: "A comprehensive suite of specific legal services we offer to support your business and personal needs.",
    },
  },

  contact: {
    sectionLabel:  { id: "05 — Kontak", en: "05 — Contact" },
    heading:       { id: "Hubungi Kami",en: "Get In Touch" },
    subHeading:    {
      id: "Kami siap membantu Anda. Hubungi kami melalui WhatsApp, email, atau kunjungi kantor kami di Bandung.",
      en: "We are ready to assist you. Reach us via WhatsApp, email, or visit our office in Bandung.",
    },
    labelAddress:  { id: "Alamat",       en: "Address" },
    labelPhone:    { id: "Telepon",      en: "Phone" },
    labelEmail:    { id: "Email",        en: "Email" },
    labelHours:    { id: "Jam Operasional", en: "Operating Hours" },
    ctaWhatsapp:   { id: "Chat WhatsApp",   en: "Chat on WhatsApp" },
    ctaEmail:      { id: "Kirim Email",     en: "Send Email" },
    responseTime:  { id: "Respon < 2 jam",  en: "Response < 2 hours" },
  },

  footer: {
    tagline: {
      id: "Partner hukum yang berdedikasi untuk memberikan edukasi jernih dan solusi tepat sasaran.",
      en: "A dedicated legal partner committed to delivering clear guidance and targeted solutions.",
    },
    navTitle:       { id: "Navigasi",       en: "Navigation" },
    practicesTitle: { id: "Bidang Jasa",    en: "Practice Areas" },
    contactTitle:   { id: "Kontak",         en: "Contact" },
    rights:         { id: "Hak cipta dilindungi.", en: "All rights reserved." },
    registered:     {
      id: "Terdaftar pada Kemenkumham RI",
      en: "Registered at the Ministry of Law & Human Rights, RI",
    },
  },

  practiceDetail: {
    backLabel:    { id: "Kembali ke Beranda",   en: "Back to Home" },
    servicesTitle:{ id: "Layanan yang Kami Berikan", en: "Services We Provide" },
    contactTitle: { id: "Hubungi Kami",         en: "Contact Us" },
    contactCta:   { id: "Konsultasi via WhatsApp", en: "Consult via WhatsApp" },
    relatedTitle: { id: "Bidang Jasa Lainnya",  en: "Other Practice Areas" },
    prev:         { id: "Sebelumnya",           en: "Previous" },
    next:         { id: "Berikutnya",           en: "Next" },
    address:      { id: "Alamat",              en: "Address" },
    phone:        { id: "Telepon",             en: "Phone" },
    email:        { id: "Email",               en: "Email" },
  },
} as const;

export function tx(key: { id: string; en: string }, lang: Lang): string {
  return key[lang];
}
