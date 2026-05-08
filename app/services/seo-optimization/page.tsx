"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, Check, Search, BarChart3, Target, TrendingUp,
  Calendar, Globe, FileSearch, Link2, MapPin, FileText,
} from "lucide-react"

const services = [
  { icon: FileSearch, title: "Technical SEO Audit", description: "Complete website health check — crawl errors, page speed, mobile usability, schema markup, and Core Web Vitals optimization." },
  { icon: Search, title: "Keyword Research", description: "In-depth keyword analysis targeting high-intent search terms for your business in Hanumangarh and surrounding areas." },
  { icon: FileText, title: "On-Page Optimization", description: "Title tags, meta descriptions, heading structure, image alt text, internal linking, and content optimization." },
  { icon: Link2, title: "Link Building", description: "White-hat backlink acquisition from high-authority domains to boost your domain authority and rankings." },
  { icon: MapPin, title: "Local SEO", description: "Google Business Profile optimization, local citations, NAP consistency, and location-based keyword targeting for Hanumangarh." },
  { icon: FileText, title: "Content Strategy", description: "SEO-driven blog content, pillar pages, and topic clusters that establish your brand as an industry authority." },
]

const results = [
  { metric: "284%", label: "Average Traffic Increase", description: "Across our Hanumangarh clients" },
  { metric: "Page 1", label: "Google Rankings", description: "For 90% of target keywords" },
  { metric: "3x", label: "Lead Generation", description: "More qualified leads monthly" },
  { metric: "< 2s", label: "Page Load Time", description: "Core Web Vitals optimized" },
]

const faqs = [
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. You'll typically see initial improvements in 2-3 months, with significant results in 4-6 months. We provide monthly reports so you can track progress from day one." },
  { q: "What's included in your SEO services?", a: "Our SEO packages include technical audits, keyword research, on-page optimization, content strategy, link building, local SEO, Google Business Profile management, and monthly performance reports." },
  { q: "How much does SEO cost in Hanumangarh?", a: "Our SEO packages start from ₹5,000/month for local businesses. Pricing depends on competition level, target keywords, and scope. We offer a free SEO audit to determine your needs." },
  { q: "Do you guarantee #1 ranking on Google?", a: "No ethical SEO company can guarantee #1 rankings — anyone who does is misleading you. We use proven, white-hat strategies that consistently deliver page 1 results for our clients." },
  { q: "Can you help with Google Business Profile?", a: "Absolutely! We optimize your Google Business Profile for local search visibility, including complete profile setup, regular posts, review management, and local citation building." },
]

export default function SEOOptimizationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-amber-100">
              <Search className="w-4 h-4" />
              SEO Services in Hanumangarh
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              Dominate{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Google Search</span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ&apos;s data-driven SEO strategies help businesses in Hanumangarh rank on page 1 of Google — driving organic traffic, leads, and revenue that compound month after month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get a Free SEO Audit <Calendar className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/services" className="flex items-center gap-2">All Services <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {results.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{r.metric}</div>
                <div className="text-sm font-semibold text-indigo-600 mb-0.5">{r.label}</div>
                <div className="text-xs text-slate-400">{r.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Our SEO Services
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Comprehensive SEO solutions for businesses in Hanumangarh, Rajasthan, and across India.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>SEO FAQs for Hanumangarh Businesses</h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Ready to rank #1 in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-amber-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Get a free SEO audit and discover exactly what&apos;s holding your website back from page 1.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Get Free SEO Audit
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Best SEO Company in Hanumangarh, Rajasthan</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>best SEO company in Hanumangarh</strong>, Rajasthan. We provide comprehensive <strong>SEO services</strong> including technical audits, keyword research, on-page optimization, link building, and <strong>local SEO for Hanumangarh businesses</strong>. Our data-driven approach has helped dozens of businesses achieve page 1 rankings on Google.
            </p>
            <p>
              Unlike other <strong>SEO agencies in Rajasthan</strong>, we combine technical expertise with modern tools like Ahrefs, SEMRush, and Google Search Console. Whether you need <strong>local SEO in Hanumangarh</strong> to attract nearby customers or national-level SEO to compete across India — ZENVIQ delivers measurable results. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Book a free SEO audit</Link> today.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
