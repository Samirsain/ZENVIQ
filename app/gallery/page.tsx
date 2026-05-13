"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Star, ExternalLink, ArrowRight } from "lucide-react"

interface Project {
  src: string
  alt: string
  category: string
  href: string
}

const projects: Project[] = [
  {
    src: "/project/antiquity.png",
    alt: "Antiquity Digital — Marketing Agency",
    category: "Digital Agency",
    href: "https://www.antiquitydigital.online/",
  },
  {
    src: "/project/scrollinpanda.png",
    alt: "ScrollinPanda — Refurbished Laptops",
    category: "E-Commerce",
    href: "https://www.scrollinpanda.com/",
  },
  {
    src: "/project/eliteballondecor.png",
    alt: "Elite Decors — Balloon & Floral",
    category: "Event Decor",
    href: "https://www.eliteballondecor.com/",
  },
  {
    src: "/project/halpinghand.png",
    alt: "Helping Hands — Animal Welfare NGO",
    category: "Nonprofit",
    href: "https://www.helpinghandsfoundations.org/",
  },
  {
    src: "/project/gmresort.png",
    alt: "GM Resort — Premium Stay",
    category: "Hospitality",
    href: "https://gmresort.vercel.app/",
  },
  {
    src: "/project/dantel.png",
    alt: "Dantel — Creative Website",
    category: "Web Design",
    href: "https://dantel-delta.vercel.app/",
  },
  {
    src: "/project/relible.png",
    alt: "Reliable Diagnostics Centre",
    category: "Healthcare",
    href: "https://reliable-diagnostics-centre.vercel.app/",
  },
  {
    src: "/project/typewriter.png",
    alt: "Typewriter — Interactive Tool",
    category: "Web App",
    href: "https://typewriter-virid.vercel.app/",
  },
  {
    src: "/project/wish.png",
    alt: "Wish Card — Digital Greetings",
    category: "Greeting",
    href: "https://wish-devsamir.vercel.app/",
  },
  {
    src: "/project/meme.png",
    alt: "ZENVIQ Meme — Meme Generator",
    category: "Entertainment",
    href: "https://zenviq-meme.vercel.app/",
  },
  {
    src: "/project/zenviq-web-cloner.png",
    alt: "Zenviq Web Cloner — AI Website Cloner",
    category: "AI Tool",
    href: "https://zenviq-web-cloner.vercel.app/",
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const goNext = useCallback(
    () =>
      setLightbox((prev) =>
        prev !== null ? (prev + 1) % filteredProjects.length : null
      ),
    [filteredProjects.length]
  )
  const goPrev = useCallback(
    () =>
      setLightbox((prev) =>
        prev !== null
          ? (prev - 1 + filteredProjects.length) % filteredProjects.length
          : null
      ),
    [filteredProjects.length]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, closeLightbox, goNext, goPrev])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100">
              <Star className="w-4 h-4 fill-current" />
              Our Portfolio
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-1.5px" }}
            >
              Projects We&apos;ve{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Delivered
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto mb-8">
              Real websites built for real businesses — from local startups in Hanumangarh to brands across India.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setLightbox(null)
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/20"
                      : "bg-white text-slate-500 border-slate-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-indigo-100">
                    {/* Image */}
                    <button
                      onClick={() => setLightbox(i)}
                      className="relative w-full aspect-[16/10] overflow-hidden cursor-zoom-in block"
                    >
                      <Image
                        src={project.src}
                        alt={project.alt}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
                            <ZoomIn className="w-5 h-5 text-slate-900" />
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* Info */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight tracking-tight mb-3">
                        {project.alt}
                      </h3>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group/link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Visit Live Site
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "10+", label: "Industries Served" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-5 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredProjects[lightbox].src}
                alt={filteredProjects[lightbox].alt}
                width={1400}
                height={900}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent rounded-b-xl">
                <p className="text-white text-sm font-semibold text-center">
                  {filteredProjects[lightbox].alt}
                </p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <span className="text-white/40 text-xs">
                    {lightbox + 1} / {filteredProjects.length}
                  </span>
                  <a
                    href={filteredProjects[lightbox].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200 font-semibold"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
