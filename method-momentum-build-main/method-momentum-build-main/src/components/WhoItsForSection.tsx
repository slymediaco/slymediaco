import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WhoItsForSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const points = [
    "An ambitious student or professional tired of starting over.",
    "Living abroad and struggling to stay grounded and structured.",
    "Juggling multiple priorities and want clarity again.",
    "Ready to invest in personal growth that actually lasts.",
  ];

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center">
          This program is for you if you're…
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {points.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-5 squircle bg-card border border-accent/30"
            >
              <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-base sm:text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-medium text-center">
          If you're serious about change, this program will meet you there.
        </p>
      </div>
    </section>
  );
};

export default WhoItsForSection;
