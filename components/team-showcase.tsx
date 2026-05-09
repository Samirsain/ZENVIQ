"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Globe,
  ArrowRight,
  Sparkles,
  Code2,
  Palette,
  Cpu,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

function TeamCard({
  name,
  role,
  image,
  bio,
  emoji,
  accent,
  accentBg,
  accentBorder,
  accentText,
  RoleIcon,
  socials,
  index,
}: {
  name: string
  role: string
  image: string
  bio: string
  emoji: string
  accent: string
  accentBg: string
  accentBorder: string
  accentText: string
  RoleIcon: LucideIcon
  socials: { Icon: LucideIcon; url: string; label: string }[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-xl hover:border-slate-300/80 transition-all duration-500">
        <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

        <motion.div
          animate={{ y: [-2, 6, -2], rotate: [-5, 5, -5] }}
          transition={{ duration: 2.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-5 right-5 text-2xl select-none z-10"
        >
          {emoji}
        </motion.div>

        <div className="p-6 sm:p-8">
          <div className="relative mb-6">
            <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 ${accentBorder} shadow-lg group-hover:scale-105 transition-transform duration-500`}>
              <Image
                src={image}
                alt={`${name} — ${role}`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div className={`absolute -bottom-2 -right-2 w-9 h-9 rounded-xl ${accentBg} ${accentBorder} border backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              <RoleIcon className={`w-4 h-4 ${accentText}`} />
            </div>
          </div>

          <div className="mb-5">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">{name}</h3>
            <p className={`text-sm font-semibold ${accentText} mb-3`}>{role}</p>
            <p className="text-sm text-slate-500 leading-relaxed">{bio}</p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110 hover:shadow-md"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-3xl`} />
      </div>
    </motion.div>
  )
}

export default function TeamShowcase() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-50/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.div
            animate={{ y: [-4, 4, -4], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100/60 px-5 py-2 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">The Crew</span>
            <span className="text-sm">✨</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1.5px" }}>
            Meet the{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Humans
            </span>{" "}
            Behind ZENVIQ
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            A tight-knit team of builders, designers & engineers who turn ideas into premium digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <TeamCard
            index={0}
            name="Samir Sain"
            role="Founder & CEO"
            image="/team/samirsain.png"
            bio="Full-stack dev & AI specialist. Builds world-class digital products from strategy to ship."
            emoji="🚀"
            accent="from-indigo-500 to-blue-500"
            accentBg="bg-indigo-500/10"
            accentBorder="border-indigo-500/20"
            accentText="text-indigo-600"
            RoleIcon={Code2}
            socials={[
              { Icon: Globe, url: "https://samirsain.com", label: "Portfolio" },
              { Icon: Github, url: "https://github.com/samirsain", label: "GitHub" },
              { Icon: Instagram, url: "https://instagram.com/codexmir", label: "Instagram" },
              { Icon: Linkedin, url: "https://linkedin.com/in/samirsain", label: "LinkedIn" },
            ]}
          />
          <TeamCard
            index={1}
            name="Aditya Raj"
            role="Product Engineer"
            image="/team/aditya.png"
            bio="SaaS systems, AI workflows & automation. Designs, codes, ships, repeats."
            emoji="⚡"
            accent="from-violet-500 to-purple-500"
            accentBg="bg-violet-500/10"
            accentBorder="border-violet-500/20"
            accentText="text-violet-600"
            RoleIcon={Cpu}
            socials={[
              { Icon: Globe, url: "https://adityaraj.info", label: "Portfolio" },
              { Icon: Github, url: "https://github.com/adityaraj", label: "GitHub" },
              { Icon: Linkedin, url: "https://linkedin.com/in/adityaraj", label: "LinkedIn" },
            ]}
          />
          <TeamCard
            index={2}
            name="Yogi Sahu"
            role="Frontend Developer"
            image="/team/yogi-sahu.png"
            bio="Pixel-perfect UIs with React & Next.js. Open source lover & CSS wizard."
            emoji="🎨"
            accent="from-cyan-500 to-teal-500"
            accentBg="bg-cyan-500/10"
            accentBorder="border-cyan-500/20"
            accentText="text-cyan-600"
            RoleIcon={Palette}
            socials={[
              { Icon: Github, url: "https://github.com/yogiisahu", label: "GitHub" },
              { Icon: Mail, url: "mailto:thedankyogi@gmail.com", label: "Email" },
              { Icon: Globe, url: "https://zenviqdigital.in", label: "Website" },
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
~}
