import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      quote: "Before this, I couldn't stay consistent for more than a week. Now I wake up early, train daily, and stay on top of my goals — even during exams.",
      author: "Daniel",
      role: "International Student, 22",
    },
    {
      quote: "This program gave me structure and confidence I didn't think I could have. I finally feel in control.",
      author: "Maria",
      role: "Grad Student, 24",
    },
  ];

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 text-center">
          Real Results. Real Discipline.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 squircle bg-card border border-accent/30 space-y-6"
            >
              <Quote className="w-10 h-10 text-accent/50" />
              <p className="text-base sm:text-lg font-normal italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
