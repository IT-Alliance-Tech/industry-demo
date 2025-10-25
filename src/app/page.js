import AboutUs from "@/components/aboutUs";
import ContactSection from "@/components/contactSection";
import FeaturesSection from "@/components/featuresSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";
import IndustriesSection from "@/components/industriesSection";
import TestimonialsSection from "@/components/testimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <IndustriesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
