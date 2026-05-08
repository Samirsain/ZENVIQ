"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Globe,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Globe, url: "https://samirsain.com", label: "Portfolio" },
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
  return (
    <div className={cn("w-full max-w-4xl mx-auto px-4", className)}>
      {/* Desktop Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:flex relative items-center"
      >
        {/* Avatar */}
        <div className="w-[360px] h-[360px] rounded-3xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
          <Image
            src="/team/samirsain.png"
            alt="Samir Sain — Founder & CEO of ZENVIQ Digital"
            width={360}
            height={360}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-stripe-lg border border-slate-200 p-8 ml-[-60px] z-10 max-w-xl flex-1">
          <div className="mb-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
              Founder & CEO
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1" style={{ letterSpacing: "-0.5px" }}>
              Samir Sain
            </h2>
            <p className="text-sm font-medium text-slate-500">
              Founder & CEO, ZENVIQ Digital
            </p>
            <Link
              href="https://samirsain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 mt-1 transition-colors"
            >
              <Globe className="w-3 h-3" /> samirsain.com
            </Link>
          </div>

          <div className="my-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <Quote className="w-4 h-4 text-indigo-400 mb-2" />
            <p className="text-slate-700 text-sm leading-relaxed">
              I&apos;m Samir Sain — Founder & CEO of ZENVIQ Digital. I started this agency with one goal: to bring world-class digital solutions to businesses in Hanumangarh and beyond. I specialize in Next.js, React, AI automation & SEO — and I personally oversee every project we deliver.
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
        </div>
      </motion.div>

      {/* Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:hidden max-w-sm mx-auto text-center"
      >
        {/* Avatar */}
        <div className="w-full aspect-square max-w-[280px] mx-auto bg-slate-100 rounded-3xl overflow-hidden mb-6 border border-slate-200">
          <Image
            src="/team/samirsain.png"
            alt="Samir Sain — Founder & CEO of ZENVIQ Digital"
            width={280}
            height={280}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />
        </div>

        {/* Card content */}
        <div className="px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-indigo-100">
            Founder & CEO
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-1">Samir Sain</h2>
          <p className="text-sm text-slate-500 mb-1">Founder & CEO, ZENVIQ Digital</p>
          <Link
            href="https://samirsain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 mb-4 transition-colors"
          >
            <Globe className="w-3 h-3" /> samirsain.com
          </Link>
          <p className="text-slate-700 text-sm leading-relaxed mb-6">
            I&apos;m Samir Sain — Founder & CEO of ZENVIQ Digital. I specialize in Next.js, React, AI automation & SEO — and I personally oversee every project we deliver.
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
        </div>
      </motion.div>
    </div>
  );
}
