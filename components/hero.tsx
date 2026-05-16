"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, CheckCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-10 bg-white">
      {/* Ambient Background Effects — DESIGN.md §6: Decorative Depth */}
      <div className="absolute inset-0 z-0 tech-grid pointer-events-none opacity-60"></div>

      {/* Primary Glows — Blue-tinted ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-100/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">

          {/* Left Column: Content — DESIGN.md §3: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-3xl"
          >

            {/* Trust Badge — DESIGN.md §4: Trust Badge / Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-md mb-8 shadow-stripe-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 tracking-wide uppercase">#1 Digital Agency in Hanumangarh</span>
            </motion.div>

            {/* Headline — Display Large: 48px weight 700, letter-spacing -1.5px */}
            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]" style={{ letterSpacing: '-1.5px' }}>
               We Craft <span className="gradient-text">Premium Digital</span> Experiences That Drive Real Results
            </h1>

            {/* Subheadline — Body Large: 18px weight 400, color #64748b */}
            <p className="text-base md:text-lg text-slate-500 font-normal max-w-xl mb-10 leading-relaxed">
              ZENVIQ is Hanumangarh's leading digital agency — specializing in stunning websites, intelligent AI automation, and SEO strategies that put your brand on the map. From local businesses to global ambitions, we build digital that delivers.
            </p>

            {/* CTA Buttons — DESIGN.md §4: Primary CTA (Dark) + Secondary / Outlined */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Button — Slate 900, pill radius, shadow */}
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all duration-300 font-semibold">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Book a Meeting
                  <Calendar className="w-4 h-4" />
                </a>
              </Button>

              {/* Secondary Button — Outlined, pill radius */}
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-slate-700 shadow-stripe-sm transition-all duration-300 font-medium">
                <Link href="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </Button>
            </div>

            {/* Metrics/Social Proof — DESIGN.md §4 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex items-center justify-center gap-8 pt-8 border-t border-slate-200 w-full"
            >
              <div>
                <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                  50+ <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                  98% <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide">Client Retention</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trusted By — Client Logo Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 w-full max-w-2xl mx-auto"
          >
            <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-[0.2em] text-center mb-6">
              Trusted by leading brands
            </p>
            <div className="flex items-center justify-center gap-10 sm:gap-14">
              {[
                { src: "/trustedby/client-1.png", alt: "Client 1" },
                { src: "/trustedby/client-2.png", alt: "Hotel Gill Tower" },
                { src: "/trustedby/client-3.png", alt: "Client 3" },
              ].map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className="h-10 sm:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
