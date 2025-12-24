import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import JsonLd from "@/components/json-ld"

// Use require for JSON to avoidmoduleId is not a function errors in some Next.js 15 Webpack environments
const getBlogPosts = () => {
  try {
    return require("@/content/blog-posts-full.json")
  } catch (e) {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p: any) => p.slug === slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.content?.replace(/<[^>]*>/g, "").substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      type: "article",
      publishedTime: post.date,
      authors: ["Zenviq"],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content?.replace(/<[^>]*>/g, "").substring(0, 160),
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p: any) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [`https://zenviq.com${post.image}`],
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Zenviq",
      "url": "https://zenviq.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zenviq",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zenviq.com/logo.svg"
      }
    },
    "description": post.excerpt || post.content?.replace(/<[^>]*>/g, "").substring(0, 160)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 px-4">
      <JsonLd data={articleSchema} />
      {/* Header and Footer are provided by the RootLayout */}

      <article className="pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-sm font-bold rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div
              className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: post.content || `<p>Content coming soon...</p>` }}
            />
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-[2.5rem] border border-indigo-100 dark:border-indigo-800 shadow-xl shadow-indigo-500/5">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
              Ready to scale your business?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 font-medium text-lg">
              Our team at Zenviq specializes in implementing these strategies to drive real results. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700 h-14 rounded-2xl px-10 font-bold text-white shadow-lg shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95">
                <Link href="/contact">
                  Get Free Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 rounded-2xl px-10 border-indigo-200 text-indigo-600 font-bold hover:bg-white hover:text-indigo-700 transition-all hover:scale-105 active:scale-95">
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
