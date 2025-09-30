import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileSearch, Sparkles, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const tools = [
  {
    icon: FileSearch,
    title: "SEO Checker",
    description: "Analyze your website SEO performance and get actionable insights.",
    href: "/tools/seo-checker",
  },
  {
    icon: Sparkles,
    title: "AI Content Generator",
    description: "Generate high-quality content for blogs, social media, and marketing.",
    href: "/tools/content-generator",
  },
  {
    icon: MessageSquare,
    title: "Meta Caption Tool",
    description: "Create engaging meta descriptions and social media captions instantly.",
    href: "/tools/meta-caption",
  },
]

export default function AITools() {
  return (
    <section id="ai-tools" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            AI-Powered <span className="text-primary">Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free tools to supercharge your digital marketing efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">{tool.description}</CardDescription>
                  <Button variant="ghost" asChild className="group-hover:text-primary">
                    <Link href={tool.href}>
                      Try Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
