import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog — Web Development, SEO & AI Insights | ZENVIQ Digital Hanumangarh",
  description: "Expert guides on web development, SEO strategies, AI automation & digital marketing for businesses in Hanumangarh, Rajasthan. Actionable tips by ZENVIQ Digital.",
  keywords: ["web development blog Hanumangarh", "SEO strategies Rajasthan", "AI trends 2026", "digital marketing tips India", "ZENVIQ blog"],
  alternates: {
    canonical: "https://www.zenviqdigital.in/blog",
  },
  openGraph: {
    title: "ZENVIQ Blog — Web Dev, SEO & AI Insights from Hanumangarh",
    description: "Expert guides and deep dives on web development, SEO, and AI automation for businesses across Rajasthan and India.",
    url: "https://www.zenviqdigital.in/blog",
  },
}

import { ArrowRight, Calendar, Clock, User, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import blogPosts from "@/content/blog-posts.json"
import Newsletter from "@/components/newsletter"

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100">
              <BookOpen className="w-4 h-4" />
              Insights & Resources
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-2px" }}
            >
              Master the Digital{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Landscape
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-8 leading-relaxed max-w-xl mx-auto">
              Simple, actionable guides on AI, Web Dev, and SEO designed to help your business scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-stripe-lg hover:border-indigo-200/60 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center min-h-[280px]">
                      <BookOpen className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full uppercase tracking-widest border border-white/40">
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      {new Date(featured.date).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    {featured.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{featured.author}</span>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                      Read article
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight"
                style={{ letterSpacing: "-0.5px" }}
              >
                Latest Articles
              </h2>
              <p className="text-slate-500 text-base">
                Deep dives and expert advice from the ZENVIQ team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(rest.length > 0 ? rest : blogPosts).map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-stripe-lg hover:-translate-y-1 hover:border-indigo-200/60"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/9]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-slate-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold bg-white/90 backdrop-blur-sm text-indigo-600 rounded-full uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-indigo-500" />
                        {new Date(post.date).toLocaleDateString([], { month: "short", day: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-indigo-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold text-slate-900 mb-2 leading-tight tracking-tight group-hover:text-indigo-600 transition-colors line-clamp-2"
                      style={{ letterSpacing: "-0.3px" }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center">
                          <User className="w-3.5 h-3.5 text-indigo-600" />
                        </div>
                        <span className="text-xs font-semibold text-slate-600">{post.author}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-45 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {blogPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">No articles yet</h3>
                <p className="text-sm text-slate-500">We&apos;re working on new content. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}