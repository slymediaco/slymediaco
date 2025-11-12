import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FinalCTASection = () => {
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
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8">
          Momentum starts with one decision.
        </h2>
        
        <div className="space-y-6 mb-8">
          <p className="text-lg sm:text-xl font-medium">
            Your habits shape your future — not your intentions.
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground">
            Let's build the structure, mindset, and accountability to make sure you never fall off again.
          </p>

          <p className="text-lg font-medium">
            If you're serious about becoming the disciplined version of yourself, apply below.
          </p>
        </div>

        <Button 
          size="lg" 
          className="text-lg px-12 py-6"
          onClick={scrollToApply}
        >
          → Apply for Your Spot
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
