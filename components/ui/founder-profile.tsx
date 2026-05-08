"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileSlide {
  heading: string;
  description: string;
  imageUrl: string;
}

const profileSlides: ProfileSlide[] = [
  {
    heading: "Founder & Principal Architect",
    description:
      "Founder of ZENVIQ with over 4 years of hands-on experience in full-stack engineering and digital strategy. My journey began with a simple question — \"How can we make sophisticated tech accessible to everyone?\"",
    imageUrl: "/founder.svg",
  },
  {
    heading: "Full-Stack Engineer",
    description:
      "Proficient in React, Next.js, TypeScript, Node.js, and Python. I build high-performance web apps, SaaS platforms, and AI-driven tools — from architecture to deployment.",
    imageUrl: "/founder.svg",
  },
  {
    heading: "AI & Automation Specialist",
    description:
      "From custom AI chatbots to business process automation, I integrate cutting-edge LLM capabilities into real products. GitaGPT, Credify, and Norvia are built from this vision.",
    imageUrl: "/founder.svg",
  },
];

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com/codexmir", label: "Instagram" },
  { icon: Github, url: "https://github.com/samirsain", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/samirsain", label: "LinkedIn" },
  { icon: Twitter, url: "https://twitter.com/samirsain", label: "Twitter" },
  { icon: Mail, url: "mailto:hello@zenviqdigital.in", label: "Email" },
];

export interface FounderProfileProps {
  className?: string;
}

export function FounderProfile({ className }: FounderProfileProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((i) => (i + 1) % profileSlides.length);
  const handlePrevious = () =>
    setCurrentIndex((i) => (i - 1 + profileSlides.length) % profileSlides.length);

  const current = profileSlides[currentIndex];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center">
        {/* Avatar */}
        <div className="w-[420px] h-[420px] rounded-3xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt="Samir Sain"
                width={420}
                height={420}
                className="w-full h-full object-contain p-8"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-stripe-lg border border-slate-200 p-8 ml-[-60px] z-10 max-w-xl flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
                  {current.heading}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1" style={{ letterSpacing: "-0.5px" }}>
                  Samir Sain
                </h2>
                <p className="text-sm font-medium text-slate-500">
                  ZENVIQ Digital — Building the Future of Web & AI
                </p>
              </div>

              <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <Quote className="w-4 h-4 text-indigo-400 mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="flex gap-3">
                {socialLinks.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center transition-all hover:bg-indigo-600 hover:scale-110"
                    aria-label={label}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        {/* Avatar */}
        <div className="w-full aspect-square bg-slate-100 rounded-3xl overflow-hidden mb-6 border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={current.imageUrl}
                alt="Samir Sain"
                width={400}
                height={400}
                className="w-full h-full object-contain p-8"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-indigo-100">
                {current.heading}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Samir Sain</h2>
              <p className="text-sm text-slate-500 mb-4">ZENVIQ Digital</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {current.description}
              </p>
              <div className="flex justify-center gap-3">
                {socialLinks.map(({ icon: IconComponent, url, label }) => (
                  <Link
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center transition-all hover:bg-indigo-600 hover:scale-110"
                    aria-label={label}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrevious}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-stripe-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>

        <div className="flex gap-2">
          {profileSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                i === currentIndex
                  ? "bg-indigo-600 w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-stripe-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>
      </div>
    </div>
  );
}
