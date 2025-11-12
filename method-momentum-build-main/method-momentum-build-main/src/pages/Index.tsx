import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProgramSection from "@/components/ProgramSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import InvestmentSection from "@/components/InvestmentSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="grain-texture min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProgramSection />
        <WhyItWorksSection />
        <WhoItsForSection />
        <TestimonialsSection />
        <FAQSection />
        <InvestmentSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
