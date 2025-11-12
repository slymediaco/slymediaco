import { Button } from "@/components/ui/button";
import { Calendar, Video, MessageSquare, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProgramSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: Calendar,
      title: "Strategy Call",
      description: "We'll identify what's holding you back and design your personal momentum system — one that fits your schedule, lifestyle, and ambitions.",
    },
    {
      icon: Video,
      title: "Weekly 1:1 Calls",
      description: "Each week, we'll refine your routines, eliminate distractions, and lock in discipline through accountability and measurable progress.",
    },
    {
      icon: MessageSquare,
      title: "Daily Messaging Access",
      description: "Stay accountable with daily WhatsApp check-ins and support. You'll never fall off without a safety net again.",
    },
    {
      icon: FileText,
      title: "Custom Notion System",
      description: "Get exclusive templates for habit tracking, reflection, and planning — the same system used by top-performing students and professionals.",
    },
  ];

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Here's how it works.
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            A structured, results-driven system for real change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="p-6 squircle bg-card border border-accent/30 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 squircle bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Step {index + 1}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-base text-muted-foreground font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
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

export default ProgramSection;
