import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "How long is the program?",
      answer:
        "The Momentum Method is a 3-month private coaching program. This timeframe is specifically designed to help you build lasting habits and create sustainable systems that work long after the program ends.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 14-day money-back guarantee. If you're not satisfied within the first two weeks, you'll receive a full refund. After that period, no refunds are available as the program is personalized and resources are allocated specifically for your success.",
    },
    {
      question: "What makes this different from other coaching programs?",
      answer:
        "Unlike generic courses or motivational programs, the Momentum Method is built on neuroscience-backed principles and personalized 1:1 support. You get weekly calls, daily accountability, and custom systems designed for your specific lifestyle and goals. It's not about information — it's about implementation and real transformation.",
    },
    {
      question: "Do I need any prior experience?",
      answer:
        "No prior experience is needed. Whether you're starting from scratch or have tried other methods before, this program meets you where you are and builds a custom system that works for your current situation.",
    },
    {
      question: "How much time do I need to commit each week?",
      answer:
        "You'll have one weekly 1:1 call (60 minutes) and daily check-ins via WhatsApp (5-10 minutes). The real commitment is implementing the systems we build together — typically 30-60 minutes daily for your habits and routines.",
    },
    {
      question: "Is this program only for students?",
      answer:
        "While the program is designed with students and young professionals in mind, it works for anyone who wants to build structure, discipline, and momentum in their life — regardless of your current situation or background.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the Momentum Method.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="squircle bg-card border border-border px-6 py-2"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
