"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Search, BarChart3, Zap,
  Shield, Star, Users, Clock, Globe, Target, Megaphone,
  MessageSquare, Share2, TrendingUp, Video, Smartphone,
} from "lucide-react"

const services = [
  { icon: Search, title: "SEO & Google Rankings", desc: "Rank on page 1 of Google with technical SEO, local optimization, and content strategy tailored for Hanumangarh businesses.", link: "/seo-services-hanumangarh" },
  { icon: Target, title: "Google Ads (PPC)", desc: "High-ROI Google Ads campaigns — search ads, display ads, and local service ads with conversion tracking and optimization.", link: "/services" },
  { icon: Share2, title: "Social Media Marketing", desc: "Instagram, Facebook & LinkedIn management — content creation, post scheduling, community building, and paid promotions.", link: "/services" },
  { icon: MessageSquare, title: "WhatsApp Marketing", desc: "Bulk messaging, WhatsApp Business API, chatbot automation, catalog management, and broadcast campaigns for local businesses.", link: "/services" },
  { icon: Megaphone, title: "Content Marketing", desc: "Blog writing, video content, infographics, and thought leadership content that drives organic traffic and builds trust.", link: "/blog" },
  { icon: BarChart3, title: "Analytics & ROI Tracking", desc: "Google Analytics, conversion tracking, campaign performance reports, and data-driven optimization for maximum ROI.", link: "/services" },
]

const stats = [
  { value: "50+", label: "Campaigns Managed" },
  { value: "3x", label: "Avg Lead Growth" },
  { value: "₹10L+", label: "Ads Managed" },
  { value: "4.9★", label: "Client Rating" },
]

const whyUs = [
  { icon: Zap, title: "AI-Powered Campaigns", desc: "We use AI tools to analyze competitors, find trending keywords, and optimize ad copy — giving your campaigns a massive edge over traditional agencies in Hanumangarh." },
  { icon: Target, title: "Local Market Expertise", desc: "We understand Hanumangarh's market. Our campaigns target the right demographics, locations, and interests to reach your ideal customers." },
  { icon: Shield, title: "Transparent Reporting", desc: "Monthly reports with real metrics — leads generated, cost per acquisition, ROI, and growth trajectory. No vanity metrics, only results." },
  { icon: Star, title: "Full-Stack Capability", desc: "Unlike other agencies, we build your website AND run your marketing. This means seamless integration between your website, landing pages, and ad campaigns." },
  { icon: Users, title: "Dedicated Account Manager", desc: "Every client gets a dedicated point of contact. Weekly check-ins, same-day responses, and proactive campaign optimization." },
  { icon: Clock, title: "Fast Results", desc: "Google Ads campaigns go live in 48 hours. Social media management starts within a week. SEO improvements visible within 30 days." },
]

const faqs = [
  { q: "Which is the best digital marketing company in Hanumangarh?", a: "ZENVIQ Digital is the best digital marketing company in Hanumangarh — offering SEO, Google Ads, social media marketing, WhatsApp marketing, and content strategy. We use data-driven strategies and AI-powered tools that traditional agencies don't have access to." },
  { q: "How much does digital marketing cost in Hanumangarh?", a: "Digital marketing services in Hanumangarh start from ₹5,000/month for basic social media management to ₹30,000+/month for comprehensive digital marketing including SEO, Google Ads, and content creation. ZENVIQ offers customized packages based on your goals and budget." },
  { q: "Does ZENVIQ offer WhatsApp marketing in Hanumangarh?", a: "Yes! ZENVIQ provides complete WhatsApp marketing solutions in Hanumangarh — including bulk messaging, WhatsApp Business API setup, chatbot automation, catalog management, and broadcast campaigns. We also integrate WhatsApp with your website for instant lead capture." },
  { q: "Can you run Google Ads for my Hanumangarh business?", a: "Absolutely. ZENVIQ manages Google Ads campaigns for businesses in Hanumangarh with a focus on ROI — including search ads, display ads, and local service ads. We handle keyword research, ad copy, landing page optimization, and performance tracking." },
  { q: "What social media platforms does ZENVIQ manage?", a: "We manage Instagram, Facebook, LinkedIn, YouTube, and WhatsApp Business accounts for businesses in Hanumangarh. Our services include content creation, post scheduling, community management, paid promotions, and performance analytics." },
  { q: "How quickly can I see results from digital marketing?", a: "Google Ads campaigns start delivering results within 48 hours of launch. Social media growth is visible within 2-4 weeks. SEO results typically begin showing at 2-3 months. We provide weekly progress updates and monthly comprehensive reports." },
]

export default function DigitalMarketingHanumangarhPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-emerald-100">
              <MapPin className="w-4 h-4" /> Digital Marketing in Hanumangarh, Rajasthan
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Digital Marketing
              </span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital is Hanumangarh&apos;s #1 digital marketing agency. SEO, Google Ads, social media, WhatsApp marketing &amp; content strategy — all powered by AI for maximum ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Free Strategy Call <Calendar className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="/gallery" className="flex items-center gap-2">
                  See Our Work <ArrowRight className="w-4 h-4" />
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
              Digital Marketing Services in Hanumangarh
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Full-service digital marketing to grow your Hanumangarh business online — from search to social.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.link} className="block bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <s.icon className="w-5 h-5 text-emerald-600" />
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
              Why Choose ZENVIQ for Digital Marketing in Hanumangarh?
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We&apos;re not another agency making promises — here&apos;s what sets ZENVIQ apart from other digital marketing companies in Hanumangarh.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <w.icon className="w-6 h-6 text-emerald-400 mb-4" />
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
                Digital Marketing in Hanumangarh — FAQs
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Ready to grow your business with digital marketing?
            </h2>
            <p className="text-base sm:text-lg text-emerald-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Get a free digital marketing strategy call. We&apos;ll analyze your competitors and create a custom growth plan for your Hanumangarh business.
            </p>
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Book Free Strategy Call
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
              Visit our office or book a free digital marketing consultation — we serve businesses across Hanumangarh.
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
                title="ZENVIQ Digital - Digital Marketing Agency in Hanumangarh, Rajasthan"
                className="w-full"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Hanumangarh, Rajasthan 335513</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Marketing Agency in Hanumangarh, Rajasthan</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>best digital marketing company in Hanumangarh</strong>, Rajasthan. We help local businesses grow online with comprehensive <strong>digital marketing services in Hanumangarh</strong> — including SEO, Google Ads, social media marketing, WhatsApp marketing, and content strategy.
            </p>
            <p>
              What sets us apart from other <strong>digital marketing agencies in Hanumangarh</strong> is our AI-first approach. We use AI-powered tools to analyze competitor strategies, identify trending keywords, create compelling ad copy, and optimize campaigns in real-time. This gives your business a competitive advantage that traditional agencies simply can&apos;t offer.
            </p>
            <p>
              Our <strong>digital marketing services in Hanumangarh</strong> include: Search Engine Optimization (SEO), Google Ads (PPC) Management, Instagram &amp; Facebook Marketing, WhatsApp Business &amp; Bulk Marketing, YouTube Marketing, Content Strategy &amp; Blog Writing, Email Marketing, Brand Strategy, and Conversion Rate Optimization.
            </p>
            <p>
              With <strong>50+ campaigns managed</strong> and proven 3x average lead growth for our clients, ZENVIQ is the most trusted <strong>digital marketing company in Hanumangarh</strong>. Our clients include businesses in Hanumangarh, Sri Ganganagar, Bathinda, Nohar, and across Rajasthan.
            </p>
            <p>
              <Link href="/contact" className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-2">Contact ZENVIQ Digital</Link> for a free digital marketing strategy session. We&apos;ll analyze your competitors, identify growth opportunities, and create a custom marketing plan for your Hanumangarh business.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
