import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Build consistent daily habits — and make them automatic.",
    "Eliminate procrastination and self-doubt.",
    "Create routines that actually fit your lifestyle and goals.",
    "Feel calm, confident, and in control — every single day.",
  ];

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center">
          That's why I created the Momentum Method.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 text-center">
          A private, 3-month coaching program built to help you:
        </p>

        <div className="grid gap-4 max-w-3xl mx-auto mb-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 sm:p-5 squircle bg-card border border-accent/30"
            >
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg font-medium">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-lg font-medium max-w-2xl mx-auto">
            You'll finally stop overthinking and start moving with purpose.
            No motivational fluff. Just systems that work.
          </p>
          
          <Button size="lg" onClick={scrollToApply} className="text-lg px-8">
            → Apply for Your Spot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
