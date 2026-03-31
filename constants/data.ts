// constants/data.ts
// Central data source for SUDDHA Law Office website

export const companyInfo = {
  name: "SUDDHA Law Office",
  tagline: "Solve Your Problem",
  subTagline: "Partner hukum yang berdedikasi untuk memberikan edukasi jernih dan solusi tepat sasaran.",
  subTaglineEn: "A dedicated legal partner committed to delivering clear guidance and targeted solutions.",
  founded: "7 Oktober 2020",
  notaris: "Akta Notaris No 3 tertanggal 7 Oktober 2020 yang dibuat dihadapan Fajar Nurrachman Kamarulloh, Notaris di Bandung.",
  notarisEn: "Notarial Deed No. 3 dated October 7, 2020, drawn up before Fajar Nurrachman Kamarulloh, Notary in Bandung.",
  contact: {
    address: "Jl. Setrasari Kulon III No 10-12, Bandung, Jawa Barat, Indonesia 40152",
    phone: "+62-881-0806-33084",
    whatsapp: "https://wa.me/62881080633084",
    email: "info@suddha.id",
    instagram: "https://instagram.com/suddha_lawfirm",
    linkedin: "https://linkedin.com/in/suddha-partnership-lawfirm-ba0994387",
  },
  operatingHours: {
    days: "Senin – Jumat",
    daysEn: "Monday – Friday",
    hours: "09.00 – 17.00 WIB",
    description: "Hubungi kami di hari dan jam operasional untuk respon tercepat",
    descriptionEn: "Contact us during operating hours for the fastest response",
  },
  legality: {
    ahu: "AHU-0000772-AH.01.18 Tahun 2020",
    nib: "0203010041421",
    ahuDate: "7 Oktober 2020",
    description:
      "SUDDHA telah terdaftar dalam Sistem Administrasi Badan Usaha pada Kementerian Hukum & HAM Republik Indonesia berdasarkan Surat Keterangan Terdaftar No.AHU-0000772-AH.01.18 Tahun 2020 tertanggal 7 Oktober 2020. Memiliki Nomor Induk Berusaha (NIB) dari Badan Koordinasi Penanaman Modal Republik Indonesia No. 0203010041421.",
    descriptionEn:
      "SUDDHA is registered in the Business Entity Administration System at the Ministry of Law & Human Rights of the Republic of Indonesia under Registration Certificate No. AHU-0000772-AH.01.18 Year 2020 dated October 7, 2020. It holds a Business Registration Number (NIB) from the Investment Coordinating Board of the Republic of Indonesia, No. 0203010041421.",
  },
};

export const aboutStory = {
  heading: "Tentang Kami",
  headingEn: "About Us",
  paragraphs: [
    "SUDDHA memiliki kantor di Bandung dengan dibantu oleh beberapa pengacara dan konsultan yang berdedikasi dan memiliki pengalaman serta bidang yang berbeda.",
    "SUDDHA berdedikasi untuk memberikan jasa hukum kepada klien di bidang korporasi dan komersial, penyelesaian sengketa, hak kekayaan intelektual, dan properti.",
    "Kami telah membantu klien kami yang tersebar di berbagai industri, baik individu, korporasi maupun bisnis startup. Sehingga kami memiliki pengetahuan dan pemahaman yang komprehensif mengenai bisnis, hukum, budaya, dan lingkungan di Indonesia.",
    "Kami juga memiliki hubungan yang sangat baik dengan institusi-institusi lain dan kantor-kantor pemerintah sehingga dapat memberikan nilai tambah bagi klien kami.",
    "Kami berkomitmen untuk memberikan jasa hukum yang dapat diandalkan, fokus terhadap industri, dengan biaya yang efisien bagi klien.",
  ],
  paragraphsEn: [
    "SUDDHA is based in Bandung, supported by a dedicated team of lawyers and consultants with diverse experience and specialisations.",
    "SUDDHA is dedicated to providing legal services to clients in the areas of corporate and commercial law, dispute resolution, intellectual property, and property.",
    "We have assisted clients across diverse industries — individuals, corporations, and startups alike — giving us comprehensive knowledge of business, law, culture, and the regulatory environment in Indonesia.",
    "We also maintain excellent relationships with other institutions and government offices, enabling us to add significant value for our clients.",
    "We are committed to delivering legal services that are reliable, industry-focused, and cost-efficient for our clients.",
  ],
};

export const commitments = [
  {
    id: "reliable",
    title: "Dapat Diandalkan",
    titleEn: "Reliable",
    icon: "Shield",
    description:
      "Kami hadir bukan hanya untuk mewakili Anda secara hukum, tetapi untuk memberikan edukasi yang jernih. Kami membantu Anda melihat duduk perkara secara utuh, sehingga Anda dapat mengambil keputusan dengan kesadaran penuh—memberikan gambaran risiko apa adanya agar langkah yang diambil tepat sasaran.",
    descriptionEn:
      "We are here not only to represent you legally, but to provide clear and informed guidance. We help you see the full picture of each matter, empowering you to make decisions with complete awareness—presenting the realities of risk so that every step you take is well-targeted.",
  },
  {
    id: "industry",
    title: "Fokus Industri",
    titleEn: "Industry Focused",
    icon: "Building2",
    description:
      "Kami berkomitmen untuk memberikan jasa hukum yang mengerti bisnis klien. Kami memiliki hubungan yang sangat baik dengan kantor-kantor pemerintah sehingga dapat menguntungkan bagi klien kami dan membantu kelancaran urusan hukum lintas instansi.",
    descriptionEn:
      "We are committed to delivering legal services that truly understand our clients\u2019 businesses. We maintain strong relationships with government offices, enabling us to benefit our clients and facilitate seamless cross-agency legal matters.",
  },
  {
    id: "efficient",
    title: "Biaya yang Efisien",
    titleEn: "Cost Efficient",
    icon: "BarChart3",
    description:
      "Fokus utama kami adalah penyelesaian masalah melalui strategi yang elegan, meminimalisir konflik berkepanjangan yang menguras energi & biaya. Kami memastikan setiap langkah hukum dilakukan dengan presisi, efisien, dan transparan dalam pembiayaan.",
    descriptionEn:
      "Our primary focus is resolving issues through elegant strategies that minimise prolonged conflicts draining energy and resources. We ensure every legal step is executed with precision, efficiency, and transparent pricing.",
  },
];

export type Practice = {
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  services: string[];
  servicesEn: string[];
  color: string;
};

export const practices: Practice[] = [
  {
    slug: "korporasi",
    title: "Korporasi & Komersial",
    titleEn: "Corporate & Commercial",
    icon: "Briefcase",
    color: "bg-navy-800",
    shortDescription:
      "Konsultan hukum berpengalaman dalam permasalahan korporasi dan komersial dengan partner yang memiliki keahlian industri unik.",
    shortDescriptionEn:
      "Experienced legal consultants in corporate and commercial matters, with partners holding unique industry expertise.",
    fullDescription:
      "Konsultan hukum di SUDDHA berpengalaman dalam memberikan jasa hukum berkaitan dengan permasalahan korporasi dan komersial. Partner kami terdiri dari pengacara dan konsultan hukum internal yang berpengalaman di industri yang unik dan bervariasi. Kami memahami bahwa setiap bisnis memiliki dinamika tersendiri, sehingga pendekatan kami selalu disesuaikan dengan kebutuhan spesifik klien.",
    fullDescriptionEn:
      "SUDDHA\u2019s legal consultants are experienced in providing legal services related to corporate and commercial matters. Our partners consist of lawyers and in-house legal consultants with experience across unique and varied industries. We understand that every business has its own dynamics, so our approach is always tailored to each client\u2019s specific needs.",
    services: [
      "Pendapat hukum mengenai korporasi secara umum",
      "Kajian dan negosiasi kontrak komersial",
      "Pendirian perusahaan patungan (joint venture)",
      "Merger, akuisisi, dan pengambilalihan perusahaan",
      "Penyertaan modal luar negeri (PMA)",
      "Perizinan usaha dan kepatuhan regulasi",
      "Penawaran Umum Perdana (IPO) dan pengeluaran saham baru",
      "Restrukturisasi perusahaan",
    ],
    servicesEn: [
      "General corporate legal opinions",
      "Review and negotiation of commercial contracts",
      "Establishment of joint ventures",
      "Mergers, acquisitions, and corporate takeovers",
      "Foreign direct investment (PMA)",
      "Business licensing and regulatory compliance",
      "Initial Public Offering (IPO) and new share issuance",
      "Corporate restructuring",
    ],
  },
  {
    slug: "dispute-resolution",
    title: "Penyelesaian Sengketa",
    titleEn: "Dispute Resolution",
    icon: "Scale",
    color: "bg-suddha-teal",
    shortDescription:
      "Representasi klien yang kuat baik di dalam maupun di luar pengadilan, mencakup perkara perdata dan pidana.",
    shortDescriptionEn:
      "Strong client representation both inside and outside the courtroom, covering civil and criminal matters.",
    fullDescription:
      "Dengan berbagai pengalaman, SUDDHA memberikan perwakilan yang baik terhadap klien baik didalam dan diluar pengadilan. Perwakilan ini termasuk perwakilan secara perdata maupun pidana. Kami mengedepankan solusi yang paling efisien dan efektif bagi klien, dengan mempertimbangkan jalur penyelesaian terbaik sebelum berperkara di pengadilan.",
    fullDescriptionEn:
      "With extensive experience, SUDDHA provides strong representation for clients both inside and outside the courtroom, covering civil and criminal proceedings. We prioritise the most efficient and effective solutions for our clients, carefully evaluating the best resolution path before resorting to litigation.",
    services: [
      "Pembuatan surat teguran (somasi)",
      "Perwakilan dalam persidangan perdata dan pidana",
      "Penetapan dan pelaksanaan eksekusi putusan",
      "Arbitrase komersial",
      "Mediasi dan rekonsiliasi",
      "Penagihan piutang secara hukum",
      "Gugatan wanprestasi dan perbuatan melawan hukum",
      "Pendampingan proses persidangan",
    ],
    servicesEn: [
      "Issuance of formal warning letters (somasi)",
      "Representation in civil and criminal proceedings",
      "Court order issuance and execution enforcement",
      "Commercial arbitration",
      "Mediation and reconciliation",
      "Legal debt collection",
      "Claims for breach of contract and unlawful acts",
      "Litigation process assistance",
    ],
  },
  {
    slug: "properti",
    title: "Properti",
    titleEn: "Property Law",
    icon: "Home",
    color: "bg-navy-700",
    shortDescription:
      "Penanganan menyeluruh atas masalah properti dengan koneksi kuat ke kantor pertanahan untuk keuntungan klien.",
    shortDescriptionEn:
      "Comprehensive handling of property matters with strong connections to land offices for the benefit of clients.",
    fullDescription:
      "SUDDHA berpengalaman dalam menangani permasalahan dan pendaftaran mengenai properti (tanah, bangunan, dll). Kami memiliki hubungan yang baik dengan kantor pertanahan yang dapat memberikan keuntungan bagi klien. Tim kami memahami kompleksitas hukum agraria Indonesia dan siap memberikan solusi yang tepat untuk setiap permasalahan properti.",
    fullDescriptionEn:
      "SUDDHA is experienced in handling property-related matters and registrations (land, buildings, etc.). We maintain strong relationships with land offices that provide a distinct advantage to our clients. Our team understands the complexities of Indonesian agrarian law and is ready to deliver the right solutions for every property issue.",
    services: [
      "Konsultasi dan bantuan pendaftaran tanah",
      "Perwakilan dalam sengketa hak atas tanah",
      "Penyelesaian masalah hak milik, HGU, HGB, dan Hak Pakai",
      "Due diligence properti untuk transaksi bisnis",
      "Pengurusan sertifikat dan balik nama",
      "Sengketa batas wilayah",
      "Pembebasan lahan",
      "Jual beli dan sewa properti komersial",
    ],
    servicesEn: [
      "Land registration consultation and assistance",
      "Representation in land rights disputes",
      "Resolution of ownership rights, HGU, HGB, and Right of Use issues",
      "Property due diligence for business transactions",
      "Certificate processing and title transfer",
      "Territorial boundary disputes",
      "Land acquisition",
      "Purchase and lease of commercial property",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Kekayaan Intelektual",
    titleEn: "Intellectual Property",
    icon: "Lightbulb",
    color: "bg-suddha-blue",
    shortDescription:
      "Konsultan KI terdaftar yang memberikan nasihat cermat dan akurat untuk perlindungan aset intelektual Anda.",
    shortDescriptionEn:
      "Registered IP consultants providing precise and accurate advice to protect your intellectual assets.",
    fullDescription:
      "Dengan memiliki konsultan kekayaan intelektual yang telah terdaftar, SUDDHA memberikan pendapat atau nasihat yang cermat dan akurat mengenai kekayaan intelektual. Kami memahami pentingnya perlindungan aset intelektual dalam era persaingan bisnis yang ketat dan membantu klien mengamankan hak-hak mereka secara komprehensif.",
    fullDescriptionEn:
      "With registered intellectual property consultants, SUDDHA provides precise and accurate opinions and advice on intellectual property matters. We understand the critical importance of protecting intellectual assets in today\u2019s highly competitive business environment, and we help clients comprehensively secure their rights.",
    services: [
      "Konsultasi dan pendaftaran paten",
      "Perlindungan hak cipta",
      "Pendaftaran dan pengelolaan merek dagang",
      "Perlindungan rahasia dagang",
      "Pendaftaran desain industri",
      "Indikasi geografis",
      "Lisensi dan transfer teknologi",
      "Penanganan sengketa kekayaan intelektual",
    ],
    servicesEn: [
      "Patent consultation and registration",
      "Copyright protection",
      "Trademark registration and management",
      "Trade secret protection",
      "Industrial design registration",
      "Geographical indications",
      "Licensing and technology transfer",
      "Intellectual property dispute handling",
    ],
  },
  {
    slug: "debt-collecting",
    title: "Penagihan Utang",
    titleEn: "Debt Collection",
    icon: "CreditCard",
    color: "bg-navy-900",
    shortDescription:
      "Layanan penagihan profesional, legal, dan beretika bagi perorangan maupun badan usaha melalui jalur litigasi dan non-litigasi.",
    shortDescriptionEn:
      "Professional, lawful, and ethical debt collection services for individuals and businesses via litigation and non-litigation channels.",
    fullDescription:
      "Kami menyediakan layanan hukum penagihan utang bagi perorangan maupun badan usaha dengan pendekatan profesional, legal, dan beretika. Layanan ini mencakup penagihan non-litigasi melalui somasi atau surat teguran hukum, negosiasi dan mediasi dengan debitur, serta penyusunan dan pengawasan perjanjian pembayaran seperti cicilan atau restrukturisasi utang, guna mencapai penyelesaian yang efektif tanpa proses pengadilan. Selain itu, kami menangani penagihan melalui jalur litigasi, termasuk gugatan perdata atas wanprestasi atau perbuatan melawan hukum, pendampingan proses persidangan hingga eksekusi putusan pengadilan.",
    fullDescriptionEn:
      "We provide legal debt collection services for individuals and businesses with a professional, lawful, and ethical approach. Our services cover non-litigation collection through formal demand letters (somasi), negotiation and mediation with debtors, and the preparation of payment arrangements such as instalment plans or debt restructuring, enabling effective resolution without court proceedings. We also handle collection through litigation, including civil claims for breach of contract or unlawful acts, courtroom assistance, and enforcement of court judgements.",
    services: [
      "Somasi dan surat teguran hukum",
      "Negosiasi dan mediasi dengan debitur",
      "Penyusunan perjanjian cicilan / restrukturisasi utang",
      "Gugatan perdata wanprestasi",
      "Pendampingan persidangan penagihan",
      "Eksekusi putusan pengadilan",
      "Pendampingan penagihan berbasis jaminan",
      "Kepailitan dan PKPU",
    ],
    servicesEn: [
      "Formal demand letters (somasi)",
      "Negotiation and mediation with debtors",
      "Drafting instalment / debt restructuring agreements",
      "Civil claims for breach of contract",
      "Debt collection litigation assistance",
      "Court judgement enforcement",
      "Collateral-based collection assistance",
      "Bankruptcy and PKPU proceedings",
    ],
  },
];

export const services = [
  {
    id: "legal-audit",
    title: "Legal Audit",
    titleEn: "Legal Audit",
    icon: "Search",
    description:
      "Melakukan Legal Audit terhadap seluruh dokumen perusahaan untuk dirumuskan dalam menemukan solusi hukum sesuai dengan kebutuhan Klien.",
    descriptionEn:
      "Conducting a Legal Audit of all company documents to identify and formulate legal solutions tailored to the Client\u2019s needs.",
  },
  {
    id: "konsultasi",
    title: "Konsultasi",
    titleEn: "Consultation",
    icon: "MessageCircle",
    description:
      "Klien dapat bebas berkonsultasi apapun dan kapanpun terkait permasalahan hukum melalui Pesan Singkat / Surat Elektronik / by phone / teleconference, maupun secara offline dengan durasi waktu tertentu.",
    descriptionEn:
      "Clients may freely consult on any legal matter at any time via instant messaging, email, phone, teleconference, or in-person meetings within a set duration.",
  },
  {
    id: "legal-research",
    title: "Legal Research",
    titleEn: "Legal Research",
    icon: "BookOpen",
    description:
      "Melakukan penelusuran hukum terhadap peraturan perundang-undangan yang relevan dengan permasalahan hukum yang sedang dan akan dihadapi Klien.",
    descriptionEn:
      "Conducting legal research into relevant laws and regulations pertaining to the legal issues currently faced or anticipated by the Client.",
  },
  {
    id: "review-drafting",
    title: "Review & Drafting",
    titleEn: "Review & Drafting",
    icon: "FileText",
    description:
      "Melakukan review dan membantu menyiapkan draft Perjanjian yang dibutuhkan Klien serta legal documents lainnya: Peraturan Perusahaan, Kontrak Kerja, SK Direksi, SOP, dan lain-lain.",
    descriptionEn:
      "Reviewing and assisting in preparing agreement drafts and other legal documents required by the Client, including Company Regulations, Employment Contracts, Board Resolutions, SOPs, and more.",
  },
  {
    id: "legalitas-perizinan",
    title: "Legalitas & Perizinan",
    titleEn: "Legality & Licensing",
    icon: "Stamp",
    description:
      "Melakukan pengurusan pendirian dan/atau perubahan Perusahaan, beserta penerbitan izin-izin yang berkaitan dengan bisnis model yang dijalankan Klien.",
    descriptionEn:
      "Handling the establishment and/or amendment of companies, along with obtaining permits related to the Client\u2019s business model.",
  },
  {
    id: "legal-opinion",
    title: "Legal Opinion",
    titleEn: "Legal Opinion",
    icon: "ScrollText",
    description:
      "Memberikan nasihat hukum lisan maupun tulisan dalam hal Hukum Perusahaan, Hukum Bisnis, HKI, Hukum Ketenagakerjaan, Hukum Internasional, Hukum Pidana, Hukum Perdata, dan permasalahan lainnya.",
    descriptionEn:
      "Providing oral and written legal advice on Corporate Law, Business Law, Intellectual Property, Labour Law, International Law, Criminal Law, Civil Law, and other legal matters.",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    titleEn: "Monitoring",
    icon: "Activity",
    description:
      "Melakukan pemantauan terhadap seluruh dokumen perusahaan secara berkala untuk memastikan kepatuhan hukum dan menemukan solusi yang sesuai dengan kebutuhan Klien.",
    descriptionEn:
      "Periodic monitoring of all company documents to ensure legal compliance and identify solutions suited to the Client\u2019s needs.",
  },
  {
    id: "weekly-meeting",
    title: "Weekly Meeting",
    titleEn: "Weekly Meeting",
    icon: "Calendar",
    description:
      "Mengadakan pertemuan tatap muka setiap 1 (satu) minggu sekali di Kantor Klien untuk dilakukan evaluasi pekerjaan dan pelaporan perkembangan.",
    descriptionEn:
      "Holding weekly in-person meetings at the Client\u2019s office for work evaluation and progress reporting.",
  },
  {
    id: "legal-action",
    title: "Legal Action (Non-Litigasi)",
    titleEn: "Legal Action (Non-Litigation)",
    icon: "Gavel",
    description:
      "Somasi, mediasi dan perdamaian, negosiasi, serta penagihan hutang (Debt Collection) terhadap pihak-pihak yang belum memenuhi kewajiban pembayaran.",
    descriptionEn:
      "Demand letters, mediation and settlement, negotiation, and debt collection against parties who have not fulfilled their payment obligations.",
  },
  {
    id: "litigasi",
    title: "Litigasi Hukum",
    titleEn: "Legal Litigation",
    icon: "Landmark",
    description:
      "Penanganan perkara hukum pada Lembaga Peradilan termasuk Lembaga Pengadilan, Kepolisian RI, Badan Pertanahan Nasional (BPN), Kementerian-Kementerian RI, dan Dinas Kab/Kota/Provinsi.",
    descriptionEn:
      "Handling legal cases before judicial institutions including courts, the National Police, the National Land Agency (BPN), Indonesian Ministries, and district/city/provincial offices.",
  },
  {
    id: "report",
    title: "Report Bulanan",
    titleEn: "Monthly Report",
    icon: "ClipboardList",
    description:
      "Memberikan laporan tertulis setiap akhir bulan terhadap setiap bantuan jasa yang diberikan, agar klien selalu mengetahui perkembangan terkini.",
    descriptionEn:
      "Providing a written report at the end of each month covering all services rendered, ensuring clients are always up to date with the latest developments.",
  },
  {
    id: "meeting-representation",
    title: "Representasi Meeting",
    titleEn: "Meeting Representation",
    icon: "Users",
    description:
      "Menghadiri / mewakili Klien setiap meeting dan/atau turut berpartisipasi dalam teleconference yang diadakan sehubungan dengan pekerjaan Klien dalam konteks Legal, baik dalam maupun luar Kota Bandung.",
    descriptionEn:
      "Attending or representing the Client in meetings and/or participating in teleconferences related to the Client\u2019s work in a legal context, both within and outside Bandung.",
  },
];

export const stats = [
  { value: "2020", label: "Tahun Berdiri",   labelEn: "Year Founded",        suffix: "" },
  { value: "5",    label: "Bidang Praktik",  labelEn: "Practice Areas",     suffix: "+" },
  { value: "12",   label: "Layanan Spesifik",labelEn: "Specific Services",  suffix: "" },
  { value: "100",  label: "Kepuasan Klien",  labelEn: "Client Satisfaction",suffix: "%" },
];

// ---------------------------------------------------------------------------
// Feature Flags
// Set any value to false to completely hide that section from the page.
// ---------------------------------------------------------------------------
export const features = {
  testimonials: true,
  team:         true,
  faq:          true,
};

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  company: string;
  rating: number;
  quote: string;
  quoteEn: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rizki Aditya Pratama",
    role: "CEO & Founder",
    roleEn: "CEO & Founder",
    company: "PT Teknologi Solusi Digital",
    rating: 5,
    quote: "SUDDHA sangat membantu dalam proses pendirian perusahaan kami. Penjelasan yang diberikan sangat jelas, risiko hukum dijelaskan secara transparan sehingga kami dapat mengambil keputusan dengan percaya diri.",
    quoteEn: "SUDDHA was instrumental in our company establishment. Their explanations were clear and legal risks communicated transparently, allowing us to make decisions with full confidence.",
    avatar: "RA",
  },
  {
    id: "t2",
    name: "Sari Dewi Kusumaningtyas",
    role: "Direktur Utama",
    roleEn: "Managing Director",
    company: "PT Graha Properti Nusantara",
    rating: 5,
    quote: "Penanganan sengketa properti kami diselesaikan dengan sangat profesional. SUDDHA tahu persis cara bernegosiasi sehingga masalah selesai tanpa proses pengadilan yang berlarut-larut.",
    quoteEn: "Our property dispute was resolved with utmost professionalism. SUDDHA knew exactly how to negotiate, settling the matter without protracted court proceedings.",
    avatar: "SD",
  },
  {
    id: "t3",
    name: "Budi Hartono Wibisono",
    role: "Direktur Keuangan",
    roleEn: "Finance Director",
    company: "PT Maju Jaya Manufaktur",
    rating: 5,
    quote: "Legal audit yang dilakukan SUDDHA membuka mata kami terhadap berbagai celah hukum yang tidak kami sadari sebelumnya. Laporan komprehensif dengan rekomendasi yang actionable.",
    quoteEn: "SUDDHA's legal audit opened our eyes to legal gaps we were previously unaware of. A comprehensive report with truly actionable recommendations.",
    avatar: "BH",
  },
  {
    id: "t4",
    name: "Amanda Putri Setiawan",
    role: "Brand Manager",
    roleEn: "Brand Manager",
    company: "Kreasi Nusantara Group",
    rating: 5,
    quote: "Pendaftaran merek dagang berjalan sangat lancar bersama SUDDHA. Tim mereka sangat responsif dan selalu memberikan update terkini. Merek kami kini terlindungi dengan baik.",
    quoteEn: "Trademark registration went incredibly smoothly with SUDDHA. Their team was highly responsive and kept us updated throughout. Our brand is now well protected.",
    avatar: "AP",
  },
  {
    id: "t5",
    name: "Hendra Gunawan Santoso",
    role: "Pengusaha",
    roleEn: "Entrepreneur",
    company: "CV Bintang Usaha Mandiri",
    rating: 5,
    quote: "Saya menggunakan jasa penagihan utang SUDDHA. Dalam 3 minggu, masalah yang sudah berbulan-bulan tertunda akhirnya terselesaikan. Prosesnya cepat, profesional, dan transparan.",
    quoteEn: "I engaged SUDDHA for debt collection. In just 3 weeks, an issue pending for months was resolved. Fast, professional, and completely transparent throughout.",
    avatar: "HG",
  },
  {
    id: "t6",
    name: "Novita Rahmawati",
    role: "Co-Founder & COO",
    roleEn: "Co-Founder & COO",
    company: "Startup Edu Innovasi",
    rating: 5,
    quote: "Sebagai startup, kami butuh konsultan yang memahami dinamika bisnis modern. SUDDHA melampaui harapan kami. Biaya transparan, komunikasi cepat, dan solusi yang tepat sasaran.",
    quoteEn: "As a startup, we needed a consultant who understood modern business dynamics. SUDDHA exceeded our expectations — transparent fees, fast communication, and targeted solutions.",
    avatar: "NR",
  },
  {
    id: "t7",
    name: "Fajar Mulyadi Kusuma",
    role: "Direktur Operasional",
    roleEn: "Operations Director",
    company: "PT Ekspor Nusantara Prima",
    rating: 5,
    quote: "Perizinan ekspor kami yang tersangkut berhasil diselesaikan SUDDHA dengan sangat cepat. Koneksi mereka dengan instansi pemerintah benar-benar terasa manfaatnya bagi bisnis kami.",
    quoteEn: "SUDDHA resolved our stalled export licences with remarkable speed. Their connections with government agencies made a tangible, significant difference for our business.",
    avatar: "FM",
  },
  {
    id: "t8",
    name: "Dewi Kartika Sanjaya",
    role: "Pemilik",
    roleEn: "Owner",
    company: "Sanjaya Hospitality & Resort",
    rating: 5,
    quote: "Sudah 2 tahun menggunakan layanan legal retainer SUDDHA. Kehadiran mereka dalam weekly meeting sangat membantu kelancaran operasional bisnis kami setiap harinya.",
    quoteEn: "We have used SUDDHA's legal retainer service for 2 years. Their presence in our weekly meetings greatly contributes to the smooth day-to-day operation of our business.",
    avatar: "DK",
  },
];

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------
export type TeamMember = {
  id: string;
  name: string;
  title: string;
  titleEn: string;
  education: string;
  educationEn: string;
  specialization: string[];
  specializationEn: string[];
  bio: string;
  bioEn: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Dr. Aditya Prasetyo, S.H., M.H.",
    title: "Managing Partner",
    titleEn: "Managing Partner",
    education: "Doktor Ilmu Hukum, Universitas Padjadjaran",
    educationEn: "Doctor of Law, Padjadjaran University",
    specialization: ["Hukum Korporasi", "Hukum Komersial", "Perizinan Usaha"],
    specializationEn: ["Corporate Law", "Commercial Law", "Business Licensing"],
    bio: "Memimpin SUDDHA sejak 2020 dengan lebih dari 15 tahun pengalaman di bidang hukum korporasi dan komersial. Telah menangani lebih dari 200 transaksi bisnis berskala besar di berbagai sektor industri Indonesia.",
    bioEn: "Leading SUDDHA since 2020 with over 15 years of experience in corporate and commercial law. Has handled more than 200 large-scale business transactions across various Indonesian industry sectors.",
    linkedin: "https://linkedin.com/in/suddha-partnership-lawfirm-ba0994387",
  },
  {
    id: "tm2",
    name: "Ratna Sari Dewi, S.H., LL.M.",
    title: "Senior Partner – Penyelesaian Sengketa",
    titleEn: "Senior Partner – Dispute Resolution",
    education: "Master of Laws (LL.M.), Universitas Indonesia",
    educationEn: "Master of Laws (LL.M.), University of Indonesia",
    specialization: ["Litigasi Perdata", "Arbitrase Komersial", "Mediasi"],
    specializationEn: ["Civil Litigation", "Commercial Arbitration", "Mediation"],
    bio: "Spesialis penyelesaian sengketa dengan pengalaman lebih dari 10 tahun di pengadilan negeri dan niaga. Berpengalaman dalam arbitrase internasional dan mediasi bisnis yang kompleks.",
    bioEn: "A dispute resolution specialist with over 10 years of experience in district and commercial courts. Experienced in international arbitration and complex business mediation.",
  },
  {
    id: "tm3",
    name: "Budi Susanto, S.H., M.Kn.",
    title: "Partner – Hukum Properti",
    titleEn: "Partner – Property Law",
    education: "Magister Kenotariatan, Universitas Gadjah Mada",
    educationEn: "Master of Notarial Law, Gadjah Mada University",
    specialization: ["Hukum Properti", "Hukum Agraria", "Transaksi Lahan"],
    specializationEn: ["Property Law", "Agrarian Law", "Land Transactions"],
    bio: "Konsultan hukum properti dengan keahlian mendalam di bidang agraria dan pertanahan. Memiliki jaringan kuat dengan BPN yang memudahkan penyelesaian permasalahan properti klien.",
    bioEn: "A property law consultant with deep expertise in agrarian and land affairs. Maintains a strong network with the National Land Agency, facilitating swift resolution of client property matters.",
  },
  {
    id: "tm4",
    name: "Indri Wulandari, S.H., M.H.",
    title: "Partner – Kekayaan Intelektual",
    titleEn: "Partner – Intellectual Property",
    education: "Magister Hukum, Universitas Padjadjaran",
    educationEn: "Master of Law, Padjadjaran University",
    specialization: ["Kekayaan Intelektual", "Merek Dagang", "Paten & Hak Cipta"],
    specializationEn: ["Intellectual Property", "Trademark", "Patent & Copyright"],
    bio: "Konsultan KI terdaftar berpengalaman dalam perlindungan merek, paten, dan hak cipta. Telah mendaftarkan lebih dari 150 merek dagang dan menangani berbagai sengketa KI.",
    bioEn: "A registered IP consultant experienced in trademark, patent, and copyright protection. Has registered over 150 trademarks and handled numerous IP disputes.",
  },
  {
    id: "tm5",
    name: "Yoga Pratama, S.H.",
    title: "Associate – Hukum Korporasi",
    titleEn: "Associate – Corporate Law",
    education: "Sarjana Hukum, Universitas Indonesia",
    educationEn: "Bachelor of Law, University of Indonesia",
    specialization: ["Pendirian Perusahaan", "Kontrak Komersial", "Kepatuhan Hukum"],
    specializationEn: ["Company Establishment", "Commercial Contracts", "Legal Compliance"],
    bio: "Praktisi hukum korporasi yang berdedikasi dalam membantu klien mendirikan dan mengelola badan usaha. Spesialis dalam penyusunan kontrak komersial dan due diligence.",
    bioEn: "A dedicated corporate law practitioner assisting clients in establishing and managing business entities. Specialises in commercial contract drafting and due diligence.",
  },
  {
    id: "tm6",
    name: "Maya Anggraini, S.H.",
    title: "Legal Consultant – Ketenagakerjaan",
    titleEn: "Legal Consultant – Labour & Employment",
    education: "Sarjana Hukum, Universitas Padjadjaran",
    educationEn: "Bachelor of Law, Padjadjaran University",
    specialization: ["Hukum Ketenagakerjaan", "Hubungan Industrial", "PHK & Pesangon"],
    specializationEn: ["Labour Law", "Industrial Relations", "Termination & Severance"],
    bio: "Konsultan hukum ketenagakerjaan dengan keahlian dalam hubungan industrial dan penyusunan peraturan perusahaan. Berpengalaman dalam penyelesaian perselisihan antara pengusaha dan karyawan.",
    bioEn: "A labour law consultant with expertise in industrial relations and company regulation drafting. Experienced in resolving employer-employee disputes professionally.",
  },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
export type Faq = {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: string;
  categoryEn: string;
};

export const faqs: Faq[] = [
  {
    id: "faq1",
    category: "Konsultasi",
    categoryEn: "Consultation",
    question: "Bagaimana cara memulai konsultasi dengan SUDDHA?",
    questionEn: "How do I start a consultation with SUDDHA?",
    answer: "Hubungi kami melalui WhatsApp, telepon, atau email yang tersedia di halaman Kontak. Tim kami akan merespons dalam waktu kurang dari 2 jam di hari kerja untuk menjadwalkan sesi konsultasi pertama Anda.",
    answerEn: "Contact us via WhatsApp, phone, or email available on the Contact page. Our team will respond within 2 hours on business days to schedule your first consultation session.",
  },
  {
    id: "faq2",
    category: "Konsultasi",
    categoryEn: "Consultation",
    question: "Apakah tersedia konsultasi secara online atau virtual?",
    questionEn: "Is online or virtual consultation available?",
    answer: "Ya. Kami menyediakan konsultasi online melalui video call, teleconference, atau pesan singkat. Klien juga dapat berkonsultasi secara langsung di kantor kami di Bandung maupun di kantor klien.",
    answerEn: "Yes. We offer online consultation via video call, teleconference, or instant messaging. Clients are also welcome to consult in person at our Bandung office or at the client's premises.",
  },
  {
    id: "faq3",
    category: "Biaya",
    categoryEn: "Fees",
    question: "Bagaimana struktur biaya atau honorarium di SUDDHA?",
    questionEn: "What is the fee structure at SUDDHA?",
    answer: "Biaya layanan bervariasi tergantung jenis dan kompleksitas perkara. Kami berkomitmen pada transparansi biaya dan akan memberikan estimasi honorarium secara jelas di awal engagement. Tersedia juga paket legal retainer bulanan yang lebih efisien untuk kebutuhan berkelanjutan.",
    answerEn: "Service fees vary depending on the type and complexity of the matter. We are committed to full fee transparency and will provide a clear estimate upfront. Monthly legal retainer packages are also available for ongoing legal needs.",
  },
  {
    id: "faq4",
    category: "Biaya",
    categoryEn: "Fees",
    question: "Apakah tersedia paket legal retainer?",
    questionEn: "Is a legal retainer package available?",
    answer: "Ya. Paket legal retainer bulanan kami mencakup konsultasi tak terbatas, review dokumen, weekly meeting di kantor klien, dan berbagai layanan operasional lainnya — dirancang untuk perusahaan atau startup yang membutuhkan dukungan hukum berkelanjutan dengan biaya terukur.",
    answerEn: "Yes. Our monthly legal retainer package covers unlimited consultations, document reviews, weekly meetings at the client's office, and various operational services — designed for companies or startups needing continuous legal support at a predictable cost.",
  },
  {
    id: "faq5",
    category: "Proses Hukum",
    categoryEn: "Legal Process",
    question: "Berapa lama proses pendirian perusahaan (PT) di SUDDHA?",
    questionEn: "How long does PT establishment take with SUDDHA?",
    answer: "Proses pendirian PT umumnya membutuhkan 7–14 hari kerja tergantung kelengkapan dokumen dan kondisi sistem OSS. Tim kami memandu seluruh proses dari akta notaris, pendaftaran AHU, hingga penerbitan NIB secara end-to-end.",
    answerEn: "PT establishment generally takes 7–14 business days depending on document completeness and OSS system conditions. Our team guides the entire process end-to-end, from the notarial deed and AHU registration to NIB issuance.",
  },
  {
    id: "faq6",
    category: "Proses Hukum",
    categoryEn: "Legal Process",
    question: "Apakah SUDDHA menangani kasus di luar kota Bandung?",
    questionEn: "Does SUDDHA handle cases outside of Bandung?",
    answer: "Ya. Meskipun berbasis di Bandung, kami menangani perkara di seluruh Indonesia. Untuk perkara yang memerlukan kehadiran fisik di luar Bandung, biaya perjalanan akan disepakati di awal dan ditampilkan secara transparan dalam perjanjian jasa hukum.",
    answerEn: "Yes. Although based in Bandung, we handle matters throughout Indonesia. For cases requiring physical presence outside Bandung, travel costs are agreed upon upfront and transparently disclosed in the legal services agreement.",
  },
  {
    id: "faq7",
    category: "Proses Hukum",
    categoryEn: "Legal Process",
    question: "Dokumen apa saja yang perlu disiapkan untuk konsultasi pertama?",
    questionEn: "What documents should I prepare for the first consultation?",
    answer: "Untuk konsultasi pertama, siapkan gambaran umum permasalahan secara tertulis. Untuk perkara bisnis, dokumen seperti akta perusahaan atau kontrak yang bermasalah sangat berguna. Namun tidak wajib — konsultasi awal dapat dilakukan hanya melalui diskusi.",
    answerEn: "For the initial consultation, prepare a written overview of your issue. For business matters, documents such as a company deed or disputed contract are helpful, but not mandatory — an initial consultation can be conducted through discussion alone.",
  },
  {
    id: "faq8",
    category: "Layanan",
    categoryEn: "Services",
    question: "Apakah SUDDHA menangani perkara pidana?",
    questionEn: "Does SUDDHA handle criminal cases?",
    answer: "Ya. SUDDHA memberikan representasi hukum dalam perkara pidana, termasuk pendampingan di tingkat penyidikan, penuntutan, hingga persidangan. Tim kami berpengalaman dalam perkara pidana umum maupun pidana khusus seperti pidana ekonomi.",
    answerEn: "Yes. SUDDHA provides legal representation in criminal matters, including at the investigation, prosecution, and trial stages. Our team is experienced in both general and special criminal cases, including economic crime.",
  },
  {
    id: "faq9",
    category: "Layanan",
    categoryEn: "Services",
    question: "Layanan kekayaan intelektual apa saja yang tersedia?",
    questionEn: "What intellectual property services are available?",
    answer: "Kami menyediakan layanan lengkap di bidang KI: pendaftaran merek dagang, paten, hak cipta, desain industri, dan indikasi geografis. Kami juga menangani sengketa KI, perjanjian lisensi, dan transfer teknologi.",
    answerEn: "We provide comprehensive IP services: trademark, patent, copyright, industrial design, and geographical indication registration. We also handle IP disputes, licensing agreements, and technology transfers.",
  },
  {
    id: "faq10",
    category: "Layanan",
    categoryEn: "Services",
    question: "Apakah SUDDHA dapat membantu proses perizinan usaha?",
    questionEn: "Can SUDDHA assist with business licensing?",
    answer: "Ya. Kami menangani perizinan usaha secara menyeluruh melalui sistem OSS, termasuk penerbitan NIB, izin usaha sektoral, dan perizinan lainnya sesuai bidang usaha klien. Kami juga memantau kepatuhan perizinan secara berkala.",
    answerEn: "Yes. We handle business licensing comprehensively through the OSS system, including NIB issuance, sectoral business permits, and other required approvals. We also monitor licensing compliance on an ongoing basis.",
  },
];
