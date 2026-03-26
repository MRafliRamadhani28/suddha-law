import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SUDDHA Law Office | Solve Your Problem",
    template: "%s | SUDDHA Law Office",
  },
  description:
    "SUDDHA Law Office — kantor hukum di Bandung yang berdedikasi memberikan jasa hukum terpercaya di bidang korporasi, penyelesaian sengketa, properti, kekayaan intelektual, dan penagihan utang.",
  keywords: [
    "kantor hukum Bandung",
    "pengacara Bandung",
    "jasa hukum korporasi",
    "konsultan hukum",
    "SUDDHA Law Office",
    "penyelesaian sengketa",
    "kekayaan intelektual",
    "debt collection",
  ],
  authors: [{ name: "SUDDHA Law Office" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://suddha.id",
    siteName: "SUDDHA Law Office",
    title: "SUDDHA Law Office | Solve Your Problem",
    description:
      "Partner hukum yang berdedikasi untuk memberikan edukasi jernih dan solusi tepat sasaran.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-white text-suddha-dark antialiased">
        {children}
      </body>
    </html>
  );
}
