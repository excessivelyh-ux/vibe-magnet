import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ServicesSection />
    <PricingSection />
    <HowItWorksSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <FAQSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
