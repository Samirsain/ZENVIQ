"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  const Icon = resource.icon

  return (
    <Card
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-stripe-lg hover:border-indigo-200/60 hover:-translate-y-1 cursor-pointer"
      onClick={() => {
        if (resource.external) {
          window.open(resource.link, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = resource.link
        }
      }}
    >
      {/* Badge + Rating */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest bg-slate-100 text-slate-600 rounded-full border border-slate-200/50 whitespace-nowrap">
          {resource.badge}
        </span>
        {resource.rating && (
          <span className="px-2 py-1 text-[10px] font-semibold bg-yellow-400/10 text-yellow-600 rounded-full flex items-center gap-1 border border-yellow-400/20">
            <Star className="w-3 h-3 fill-current" />
            {resource.rating}
          </span>
        )}
      </div>

      <CardHeader className="pt-6 pb-3 px-6">
        <div className="flex items-center gap-4 mb-3">
          {resource.logo ? (
            <div className="w-12 h-12 rounded-xl border border-slate-100 bg-white shadow-stripe-sm overflow-hidden flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={resource.logo}
                alt={`${resource.title} logo`}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          ) : Icon ? (
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-stripe-sm group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
          ) : null}

          <div className="flex flex-col">
            <CardTitle className="text-lg font-bold text-slate-900 leading-tight tracking-tight flex items-center gap-1.5">
              {resource.title}
              {["ChatGPT", "Claude AI", "Google Gemini", "Midjourney", "DALL-E 3", "GitHub Copilot"].includes(resource.title) && (
                <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide-badge-check fill-blue-500/10"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74Z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
              )}
            </CardTitle>
          </div>
        </div>

        <CardDescription className="text-sm text-slate-500 leading-relaxed font-medium">
          {resource.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 pb-6 px-6">
        <div className="flex flex-wrap gap-2 mt-2">
          {resource.external ? (
            <button
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all duration-300 text-blue-600 px-4 py-2.5 rounded-xl border-2 border-blue-100 hover:bg-blue-600 hover:text-white group/btn"
            >
              Launch App
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          ) : (
            <button
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all duration-300 text-indigo-600 px-4 py-2.5 rounded-xl border-2 border-indigo-100 hover:bg-indigo-600 hover:text-white group/btn"
            >
              {resource.link.startsWith('/tools/') ? 'Use Tool' : 'Read Article'}
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("AI")

  return (
    <section className="pt-4 pb-16 sm:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-10 sm:mb-12">
          {/* Top Rated Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-emerald-100 shadow-stripe-sm">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            Top Rated!
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Resources for You
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto px-2">
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
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category.name
                  ? "bg-slate-900 text-white border border-slate-900 shadow-stripe-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent"
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
          <AnimatePresence mode="popLayout">
            {resources[activeCategory]?.map((resource, index) => (
              <motion.div
                layout
                key={resource.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <ResourceCard resource={resource} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
