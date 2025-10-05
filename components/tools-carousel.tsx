"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles, Download, Calculator, Hash, Package, Type, FileText, Code } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media, and marketing with AI-powered tools",
    icon: Sparkles,
    link: "/tools/ai-content-generator",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    badge: "AI Tools"
  },
  {
    id: 2,
    title: "Pinterest Downloader",
    description: "Download Pinterest pins with AI-powered Pinterest Downloader. Save images and videos from Pinterest easily.",
    icon: Download,
    link: "/tools/pinterest-downloader",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    badge: "Downloaders"
  },
  {
    id: 3,
    title: "EMI Calculator",
    description: "Calculate your loan EMI, interest, and total amount with our free EMI calculator",
    icon: Calculator,
    link: "/tools/emi-calculator",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    badge: "Calculators"
  },
  {
    id: 4,
    title: "GST Calculator",
    description: "Calculate GST amount, tax rates, and total price with our comprehensive GST calculator",
    icon: Calculator,
    link: "/tools/gst-calculator",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    badge: "Calculators"
  },
  {
    id: 5,
    title: "Percentage Calculator",
    description: "Calculate percentages, percentage change, and percentage of a number with ease",
    icon: Hash,
    link: "/tools/percentage-calculator",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    badge: "Calculators"
  },
  {
    id: 6,
    title: "SKU Generator",
    description: "Generate unique SKU codes for your products with our free SKU generator tool",
    icon: Package,
    link: "/tools/sku-generator",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    badge: "Generators"
  },
  {
    id: 7,
    title: "Case Converter",
    description: "Convert text between different cases - uppercase, lowercase, title case, and more",
    icon: Type,
    link: "/tools/case-converter",
    color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
    badge: "Text Tools"
  },
  {
    id: 8,
    title: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text with our word counter",
    icon: FileText,
    link: "/tools/word-counter",
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    badge: "Text Tools"
  },
  {
    id: 9,
    title: "CSS Unit Converter",
    description: "Convert between different CSS units - px, em, rem, %, vw, vh, and more",
    icon: Code,
    link: "/tools/css-unit-converter",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
    badge: "Text Tools"
  }
]

export default function ToolsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div key={tool.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full mb-2">
                      {tool.badge}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {tool.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      <Link href={tool.link}>
                        Try Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
        aria-label="Previous tool"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700 z-10"
        aria-label="Next tool"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {tools.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-8"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Tools Button */}
      <div className="text-center mt-8">
        <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
          <Link href="/ai-tools">
            View All Tools
          </Link>
        </Button>
      </div>
    </div>
  )
}
