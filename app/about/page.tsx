"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight, Check, Target, Calendar, Zap, Globe, Shield,
  Sparkles, Rocket, Users, Github, Mail, Instagram, Linkedin,
} from "lucide-react"
import Image from "next/image"
import { FounderProfile } from "@/components/ui/founder-profile"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 pb-16 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100">
              <Sparkles className="w-4 h-4" />
              About ZENVIQ Digital
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-2px" }}
            >
              Hanumangarh&apos;s Most Trusted{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Agency
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              ZENVIQ is a results-driven digital agency born in Hanumangarh, Rajasthan. We combine world-class design, cutting-edge technology, and strategic thinking to help businesses stand out, scale up, and succeed online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-200">
                <Link href="/services" className="flex items-center gap-2">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 px-8 rounded-full border-slate-200 font-medium">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  Book a Strategy Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
                style={{ letterSpacing: "-1px" }}
              >
                Our Mission:{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Simplicity at Scale
                </span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                <p>
                  At ZENVIQ, we believe great digital experiences shouldn&apos;t be reserved for big-city agencies. Based right here in Hanumangarh, we bring enterprise-level expertise to businesses of every size.
                </p>
                <p>
                  From high-performance websites to AI-powered automation and search engine domination — we deliver measurable results that help Rajasthan&apos;s businesses compete on a national and global stage.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: Zap, label: "Lightning Fast" },
                  { icon: Shield, label: "Trusted Locally" },
                  { icon: Globe, label: "Think Global" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3.5 py-2 bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200">
                    <item.icon className="w-3.5 h-3.5 text-indigo-600" />
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-stripe-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Rocket className="w-32 h-32 rotate-12" />
              </div>
              <div className="text-center space-y-3 relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">2+</div>
                <h3 className="text-xl font-bold text-slate-900">Years of Excellence</h3>
                <p className="text-sm text-slate-500">Delivering digital solutions that make Hanumangarh businesses shine since 2023.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                  <div className="text-xl font-bold text-slate-900">50+</div>
                  <div className="text-xs text-slate-500 font-medium">Projects Delivered</div>
                </div>
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
                  <div className="text-xl font-bold text-slate-900">30+</div>
                  <div className="text-xs text-slate-500 font-medium">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight" style={{ letterSpacing: "-1px" }}>
              The <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">ZENVIQ</span> Difference
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto">
              Why businesses across Rajasthan choose ZENVIQ as their digital partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Sparkles, title: "Premium Quality", description: "Every project is handcrafted with attention to detail, performance, and modern design standards.", accent: "bg-blue-50 text-blue-600 border-blue-100" },
              { icon: Zap, title: "AI-First Approach", description: "We integrate the latest AI and automation capabilities to give your business a competitive edge.", accent: "bg-purple-50 text-purple-600 border-purple-100" },
              { icon: Users, title: "Local Trust, Global Vision", description: "Proudly rooted in Hanumangarh, serving clients across India with a mindset built for global impact.", accent: "bg-pink-50 text-pink-600 border-pink-100" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-7 rounded-xl border border-slate-200 hover:shadow-stripe-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${item.accent} border flex items-center justify-center mb-5`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-4 border border-indigo-100">
              The Visionary
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Samir Sain
              </span>
            </h2>
          </motion.div>
          <FounderProfile />
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-4 border border-indigo-100">
              <Users className="w-4 h-4" /> Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight" style={{ letterSpacing: "-1px" }}>
              The People Behind{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                ZENVIQ
              </span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Samir Sain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                  <Image
                    src="/team/samirsain.png"
                    alt="Samir Sain — Founder & CEO"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">Samir Sain</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-2">Founder & CEO</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Full-stack developer & AI specialist. Leads all projects from strategy to deployment. Next.js, React, Node.js expert.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="https://samirsain.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://github.com/samirsain" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Github className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://instagram.com/codexmir" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yogi Sahu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                  <Image
                    src="/team/yogi-sahu.png"
                    alt="Yogi Sahu — Frontend Developer"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">Yogi Sahu</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-2">Frontend Developer</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Web & AI enthusiast. Builds pixel-perfect, responsive interfaces with React, Next.js & modern CSS. Open source contributor.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="https://github.com/yogiisahu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Github className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="mailto:thedankyogi@gmail.com" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://zenviqdigital.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vikash Sahu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                  <Image
                    src="/team/vikas.png"
                    alt="Vikash Sahu — GitaGPT Founder & CEO"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">Vikash Sahu</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-2">GitaGPT Founder & CEO</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Visionary tech leader & startup founder. Built GitaGPT — AI-powered spiritual wisdom platform. Full-stack builder shipping impactful products.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="https://sahu4you.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://github.com/sahu4you" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Github className="w-3.5 h-3.5 text-white" />
                    </Link>
                    <Link href="https://linkedin.com/in/sahu4you" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight" style={{ letterSpacing: "-1.5px" }}>
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Remarkable
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto">
              Whether you&apos;re a startup in Hanumangarh or a brand scaling nationally — our first consultation is always free. Let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="h-13 px-8 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold shadow-xl">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <div className="flex flex-col items-start gap-2">
                {["Free Consultation", "Strategy Plan", "24h Response"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <Check className="w-2.5 h-2.5 text-cyan-400" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
