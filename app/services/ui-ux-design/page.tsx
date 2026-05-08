"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Palette, Layers, MousePointerClick, Calendar, Eye, Layout, Users } from "lucide-react"

const features = [
  { icon: Users, title: "User Research", description: "Deep-dive into your target audience behavior, pain points, and goals to inform every design decision." },
  { icon: Layout, title: "Wireframing", description: "Low and high-fidelity wireframes that map out user flows and page structures before visual design." },
  { icon: Palette, title: "Visual Design", description: "Pixel-perfect UI designs with consistent typography, color systems, and modern aesthetics." },
  { icon: MousePointerClick, title: "Interactive Prototypes", description: "Clickable Figma prototypes that simulate the real experience before a single line of code is written." },
  { icon: Layers, title: "Design Systems", description: "Scalable component libraries and style guides that ensure design consistency across your entire product." },
  { icon: Eye, title: "Usability Testing", description: "Real user testing to validate designs and identify friction points before launch." },
]

const faqs = [
  { q: "What's the difference between UI and UX design?", a: "UI (User Interface) focuses on how a product looks — colors, typography, layout. UX (User Experience) focuses on how it works — ease of use, navigation flow, user satisfaction. ZENVIQ delivers both." },
  { q: "How much does UI/UX design cost in Hanumangarh?", a: "UI/UX design projects start from ₹10,000 for small businesses. Pricing depends on scope, number of pages, and complexity. We provide transparent quotes after understanding your requirements." },
  { q: "Do you use Figma for design?", a: "Yes! Figma is our primary design tool. We deliver high-fidelity, interactive Figma prototypes that you can review, comment on, and approve before development begins." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site's UX, identify improvement areas, and create a modern redesign that improves user engagement and conversion rates." },
]

export default function UIUXPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-pink-100">
              <Palette className="w-4 h-4" /> UI/UX Design in Hanumangarh
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              Premium{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">UI/UX Design</span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              User-centric design backed by research and pixel-perfect execution. ZENVIQ designs interfaces that convert visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Get Design Consultation <Calendar className="w-4 h-4" /></a>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>Our Design Services</h2>
            <p className="text-slate-500 text-base sm:text-lg">End-to-end UI/UX design for businesses in Hanumangarh and beyond.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center mb-4"><f.icon className="w-5 h-5 text-pink-600" /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>Design FAQs</h2>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative" style={{ letterSpacing: "-1px" }}>Ready for a stunning design?</h2>
            <p className="text-base sm:text-lg text-pink-100 mb-10 max-w-xl mx-auto relative">Book a free design consultation with Hanumangarh&apos;s top UI/UX agency.</p>
            <Button asChild size="lg" className="bg-white text-pink-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">UI/UX Design Agency in Hanumangarh</h3>
            <p><strong>ZENVIQ Digital</strong> provides premium <strong>UI/UX design services in Hanumangarh</strong>, Rajasthan. We design beautiful, intuitive interfaces using Figma that boost engagement and conversions. From user research and wireframing to interactive prototypes and complete design systems — we deliver designs your users will love. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Get a free design consultation</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
