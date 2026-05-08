"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Globe, Code, Zap, Shield,
  Search, Smartphone, Star, CheckCircle, Users,
} from "lucide-react"

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom websites using Next.js, WordPress, React — fast, SEO-optimized, and mobile-responsive.", link: "/services/web-development" },
  { icon: Search, title: "SEO & Google Ranking", desc: "Rank your Ganganagar business on page 1 of Google with proven SEO strategies.", link: "/services/seo-optimization" },
  { icon: Zap, title: "Digital Marketing", desc: "Google Ads, social media marketing, WhatsApp marketing & content strategy.", link: "/services" },
  { icon: Smartphone, title: "E-commerce Stores", desc: "Shopify & WooCommerce stores with Razorpay, UPI & COD payment integration.", link: "/services/ecommerce-development" },
  { icon: Code, title: "AI Chatbots", desc: "24/7 AI chatbots for WhatsApp and website — automate customer support.", link: "/services/ai-automation" },
  { icon: Shield, title: "Mobile Apps", desc: "Custom Android & iOS apps using React Native and Flutter.", link: "/services/ai-automation" },
]

const faqs = [
  { q: "Who is the best website developer near Sri Ganganagar?", a: "ZENVIQ Digital, based in nearby Hanumangarh, is the top-rated website developer serving Sri Ganganagar. We've delivered 50+ projects for businesses across Ganganagar and Rajasthan with modern technologies like Next.js and WordPress." },
  { q: "How much does a website cost in Ganganagar?", a: "Website costs range from ₹8,000 for a professional business website to ₹50,000+ for custom e-commerce stores. ZENVIQ offers transparent pricing with no hidden fees. Free consultation available." },
  { q: "Do you provide digital marketing services in Ganganagar?", a: "Yes! We provide SEO, Google Ads, social media marketing, WhatsApp marketing, and content strategy for businesses in Sri Ganganagar. We help local businesses rank on Google's first page." },
  { q: "Can you visit Ganganagar for meetings?", a: "Absolutely! Our office is in Hanumangarh — just 1 hour from Sri Ganganagar. We regularly meet clients in person and also offer remote consultations via video call." },
  { q: "Why choose ZENVIQ over Ganganagar-based agencies?", a: "ZENVIQ uses Next.js — the same technology used by Netflix and Uber. Our websites load in under 1 second, while most local agencies use slow WordPress templates. We also offer AI automation — a service no other local agency provides." },
]

export default function GanganagarPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-emerald-100">
              <MapPin className="w-4 h-4" /> Sri Ganganagar, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              Best{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Website Developer</span>{" "}
              in Sri Ganganagar
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital provides premium web development, SEO, and digital marketing services to businesses in Sri Ganganagar. Modern websites that load fast and rank high on Google.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Get Free Consultation <Calendar className="w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/gallery" className="flex items-center gap-2">View Our Work <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>Services for Ganganagar Businesses</h2>
            <p className="text-slate-500 text-base sm:text-lg">Everything your business in Sri Ganganagar needs to grow online.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.link} className="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4"><s.icon className="w-5 h-5 text-emerald-600" /></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center tracking-tight">FAQs — Web Development in Ganganagar</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" /></summary>
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative">Grow your Ganganagar business online</h2>
            <p className="text-emerald-100 mb-10 max-w-xl mx-auto relative">Book a free consultation — we&apos;re just 1 hour from Sri Ganganagar.</p>
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Best Website Development Company Near Sri Ganganagar</h3>
            <p><strong>ZENVIQ Digital</strong> is the <strong>best website development company near Sri Ganganagar</strong>, Rajasthan. Based in Hanumangarh (just 1 hour away), we serve businesses across Ganganagar with premium <strong>web development, SEO, digital marketing, and AI automation</strong> services. We use <strong>Next.js, WordPress, React, and Shopify</strong> to build websites that load in under 1 second and rank on Google&apos;s first page.</p>
            <p>Unlike local agencies using outdated technology, ZENVIQ brings <strong>enterprise-grade web development to Ganganagar</strong> at affordable prices. We&apos;ve helped businesses in Ganganagar, Hanumangarh, and across Rajasthan establish powerful online presences. Our services include <strong>Google Ads management, WhatsApp marketing, social media marketing, e-commerce stores, and custom mobile app development</strong>. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact us</Link> for a free consultation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
