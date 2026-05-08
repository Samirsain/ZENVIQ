"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Download,
  Calculator,
  Hash,
  Package,
  Type,
  FileText,
  Code,
  Image,
  ArrowRight,
  Wand2,
} from "lucide-react"
import Link from "next/link"

const tools = [
  {
    id: 0,
    title: "Social Media Downloader",
    description: "Download from YouTube, Instagram, TikTok, Twitter & 10+ platforms",
    icon: Download,
    link: "/tools/social-downloader",
    gradient: "from-violet-500 to-indigo-600",
    bgGlow: "bg-violet-500/10",
    badge: "Popular",
    emoji: "🚀",
  },
  {
    id: 1,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media & marketing",
    icon: Sparkles,
    link: "/tools/ai-content-generator",
    gradient: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/10",
    badge: "AI Tools",
    emoji: "✨",
  },
  {
    id: 2,
    title: "Pinterest Downloader",
    description: "Save images & videos from Pinterest instantly with one click",
    icon: Download,
    link: "/tools/pinterest-downloader",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/10",
    badge: "Downloaders",
    emoji: "📌",
  },
  {
    id: 3,
    title: "EMI Calculator",
    description: "Calculate loan EMI, interest rates & total repayment amount",
    icon: Calculator,
    link: "/tools/emi-calculator",
    gradient: "from-emerald-500 to-green-600",
    bgGlow: "bg-emerald-500/10",
    badge: "Calculators",
    emoji: "💰",
  },
  {
    id: 4,
    title: "GST Calculator",
    description: "Calculate GST amounts, tax rates & inclusive/exclusive pricing",
    icon: Calculator,
    link: "/tools/gst-calculator",
    gradient: "from-teal-500 to-cyan-600",
    bgGlow: "bg-teal-500/10",
    badge: "Calculators",
    emoji: "🧮",
  },
  {
    id: 5,
    title: "Percentage Calculator",
    description: "Compute percentages, changes, discounts & markups instantly",
    icon: Hash,
    link: "/tools/percentage-calculator",
    gradient: "from-indigo-500 to-blue-600",
    bgGlow: "bg-indigo-500/10",
    badge: "Calculators",
    emoji: "📊",
  },
  {
    id: 6,
    title: "SKU Generator",
    description: "Generate unique product SKU codes for inventory management",
    icon: Package,
    link: "/tools/sku-generator",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/10",
    badge: "Generators",
    emoji: "📦",
  },
  {
    id: 7,
    title: "Case Converter",
    description: "Transform text between upper, lower, title & sentence cases",
    icon: Type,
    link: "/tools/case-converter",
    gradient: "from-cyan-500 to-sky-600",
    bgGlow: "bg-cyan-500/10",
    badge: "Text Tools",
    emoji: "🔤",
  },
  {
    id: 8,
    title: "Word Counter",
    description: "Count words, characters, sentences & reading time instantly",
    icon: FileText,
    link: "/tools/word-counter",
    gradient: "from-sky-500 to-blue-600",
    bgGlow: "bg-sky-500/10",
    badge: "Text Tools",
    emoji: "📝",
  },
  {
    id: 9,
    title: "AI Image Generator",
    description: "Create stunning images from text descriptions with AI magic",
    icon: Image,
    link: "/tools/image-generator",
    gradient: "from-fuchsia-500 to-pink-600",
    bgGlow: "bg-fuchsia-500/10",
    badge: "AI Tools",
    emoji: "🎨",
  },
  {
    id: 10,
    title: "CSS Unit Converter",
    description: "Convert px, em, rem, %, vw, vh & other CSS units effortlessly",
    icon: Code,
    link: "/tools/css-unit-converter",
    gradient: "from-blue-500 to-indigo-600",
    bgGlow: "bg-blue-500/10",
    badge: "Dev Tools",
    emoji: "⚙️",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function ToolsCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="relative max-w-7xl mx-auto">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-10 -left-6 text-4xl opacity-40 pointer-events-none select-none hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🛠️
      </motion.div>
      <motion.div
        className="absolute -top-6 -right-4 text-3xl opacity-40 pointer-events-none select-none hidden lg:block"
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="absolute bottom-10 -left-8 text-3xl opacity-30 pointer-events-none select-none hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🚀
      </motion.div>

      {/* Tools Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
      >
        {tools.map((tool) => {
          const Icon = tool.icon
          const isHovered = hoveredId === tool.id

          return (
            <motion.div key={tool.id} variants={cardVariants}>
              <Link href={tool.link} className="block group">
                <Card
                  className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-stripe-sm hover:shadow-stripe-lg transition-all duration-500 cursor-pointer h-full"
                  onMouseEnter={() => setHoveredId(tool.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Background glow on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className={`absolute inset-0 ${tool.bgGlow} rounded-xl`}
                      />
                    )}
                  </AnimatePresence>

                  <CardContent className="relative z-10 p-5 flex flex-col items-center text-center gap-3">
                    {/* Emoji float on hover */}
                    <div className="relative">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Floating emoji */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, y: 5, scale: 0.5 }}
                            animate={{ opacity: 1, y: -10, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.5 }}
                            className="absolute -top-3 -right-3 text-lg"
                          >
                            {tool.emoji}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5 font-medium bg-slate-100 text-slate-500 border-0"
                    >
                      {tool.badge}
                    </Badge>

                    <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug group-hover:text-slate-800 transition-colors">
                      {tool.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>

                    {/* Hover CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-1 text-xs font-semibold"
                    >
                      <span className={`bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`}>
                        Try Now
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      {/* View All Tools CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-10 sm:mt-12"
      >
        <Button
          asChild
          size="lg"
          className="group relative bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 text-white rounded-full px-8 py-3 shadow-indigo-glow text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <Link href="/tools" className="flex items-center gap-2">
            <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Explore All Tools
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
