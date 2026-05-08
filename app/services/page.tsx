"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Check, Star, Zap, Target, Users, Globe,
  BarChart3, Palette, Code, Search, ShoppingCart, Brain,
  Rocket, Sparkles, Clock, Award, Shield, Settings, Calendar,
} from "lucide-react"
import Link from "next/link"

/* ─── DATA ──────────────────────────────────────── */

const services = [
  {
    id: "web-development",
    category: "Modern Web",
    icon: Globe,
    title: "WordPress Development",
    description: "Expert WordPress development in Hanumangarh — from custom themes to enterprise websites. Fast, secure, SEO-optimized solutions.",
    detailedDescription:
      "Looking for a WordPress developer in Hanumangarh? ZENVIQ builds high-performance WordPress websites that are secure, scalable, and optimized for search engines. From business websites to complex membership portals — we deliver solutions your team can easily manage.",
    whyChooseUs: [
      "Custom-coded themes (No bloated builders)",
      "Enterprise-grade security hardening",
      "Core Web Vitals optimized out of the box",
      "Seamless integration with 3rd party APIs",
    ],
    techStack: ["PHP", "Next.js (Headless)", "WP-CLI", "React", "MySQL"],
    features: ["Custom Theme Dev", "Plugin Customization", "Speed Optimization", "Secure Migration"],
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    id: "ai-automation",
    category: "AI & Automation",
    icon: Brain,
    title: "AI Integration",
    description: "Custom AI chatbots and automation for businesses in Hanumangarh and beyond.",
    detailedDescription:
      "Want to automate your business? ZENVIQ integrates cutting-edge AI — from custom chatbots for 24/7 customer support to intelligent workflow automation. We help businesses in Hanumangarh and across Rajasthan leverage AI for smarter, faster growth.",
    whyChooseUs: [
      "Custom Trained Models for your data",
      "Seamless integration with existing CRM/ERP",
      "Privacy-first approach to data handling",
      "Scalable infrastructure that grows with usage",
    ],
    techStack: ["OpenAI API", "LangChain", "Python", "Pinecone", "Next.js"],
    features: ["Custom Chatbots", "Workflow Automation", "Data Analysis AI", "AI Strategy Consulting"],
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
  {
    id: "nextjs-apps",
    category: "Modern Web",
    icon: Zap,
    title: "Next.js & Modern Apps",
    description: "Best Next.js developer in Hanumangarh for blazing-fast web applications.",
    detailedDescription:
      "Need a high-performance web application? ZENVIQ is Hanumangarh's leading Next.js development agency. We build lightning-fast, SEO-friendly web apps with server-side rendering, TypeScript, and modern tooling that ensures your site loads in under a second.",
    whyChooseUs: [
      "Server-Side Rendering (SSR) for instant loads",
      "Type-safe development with TypeScript",
      "Edge Computing for global performance",
      "Modern, responsive UI with Tailwind CSS",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    features: ["PWA Readiness", "Real-time Features", "Scalable Backend", "SEO Performance"],
    accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    iconBg: "bg-gradient-to-br from-indigo-600 to-cyan-500",
  },
  {
    id: "e-commerce",
    category: "Growth & Sales",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "E-commerce website development in Hanumangarh — sell online with confidence.",
    detailedDescription:
      "Want to sell products online? ZENVIQ builds high-converting e-commerce stores in Hanumangarh using Shopify, WooCommerce, and custom platforms. We focus on the entire sales funnel — from landing pages to seamless checkout experiences.",
    whyChooseUs: [
      "Conversion Rate Optimization (CRO) focused",
      "One-click checkout implementations",
      "Automated inventory & shipping sync",
      "Multi-currency & Global selling ready",
    ],
    techStack: ["WooCommerce", "Shopify", "Stripe", "NextJS Commerce", "Node.js"],
    features: ["Payment Integration", "Inventory Management", "Sales Analytics", "Customer Portals"],
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: "seo-marketing",
    category: "Growth & Sales",
    icon: Search,
    title: "SEO & Content Strategy",
    description: "Best SEO company in Hanumangarh — dominate Google search results.",
    detailedDescription:
      "Need more traffic and leads? ZENVIQ provides professional SEO services in Hanumangarh, Rajasthan. We analyze user intent, optimize your website technically, and create content strategies that bring the right customers to your business — organically.",
    whyChooseUs: [
      "Competitor gap analysis",
      "Technical SEO audit & implementation",
      "High-authority link building",
      "Semantic content mapping",
    ],
    techStack: ["Ahrefs", "SEMRush", "Google Search Console", "SurferSEO"],
    features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Content Marketing"],
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    id: "ui-ux-design",
    category: "Creative",
    icon: Palette,
    title: "UI/UX Design",
    description: "Premium UI/UX design services in Hanumangarh for websites and apps.",
    detailedDescription:
      "ZENVIQ provides professional UI/UX design services in Hanumangarh. We design with purpose — combining deep user research with beautiful, intuitive interfaces that boost engagement and conversions for your business.",
    whyChooseUs: [
      "User-centric design methodology",
      "High-fidelity interactive prototypes",
      "Full Design System delivery",
      "Accessibility (WCAG) compliance",
    ],
    techStack: ["Figma", "Adobe Creative Cloud", "Spline (3D)", "Framer"],
    features: ["User Research", "Wireframing", "Visual Identity", "Design Systems"],
    accent: "bg-pink-50 text-pink-600 border-pink-100",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
]

const helpMeChoose = [
  { goal: "I want to start a new business website", recommendation: "web-development", reason: "WordPress is flexible, scalable, and allows you to manage content easily." },
  { goal: "I need a high-performance web dashboard", recommendation: "nextjs-apps", reason: "Next.js provides speed and tools for complex, data-heavy applications." },
  { goal: "I want to automate my customer support", recommendation: "ai-automation", reason: "AI agents can handle 70%+ of routine queries, saving hours daily." },
  { goal: "I want to sell products globally", recommendation: "e-commerce", reason: "We build global-ready stores with multi-currency and seamless payments." },
  { goal: "I'm not getting enough traffic", recommendation: "seo-marketing", reason: "Our SEO targets high-intent keywords that bring buying customers." },
]

const processSteps = [
  { step: "01", title: "Discovery & Strategy", description: "Deep dive into your goals, competitors, and audience to build a roadmap.", icon: Target },
  { step: "02", title: "Agile Development", description: "High-frequency sprints with live previews at every milestone.", icon: Code },
  { step: "03", title: "Rigorous Testing", description: "Load testing, security audits, and QA before any user sees it.", icon: Settings },
  { step: "04", title: "Launch & Evolution", description: "We monitor performance and iterate for long-term success.", icon: Shield },
]

const stats = [
  { value: "50+", label: "Projects", icon: Rocket },
  { value: "2+", label: "Years", icon: Clock },
  { value: "30+", label: "Clients", icon: Users },
  { value: "24/7", label: "Support", icon: Award },
]

/* ─── COMPONENT ─────────────────────────────────── */

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal)
    const rec = helpMeChoose.find((h) => h.goal === goal)?.recommendation
    if (rec) {
      setActiveTab(rec)
      document.getElementById(rec)?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-indigo-100">
              <Sparkles className="w-4 h-4" />
              Digital Services in Hanumangarh
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-2px" }}
            >
               Digital Services{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                in Hanumangarh
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              From web development to SEO, AI automation to e-commerce — ZENVIQ delivers end-to-end digital services trusted by businesses across Hanumangarh and Rajasthan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <Link href="#choose" className="flex items-center gap-2">
                  Get Advice <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HELP ME CHOOSE ─── */}
      <section id="choose" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Not sure where to start?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">Tell us your goal and we'll recommend the best path forward.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {helpMeChoose.map((item, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleGoalSelect(item.goal)}
                className={`flex flex-col text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                  selectedGoal === item.goal
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200 scale-[1.02]"
                    : "bg-white border-slate-200 hover:border-indigo-300 text-slate-900"
                }`}
              >
                <span className="font-bold text-sm mb-1">{item.goal}</span>
                {selectedGoal === item.goal && (
                  <p className="text-indigo-100 text-xs mt-1 font-medium leading-relaxed">
                    <Check className="inline-block w-3.5 h-3.5 mr-1" />
                    Recommended: {services.find((s) => s.id === item.recommendation)?.title}
                  </p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-2xl bg-white border transition-all duration-300 hover:shadow-stripe-lg ${
                  activeTab === service.id
                    ? "border-indigo-200 ring-2 ring-indigo-500 ring-offset-4 shadow-stripe-lg"
                    : "border-slate-200 hover:border-indigo-200/60"
                }`}
              >
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className={`inline-flex px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full border ${service.accent} mb-2`}>
                        {service.category}
                      </span>
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild size="sm" className="rounded-full px-6 font-semibold bg-slate-900 hover:bg-slate-800">
                      <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Get a Quote <Calendar className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full px-6 font-medium border-slate-200"
                      onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}
                    >
                      {activeTab === service.id ? "Less Details" : "More Details"}
                    </Button>
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-indigo-600" />
                      Why Choose Us
                    </h4>
                    <ul className="space-y-2.5">
                      {service.whyChooseUs.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                          <Star className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0 fill-current" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                      <Code className="w-4 h-4 text-cyan-400" />
                      Our Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white/10 text-white/90 rounded-lg text-[11px] font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Our Workflow
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A transparent, data-driven process designed for speed and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/30 to-indigo-500/0" />

            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="relative w-16 h-16 bg-slate-800 rounded-2xl border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-indigo-400" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center text-[10px] font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center shadow-stripe-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Ready to grow your <br /> business in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Book a free strategy call with Hanumangarh&apos;s top-rated digital agency. Let&apos;s turn your vision into results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation
                </a>
              </Button>
              <div className="text-sm font-medium text-indigo-200 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                No obligations, just pure strategy.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEO Content ─── */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Why Choose ZENVIQ for Web Development in Hanumangarh?</h3>
            <p>
              ZENVIQ Digital is the <strong>best web development company in Hanumangarh</strong>, Rajasthan. We build fast, secure, and mobile-responsive websites using <strong>Next.js, WordPress, and Shopify</strong>. Whether you&apos;re a local business, startup, or established brand — our team delivers websites that rank on Google and convert visitors into paying customers.
            </p>
            <p>
              Our <strong>SEO services in Hanumangarh</strong> are designed to get your business to the top of Google. We perform comprehensive technical SEO audits, competitor analysis, keyword optimization, and build high-authority backlinks. As the <strong>top SEO company in Hanumangarh</strong>, we&apos;ve helped dozens of businesses achieve page 1 rankings.
            </p>
            <p>
              Need an <strong>e-commerce website in Hanumangarh</strong>? We build conversion-optimized online stores on Shopify and WooCommerce with payment integration, inventory management, and mobile-first design. Our <strong>digital marketing services</strong> include social media management, Google Ads, content marketing, and brand strategy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
