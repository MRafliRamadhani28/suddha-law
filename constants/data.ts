// constants/data.ts
// Central data source for SUDDHA Law Office website

export const companyInfo = {
  name: "SUDDHA Law Office",
  tagline: "Solve Your Problem",
  subTagline: "Partner hukum yang berdedikasi untuk memberikan edukasi jernih dan solusi tepat sasaran.",
  founded: "7 Oktober 2020",
  notaris: "Akta Notaris No 3 tertanggal 7 Oktober 2020 yang dibuat dihadapan Fajar Nurrachman Kamarulloh, Notaris di Bandung.",
  contact: {
    address: "Jl. Setrasari Kulon III No 10-12, Bandung, Jawa Barat, Indonesia 40152",
    phone: "+62-881-0806-33084",
    whatsapp: "https://wa.me/6288108063308",
    email: "Info@Suddha.id",
    instagram: "https://instagram.com/suddha_lawfirm",
    linkedin: "https://linkedin.com/in/suddha-partnership-lawfirm-ba0994387",
  },
  operatingHours: {
    days: "Senin – Jumat",
    hours: "09.00 – 17.00 WIB",
    description: "Hubungi kami di hari dan jam operasional untuk respon tercepat",
  },
  legality: {
    ahu: "AHU-0000772-AH.01.18 Tahun 2020",
    nib: "0203010041421",
    ahuDate: "7 Oktober 2020",
    description:
      "SUDDHA telah terdaftar dalam Sistem Administrasi Badan Usaha pada Kementerian Hukum & HAM Republik Indonesia berdasarkan Surat Keterangan Terdaftar No.AHU-0000772-AH.01.18 Tahun 2020 tertanggal 7 Oktober 2020. Memiliki Nomor Induk Berusaha (NIB) dari Badan Koordinasi Penanaman Modal Republik Indonesia No. 0203010041421.",
  },
};

export const aboutStory = {
  heading: "Tentang Kami",
  paragraphs: [
    "SUDDHA memiliki kantor di Bandung dengan dibantu oleh beberapa pengacara dan konsultan yang berdedikasi dan memiliki pengalaman serta bidang yang berbeda.",
    "SUDDHA berdedikasi untuk memberikan jasa hukum kepada klien di bidang korporasi dan komersial, penyelesaian sengketa, hak kekayaan intelektual, dan properti.",
    "Kami telah membantu klien kami yang tersebar di berbagai industri, baik individu, korporasi maupun bisnis startup. Sehingga kami memiliki pengetahuan dan pemahaman yang komprehensif mengenai bisnis, hukum, budaya, dan lingkungan di Indonesia.",
    "Kami juga memiliki hubungan yang sangat baik dengan institusi-institusi lain dan kantor-kantor pemerintah sehingga dapat memberikan nilai tambah bagi klien kami.",
    "Kami berkomitmen untuk memberikan jasa hukum yang dapat diandalkan, fokus terhadap industri, dengan biaya yang efisien bagi klien.",
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
  },
  {
    id: "industry",
    title: "Fokus Industri",
    titleEn: "Industry Focused",
    icon: "Building2",
    description:
      "Kami berkomitmen untuk memberikan jasa hukum yang mengerti bisnis klien. Kami memiliki hubungan yang sangat baik dengan kantor-kantor pemerintah sehingga dapat menguntungkan bagi klien kami dan membantu kelancaran urusan hukum lintas instansi.",
  },
  {
    id: "efficient",
    title: "Biaya yang Efisien",
    titleEn: "Cost Efficient",
    icon: "BarChart3",
    description:
      "Fokus utama kami adalah penyelesaian masalah melalui strategi yang elegan, meminimalisir konflik berkepanjangan yang menguras energi & biaya. Kami memastikan setiap langkah hukum dilakukan dengan presisi, efisien, dan transparan dalam pembiayaan.",
  },
];

export type Practice = {
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
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
    fullDescription:
      "Konsultan hukum di SUDDHA berpengalaman dalam memberikan jasa hukum berkaitan dengan permasalahan korporasi dan komersial. Partner kami terdiri dari pengacara dan konsultan hukum internal yang berpengalaman di industri yang unik dan bervariasi. Kami memahami bahwa setiap bisnis memiliki dinamika tersendiri, sehingga pendekatan kami selalu disesuaikan dengan kebutuhan spesifik klien.",
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
  },
  {
    slug: "dispute-resolution",
    title: "Penyelesaian Sengketa",
    titleEn: "Dispute Resolution",
    icon: "Scale",
    color: "bg-suddha-teal",
    shortDescription:
      "Representasi klien yang kuat baik di dalam maupun di luar pengadilan, mencakup perkara perdata dan pidana.",
    fullDescription:
      "Dengan berbagai pengalaman, SUDDHA memberikan perwakilan yang baik terhadap klien baik didalam dan diluar pengadilan. Perwakilan ini termasuk perwakilan secara perdata maupun pidana. Kami mengedepankan solusi yang paling efisien dan efektif bagi klien, dengan mempertimbangkan jalur penyelesaian terbaik sebelum berperkara di pengadilan.",
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
  },
  {
    slug: "properti",
    title: "Properti",
    titleEn: "Property Law",
    icon: "Home",
    color: "bg-navy-700",
    shortDescription:
      "Penanganan menyeluruh atas masalah properti dengan koneksi kuat ke kantor pertanahan untuk keuntungan klien.",
    fullDescription:
      "SUDDHA berpengalaman dalam menangani permasalahan dan pendaftaran mengenai properti (tanah, bangunan, dll). Kami memiliki hubungan yang baik dengan kantor pertanahan yang dapat memberikan keuntungan bagi klien. Tim kami memahami kompleksitas hukum agraria Indonesia dan siap memberikan solusi yang tepat untuk setiap permasalahan properti.",
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
  },
  {
    slug: "intellectual-property",
    title: "Kekayaan Intelektual",
    titleEn: "Intellectual Property",
    icon: "Lightbulb",
    color: "bg-suddha-blue",
    shortDescription:
      "Konsultan KI terdaftar yang memberikan nasihat cermat dan akurat untuk perlindungan aset intelektual Anda.",
    fullDescription:
      "Dengan memiliki konsultan kekayaan intelektual yang telah terdaftar, SUDDHA memberikan pendapat atau nasihat yang cermat dan akurat mengenai kekayaan intelektual. Kami memahami pentingnya perlindungan aset intelektual dalam era persaingan bisnis yang ketat dan membantu klien mengamankan hak-hak mereka secara komprehensif.",
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
  },
  {
    slug: "debt-collecting",
    title: "Penagihan Utang",
    titleEn: "Debt Collection",
    icon: "CreditCard",
    color: "bg-navy-900",
    shortDescription:
      "Layanan penagihan profesional, legal, dan beretika bagi perorangan maupun badan usaha melalui jalur litigasi dan non-litigasi.",
    fullDescription:
      "Kami menyediakan layanan hukum penagihan utang bagi perorangan maupun badan usaha dengan pendekatan profesional, legal, dan beretika. Layanan ini mencakup penagihan non-litigasi melalui somasi atau surat teguran hukum, negosiasi dan mediasi dengan debitur, serta penyusunan dan pengawasan perjanjian pembayaran seperti cicilan atau restrukturisasi utang, guna mencapai penyelesaian yang efektif tanpa proses pengadilan. Selain itu, kami menangani penagihan melalui jalur litigasi, termasuk gugatan perdata atas wanprestasi atau perbuatan melawan hukum, pendampingan proses persidangan hingga eksekusi putusan pengadilan.",
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
  },
];

export const services = [
  {
    id: "legal-audit",
    title: "Legal Audit",
    icon: "Search",
    description:
      "Melakukan Legal Audit terhadap seluruh dokumen perusahaan untuk dirumuskan dalam menemukan solusi hukum sesuai dengan kebutuhan Klien.",
  },
  {
    id: "konsultasi",
    title: "Konsultasi",
    icon: "MessageCircle",
    description:
      "Klien dapat bebas berkonsultasi apapun dan kapanpun terkait permasalahan hukum melalui Pesan Singkat / Surat Elektronik / by phone / teleconference, maupun secara offline dengan durasi waktu tertentu.",
  },
  {
    id: "legal-research",
    title: "Legal Research",
    icon: "BookOpen",
    description:
      "Melakukan penelusuran hukum terhadap peraturan perundang-undangan yang relevan dengan permasalahan hukum yang sedang dan akan dihadapi Klien.",
  },
  {
    id: "review-drafting",
    title: "Review & Drafting",
    icon: "FileText",
    description:
      "Melakukan review dan membantu menyiapkan draft Perjanjian yang dibutuhkan Klien serta legal documents lainnya: Peraturan Perusahaan, Kontrak Kerja, SK Direksi, SOP, dan lain-lain.",
  },
  {
    id: "legalitas-perizinan",
    title: "Legalitas & Perizinan",
    icon: "Stamp",
    description:
      "Melakukan pengurusan pendirian dan/atau perubahan Perusahaan, beserta penerbitan izin-izin yang berkaitan dengan bisnis model yang dijalankan Klien.",
  },
  {
    id: "legal-opinion",
    title: "Legal Opinion",
    icon: "ScrollText",
    description:
      "Memberikan nasihat hukum lisan maupun tulisan dalam hal Hukum Perusahaan, Hukum Bisnis, HKI, Hukum Ketenagakerjaan, Hukum Internasional, Hukum Pidana, Hukum Perdata, dan permasalahan lainnya.",
  },
  {
    id: "monitoring",
    title: "Monitoring",
    icon: "Activity",
    description:
      "Melakukan pemantauan terhadap seluruh dokumen perusahaan secara berkala untuk memastikan kepatuhan hukum dan menemukan solusi yang sesuai dengan kebutuhan Klien.",
  },
  {
    id: "weekly-meeting",
    title: "Weekly Meeting",
    icon: "Calendar",
    description:
      "Mengadakan pertemuan tatap muka setiap 1 (satu) minggu sekali di Kantor Klien untuk dilakukan evaluasi pekerjaan dan pelaporan perkembangan.",
  },
  {
    id: "legal-action",
    title: "Legal Action (Non-Litigasi)",
    icon: "Gavel",
    description:
      "Somasi, mediasi dan perdamaian, negosiasi, serta penagihan hutang (Debt Collection) terhadap pihak-pihak yang belum memenuhi kewajiban pembayaran.",
  },
  {
    id: "litigasi",
    title: "Litigasi Hukum",
    icon: "Landmark",
    description:
      "Penanganan perkara hukum pada Lembaga Peradilan termasuk Lembaga Pengadilan, Kepolisian RI, Badan Pertanahan Nasional (BPN), Kementerian-Kementerian RI, dan Dinas Kab/Kota/Provinsi.",
  },
  {
    id: "report",
    title: "Report Bulanan",
    icon: "ClipboardList",
    description:
      "Memberikan laporan tertulis setiap akhir bulan terhadap setiap bantuan jasa yang diberikan, agar klien selalu mengetahui perkembangan terkini.",
  },
  {
    id: "meeting-representation",
    title: "Representasi Meeting",
    icon: "Users",
    description:
      "Menghadiri / mewakili Klien setiap meeting dan/atau turut berpartisipasi dalam teleconference yang diadakan sehubungan dengan pekerjaan Klien dalam konteks Legal, baik dalam maupun luar Kota Bandung.",
  },
];

export const stats = [
  { value: "2020", label: "Tahun Berdiri", suffix: "" },
  { value: "5", label: "Bidang Praktik", suffix: "+" },
  { value: "12", label: "Layanan Spesifik", suffix: "" },
  { value: "100", label: "Kepuasan Klien", suffix: "%" },
];
