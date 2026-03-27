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
