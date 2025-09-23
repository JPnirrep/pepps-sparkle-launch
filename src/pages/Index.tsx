import HeroSection from "@/components/HeroSection";
import MirrorSection from "@/components/MirrorSection";
import OfferSection from "@/components/OfferSection";
import TestimonialSection from "@/components/TestimonialSection";
import QualificationSection from "@/components/QualificationSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <HeroSection />
      <main>
        <MirrorSection />
        <OfferSection />
        <TestimonialSection />
        <QualificationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
