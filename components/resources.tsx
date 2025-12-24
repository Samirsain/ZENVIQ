"use client"

import React, { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Star,
  Lightbulb,
  Wrench,
  FileText,
  Zap,
  Globe,
  Brain,
  ShoppingCart,
  ImageIcon,
  Video,
  MessageSquare,
  Code
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const resources: { [key: string]: any[] } = {
  "AI": [
    {
      title: "ChatGPT",
      description: "OpenAI's conversational AI that can help with writing, coding, analysis, and more. Most popular AI tool with free tier available.",
      badge: "Free Tier",
      link: "https://chat.openai.com",
      logo: "/logos/chat-gpt.png",
      rating: "4.8★",
      external: true,
      detailUrl: "/ai-tools/chatgpt"
    },
    {
      title: "Claude AI",
      description: "Anthropic's AI assistant focused on helpful, harmless, and honest responses. Better context understanding and ethical AI.",
      badge: "Free Tier",
      link: "https://claude.ai",
      logo: "/logos/Claude AI logo.ico",
      rating: "4.7★",
      external: true,
      detailUrl: "/ai-tools/claude"
    },
    {
      title: "Google Gemini",
      description: "Google's multimodal AI that can understand text, images, and more. Integrated with Google ecosystem and real-time data.",
      badge: "Free Tier",
      link: "https://gemini.google.com",
      logo: "/logos/gemini logo.webp",
      rating: "4.6★",
      external: true,
      detailUrl: "/ai-tools/gemini"
    },
    {
      title: "Midjourney",
      description: "AI image generator that creates stunning artwork and visuals. Best image quality with artistic capabilities.",
      badge: "Premium",
      link: "https://www.midjourney.com",
      logo: "/logos/midjourney-logo-icon_1731359952.webp",
      rating: "4.9★",
      external: true,
      detailUrl: "/ai-tools/midjourney"
    },
    {
      title: "DALL-E 3",
      description: "OpenAI's image generator integrated with ChatGPT. Easy to use with good safety measures and commercial usage.",
      badge: "ChatGPT Plus",
      link: "https://openai.com/dall-e-3",
      logo: "/logos/dalle-3.png",
      rating: "4.5★",
      external: true,
      detailUrl: "/ai-tools/dalle"
    },
    {
      title: "GitHub Copilot",
      description: "AI pair programmer that helps write code faster. Excellent for coding with multi-language support and IDE integration.",
      badge: "Free for Students",
      link: "https://github.com/features/copilot",
      logo: "/logos/github-copilot.webp",
      rating: "4.3★",
      external: true,
      detailUrl: "/ai-tools/copilot"
    },
  ],
  "Free Tools": [
    {
      title: "AI Image Generator",
      description: "Generate stunning images from text descriptions using advanced AI technology",
      badge: "AI Tools",
      link: "/tools/image-generator",
      icon: ImageIcon,
    },
    {
      title: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
      badge: "AI Tools",
      link: "/tools/ai-content-generator",
      icon: Code,
    },
    {
      title: "Pinterest Downloader",
      description: "Download Pinterest pins with AI-powered Pinterest Downloader. Save images and videos from Pinterest easily.",
      badge: "Downloaders",
      link: "/tools/pinterest-downloader",
      icon: Video,
    },
    {
      title: "EMI Calculator",
      description: "Calculate your loan EMI, interest, and total amount with our free EMI calculator",
      badge: "Calculators",
      link: "/tools/emi-calculator",
      icon: Zap,
    },
    {
      title: "GST Calculator",
      description: "Calculate GST amount, tax rates, and total price with our comprehensive GST calculator",
      badge: "Calculators",
      link: "/tools/gst-calculator",
      icon: FileText,
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages, percentage change, and percentage of a number with ease",
      badge: "Calculators",
      link: "/tools/percentage-calculator",
      icon: Lightbulb,
    },
    {
      title: "SKU Generator",
      description: "Generate unique SKU codes for your products with our free SKU generator tool",
      badge: "Generators",
      link: "/tools/sku-generator",
      icon: Wrench,
    },
    {
      title: "Case Converter",
      description: "Convert text between different cases - uppercase, lowercase, title case, and more",
      badge: "Text Tools",
      link: "/tools/case-converter",
      icon: MessageSquare,
    },
    {
      title: "Word Counter",
      description: "Count words, characters, sentences, and paragraphs in your text with our word counter",
      badge: "Text Tools",
      link: "/tools/word-counter",
      icon: FileText,
    },
    {
      title: "CSS Unit Converter",
      description: "Convert between different CSS units - px, em, rem, %, vw, vh, and more",
      badge: "Web Tools",
      link: "/tools/css-unit-converter",
      icon: Code,
    },
    {
      title: "SEO Checker",
      description: "Analyze your website SEO performance and get actionable insights",
      badge: "SEO Tools",
      link: "/tools/seo-checker",
      icon: Zap,
    },
    {
      title: "Instagram Tools",
      description: "Generate Instagram bios, name suggestions, and username ideas",
      badge: "Social Media",
      link: "/tools/instagram-tools",
      icon: MessageSquare,
    },
  ],
  "Blog": [
    {
      title: "Free AI Tools Guide - Complete List 2024",
      description: "Discover the best free AI tools available in 2024. Complete guide to free AI tools for content creation, productivity, and business.",
      badge: "AI Tools",
      link: "/blog/free-ai-tools-guide",
      icon: Lightbulb,
    },
    {
      title: "Supercharge your AI Workflow",
      description: "Find the right best AI tools for your workflow. Complete guide to AI tools and their applications.",
      badge: "AI",
      link: "/blog/ai-workflow-tools",
      icon: Zap,
    },
    {
      title: "Complete Guide to Building a Professional Website",
      description: "Step-by-step guide to creating a stunning, professional website that converts visitors into customers.",
      badge: "Web Development",
      link: "/blog/professional-website-guide",
      icon: FileText,
    },
    {
      title: "Digital Marketing Trends Every Business Should Know",
      description: "Stay ahead of the competition with these emerging digital marketing trends that are shaping the future of online business.",
      badge: "Marketing",
      link: "/blog/digital-marketing-trends-2025",
      icon: Globe,
    },
    {
      title: "How AI Tools Are Revolutionizing Content Creation",
      description: "Explore the latest AI-powered content creation tools and learn how to leverage them for better productivity and quality.",
      badge: "AI Tools",
      link: "/blog/ai-content-creation-tools",
      icon: Brain,
    },
    {
      title: "Best Free SEO Tools for Website Optimization",
      description: "Comprehensive list of free SEO tools to improve your website's search engine ranking and visibility.",
      badge: "SEO",
      link: "/blog/free-seo-tools-guide",
      icon: Zap,
    },
  ],
}

const categories = [
  { name: "AI", icon: Lightbulb },
  { name: "Free Tools", icon: Wrench },
  { name: "Blog", icon: FileText },
]

const ResourceCard = ({ resource }: { resource: any }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics for limited, subtle movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Very subtle tilt mapping (limited to +/- 5 degrees/percent)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  // Subtle "magnetic" pull for internal elements
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Icon = resource.icon

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative perspective-1000"
    >
      <Card
        className="relative bg-white/70 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 cursor-pointer"
        onClick={() => {
          if (resource.external) {
            window.open(resource.link, '_blank', 'noopener,noreferrer')
          } else {
            window.location.href = resource.link
          }
        }}
      >
        {/* Glow behind */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Badge Layer - Less depth but still follows */}
        <motion.div
          style={{ x: translateX, y: translateY, translateZ: 20 }}
          className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2"
        >
          <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-slate-100/80 dark:bg-slate-700/80 backdrop-blur-md text-slate-600 dark:text-slate-300 rounded-full border border-slate-200/50 dark:border-white/5 whitespace-nowrap">
            {resource.badge}
          </span>
          {resource.rating && (
            <span className="px-2 py-1 text-[10px] font-semibold bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center gap-1 border border-yellow-400/20 backdrop-blur-md">
              <Star className="w-3 h-3 fill-current" />
              {resource.rating}
            </span>
          )}
        </motion.div>

        <CardHeader className="pt-12 pb-4 px-6 relative">
          {/* Logo Layer - High depth */}
          <motion.div
            style={{ x: translateX, y: translateY, translateZ: 60 }}
            className="flex items-center gap-4 mb-3"
          >
            {resource.logo ? (
              <div className="w-12 h-12 rounded-xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800 shadow-lg overflow-hidden flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={resource.logo}
                  alt={`${resource.title} logo`}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : Icon ? (
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Icon className="w-6 h-6 text-white" />
              </div>
            ) : null}

            <div className="flex flex-col">
              <CardTitle className="text-lg font-bold text-slate-900 dark:text-white leading-tight tracking-tight flex items-center gap-1.5">
                {resource.title}
                {["ChatGPT", "Claude AI", "Google Gemini", "Midjourney", "DALL-E 3", "GitHub Copilot"].includes(resource.title) && (
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide-badge-check fill-blue-500/10"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74Z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                )}
              </CardTitle>
            </div>
          </motion.div>

          {/* Description Layer - Moderate depth */}
          <motion.div style={{ x: translateX, y: translateY, translateZ: 30 }}>
            <CardDescription className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {resource.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0 pb-6 px-6">
          <motion.div
            style={{ translateZ: 40 }}
            className="flex flex-wrap gap-2 mt-2"
          >
            {resource.external ? (
              <button
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all text-blue-600 dark:text-blue-400 px-4 py-2.5 rounded-xl border-2 border-blue-100 dark:border-blue-900/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 group/btn"
              >
                Launch App
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all text-indigo-600 dark:text-indigo-400 px-4 py-2.5 rounded-xl border-2 border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 group/btn"
              >
                {resource.link.startsWith('/tools/') ? 'Use Tool' : 'Read Article'}
                <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            )}
          </motion.div>
        </CardContent>

        {/* Border Reveal Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </Card>
    </motion.div>
  )
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("AI")

  return (
    <section className="pt-4 pb-16 sm:pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12">
          {/* Top Rated Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Top Rated!
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Resources for You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Free utilities, AI tools reviews, guides, and services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                onClick={() => {
                  console.log("Category clicked:", category.name)
                  setActiveCategory(category.name)
                }}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${activeCategory === category.name
                  ? "bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-transparent"
                  }`}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {resources[activeCategory]?.map((resource, index) => (
            <motion.div
              layout
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
