"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Globe, Zap, Brain, ShoppingCart, Palette, Terminal,
  Check, Star, ArrowRight
} from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Blazing-fast Next.js websites and WordPress solutions engineered for performance, scalability, and conversions — tailored to your brand.",
    icon: Globe,
    tag: "Proven Solutions",
    features: ["Next.js & React", "WordPress & Shopify", "Performance Optimized"],
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces backed by research, strategy, and pixel-perfect execution that turn visitors into loyal customers.",
    icon: Palette,
    tag: "Design-First",
    features: ["Product Strategy", "Interactive Prototypes", "Design Systems"],
    accent: "bg-violet-50 text-violet-600 border-violet-100",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "AI & Automation",
    description: "Intelligent chatbots, workflow automation, and custom AI agents that save time, cut costs, and accelerate growth — 24/7.",
    icon: Brain,
    tag: "AI-Powered Growth",
    features: ["Custom Chatbots", "Process Automation", "AI Integration"],
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Software Development",
    description: "Enterprise-grade SaaS platforms, cloud-native APIs, and scalable architectures built with TypeScript and modern tooling.",
    icon: Terminal,
    tag: "Future-proof Tech",
    features: ["SaaS & Cloud", "API Development", "Scalable Architecture"],
    accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "E-commerce Solutions",
    description: "Revenue-driving online stores on Shopify, WooCommerce, and custom platforms — designed to convert browsers into buyers.",
    icon: ShoppingCart,
    tag: "Boost Sales 200%+",
    features: ["Shopify & WooCommerce", "Payment Integration", "Conversion Optimized"],
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Marketing & SEO",
    description: "Data-driven SEO, content marketing, and branding strategies that dominate search rankings and deliver measurable ROI.",
    icon: Zap,
    tag: "Organic Growth",
    features: ["Technical SEO", "Content Strategy", "Brand Identity"],
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function ParallaxServices() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100 shadow-stripe-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            Empowering Businesses Across Rajasthan
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
            style={{ letterSpacing: "-1.5px" }}
          >
            Everything Your Brand <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Needs to Grow
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            From idea to execution, ZENVIQ delivers end-to-end digital solutions with industry-leading precision — so you can focus on what matters most.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="group relative h-full bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-stripe-lg hover:-translate-y-1 hover:border-indigo-200/60">
                <CardHeader className="p-6 pb-4">
                  {/* Icon + Tag Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${service.accent}`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-2">
                  {/* Feature List */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/services#${service.title.toLowerCase().replace(/[&\s]+/g, "-")}`}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group/link"
                  >
                    Explore {service.title}
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
