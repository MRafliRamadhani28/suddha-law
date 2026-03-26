# SUDDHA Law Office — Website

Website company profile untuk **SUDDHA Law Office**, kantor hukum berbasis di Bandung, Jawa Barat.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (display) + DM Sans (body) via Google Fonts
- **Language**: TypeScript

---

## 📁 Struktur Proyek

```
suddha-law/
├── app/
│   ├── globals.css              # Global styles & Tailwind directives
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   └── practices/
│       └── [slug]/
│           └── page.tsx         # Dynamic practice detail page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky responsive navbar
│   │   └── Footer.tsx           # Site footer
│   └── sections/
│       ├── HeroSection.tsx      # Full-screen hero
│       ├── AboutSection.tsx     # About us + legality
│       ├── CommitmentSection.tsx # 3 commitment pillars (Framer Motion)
│       ├── PracticesSection.tsx  # Area of practices grid
│       ├── ServicesSection.tsx   # Operational services grid
│       └── ContactSection.tsx   # Contact info + map
│
├── constants/
│   └── data.ts                  # 📌 Central data file (all content)
│
├── lib/
│   └── utils.ts                 # cn() utility
│
├── tailwind.config.ts           # Custom colors, fonts, animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 3. Build untuk production
```bash
npm run build
npm start
```

---

## 🎨 Palet Warna

| Nama            | Hex       | Penggunaan                |
|-----------------|-----------|---------------------------|
| `suddha-blue`   | `#0E2C4A` | Background utama, teks    |
| `suddha-teal`   | `#1B4E6B` | Aksen biru tengah         |
| `suddha-gold`   | `#F5C400` | Aksen primer, highlight   |
| `suddha-amber`  | `#E8B800` | Hover state gold          |
| `suddha-gray`   | `#E5E7E9` | Background section abu    |
| `suddha-dark`   | `#111827` | Teks body                 |

---

## 📄 Halaman

| Route                          | Deskripsi                        |
|-------------------------------|----------------------------------|
| `/`                            | Homepage (semua section)         |
| `/practices/korporasi`         | Detail Korporasi & Komersial     |
| `/practices/dispute-resolution`| Detail Penyelesaian Sengketa    |
| `/practices/properti`          | Detail Properti                  |
| `/practices/intellectual-property` | Detail Kekayaan Intelektual |
| `/practices/debt-collecting`   | Detail Penagihan Utang           |

---

## 🖼️ Logo

Letakkan file logo di `public/logo.webp`. Logo akan digunakan di Navbar dan Footer.
Untuk sementara, logo direpresentasikan dengan huruf "S" dalam kotak berwarna.

---

## 📝 Kustomisasi Konten

Semua konten website dikelola dari satu file:

```
constants/data.ts
```

Ubah informasi perusahaan, bidang jasa, layanan, dan kontak di file tersebut
tanpa perlu menyentuh komponen UI.

---

## 🌐 Deploy

Direkomendasikan menggunakan [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Atau bisa juga di-deploy ke Netlify, Railway, atau VPS mana pun yang mendukung Node.js.
