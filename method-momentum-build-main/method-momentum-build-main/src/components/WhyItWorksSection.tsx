import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WhyItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const principles = [
    "Rewire your environment for discipline",
    "Stay focused even when life gets messy",
    "Build consistency through small, controllable wins",
  ];

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center">
          Momentum {">"} Motivation.
        </h2>
        
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl font-medium">
            Most people wait until they "feel ready."
            Winners create systems that make readiness irrelevant.
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground">
            The Momentum Method is built on neuroscience-backed principles of habit design and performance psychology — helping you:
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="p-5 squircle bg-card border border-accent/30"
              >
                <p className="text-base font-medium">{principle}</p>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium pt-4">
            Because discipline isn't about forcing yourself — it's about designing yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
