"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft, Wand2, Copy, Download, RefreshCw, FileText,
  MessageSquare, Megaphone, PenTool, Users, Target, Zap, CheckCircle2
} from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

interface ContentRequest {
  type: string
  topic: string
  keywords: string
  tone: string
  length: string
  targetAudience: string
  additionalInfo: string
}

interface GeneratedContent {
  title: string
  content: string
  metaDescription?: string
  hashtags?: string[]
  callToAction?: string
}

const contentTypes = [
  { id: "blog-post", name: "Blog Post", icon: FileText, description: "Long-form articles & blog posts" },
  { id: "social-media", name: "Social Media", icon: MessageSquare, description: "Facebook, Instagram, Twitter" },
  { id: "ad-copy", name: "Ad Copy", icon: Megaphone, description: "Marketing & advertising" },
  { id: "email", name: "Email", icon: PenTool, description: "Newsletters & campaigns" },
  { id: "product-description", name: "Product", icon: Target, description: "E-commerce descriptions" },
  { id: "landing-page", name: "Landing Page", icon: Users, description: "Website landing content" },
]

const tones = [
  "Professional", "Casual", "Friendly", "Authoritative", "Conversational",
  "Persuasive", "Educational", "Humorous", "Inspirational", "Technical",
]

const lengths = [
  "Short (50-100 words)",
  "Medium (100-300 words)",
  "Long (300-500 words)",
  "Very Long (500+ words)",
]

export default function ContentGeneratorPage() {
  const [selectedType, setSelectedType] = useState("blog-post")
  const [request, setRequest] = useState<ContentRequest>({
    type: "blog-post",
    topic: "",
    keywords: "",
    tone: "Professional",
    length: "Medium (100-300 words)",
    targetAudience: "",
    additionalInfo: "",
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const generateContent = async () => {
    if (!request.topic.trim()) {
      setError("Please enter a topic for your content")
      return
    }
    setIsGenerating(true)
    setError("")
    setGeneratedContent(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500))
      setGeneratedContent(generateMockContent(request))
    } catch {
      setError("Failed to generate content. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const generateMockContent = (req: ContentRequest): GeneratedContent => {
    const kws = req.keywords
      ? req.keywords.split(",").map((k) => `#${k.trim().replace(/\s+/g, "")}`)
      : [`#${req.topic.replace(/\s+/g, "")}`]

    const base: GeneratedContent = {
      title: `The Ultimate Guide to ${req.topic}`,
      content: `# ${req.topic}: Complete Guide for 2024\n\n**Target Keywords:** ${req.keywords || req.topic}\n\n## What is ${req.topic}?\n\n${req.topic} is an essential concept that plays a crucial role in modern business and technology. Understanding its fundamentals is key to success.\n\n## Benefits of ${req.topic}\n\n1. **Improved Efficiency**\n   - Streamlined processes\n   - Reduced costs\n   - Better resource utilization\n\n2. **Enhanced Performance**\n   - Faster results\n   - Higher quality outcomes\n   - Competitive advantage\n\n3. **Scalability**\n   - Growth potential\n   - Future-proof solutions\n   - Long-term success\n\n## How to Implement ${req.topic}\n\n### Step 1: Planning and Preparation\n- Define your objectives\n- Assess current situation\n- Set realistic goals\n\n### Step 2: Execution\n- Follow best practices\n- Monitor progress\n- Make adjustments as needed\n\n### Step 3: Optimization\n- Analyze results\n- Identify improvements\n- Scale successful strategies\n\n## Common Challenges and Solutions\n\n**Challenge 1:** Initial implementation complexity  \n**Solution:** Start with basics and gradually expand\n\n**Challenge 2:** Resource constraints  \n**Solution:** Prioritize high-impact activities\n\n**Challenge 3:** Measuring success  \n**Solution:** Define clear metrics and KPIs\n\n## Conclusion\n\n${req.topic} offers significant opportunities for growth and improvement. By following the strategies outlined in this guide, you can achieve your goals and drive success.\n\n**Next Steps:**\n- Evaluate your current situation\n- Develop an implementation plan\n- Start with small, manageable steps\n- Monitor and adjust as needed${req.additionalInfo ? `\n\n## Additional Notes\n\n*${req.additionalInfo}*` : ""}`,
      metaDescription: `Learn everything about ${req.topic}. Discover best practices, benefits, and step-by-step implementation strategies for 2024.`,
      hashtags: kws,
      callToAction: `Ready to get started with ${req.topic}? Contact us today for expert assistance!`,
    }

    switch (req.type) {
      case "social-media":
        return {
          title: `${req.topic} — Quick Tips`,
          content: `🚀 **Excited to share insights about ${req.topic}!**\n\n✨ **Key points to remember:**\n\n- 🎯 Focus on your goals\n- 🔄 Stay consistent\n- 📊 Measure results\n\n${req.tone === "Humorous" ? "😄 *Remember, Rome wasn't built in a day — but they were laying bricks every hour!*" : "*Ready to take action? Let's go! 💪*"}\n\n---\n\n${kws.join(" ")}`,
          hashtags: kws,
          callToAction: "What's your experience with this? Share in the comments! 👇",
        }

      case "ad-copy":
        return {
          title: `Transform Your Business with ${req.topic}`,
          content: `## 🎯 Stop Struggling with ${req.topic}\n\n**Get instant, proven results — starting today.**\n\n### Why Choose Us?\n\n✅ **Expert Guidance** — Certified professionals by your side  \n✅ **Proven Results** — Trusted by 10,000+ businesses  \n✅ **24/7 Support** — We're always here for you  \n✅ **Money-Back Guarantee** — Zero risk, all reward\n\n---\n\n> *"This completely transformed our workflow. ROI in the first month!"* — Sarah M., CEO\n\n### 🔥 Limited Time Offer\n\n*Join thousands of satisfied customers. Your competition isn't waiting — neither should you.*`,
          callToAction: "👉 Start Your Free Trial — No Credit Card Required",
        }

      case "email":
        return {
          title: `Your Weekly Insight: ${req.topic}`,
          content: `**Hi there!**\n\nI hope this message finds you well. This week, I wanted to share some *exciting developments* in **${req.topic}** that I think you'll find incredibly valuable.\n\n---\n\n## 📰 What's New in ${req.topic}\n\nHere are the key highlights from this week:\n\n- **🔥 Trending:** Latest insights shaping the industry\n- **💡 Expert Tips:** Best practices from thought leaders\n- **📈 Case Studies:** Real-world success stories\n\n---\n\n## ✅ Your Action Items\n\n1. Review the latest trends\n2. Implement one new strategy this week\n3. Track your progress and share results\n\n---\n\n*Don't miss our upcoming webinar — register now and level up!*\n\n**Best regards,**  \n*The ZENVIQ Team*`,
          callToAction: "Reply with your questions — we read every email!",
        }

      case "product-description":
        return {
          title: `Premium ${req.topic} Solution`,
          content: `## 🚀 Introducing Our ${req.topic} Platform\n\n*Designed for modern businesses that demand results.*\n\n---\n\n### ✨ Key Features\n\n| Feature | Benefit |\n|---|---|\n| **AI-Powered** | Smarter decisions, faster results |\n| **Easy Setup** | Live in under 10 minutes |\n| **Cloud-Based** | Access from anywhere, anytime |\n| **24/7 Support** | Never left in the dark |\n\n---\n\n### 🏆 Who Is This For?\n\n- 🧑‍💼 **Business Owners** — Scale without the headache\n- 📣 **Marketers** — Drive campaigns that convert\n- 🛍️ **E-commerce Brands** — Sell smarter, not harder\n- 🎨 **Creators** — Focus on creativity, we handle the rest\n\n---\n\n> ⭐⭐⭐⭐⭐ *"Best investment we've made this year!"* — John D.  \n> ⭐⭐⭐⭐⭐ *"Results within the first week!"* — Priya S.\n\n---\n\n*Starting at just **$29/month** — cancel anytime.*`,
          callToAction: "🛒 Order Now & Get 30% Off Your First Month",
        }

      case "landing-page":
        return {
          title: `${req.topic} — Your Success Starts Here`,
          content: `# Transform Your Business with ${req.topic}\n\n*Join 10,000+ businesses already seeing results.*\n\n---\n\n## 😤 The Problem\n\nAre you struggling with ${req.topic}? Most businesses lose **time, money, and opportunities** because they don't have the right system in place.\n\n---\n\n## ✅ The Solution\n\nOur **${req.topic} platform** is purpose-built to solve these challenges:\n\n- 🚀 **Increase Efficiency** — Cut wasted time by 60%\n- 📈 **Boost Revenue** — See measurable growth in 30 days\n- 💰 **Save Costs** — Reduce operational overhead instantly\n- 📡 **Scale Faster** — Built to grow with your business\n\n---\n\n## ⚙️ How It Works\n\n**Step 1 — Sign Up**  \nGet started in under 5 minutes, no tech skills required.\n\n**Step 2 — Configure**  \nCustomize everything to match your business workflow.\n\n**Step 3 — Launch & Grow**  \nDeploy and start seeing results from day one.\n\n---\n\n## 💬 What Our Customers Say\n\n> *"This platform changed everything for our team. 300% improvement in results!"*  \n> **— Rohan K., Founder, TechStartup**\n\n---\n\n## 💳 Pricing\n\n| Plan | Price | Best For |\n|---|---|---|\n| **Starter** | $29/mo | Small businesses |\n| **Professional** | $79/mo | Growing companies |\n| **Enterprise** | $199/mo | Large organizations |\n\n*All plans include a **14-day free trial** — no credit card required.*`,
          callToAction: "🚀 Start Your Free Trial Today — No Credit Card Required",
        }

      default:
        return base
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error("Failed to copy")
    }
  }

  const downloadContent = () => {
    if (!generatedContent) return
    const text = [
      `Title: ${generatedContent.title}`,
      "",
      generatedContent.content,
      generatedContent.metaDescription ? `\nMeta Description: ${generatedContent.metaDescription}` : "",
      generatedContent.hashtags ? `\nHashtags: ${generatedContent.hashtags.join(" ")}` : "",
      generatedContent.callToAction ? `\nCall to Action: ${generatedContent.callToAction}` : "",
    ].join("\n")

    const blob = new Blob([text], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${request.topic.replace(/\s+/g, "_")}_content.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <Wand2 className="w-3.5 h-3.5" />
              AI-Powered Tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI Content Generator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create high-quality, engaging content for any platform — beautifully formatted and ready to publish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left Panel: Input ── */}
          <div className="space-y-6">

            {/* Content Type */}
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Wand2 className="w-5 h-5 text-primary" />
                  Content Type
                </CardTitle>
                <CardDescription>Choose the format you want to generate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {contentTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => {
                          setSelectedType(type.id)
                          setRequest((prev) => ({ ...prev, type: type.id }))
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 text-left group ${
                          selectedType === type.id
                            ? "border-primary bg-primary/10 shadow-sm shadow-primary/20"
                            : "border-border/50 hover:border-primary/40 hover:bg-muted/40"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-2 ${selectedType === type.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} />
                        <div className="font-semibold text-sm">{type.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{type.description}</div>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Parameters */}
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-lg">Content Parameters</CardTitle>
                <CardDescription>Customize your content settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Topic / Subject <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="e.g., Digital Marketing Strategies"
                    value={request.topic}
                    onChange={(e) => setRequest((prev) => ({ ...prev, topic: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Keywords <span className="text-muted-foreground text-xs">(comma-separated)</span></label>
                  <Input
                    placeholder="e.g., SEO, content marketing, social media"
                    value={request.keywords}
                    onChange={(e) => setRequest((prev) => ({ ...prev, keywords: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tone</label>
                    <select
                      className="w-full p-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      value={request.tone}
                      onChange={(e) => setRequest((prev) => ({ ...prev, tone: e.target.value }))}
                    >
                      {tones.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Length</label>
                    <select
                      className="w-full p-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      value={request.length}
                      onChange={(e) => setRequest((prev) => ({ ...prev, length: e.target.value }))}
                    >
                      {lengths.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <Input
                    placeholder="e.g., Small business owners, Marketing professionals"
                    value={request.targetAudience}
                    onChange={(e) => setRequest((prev) => ({ ...prev, targetAudience: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <Textarea
                    placeholder="Any specific requirements, examples, or context..."
                    value={request.additionalInfo}
                    onChange={(e) => setRequest((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                    rows={3}
                  />
                </div>

                <Button
                  onClick={generateContent}
                  disabled={isGenerating || !request.topic.trim()}
                  className="w-full h-11 font-semibold text-base"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 w-4 h-4 animate-spin" />
                      Generating Content...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 w-4 h-4" />
                      Generate Content
                    </>
                  )}
                </Button>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              </CardContent>
            </Card>
          </div>

          {/* ── Right Panel: Output ── */}
          <div>
            {generatedContent ? (
              <Card className="border-border/60 overflow-hidden">
                <CardHeader className="border-b border-border/50 bg-muted/30">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      Generated Content
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs"
                        onClick={() => copyToClipboard(generatedContent.content)}
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1.5 text-xs" onClick={downloadContent}>
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1.5 text-xs" onClick={generateContent}>
                        <RefreshCw className="w-3.5 h-3.5" />
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                  {/* Title */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">Title</span>
                    <p className="text-xl font-bold text-foreground">{generatedContent.title}</p>
                  </div>

                  {/* Markdown Content */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">Content</span>
                    <div className="
                      rounded-xl border border-border/50 bg-muted/20 p-5
                      prose prose-sm max-w-none dark:prose-invert
                      prose-headings:font-bold prose-headings:text-foreground
                      prose-h1:text-2xl prose-h1:mb-4 prose-h1:mt-0
                      prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-1
                      prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-2
                      prose-strong:text-foreground prose-strong:font-semibold
                      prose-em:text-muted-foreground prose-em:italic
                      prose-ul:my-3 prose-li:text-muted-foreground prose-li:marker:text-primary
                      prose-ol:my-3 prose-ol:list-decimal
                      prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:pr-4
                      prose-table:text-sm prose-th:text-foreground prose-th:font-semibold prose-td:text-muted-foreground
                      prose-hr:border-border/40
                    ">
                      <ReactMarkdown>{generatedContent.content}</ReactMarkdown>
                    </div>
                  </div>

                  {/* Meta Description */}
                  {generatedContent.metaDescription && (
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">SEO Meta Description</span>
                      <p className="text-sm text-muted-foreground bg-muted/30 rounded-lg px-4 py-3 border border-border/40 leading-relaxed">
                        {generatedContent.metaDescription}
                      </p>
                    </div>
                  )}

                  {/* Hashtags */}
                  {generatedContent.hashtags && (
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">Hashtags</span>
                      <div className="flex flex-wrap gap-2">
                        {generatedContent.hashtags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  {generatedContent.callToAction && (
                    <div className="rounded-xl bg-gradient-to-r from-primary/10 via-violet-500/10 to-blue-500/10 border border-primary/20 px-5 py-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 block mb-1">Call to Action</span>
                      <p className="text-sm font-semibold text-foreground">{generatedContent.callToAction}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-border/60">
                <CardContent className="flex items-center justify-center h-[520px]">
                  <div className="text-center space-y-4 text-muted-foreground">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Wand2 className="w-8 h-8 text-primary opacity-60" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Your AI-generated content</p>
                      <p className="text-sm mt-1">Fill in the parameters on the left and click <strong>"Generate Content"</strong></p>
                    </div>
                    <div className="flex flex-col gap-2 text-xs max-w-xs mx-auto text-left">
                      {["Properly formatted headings & paragraphs", "Bold & italic text for emphasis", "Lists, tables & blockquotes", "SEO meta description & hashtags"].map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Bottom CTA */}
            {generatedContent && (
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/#contact">Get Professional Content Help</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setGeneratedContent(null)
                    setRequest((prev) => ({ ...prev, topic: "", keywords: "", additionalInfo: "" }))
                  }}
                >
                  Generate New Content
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
