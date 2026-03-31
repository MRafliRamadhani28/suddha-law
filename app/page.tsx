import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CommitmentSection from "@/components/sections/CommitmentSection";
import PracticesSection from "@/components/sections/PracticesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CommitmentSection />
        <PracticesSection />
        <ServicesSection />
        <TestimonialsSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
