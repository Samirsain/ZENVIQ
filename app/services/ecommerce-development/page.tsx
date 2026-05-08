"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShoppingCart, CreditCard, Package, Calendar, Truck, BarChart3, Smartphone } from "lucide-react"

const features = [
  { icon: ShoppingCart, title: "Custom Store Design", desc: "Conversion-optimized storefronts designed to showcase products and maximize sales." },
  { icon: CreditCard, title: "Payment Integration", desc: "Razorpay, Stripe, UPI, COD — seamless multi-payment checkout for Indian customers." },
  { icon: Package, title: "Inventory Management", desc: "Real-time stock tracking, low-stock alerts, and automated inventory sync." },
  { icon: Truck, title: "Shipping Integration", desc: "Shiprocket, Delhivery, and custom shipping solutions with real-time tracking." },
  { icon: BarChart3, title: "Sales Analytics", desc: "Dashboards tracking revenue, conversion rates, and customer behavior." },
  { icon: Smartphone, title: "Mobile Commerce", desc: "Mobile-first shopping experiences optimized for India's smartphone market." },
]

const faqs = [
  { q: "How much does an e-commerce website cost in Hanumangarh?", a: "E-commerce websites start from ₹15,000 for a basic Shopify store to ₹50,000+ for custom platforms. We provide detailed quotes based on your requirements." },
  { q: "Shopify or WooCommerce — which is better?", a: "Shopify is ideal for quick launches. WooCommerce offers more customization and lower ongoing costs. We recommend based on your budget and scale." },
  { q: "Can you integrate Indian payment gateways?", a: "Yes! Razorpay, Paytm, PhonePe, UPI, Net Banking, and COD — ensuring maximum payment convenience for Indian customers." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer maintenance packages covering product updates, security patches, and priority support for your online store." },
]

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-emerald-100">
              <ShoppingCart className="w-4 h-4" /> E-commerce in Hanumangarh
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight" style={{ letterSpacing: "-2px" }}>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">E-commerce</span> Website Development in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              Sell products online with high-converting stores built on Shopify, WooCommerce, and custom platforms — designed to turn browsers into buyers.
            </p>
            <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Start Selling Online <Calendar className="w-4 h-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">E-commerce Features</h2>
            <p className="text-slate-500 text-base sm:text-lg">Everything your online store needs to succeed.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4"><f.icon className="w-5 h-5 text-emerald-600" /></div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center tracking-tight">E-commerce FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">{faq.q}<ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" /></summary>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative">Ready to sell online?</h2>
            <p className="text-emerald-100 mb-10 max-w-xl mx-auto relative">Launch your online store in Hanumangarh with a free consultation.</p>
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl relative">
              <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">E-commerce Development in Hanumangarh</h3>
            <p><strong>ZENVIQ Digital</strong> builds high-converting <strong>e-commerce websites in Hanumangarh</strong> using Shopify, WooCommerce, and custom platforms. We handle product setup, <strong>Razorpay payment integration</strong>, shipping automation, and mobile-responsive design optimized for Indian customers. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Start selling online today</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
