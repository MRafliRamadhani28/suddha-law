import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { practices } from "@/constants/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PracticeDetailClient from "./PracticeDetailClient";

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

export default async function PracticeDetailPage({ params }: Readonly<Props>) {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) notFound();

  const currentIndex = practices.findIndex((p) => p.slug === slug);
  const nextPractice = practices[(currentIndex + 1) % practices.length];
  const prevPractice = practices[(currentIndex - 1 + practices.length) % practices.length];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <PracticeDetailClient
          practice={practice}
          prevPractice={prevPractice}
          nextPractice={nextPractice}
        />
      </main>
      <Footer />
    </>
  );
}
