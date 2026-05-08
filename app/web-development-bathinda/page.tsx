"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Globe, Code, Zap, Shield,
  Search, Smartphone, Star,
} from "lucide-react"

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom websites using Next.js, WordPress, React — fast and SEO-optimized.", link: "/services/web-development" },
  { icon: Search, title: "SEO & Google Ranking", desc: "Rank your Bathinda business on Google's first page with expert SEO.", link: "/services/seo-optimization" },
  { icon: Zap, title: "Digital Marketing", desc: "Google Ads, social media, WhatsApp marketing & content strategy.", link: "/services" },
  { icon: Smartphone, title: "E-commerce Stores", desc: "Shopify & WooCommerce with Razorpay, UPI & COD payments.", link: "/services/ecommerce-development" },
  { icon: Code, title: "AI Chatbots", desc: "24/7 AI customer support for WhatsApp and your website.", link: "/services/ai-automation" },
  { icon: Shield, title: "UI/UX Design", desc: "Beautiful, conversion-focused designs that users love.", link: "/services/ui-ux-design" },
]

const faqs = [
  { q: "Who is the best website developer near Bathinda?", a: "ZENVIQ Digital, based in Hanumangarh (Rajasthan), is the top-rated web development agency serving Bathinda. We build fast, SEO-optimized websites using Next.js, WordPress, and React — trusted by 50+ businesses." },
  { q: "How much does website development cost in Bathinda?", a: "Websites start from ₹8,000 for business sites to ₹50,000+ for e-commerce. ZENVIQ offers competitive pricing with free consultations." },
  { q: "Do you serve clients in Bathinda, Punjab?", a: "Yes! Although based in Hanumangarh, we regularly serve clients in Bathinda (just 2 hours away). We offer in-person meetings and remote consultations via video call." },
  { q: "Can you do Google Ads for my Bathinda business?", a: "Absolutely. We manage Google Ads campaigns with targeted local keywords to drive qualified leads to your business in Bathinda. Monthly reports included." },
  { q: "Do you build mobile apps for Bathinda businesses?", a: "Yes. We build custom Android and iOS apps using React Native and Flutter for businesses in Bathinda and across Punjab and Rajasthan." },
]

export default function BathindaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-amber-100">
              <MapPin className="w-4 h-4" /> Bathinda, Punjab
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              Best{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Website Developer</span>{" "}
              in Bathinda
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ Digital delivers premium web development, SEO, and digital marketing services to businesses in Bathinda. Fast websites, high Google rankings, and real results.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Services for Bathinda Businesses</h2>
            <p className="text-slate-500 text-base sm:text-lg">Complete digital solutions for businesses in Bathinda and Punjab.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.link} className="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4"><s.icon className="w-5 h-5 text-amber-600" /></div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center tracking-tight">FAQs — Web Development in Bathinda</h2>
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
          <div className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative">Ready to grow your Bathinda business?</h2>
            <p className="text-amber-100 mb-10 max-w-xl mx-auto relative">Free consultation — we serve Bathinda from nearby Hanumangarh.</p>
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Website Development Company Near Bathinda</h3>
            <p><strong>ZENVIQ Digital</strong> is the <strong>best website development company near Bathinda</strong>. Based in Hanumangarh, Rajasthan, we serve businesses across Bathinda with modern <strong>web development, SEO, digital marketing, Google Ads, WhatsApp marketing, and AI automation</strong> services. We use <strong>Next.js</strong> (used by Netflix, Uber) to build websites that load faster than any WordPress site — giving your business a competitive edge on Google.</p>
            <p>Our team has delivered <strong>50+ projects</strong> for businesses in Bathinda, Hanumangarh, Ganganagar, and across Punjab and Rajasthan. Services include <strong>e-commerce website development, mobile app development, UI/UX design, SEO optimization, and social media marketing</strong>. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact us</Link> for a free consultation and transparent quote.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
