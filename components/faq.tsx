import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does DevXmir offer?",
    answer:
      "We offer comprehensive digital solutions including website design & development, WordPress customization, SEO & content strategy, e-commerce development, social media management, AI automation tools, and branding services.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary based on complexity. A basic website typically takes 2-4 weeks, while more complex e-commerce or custom web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive maintenance packages including regular updates, security monitoring, performance optimization, and technical support. We ensure your digital assets remain secure and up-to-date.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and tailored to your specific needs. We offer transparent quotes after understanding your requirements. Contact us for a free consultation and detailed proposal.",
  },
  {
    question: "Can you help with SEO for existing websites?",
    answer:
      "We conduct comprehensive SEO audits, identify optimization opportunities, and implement strategies to improve your search rankings. Our data-driven approach ensures measurable results.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
