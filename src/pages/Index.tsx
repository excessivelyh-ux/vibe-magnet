import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LanguageSelector from "@/components/LanguageSelector";

const Index = () => (
  <div className="min-h-screen bg-background">
    <LanguageSelector />
    <HeroSection />
    <ServicesSection />
    <PricingSection />
    <TestimonialsSection />
    <HowItWorksSection />
    <WhyChooseUsSection />
    <FAQSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
