"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, Check, Star, Globe, Code, Zap, Shield, Calendar,
  CheckCircle, Sparkles, Clock, Server, Smartphone, Search,
} from "lucide-react"

const features = [
  { icon: Zap, title: "Lightning Fast Performance", description: "Sub-second load times with server-side rendering and edge caching." },
  { icon: Search, title: "SEO-First Architecture", description: "Built-in SEO optimization — meta tags, structured data, sitemaps, and Core Web Vitals." },
  { icon: Smartphone, title: "Mobile-First Design", description: "Pixel-perfect responsive layouts that look stunning on every device." },
  { icon: Shield, title: "Enterprise Security", description: "SSL, CSRF protection, input sanitization, and regular security audits." },
  { icon: Server, title: "Scalable Infrastructure", description: "Cloud-native deployments on Vercel, AWS, or your preferred hosting." },
  { icon: Code, title: "Clean Codebase", description: "Maintainable, documented TypeScript code that your team can build upon." },
]

const techStack = [
  { name: "Next.js 15", category: "Framework" },
  { name: "React 19", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Prisma", category: "ORM" },
  { name: "PostgreSQL", category: "Database" },
]

const processSteps = [
  { step: "01", title: "Discovery & Strategy", description: "We learn your business goals, analyze competitors in Hanumangarh, and define the project roadmap." },
  { step: "02", title: "UI/UX Design", description: "Wireframes and high-fidelity Figma designs — you approve every screen before development begins." },
  { step: "03", title: "Development Sprint", description: "Agile development with weekly demos. Next.js or WordPress — built for speed and SEO." },
  { step: "04", title: "Testing & QA", description: "Cross-browser testing, performance audits, security checks, and accessibility compliance." },
  { step: "05", title: "Launch & Support", description: "Seamless deployment with ongoing maintenance, analytics monitoring, and priority support." },
]

const faqs = [
  { q: "How much does a website cost in Hanumangarh?", a: "Website costs range from ₹8,000 for a professional business site to ₹50,000+ for custom web applications. ZENVIQ offers transparent, project-based pricing with no hidden fees. Contact us for a detailed quote." },
  { q: "How long does it take to build a website?", a: "A standard business website takes 1-2 weeks. Complex web applications or e-commerce stores may take 4-8 weeks. We share a clear timeline during our initial strategy call." },
  { q: "Do you build WordPress websites in Hanumangarh?", a: "Yes! We build custom WordPress sites with clean code, fast performance, and SEO optimization. No bloated page builders — just professional WordPress development." },
  { q: "What is Next.js and why should I use it?", a: "Next.js is a modern React framework that makes websites extremely fast and SEO-friendly. Google loves Next.js sites because they load instantly and have great Core Web Vitals scores." },
  { q: "Do you provide website maintenance after launch?", a: "Absolutely. We offer ongoing maintenance packages including security updates, content changes, performance monitoring, and priority support." },
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold mb-8 border border-blue-100">
              <Globe className="w-4 h-4" />
              Web Development in Hanumangarh
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-2px" }}
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Web Development
              </span>{" "}
              in Hanumangarh
            </h1>
            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ builds blazing-fast, SEO-optimized websites using Next.js, WordPress, and modern frameworks — trusted by 30+ businesses across Hanumangarh and Rajasthan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get a Free Quote <Calendar className="w-4 h-4" />
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

      {/* What We Offer */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              What You Get With ZENVIQ
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Every website we build in Hanumangarh comes with these enterprise-grade features — no compromises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
                Technologies We Use
              </h2>
              <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto">
                We use the latest frameworks and tools to build websites that are fast, secure, and future-proof.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center text-center p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all"
                >
                  <span className="text-base font-bold text-slate-900 mb-1">{tech.name}</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Our Development Process
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              A transparent, 5-step process designed for businesses in Hanumangarh who want real results.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
                Web Development FAQs
              </h2>
              <p className="text-slate-500 text-base sm:text-lg">
                Common questions from businesses in Hanumangarh about our web development services.
              </p>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight relative" style={{ letterSpacing: "-1px" }}>
              Ready to build your <br />website in Hanumangarh?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-10 max-w-xl mx-auto leading-relaxed relative">
              Book a free strategy call with Hanumangarh&apos;s top-rated web development agency. No obligations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 px-8 h-13 rounded-full font-bold shadow-xl">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Book Free Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate prose-sm text-slate-500 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Best Web Development Company in Hanumangarh</h3>
            <p>
              <strong>ZENVIQ Digital</strong> is the <strong>top-rated web development company in Hanumangarh</strong>, Rajasthan. We specialize in building high-performance websites using <strong>Next.js, WordPress, React, and Shopify</strong>. Whether you&apos;re a local business in Hanumangarh, a startup in Sri Ganganagar, or an enterprise brand — our team delivers websites that rank on Google and convert visitors into paying customers.
            </p>
            <p>
              Unlike traditional <strong>web design companies in Hanumangarh</strong>, we use modern frameworks that ensure your website loads in under a second. Our Next.js expertise gives you server-side rendering, automatic image optimization, and built-in SEO — advantages that WordPress alone cannot provide. We also offer <strong>WordPress development in Hanumangarh</strong> for businesses that prefer a traditional CMS.
            </p>
            <p>
              Every project includes responsive design, cross-browser testing, SSL security, and ongoing support. We&apos;ve helped <strong>50+ businesses across Hanumangarh and Rajasthan</strong> establish a powerful online presence. <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">Contact us</Link> for a free consultation and transparent quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
