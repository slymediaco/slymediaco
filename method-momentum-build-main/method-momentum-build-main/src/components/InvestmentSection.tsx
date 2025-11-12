import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const InvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "3 months of private coaching",
    "Weekly 1:1 calls",
    "Daily accountability",
    "Custom Notion templates",
    "Lifetime access to resources",
  ];

  return (
    <section 
      ref={ref}
      id="apply" 
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Your investment: $1,500 for 3 months.
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not paying for information — you're investing in transformation.
            This isn't a course. It's an implementation system.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="p-8 squircle bg-card border-2 border-accent/40 space-y-6">
            <p className="text-xl font-semibold text-center">You'll receive:</p>
            
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-base sm:text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-base text-muted-foreground text-center">
                Spots are limited to ensure personalized support.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToApply} className="text-lg px-8">
            → Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
