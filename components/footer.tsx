"use client"

import Link from "next/link"
import { Logo } from "@/components/logo"
import {
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  Instagram,
  Mail,
  Calendar
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="relative bg-white text-slate-950 overflow-hidden font-sans selection:bg-indigo-100">

      {/* Background Ambient Glow (Softer for Light Mode) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-50 rounded-full blur-[120px] pointer-events-none" />

      {/* Massive Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.04]">
        <h1 className="text-[15vw] font-black text-slate-950 leading-none tracking-tighter text-center whitespace-nowrap">
          ZENVIQ AGENCY
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">

        {/* 1. CTA Section: Vibrant Gradient Card */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[2.5rem] p-8 md:p-14 mb-24 overflow-hidden shadow-2xl shadow-indigo-200 group">
          {/* Decorative Background Patterns */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                Ready for the future?
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Let&apos;s build something <span className="text-indigo-100">extraordinary.</span>
              </h2>
              <p className="text-indigo-50/90 text-lg md:text-xl font-medium">
                Join hundreds of businesses transforming with Zenviq&apos;s AI‑driven digital solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* 
                    FIX: Visibility on click. 
                    We avoid 'variant="outline"' or standard variant styles that change text to invisible colors.
                    We define ALL states manually for absolute clarity.
                 */}
              <Link href="/contact" className="h-16 px-10 rounded-2xl bg-white text-indigo-600 hover:bg-slate-100 active:bg-indigo-700 active:text-white flex items-center justify-center font-bold text-lg transition-all hover:scale-105 shadow-xl">
                Book Strategy Call
              </Link>

              <Link href="/services" className="h-16 px-10 rounded-2xl border-2 border-white/60 text-white hover:bg-white/10 active:bg-white active:text-indigo-600 flex items-center justify-center font-bold text-lg backdrop-blur-md transition-all hover:scale-105">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <Logo iconSize={48} className="text-slate-950" />
              <p className="text-slate-600 leading-relaxed text-base max-w-sm font-medium">
                Pioneering the intersection of aesthetics and artificial intelligence. We don&apos;t just build websites; we engineer digital ecosystems.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "https://twitter.com/zenviq", color: "hover:bg-sky-500" },
                { icon: Github, href: "https://github.com/Samirsain", color: "hover:bg-slate-900" },
                { icon: Linkedin, href: "https://linkedin.com/in/samirsain", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "https://instagram.com/zenviq", color: "hover:bg-pink-600" }
              ].map((social, i) => (
                <a key={i} href={social.href} className={`w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm ${social.color}`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 text-slate-950">
            <div className="space-y-6">
              <h4 className="font-bold tracking-tight text-lg">Services</h4>
              <ul className="space-y-4 font-medium">
                <li><Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors">Web Design</Link></li>
                <li><Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors">AI Automation</Link></li>
                <li><Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors">SEO Growth</Link></li>
                <li><Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors">Branding</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold tracking-tight text-lg">Agency</h4>
              <ul className="space-y-4 font-medium">
                <li><Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><Link href="/gallery" className="text-slate-600 hover:text-indigo-600 transition-colors">Work</Link></li>
                <li><Link href="/blog" className="text-slate-600 hover:text-indigo-600 transition-colors">Insights</Link></li>
                <li><Link href="/contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-bold tracking-tight text-lg">Stay Sharp</h4>
              <p className="text-slate-600 text-sm font-medium">Join our newsletter for weekly digital insights.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="hello@world.com"
                  className="bg-slate-100 border-none rounded-2xl px-5 py-4 text-sm w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all shadow-inner"
                  required
                />
                <button type="submit" className="bg-indigo-600 text-white px-5 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg shadow-indigo-100">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>© {currentYear} ZENVIQ. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}