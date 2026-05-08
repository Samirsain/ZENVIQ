'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame, MotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, Sparkles, CheckCircle } from 'lucide-react';

/* ── Animated Grid Pattern ── */
const GridPattern = ({ offsetX, offsetY }: { offsetX: MotionValue<number>; offsetY: MotionValue<number> }) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id="hero-grid"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-slate-400"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hero-grid)" />
  </svg>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full flex flex-col overflow-hidden bg-white"
    >
      {/* Grid — subtle base layer */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Grid — mouse-reveal layer */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Color Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-15%] top-[-15%] w-[35%] h-[35%] rounded-full bg-indigo-500/25 blur-[120px]" />
        <div className="absolute right-[10%] top-[-5%] w-[20%] h-[20%] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-15%] w-[30%] h-[30%] rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-36 sm:pt-40 pb-16">
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
            Experiences in Hanumangarh
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

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full max-w-2xl"
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
