"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import JsonLd from "@/components/json-ld"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What services does ZENVIQ offer?",
    answer: "ZENVIQ is a full-service digital agency based in Hanumangarh, Rajasthan. We offer premium web development (Next.js, React, WordPress), UI/UX design, AI-powered automation, e-commerce solutions, SEO, and digital marketing — everything your brand needs to dominate online."
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer: "It depends on your project scope. A professional business website takes 1–2 weeks, while complex web applications or e-commerce stores may take 4–8 weeks. We share a clear timeline during our initial strategy call and keep you updated at every milestone."
  },
  {
    id: "3",
    question: "Do you provide support after the project is delivered?",
    answer: "Absolutely. We offer ongoing maintenance packages that include security updates, performance monitoring, content changes, and priority support. We believe in long-term partnerships, not one-time transactions."
  },
  {
    id: "4",
    question: "How much does a website or digital project cost?",
    answer: "Our pricing is transparent and project-based — no hidden fees. Costs vary based on scope, features, and complexity. We offer competitive rates for businesses in Hanumangarh and across India. Book a free consultation and we'll provide a detailed, no-obligation quote."
  },
  {
    id: "5",
    question: "Do you work with clients outside Hanumangarh?",
    answer: "Yes! While we're proudly based in Hanumangarh, we serve clients across Rajasthan, India, and internationally. Our team is experienced in remote collaboration using modern tools to ensure seamless communication regardless of location."
  },
  {
    id: "6",
    question: "What technologies does ZENVIQ use?",
    answer: "We use cutting-edge technologies including Next.js, React, TypeScript, Node.js, Python, and modern AI/ML frameworks. We always choose the best tech stack for your specific project to ensure speed, scalability, and future-proof performance."
  },
]

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      <JsonLd data={faqSchema} />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100 shadow-stripe-sm">
              <MessageCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3"
              style={{ letterSpacing: "-1px" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Quick answers to help you understand how we work.
            </p>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-stripe-lg overflow-hidden"
          >
            <Accordion type="single" collapsible defaultValue="1" className="w-full">
              {faqData.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-slate-100 last:border-b-0 px-6"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold text-slate-900 hover:text-indigo-600 hover:no-underline transition-colors [&[data-state=open]]:text-indigo-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <span className="text-sm text-slate-500">Still have questions?</span>
            <Button asChild variant="outline" className="rounded-full px-5 font-semibold border-slate-200 hover:border-indigo-200 hover:text-indigo-600 transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
