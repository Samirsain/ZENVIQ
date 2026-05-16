"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Globe, Code, Zap, Shield,
  Search, Smartphone, Server, Star, CheckCircle, Users, Clock,
} from "lucide-react"

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom websites using Next.js, WordPress, React & Shopify — built for speed and SEO.", link: "/services/web-development" },
  { icon: Search, title: "SEO & Google Ranking", desc: "Rank on page 1 of Google with technical SEO, keyword optimization & local SEO strategies.", link: "/services/seo-optimization" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Custom Android & iOS apps using React Native and Flutter for businesses in Hanumangarh.", link: "/services/ai-automation" },
  { icon: Zap, title: "AI Automation & Chatbots", desc: "24/7 AI chatbots for WhatsApp, Instagram & website — never miss a customer query again.", link: "/services/ai-automation" },
  { icon: Code, title: "E-commerce Stores", desc: "Sell online with Shopify, WooCommerce stores — Razorpay, UPI & COD payment integration.", link: "/services/ecommerce-development" },
  { icon: Shield, title: "Digital Marketing", desc: "Google Ads, social media marketing, WhatsApp marketing & content strategy for local businesses.", link: "/services" },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "<1s", label: "Page Load Time" },
  { value: "4.9★", label: "Google Rating" },
]

const whyUs = [
  { icon: Zap, title: "Next.js Advantage", desc: "We use Next.js — the same framework used by Netflix, Nike & Uber. Your website loads in under 1 second. Competitors use WordPress which loads in 3-4 seconds." },
  { icon: Search, title: "SEO-First Development", desc: "Every website comes with built-in SEO — structured data, meta tags, sitemaps, Core Web Vitals optimization. Google loves our sites." },
  { icon: Shield, title: "AI-Powered Solutions", desc: "We're the only agency in Hanumangarh offering AI chatbots, workflow automation, and intelligent business tools." },
  { icon: Star, title: "Transparent Pricing", desc: "No hidden fees. Fixed project-based pricing starting from ₹8,000. Free consultation before every project." },
  { icon: Users, title: "Local Support", desc: "We're based in Hanumangarh. Same-day support, in-person meetings, and ongoing maintenance included." },
  { icon: Clock, title: "Fast Delivery", desc: "Standard websites delivered in 7-14 days. We follow agile methodology with weekly demos." },
]

const faqs = [
  { q: "Who provides the best web development in Hanumangarh?", a: "ZENVIQ Digital is the top-rated web development company in Hanumangarh with 50+ projects delivered, a 4.9★ Google rating, and 98% client retention. We specialize in Next.js, WordPress, React, and Shopify development for local businesses." },
  { q: "How much does web development in Hanumangarh cost?", a: "Web development in Hanumangarh starts from ₹8,000 for a basic business website to ₹50,000+ for custom web applications and e-commerce stores. ZENVIQ offers transparent, project-based pricing with zero hidden fees." },
  { q: "Which is the best web development company in Hanumangarh?", a: "ZENVIQ Digital is ranked the #1 web development company in Hanumangarh. We combine modern frameworks (Next.js, React), SEO-first development, and local support to deliver results that generic agencies can't match." },
  { q: "Can ZENVIQ build an e-commerce website in Hanumangarh?", a: "Yes! We handle complete e-commerce web development in Hanumangarh using Shopify and WooCommerce — including Razorpay, UPI, and COD payment integration, inventory management, and shipping automation." },
  { q: "Do you provide support after web development in Hanumangarh?", a: "Absolutely. Every web development project in Hanumangarh includes ongoing maintenance — security updates, content changes, performance optimization, SSL management, and priority support." },
  { q: "How fast is ZENVIQ's web development turnaround in Hanumangarh?", a: "Standard web development in Hanumangarh takes 7-14 days. E-commerce stores take 2-4 weeks. Custom web applications take 4-8 weeks. We share a clear timeline during the initial free consultation." },
]

export default function HanumangarhPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-blue-100">
              <MapPin className="w-4 h-4" /> Web Development in Hanumangarh, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Web Development
              </span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital is Hanumangarh&apos;s #1 rated web development company. We build blazing-fast websites using Next.js, React &amp; WordPress — SEO-optimized and trusted by 50+ local businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Free Consultation <Calendar className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/gallery" className="flex items-center gap-2">
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Web Development Services in Hanumangarh
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Complete digital solutions for web development in Hanumangarh — from business websites to AI automation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.link} className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZENVIQ */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Why Choose ZENVIQ for Web Development in Hanumangarh?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We&apos;re not just another web development company in Hanumangarh — here&apos;s what makes ZENVIQ the #1 choice.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <w.icon className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="text-base font-bold mb-2">{w.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
                Web Development in Hanumangarh — FAQs
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Need expert web development in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Book a free strategy call with Hanumangarh&apos;s #1 web development agency. No obligations, no pressure.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book Free Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Google Map — Hanumangarh Location */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight text-center" style={{ letterSpacing: "-1px" }}>
              Find Us in Hanumangarh
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm sm:text-base">
              Visit our office or book a free consultation — we serve businesses across Hanumangarh, Rajasthan.
            </p>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55839.69696489!2d74.28!3d29.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39174e4a3e5a5b5d%3A0x9b5e2d1e2d1e2d1e!2sHanumangarh%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZENVIQ Digital - Web Development Agency in Hanumangarh, Rajasthan"
                className="w-full"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Hanumangarh, Rajasthan 335513</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Web Development in Hanumangarh, Rajasthan</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>best web development company in Hanumangarh</strong>, Rajasthan. Founded by Samir Sain, we specialise in professional <strong>web development in Hanumangarh</strong> using modern frameworks like <strong>Next.js, WordPress, React, and Shopify</strong>. Unlike traditional web agencies in Hanumangarh that use slow templates, ZENVIQ builds websites that load in under 1 second — giving you a massive advantage in Google rankings.
            </p>
            <p>
              Our <strong>web development services in Hanumangarh</strong> cover everything your business needs: custom website development, e-commerce stores, technical SEO, Google Ads, WhatsApp marketing, AI chatbots, and workflow automation. Whether you are a small business in Hanumangarh or an enterprise brand, ZENVIQ delivers measurable results.
            </p>
            <p>
              With <strong>50+ projects delivered</strong> and a <strong>4.9★ Google rating</strong>, we are the most trusted <strong>web development company in Hanumangarh</strong>. Our clients span Hanumangarh, Sri Ganganagar, Bathinda, Nohar, and across Rajasthan. We provide same-day support, in-person meetings, and ongoing maintenance.
            </p>
            <p>
              <strong>Web development services we offer in Hanumangarh:</strong> Website Development, Website Design, E-commerce Development, Mobile App Development, SEO Services, Google Ads Management, Social Media Marketing, WhatsApp Marketing, Content Marketing, AI Chatbot Development, Workflow Automation, UI/UX Design, Logo Design, and Graphic Design.
            </p>
            <p>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact ZENVIQ Digital</Link> for a free consultation and transparent quote on web development in Hanumangarh. We serve businesses across Rajasthan, Punjab, and all of India.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
