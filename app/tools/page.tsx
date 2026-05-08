"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles, Download, Calculator, Hash, Package, Type,
  FileText, Code, Image, Search, Mail, BarChart3, Zap,
  Instagram, Share2, ArrowRight, Wand2, Filter
} from "lucide-react"
import Link from "next/link"

const categories = ["All", "AI Tools", "Calculators", "Text Tools", "SEO Tools", "Social Media", "Downloaders", "Generators", "Dev Tools", "Utilities", "Performance"]

const tools = [
  { id: 17, title: "Social Media Downloader", description: "Download videos & images from YouTube, Instagram, TikTok, Twitter & more", icon: Download, link: "/tools/social-downloader", gradient: "from-violet-500 to-indigo-600", badge: "Downloaders", emoji: "🚀" },
  { id: 1, title: "AI Content Generator", description: "Generate high-quality content for blogs, social media & marketing with AI", icon: Sparkles, link: "/tools/ai-content-generator", gradient: "from-violet-500 to-purple-600", badge: "AI Tools", emoji: "✨" },
  { id: 2, title: "AI Image Generator", description: "Create stunning images from text descriptions using advanced AI tech", icon: Image, link: "/tools/image-generator", gradient: "from-fuchsia-500 to-pink-600", badge: "AI Tools", emoji: "🎨" },
  { id: 3, title: "Pinterest Downloader", description: "Download Pinterest pins — save images and videos from Pinterest easily", icon: Download, link: "/tools/pinterest-downloader", gradient: "from-rose-500 to-red-600", badge: "Downloaders", emoji: "📌" },
  { id: 4, title: "EMI Calculator", description: "Calculate your loan EMI, interest & total repayment amount instantly", icon: Calculator, link: "/tools/emi-calculator", gradient: "from-emerald-500 to-green-600", badge: "Calculators", emoji: "💰" },
  { id: 5, title: "GST Calculator", description: "Calculate GST amount, tax rates & inclusive/exclusive pricing", icon: Calculator, link: "/tools/gst-calculator", gradient: "from-teal-500 to-cyan-600", badge: "Calculators", emoji: "🧮" },
  { id: 6, title: "Percentage Calculator", description: "Compute percentages, changes, discounts & markups with ease", icon: Hash, link: "/tools/percentage-calculator", gradient: "from-indigo-500 to-blue-600", badge: "Calculators", emoji: "📊" },
  { id: 7, title: "SKU Generator", description: "Generate unique SKU codes for your products & inventory management", icon: Package, link: "/tools/sku-generator", gradient: "from-amber-500 to-orange-600", badge: "Generators", emoji: "📦" },
  { id: 8, title: "Case Converter", description: "Convert text between uppercase, lowercase, title case & more", icon: Type, link: "/tools/case-converter", gradient: "from-cyan-500 to-sky-600", badge: "Text Tools", emoji: "🔤" },
  { id: 9, title: "Word Counter", description: "Count words, characters, sentences, paragraphs & reading time", icon: FileText, link: "/tools/word-counter", gradient: "from-sky-500 to-blue-600", badge: "Text Tools", emoji: "📝" },
  { id: 10, title: "CSS Unit Converter", description: "Convert between px, em, rem, %, vw, vh & other CSS units", icon: Code, link: "/tools/css-unit-converter", gradient: "from-blue-500 to-indigo-600", badge: "Dev Tools", emoji: "⚙️" },
  { id: 11, title: "SEO Checker", description: "Analyze your website SEO performance & get actionable insights", icon: Search, link: "/tools/seo-checker", gradient: "from-yellow-500 to-amber-600", badge: "SEO Tools", emoji: "🔍" },
  { id: 12, title: "Email Tools", description: "Validate emails, extract addresses & manage email lists efficiently", icon: Mail, link: "/tools/email-tools", gradient: "from-slate-500 to-gray-600", badge: "Utilities", emoji: "📧" },
  { id: 13, title: "SEO Tools Suite", description: "Essential free tools to analyze & improve your website's SEO", icon: BarChart3, link: "/tools/seo-tools", gradient: "from-green-500 to-emerald-600", badge: "SEO Tools", emoji: "📈" },
  { id: 14, title: "Instagram Tools", description: "Generate bios, name suggestions & username ideas for Instagram", icon: Instagram, link: "/tools/instagram-tools", gradient: "from-pink-500 to-rose-600", badge: "Social Media", emoji: "📸" },
  { id: 15, title: "Social Media Tools", description: "Best tools for managing & scheduling posts across platforms", icon: Share2, link: "/tools/social-tools", gradient: "from-purple-500 to-violet-600", badge: "Social Media", emoji: "🌐" },
  { id: 16, title: "Speed Testing Tools", description: "Top tools to test & optimize your website loading speed", icon: Zap, link: "/tools/speed-tools", gradient: "from-red-500 to-orange-600", badge: "Performance", emoji: "⚡" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
}

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  const [hovered, setHovered] = useState(false)
  const Icon = tool.icon

  return (
    <motion.div variants={cardVariants} layout>
      <Link href={tool.link} className="block group h-full">
        <Card
          className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-stripe-sm hover:shadow-stripe-lg transition-all duration-500 cursor-pointer h-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} exit={{ opacity: 0 }}
                className={`absolute inset-0 bg-gradient-to-br ${tool.gradient}`}
              />
            )}
          </AnimatePresence>

          <CardContent className="relative z-10 p-6 flex flex-col items-center text-center gap-3">
            <div className="relative">
              <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 5, scale: 0.5 }}
                    animate={{ opacity: 1, y: -12, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.5 }}
                    className="absolute -top-3 -right-3 text-lg"
                  >
                    {tool.emoji}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 border-0">
              {tool.badge}
            </Badge>

            <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">{tool.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{tool.description}</p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              className="flex items-center gap-1 text-xs font-semibold mt-1"
            >
              <span className={`bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`}>Try Now</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const filteredTools = activeCategory === "All" ? tools : tools.filter(t => t.badge === activeCategory)

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed & reliability", gradient: "from-amber-500 to-orange-600", emoji: "⚡" },
    { icon: Download, title: "100% Free", desc: "No hidden fees or subscriptions", gradient: "from-emerald-500 to-green-600", emoji: "🎁" },
    { icon: Sparkles, title: "AI-Powered", desc: "Advanced AI for superior results", gradient: "from-violet-500 to-purple-600", emoji: "🤖" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

          {/* Floating emojis */}
          <motion.div className="absolute top-16 left-[10%] text-4xl opacity-30 hidden lg:block" animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>🛠️</motion.div>
          <motion.div className="absolute top-32 right-[12%] text-3xl opacity-25 hidden lg:block" animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>✨</motion.div>
          <motion.div className="absolute bottom-20 left-[15%] text-3xl opacity-25 hidden lg:block" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 2 }}>🚀</motion.div>

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-indigo-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6"
              >
                <Wand2 className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Free Productivity Tools</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                Free Tools{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Collection
                </span>{" "}
                <span className="inline-block animate-float">🎯</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
                Boost your productivity with our comprehensive collection of{" "}
                <span className="font-semibold text-slate-700">AI tools, calculators, generators</span>
                {" "}& utilities. Everything you need in one place.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {[
                  { icon: Sparkles, label: "AI-Powered", color: "bg-violet-100 text-violet-700" },
                  { icon: Calculator, label: "Calculators", color: "bg-emerald-100 text-emerald-700" },
                  { icon: Type, label: "Text Tools", color: "bg-cyan-100 text-cyan-700" },
                  { icon: Download, label: "Free to Use", color: "bg-rose-100 text-rose-700" },
                ].map((b) => (
                  <Badge key={b.label} className={`${b.color} border-0 px-4 py-2 text-xs font-semibold gap-1.5`}>
                    <b.icon className="w-3.5 h-3.5" />
                    {b.label}
                  </Badge>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section ref={ref} className="py-16 sm:py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                  Explore Our Tools <span className="inline-block">🔧</span>
                </h2>
                <p className="text-base text-slate-500 max-w-2xl mx-auto">
                  Choose from our wide range of free tools designed to enhance your workflow
                </p>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
              >
                {categories.filter(c => c === "All" || tools.some(t => t.badge === c)).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-indigo-glow"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              {/* Tools Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-15" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                  Why Choose Our Tools? <span className="inline-block">💎</span>
                </h2>
                <p className="text-base text-slate-500 max-w-2xl mx-auto">
                  Built with user experience and performance in mind
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <Card className="text-center p-8 border-0 bg-white/80 shadow-stripe-sm hover:shadow-stripe-lg transition-all duration-500 group h-full">
                      <CardContent className="pt-2 flex flex-col items-center gap-4">
                        <div className="relative">
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-br ${f.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <f.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <span className="absolute -top-2 -right-2 text-lg group-hover:scale-125 transition-transform">{f.emoji}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <motion.div className="absolute top-8 left-[15%] text-3xl opacity-30 hidden md:block" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>🎯</motion.div>
          <motion.div className="absolute bottom-8 right-[15%] text-3xl opacity-30 hidden md:block" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>🚀</motion.div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to Boost Your Productivity? 🚀
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                Start using our free tools today and experience the difference
              </p>
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }} className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Explore All Tools
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
