import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-center">
          You know what to do — but you can't seem to stay consistent.
        </h2>
        
        <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-normal max-w-3xl mx-auto text-center">
          <p>
            You've tried routines, planners, productivity apps.
            You start strong for a few days… then slip back into distraction.
          </p>
          
          <p className="font-medium">
            It's not because you're lazy.
            It's because no one ever taught you how to build systems that keep you accountable — even when motivation dies out.
          </p>
          
          <p>
            Especially as an international student or young professional, structure disappears fast: new country, new schedule, no one watching.
            But that's exactly where momentum makes the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
