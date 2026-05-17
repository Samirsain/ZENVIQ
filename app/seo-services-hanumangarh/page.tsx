"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Search, BarChart3, Zap,
  Shield, Star, CheckCircle, Users, Clock, Globe, Target,
  TrendingUp, FileSearch, Link2,
} from "lucide-react"

const services = [
  { icon: FileSearch, title: "Technical SEO Audit", desc: "Complete website audit — crawl errors, site speed, mobile-friendliness, schema markup, and Core Web Vitals optimization.", link: "/services" },
  { icon: Search, title: "On-Page SEO", desc: "Keyword research, meta tags, heading structure, internal linking, and content optimization for target keywords.", link: "/services" },
  { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimization, local citations, Maps ranking, and location-specific content strategy for Hanumangarh.", link: "/services" },
  { icon: TrendingUp, title: "Content Strategy", desc: "Blog content planning, topic clusters, and long-form content creation that targets high-intent search queries.", link: "/blog" },
  { icon: Link2, title: "Link Building", desc: "High-authority backlink acquisition through guest posts, directory submissions, and digital PR campaigns.", link: "/services" },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Monthly performance reports with Google Search Console, keyword rankings, traffic growth, and conversion tracking.", link: "/services" },
]

const stats = [
  { value: "50+", label: "Sites Optimized" },
  { value: "Page 1", label: "Google Rankings" },
  { value: "3x", label: "Avg Traffic Growth" },
  { value: "4.9★", label: "Google Rating" },
]

const whyUs = [
  { icon: Zap, title: "Next.js Speed Advantage", desc: "Our sites load in under 1 second. Google rewards fast websites with higher rankings. Your WordPress competitors load in 3-4 seconds — that's our unfair advantage." },
  { icon: Target, title: "Data-Driven Strategy", desc: "We don't guess — we use Ahrefs, SEMRush, and Google Search Console to find exact keywords your customers are searching for in Hanumangarh." },
  { icon: Shield, title: "AI Search Ready", desc: "We're the only agency in Hanumangarh that optimizes for AI search engines (ChatGPT, Perplexity, Google AI). Your business appears in AI-generated answers." },
  { icon: Star, title: "Transparent Reporting", desc: "Monthly reports with real metrics — keyword rankings, organic traffic, backlinks acquired. No vanity metrics, only results that matter." },
  { icon: Users, title: "Local Expertise", desc: "Based in Hanumangarh, we understand the local market. Same-day support, in-person strategy sessions, and deep knowledge of regional search patterns." },
  { icon: Clock, title: "Quick Results", desc: "While SEO is a long game, we deliver quick wins within 30 days — technical fixes, local listings, and on-page optimization that show immediate improvement." },
]

const faqs = [
  { q: "Who provides the best SEO services in Hanumangarh?", a: "ZENVIQ Digital is the top-rated SEO company in Hanumangarh with proven results — helping businesses rank on page 1 of Google through technical SEO, keyword optimization, and content strategy. We use modern tools like Ahrefs and SEMRush for data-driven SEO." },
  { q: "How much do SEO services cost in Hanumangarh?", a: "SEO services in Hanumangarh start from ₹5,000/month for basic local SEO to ₹25,000+/month for comprehensive SEO with content marketing and link building. ZENVIQ offers transparent, results-based pricing with no hidden fees." },
  { q: "How long does it take to see SEO results in Hanumangarh?", a: "SEO is a long-term investment. Typically, local SEO results in Hanumangarh begin to show within 2-3 months, with significant ranking improvements at 4-6 months. We provide monthly progress reports so you can track every improvement." },
  { q: "Does ZENVIQ provide local SEO for Hanumangarh businesses?", a: "Yes! ZENVIQ specializes in local SEO for Hanumangarh — including Google Business Profile optimization, local citation building (Justdial, Sulekha, IndiaMART), location-specific content, and Google Maps ranking improvement." },
  { q: "What makes ZENVIQ different from other SEO companies in Hanumangarh?", a: "ZENVIQ uses Next.js (the same framework used by Netflix & Uber) which gives websites a massive technical SEO advantage. We also offer AI-powered content strategy and are the only agency in Hanumangarh providing AI search optimization — appearing in ChatGPT, Perplexity, and Google AI Overview results." },
  { q: "Can you help my Hanumangarh business rank on Google Maps?", a: "Absolutely. Our local SEO package includes complete Google Business Profile optimization — photos, posts, Q&A, review management, and citation building across 50+ Indian directories. Most clients see Maps ranking improvements within 4-6 weeks." },
]

const process = [
  { step: "01", title: "SEO Audit", desc: "Complete technical audit of your website — crawl errors, site speed, mobile issues, and competitor analysis." },
  { step: "02", title: "Strategy & Keywords", desc: "Research high-intent keywords your customers search, map them to pages, and create an action plan." },
  { step: "03", title: "On-Page Optimization", desc: "Optimize meta tags, headings, content, internal links, schema markup, and Core Web Vitals." },
  { step: "04", title: "Content & Links", desc: "Publish SEO content, build high-authority backlinks, and manage local citations for ongoing growth." },
]

export default function SEOHanumangarhPage() {
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
              <MapPin className="w-4 h-4" /> SEO Services in Hanumangarh, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                SEO Services
              </span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital is Hanumangarh&apos;s #1 SEO company. We help local businesses rank on page 1 of Google with technical SEO, local optimization, and data-driven content strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Free SEO Audit <Calendar className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/gallery" className="flex items-center gap-2">
                  See Results <ArrowRight className="w-4 h-4" />
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
              SEO Services We Offer in Hanumangarh
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Comprehensive SEO solutions to help your Hanumangarh business dominate Google search results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.link} className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Our SEO Process in Hanumangarh
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              A proven 4-step process that delivers measurable results for businesses in Hanumangarh.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative text-center p-6 bg-white rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-100">
                  <span className="text-lg font-bold text-amber-600">{p.step}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
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
              Why Choose ZENVIQ for SEO in Hanumangarh?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We&apos;re not another SEO agency making promises — here&apos;s what sets ZENVIQ apart.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <w.icon className="w-6 h-6 text-amber-400 mb-4" />
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
                SEO Services in Hanumangarh — FAQs
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-amber-600 transition-colors">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Ready to rank #1 on Google in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-amber-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Get a free SEO audit of your website. We&apos;ll show you exactly what&apos;s holding you back and how to fix it.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Get Free SEO Audit
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight text-center" style={{ letterSpacing: "-1px" }}>
              Find Us in Hanumangarh
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm sm:text-base">
              Visit our office or book a free SEO consultation — we serve businesses across Hanumangarh, Rajasthan.
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
                title="ZENVIQ Digital - SEO Services Agency in Hanumangarh, Rajasthan"
                className="w-full"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Hanumangarh, Rajasthan 335513</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">SEO Services in Hanumangarh, Rajasthan</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>best SEO company in Hanumangarh</strong>, Rajasthan. We provide professional <strong>SEO services in Hanumangarh</strong> that help businesses rank on page 1 of Google. Our data-driven approach combines technical SEO, local optimization, and content strategy to deliver measurable results.
            </p>
            <p>
              Unlike generic SEO agencies, ZENVIQ builds websites on <strong>Next.js</strong> — the same framework used by Netflix, Nike, and Uber. This gives your website a massive technical SEO advantage with sub-second load times, server-side rendering, and perfect Core Web Vitals scores. Your competitors using WordPress can&apos;t match this performance.
            </p>
            <p>
              Our <strong>SEO services in Hanumangarh</strong> include: Technical SEO Audits, On-Page Optimization, Local SEO (Google Business Profile), Keyword Research, Content Strategy, Link Building, Competitor Analysis, and Monthly Performance Reporting. We use industry-leading tools like Ahrefs, SEMRush, and Google Search Console.
            </p>
            <p>
              With <strong>50+ websites optimized</strong> and businesses ranking on page 1, we are the most trusted <strong>SEO company in Hanumangarh</strong>. Our clients span Hanumangarh, Sri Ganganagar, Bathinda, Nohar, Bikaner, and across Rajasthan.
            </p>
            <p>
              <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700 underline underline-offset-2">Contact ZENVIQ Digital</Link> for a free SEO audit and consultation. We&apos;ll analyze your website, identify ranking opportunities, and create a custom SEO strategy for your Hanumangarh business.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
