"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Brain, Bot, Workflow, Zap, Calendar, MessageSquare, BarChart3, Clock, Shield } from "lucide-react"
import ServiceSchema from "@/components/service-schema"

const capabilities = [
  { icon: Bot, title: "Custom AI Chatbots", description: "24/7 customer support agents trained on your business data. Handle queries, bookings, and support automatically." },
  { icon: Workflow, title: "Workflow Automation", description: "Automate repetitive tasks — invoicing, follow-ups, data entry, lead nurturing — saving 20+ hours per week." },
  { icon: BarChart3, title: "AI-Powered Analytics", description: "Intelligent dashboards that predict trends, identify opportunities, and provide actionable business insights." },
  { icon: MessageSquare, title: "WhatsApp & Social AI", description: "Automated responses on WhatsApp, Instagram DMs, and Facebook Messenger — never miss a lead again." },
  { icon: Shield, title: "Data Privacy First", description: "All AI solutions are built with enterprise-grade security and data privacy compliance." },
  { icon: Zap, title: "API Integrations", description: "Connect AI with your existing CRM, ERP, payment systems, and business tools seamlessly." },
]

const faqs = [
  { q: "How can AI help my business in Hanumangarh?", a: "AI can automate customer support, handle WhatsApp queries 24/7, generate content, analyze data, and streamline operations — saving time and reducing costs for businesses of any size in Hanumangarh." },
  { q: "How much does an AI chatbot cost?", a: "Custom AI chatbot development starts from ₹15,000. Pricing depends on complexity, training data, and integrations required. We offer free consultations to assess your needs." },
  { q: "Can AI replace my customer support team?", a: "AI handles 70-80% of routine queries automatically, freeing your team to focus on complex issues. It complements your team rather than replacing it — delivering faster response times and 24/7 availability." },
  { q: "What technologies do you use for AI?", a: "We use OpenAI GPT, LangChain, Pinecone for vector databases, Python, and Next.js for building custom AI solutions tailored to your business needs." },
]

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceSchema
        name="AI Automation & Chatbot Development in Hanumangarh"
        description="Custom AI chatbots, WhatsApp automation, workflow automation, and intelligent business solutions for 24/7 customer support."
        url="/services/ai-automation"
        priceRange="₹15,000 - ₹1,00,000"
      />
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-purple-100">
              <Brain className="w-4 h-4" /> AI Automation in Hanumangarh
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">AI Automation</span>{" "}for Your Business in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              Custom AI chatbots, workflow automation, and intelligent business solutions that save time, cut costs, and work 24/7 — built by ZENVIQ for businesses across Hanumangarh and Rajasthan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Get AI Consultation <Calendar className="w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/services" className="flex items-center gap-2">All Services <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>AI Capabilities We Deliver</h2>
            <p className="text-slate-500 text-base sm:text-lg">Intelligent solutions for businesses in Hanumangarh ready to automate and scale.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-4"><c.icon className="w-5 h-5 text-purple-600" /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>AI Automation FAQs</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" /></summary>
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>Ready to automate your business?</h2>
            <p className="text-base sm:text-lg text-purple-100 mb-10 max-w-xl mx-auto leading-relaxed relative">Book a free AI consultation and discover how automation can transform your business in Hanumangarh.</p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Free Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">AI Automation Agency in Hanumangarh</h3>
            <p><strong>ZENVIQ Digital</strong> is Hanumangarh&apos;s leading <strong>AI automation agency</strong>. We build custom AI chatbots using GPT, LangChain, and modern AI frameworks that handle customer queries 24/7. Our <strong>workflow automation solutions</strong> help businesses in Hanumangarh save 20+ hours per week by automating repetitive tasks like invoicing, follow-ups, and data management.</p>
            <p>Whether you need a <strong>WhatsApp chatbot for your Hanumangarh business</strong>, an AI-powered analytics dashboard, or complete process automation — ZENVIQ delivers intelligent solutions that scale. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact us</Link> for a free AI consultation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
