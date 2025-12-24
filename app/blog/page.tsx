import { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Stay ahead of the curve with Zenviq's latest insights on AI trends, modern web development, and actionable SEO strategies for 2025.",
  keywords: ["AI trends 2025", "web development blog", "SEO strategies", "digital agency insights"],
  openGraph: {
    title: "Zenviq Blog | Master the Digital Landscape",
    description: "Expert advice and deep dives into the technologies driving the future of business and web development.",
  }
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, User, BookOpen, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import blogPosts from "@/content/blog-posts.json"
import Newsletter from "@/components/newsletter"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* 
        NOTE: Header and Footer are provided globally in app/layout.tsx. 
        Removing them here prevents runtime evaluation errors (TypeError).
      */}

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/10 dark:to-purple-900/10 border-b border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <BookOpen className="w-4 h-4" />
              Insights & Resources
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
              Master the digital <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent underline decoration-indigo-200/50">landscape</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Simple, actionable guides on AI, Web Dev, and SEO designed to help your business scale faster.
            </p>

            {/* Search Bar - Visual Component */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all shadow-sm"
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto h-[60px] rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 shadow-lg shadow-indigo-600/10 transition-all hover:scale-105 active:scale-95">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                Deep dives and expert advice from the Zenviq design and engineering teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {blogPosts.length > 0 ? (
                blogPosts.map((post: any) => (
                  <Card key={post.id} className="group flex flex-col h-full hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden ring-1 ring-slate-100 dark:ring-slate-700 shadow-sm shadow-slate-200/50">
                    <div className="relative overflow-hidden aspect-[16/9] w-full">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-indigo-50 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-slate-300" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 text-xs font-bold bg-white/90 backdrop-blur-md text-indigo-600 rounded-full shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader className="flex-1 p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                          {new Date(post.date).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-indigo-500" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2 tracking-tight">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base line-clamp-3 font-medium">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                      <div className="pt-6 border-t border-slate-50 dark:border-slate-700/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                            <User className="w-4 h-4 text-indigo-600" />
                          </div>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all transform hover:rotate-[-45deg] group-hover:bg-indigo-600 group-hover:text-white"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                  <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <BookOpen className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">We're currently working on new content. Please check back later!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  )
}