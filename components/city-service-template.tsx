"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, MapPin, Calendar, Search, BarChart3, Zap,
  Shield, Star, Users, Clock, Globe, Target, Code,
  Smartphone, CheckCircle, TrendingUp, FileSearch, Link2,
  Share2, MessageSquare, Megaphone, Cpu, Bot,
} from "lucide-react"
import type { CityData } from "@/content/city-data"

const ICON_MAP: Record<string, any> = {
  Globe, Search, Smartphone, Zap, Code, Shield, BarChart3,
  Target, TrendingUp, FileSearch, Link2, Share2,
  MessageSquare, Megaphone, Cpu, Bot, Star, Users, Clock,
}

interface ServicePageProps {
  city: CityData
  service: {
    key: string
    title: string
    shortTitle: string
    desc: string
    gradient: string
    accent: string
    accentBg: string
    accentText: string
    accentBorder: string
  }
  offerings: { icon: string; title: string; desc: string; link: string }[]
  whyUs: { icon: string; title: string; desc: string }[]
}

export default function CityServiceTemplate({ city, service, offerings, whyUs }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-${service.accent}-500/5 rounded-full blur-[120px]`} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 ${service.accentBg} ${service.accentText} px-4 py-2 rounded-full text-xs font-bold mb-8 ${service.accentBorder} border`}>
              <MapPin className="w-4 h-4" /> {service.title} in {city.city}, {city.state}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title}
              </span>{" "}
              in {city.city}
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              {city.uniqueInsight}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Free Consultation <Calendar className="w-4 h-4" />
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
            {city.stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Industries We Serve in {city.city}
            </h2>
            <p className="text-slate-500 mb-8 text-sm sm:text-base">
              {city.city} (population: {city.population}) has unique business needs. We tailor our {service.title.toLowerCase()} for local industries.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.topIndustries.map((ind) => (
                <span key={ind} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              {service.title} Services in {city.city}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Comprehensive {service.title.toLowerCase()} solutions tailored for {city.city} businesses.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offerings.map((s, i) => {
              const Icon = ICON_MAP[s.icon] || Globe
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href={s.link} className="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className={`w-11 h-11 rounded-xl ${service.accentBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${service.accentText}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why ZENVIQ */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Why Choose ZENVIQ for {service.title} in {city.city}?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((w, i) => {
              const Icon = ICON_MAP[w.icon] || Zap
              return (
                <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <Icon className={`w-6 h-6 text-${service.accent}-400 mb-4`} />
                  <h3 className="text-base font-bold mb-2">{w.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{w.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
                {service.title} in {city.city} — FAQs
              </h2>
            </motion.div>
            <div className="space-y-4">
              {city.faqs.map((faq, i) => (
                <motion.details key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className={`flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:${service.accentText} transition-colors`}>
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

      {/* Cross-links to other services in this city + same service in other cities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight text-center">
              More Services in {city.city} & Nearby Cities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Other services in same city */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Other Services in {city.city}</h3>
                <ul className="space-y-2">
                  {["web-development", "seo-services", "digital-marketing", "ecommerce-development", "ai-automation"]
                    .filter((s) => s !== service.key)
                    .map((s) => (
                      <li key={s}>
                        <Link href={`/${s}-${city.slug}`} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1.5">
                          <ArrowRight className="w-3 h-3" />
                          {s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} in {city.city}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              {/* Same service in nearby cities */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{service.title} in Nearby Cities</h3>
                <ul className="space-y-2">
                  {city.nearCities.slice(0, 4).map((nc) => {
                    const ncSlug = nc.toLowerCase().replace(/\s+/g, "").replace("sri", "")
                    return (
                      <li key={nc}>
                        <Link href={`/${service.key}-${ncSlug}`} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1.5">
                          <ArrowRight className="w-3 h-3" />
                          {service.title} in {nc}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br ${service.gradient} text-white text-center shadow-xl relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Need {service.title.toLowerCase()} in {city.city}?
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Get a free consultation from {city.city}&apos;s top-rated {service.title.toLowerCase()} agency. No obligations.
            </p>
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title} in {city.city}, {city.state}</h3>
            {city.seoContent.map((p, i) => (
              <p key={i}>{p.replace(/\{service\}/g, service.title.toLowerCase())}</p>
            ))}
            <p>
              <Link href="/contact" className={`${service.accentText} font-semibold underline underline-offset-2`}>
                Contact ZENVIQ Digital
              </Link>{" "}
              for a free consultation on {service.title.toLowerCase()} in {city.city}. We serve businesses across {city.state} and all of India.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight text-center" style={{ letterSpacing: "-1px" }}>
              Find Us Near {city.city}
            </h2>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mt-6">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55839!2d${city.lng}!3d${city.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${city.mapQuery}!5e0!3m2!1sen!2sin!4v1`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`ZENVIQ Digital - ${service.title} in ${city.city}`}
                className="w-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 ${service.accentText}`} />
                <span>{city.city}, {city.state} {city.pin}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
