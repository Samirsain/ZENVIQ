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
  { q: "Who is the best website developer in Hanumangarh?", a: "ZENVIQ Digital is rated the #1 website developer in Hanumangarh with 50+ projects delivered, a 4.9★ Google rating, and 98% client retention rate. We specialize in Next.js, WordPress, React, and Shopify development." },
  { q: "How much does a website cost in Hanumangarh?", a: "Website costs in Hanumangarh range from ₹8,000 for a business website to ₹50,000+ for custom web applications and e-commerce stores. ZENVIQ offers transparent, project-based pricing with no hidden fees." },
  { q: "Which is the best digital marketing company in Hanumangarh?", a: "ZENVIQ Digital is the best digital marketing agency in Hanumangarh offering SEO, Google Ads, social media marketing, WhatsApp marketing, and content strategy. We deliver measurable results with monthly performance reports." },
  { q: "Can you build an e-commerce website in Hanumangarh?", a: "Yes! We build complete e-commerce stores using Shopify and WooCommerce with Razorpay, UPI, and COD payment integration, inventory management, and shipping automation." },
  { q: "Do you provide website maintenance in Hanumangarh?", a: "Yes. We offer ongoing maintenance packages including security updates, content changes, performance optimization, SSL management, and priority support for all our clients in Hanumangarh." },
  { q: "How long does it take to build a website in Hanumangarh?", a: "A standard business website takes 7-14 days. E-commerce stores take 2-4 weeks. Custom web applications may take 4-8 weeks. We share a clear timeline during our initial free consultation." },
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
              <MapPin className="w-4 h-4" /> Hanumangarh, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              Best{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Website Developer
              </span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital is Hanumangarh&apos;s #1 rated web development company. We build blazing-fast websites, provide expert SEO services, and deliver AI-powered solutions trusted by 50+ local businesses.
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
              Our Services in Hanumangarh
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Complete digital solutions for businesses in Hanumangarh — from websites to AI automation.
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
              Why Hanumangarh Businesses Choose ZENVIQ
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We&apos;re not just another web development company — here&apos;s what makes ZENVIQ the #1 choice in Hanumangarh.
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
                Frequently Asked Questions — Hanumangarh
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
              Ready to grow your business in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Book a free strategy call with Hanumangarh&apos;s top-rated digital agency. No obligations, no pressure.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book Free Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Best Website Development Company in Hanumangarh, Rajasthan</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>best website development company in Hanumangarh</strong>, Rajasthan. Founded by Samir Sain, we specialize in building high-performance websites using <strong>Next.js, WordPress, React, and Shopify</strong>. Unlike traditional <strong>web design companies in Hanumangarh</strong> that use slow WordPress templates, ZENVIQ uses modern frameworks that make your website load in under 1 second — giving you a massive SEO advantage on Google.
            </p>
            <p>
              We offer complete digital solutions including <strong>website development, SEO, digital marketing, Google Ads, WhatsApp marketing, AI chatbot development, and e-commerce store setup</strong>. Whether you&apos;re a small business in Hanumangarh, a startup looking to establish online presence, or an enterprise brand needing custom web applications — ZENVIQ delivers results that matter.
            </p>
            <p>
              With <strong>50+ projects delivered</strong> and a <strong>4.9★ Google rating</strong>, we&apos;re the most trusted <strong>IT company in Hanumangarh</strong>. Our clients include businesses from Hanumangarh, Sri Ganganagar, Bathinda, Nohar, and across Rajasthan. We provide same-day support, in-person meetings, and ongoing maintenance for all our projects.
            </p>
            <p>
              <strong>Services we offer in Hanumangarh:</strong> Website Development, Website Design, E-commerce Development, Mobile App Development, SEO Services, Google Ads Management, Social Media Marketing, WhatsApp Marketing, Content Marketing, AI Chatbot Development, Workflow Automation, UI/UX Design, Logo Design, and Graphic Design.
            </p>
            <p>
              <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact ZENVIQ Digital</Link> for a free consultation and transparent quote. We&apos;re based in Hanumangarh and serve businesses across Rajasthan, Punjab, and all of India.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
