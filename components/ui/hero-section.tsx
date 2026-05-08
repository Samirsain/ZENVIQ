'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, CheckCircle } from 'lucide-react';

interface ProgramCard {
  image: string;
  category: string;
  title: string;
  href: string;
}

const programs: ProgramCard[] = [
  {
    image: '/project/antiquity.png',
    category: 'DIGITAL AGENCY',
    title: 'Antiquity Digital — Marketing Agency',
    href: 'https://www.antiquitydigital.online/',
  },
  {
    image: '/project/scrollinpanda.png',
    category: 'E-COMMERCE',
    title: 'ScrollinPanda — Refurbished Laptops',
    href: 'https://www.scrollinpanda.com/',
  },
  {
    image: '/project/eliteballondecor.png',
    category: 'EVENT DECOR',
    title: 'Elite Decors — Balloon & Floral',
    href: 'https://www.eliteballondecor.com/',
  },
  {
    image: '/project/halpinghand.png',
    category: 'NGO / NONPROFIT',
    title: 'Helping Hands — Animal Welfare',
    href: 'https://www.helpinghandsfoundations.org/',
  },
  {
    image: '/project/gmresort.png',
    category: 'HOSPITALITY',
    title: 'GM Resort — Premium Stay',
    href: 'https://gmresort.vercel.app/',
  },
  {
    image: '/project/dantel.png',
    category: 'WEB DESIGN',
    title: 'Dantel — Creative Website',
    href: 'https://dantel-delta.vercel.app/',
  },
  {
    image: '/project/relible.png',
    category: 'HEALTHCARE',
    title: 'Reliable Diagnostics Centre',
    href: 'https://reliable-diagnostics-centre-4ou3.vercel.app/',
  },
  {
    image: '/project/typewriter.png',
    category: 'WEB APP',
    title: 'Typewriter — Interactive Tool',
    href: 'https://typewriter-virid.vercel.app/',
  },
  {
    image: '/project/wish.png',
    category: 'GREETING',
    title: 'Wish Card — Digital Greetings',
    href: 'https://wish-devsamir.vercel.app/',
  },
  {
    image: '/project/meme.png',
    category: 'ENTERTAINMENT',
    title: 'ZENVIQ Meme — Meme Generator',
    href: 'https://zenviq-meme.vercel.app/',
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #E8F0FF 0%, #F5F9FF 50%, #FFFFFF 100%)',
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-40 md:pt-36 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center text-center max-w-4xl gap-8"
        >
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 rounded-full px-4 py-2 bg-white/60 backdrop-blur-sm shadow-stripe-sm cursor-default transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-slate-600 text-xs sm:text-sm">#1 Digital Agency in Hanumangarh</span>
            <Link
              href="/about"
              className="flex items-center gap-1 font-semibold text-indigo-600 text-xs sm:text-sm hover:text-indigo-700 transition-colors"
            >
              About us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight"
            style={{ letterSpacing: '-2px' }}
          >
            We Craft{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Premium Digital
            </span>{' '}
            Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-xl">
            ZENVIQ is Hanumangarh&apos;s leading digital agency — crafting stunning websites,
            intelligent AI automation, and SEO strategies that put your brand ahead of the competition.
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200 transition-all duration-300 font-semibold text-base"
            >
              <a
                href="https://calendly.com/zenviq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Book a Free Call
                <Calendar className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-full border border-slate-200 hover:border-slate-300 bg-white/80 text-slate-700 shadow-stripe-sm transition-all duration-300 font-medium text-base"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </Button>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs text-slate-400 italic"
          >
            *Free strategy consultation — No commitment required
          </motion.p>

          {/* Social Proof — Premium Stats + Trusted Logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            {/* Stats Row */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
              {[
                { value: "50+", label: "Projects Delivered", icon: <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />, gradient: "from-amber-50 to-orange-50", border: "border-amber-200/60" },
                { value: "30+", label: "Happy Clients", icon: <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />, gradient: "from-emerald-50 to-green-50", border: "border-emerald-200/60" },
                { value: "98%", label: "Client Retention", icon: <CheckCircle className="w-3.5 h-3.5 text-blue-500" />, gradient: "from-blue-50 to-indigo-50", border: "border-blue-200/60" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className={`flex-1 text-center px-3 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-sm`}
                >
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center justify-center gap-1">
                    {stat.value} {stat.icon}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trusted By Logos */}
            <div className="text-center">
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.2em] mb-4">
                Trusted by leading brands
              </p>
              <div className="flex items-center justify-center gap-8 sm:gap-12">
                {[
                  { src: "/trustedby/client-1.png", alt: "Premium Client" },
                  { src: "/trustedby/client-2.png", alt: "Hotel Gill Tower" },
                  { src: "/trustedby/client-3.png", alt: "Lab Client" },
                ].map((logo, i) => (
                  <motion.img
                    key={i}
                    src={logo.src}
                    alt={logo.alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.12 }}
                    className="h-8 sm:h-10 w-auto object-contain grayscale opacity-35 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
