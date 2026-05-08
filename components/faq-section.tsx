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
  {
    id: "7",
    question: "Who is the best website developer in Hanumangarh?",
    answer: "ZENVIQ Digital is Hanumangarh's top-rated website developer. We specialize in Next.js, WordPress, Shopify, and custom web development. Our team has delivered 50+ projects for businesses across Rajasthan with a 98% client retention rate."
  },
  {
    id: "8",
    question: "How much does a website cost in Hanumangarh?",
    answer: "Website costs in Hanumangarh range from ₹5,000 for a basic business website to ₹50,000+ for custom e-commerce stores and web applications. ZENVIQ offers competitive, transparent pricing with no hidden fees. Contact us for a free quote."
  },
  {
    id: "9",
    question: "Which is the best digital marketing agency in Hanumangarh?",
    answer: "ZENVIQ Digital is the best digital marketing agency in Hanumangarh, offering SEO, social media marketing, Google Ads, content marketing, and brand strategy. We help local businesses rank on page 1 of Google and grow their online presence."
  },
  {
    id: "10",
    question: "Do you provide SEO services in Hanumangarh?",
    answer: "Yes! ZENVIQ provides comprehensive SEO services in Hanumangarh including technical SEO audits, keyword research, on-page optimization, link building, local SEO, and content strategy. We've helped dozens of businesses achieve page 1 rankings on Google."
  },
  {
    id: "11",
    question: "Can ZENVIQ build an e-commerce website in Hanumangarh?",
    answer: "Absolutely! ZENVIQ builds high-converting e-commerce websites using Shopify, WooCommerce, and custom platforms. We handle everything from product setup and payment integration to SEO optimization and mobile-responsive design."
  },
  {
    id: "12",
    question: "Does ZENVIQ offer social media marketing in Hanumangarh?",
    answer: "Yes, we provide full social media marketing services in Hanumangarh including Instagram marketing, Facebook Ads, content creation, community management, and brand awareness campaigns for businesses across Rajasthan."
  },
]

export { faqData }

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-white">
      {/* FAQ Schema — rendered as static script to ensure crawlers always see it */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />

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

          {/* Accordion — all 12 items rendered for schema/content parity */}
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
