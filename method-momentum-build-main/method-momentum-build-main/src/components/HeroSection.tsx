import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className={`relative min-h-[80vh] flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
          Build Unbreakable Discipline.
          <br />
          Create Real Momentum.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-normal">
          A private 3-month coaching experience designed to help ambitious students master structure, consistency, and self-control — without burnout or chaos.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button size="lg" onClick={scrollToApply} className="text-lg px-8 py-6">
            → Apply Now
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Limited spots available for November intake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
