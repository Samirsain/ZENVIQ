import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Brain, Globe, Zap, ImageIcon, TrendingUp, ExternalLink, ArrowLeft, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Gemini AI — Review, Features & Pricing",
  description: "Explore Google Gemini AI — Google's multimodal AI model for text, images, and more. Features, pricing, use cases, and comparison.",
}

export default function GeminiPage() {
  const features = [
    { icon: Globe, title: "Multimodal Understanding", description: "Process and understand text, images, audio, and video in a single conversation." },
    { icon: Brain, title: "Advanced Reasoning", description: "Solve complex problems with step-by-step reasoning and logical analysis." },
    { icon: Zap, title: "Google Integration", description: "Seamlessly integrates with Google Workspace, Search, and other Google services." },
    { icon: ImageIcon, title: "Image Generation", description: "Create and edit images directly within conversations using Imagen technology." },
  ]

  const pricingPlans = [
    {
      name: "Free Tier", price: "Free", description: "Access to Gemini with basic features", popular: false,
      features: ["Gemini 1.5 Flash access", "Standard response times", "Google ecosystem integration", "Basic multimodal capabilities"],
    },
    {
      name: "Gemini Advanced", price: "$19.99/month", description: "Premium access with Gemini Ultra", popular: true,
      features: ["Gemini 1.5 Pro access", "Priority access", "2TB Google One storage", "Advanced data analysis", "Extended context window", "Google Workspace integration"],
    },
  ]

  const useCases = [
    { category: "Research", examples: ["Academic paper analysis", "Data synthesis and summarization", "Fact-checking with Google Search", "Literature review assistance"] },
    { category: "Creative", examples: ["Multimodal content creation", "Image analysis and description", "Story and script writing", "Design concept ideation"] },
    { category: "Productivity", examples: ["Gmail drafting assistance", "Google Docs collaboration", "Meeting summarization", "Calendar management"] },
    { category: "Development", examples: ["Code generation & debugging", "API documentation", "Android app development", "Cloud architecture planning"] },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 md:pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/ai-tools" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to AI Tools
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <Image src="/logos/gemini logo.webp" alt="Google Gemini logo" width={80} height={80} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Google Gemini</h1>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-600 text-white">Gemini Pro</Badge>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-medium">4.6</span></div>
                      <Badge variant="secondary">multimodal</Badge>
                      <Badge variant="outline">Free</Badge>
                    </div>
                    <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                      <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Try Now <ExternalLink className="ml-2 w-4 h-4" /></a>
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">Google Gemini integrates with Google ecosystem and provides real-time information with multimodal capabilities.</p>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Google Gemini?</h2>
                  <p className="text-gray-600 leading-relaxed">Google Gemini is Google&apos;s most capable AI model, designed to handle text, images, and other modalities. It&apos;s integrated with Google&apos;s ecosystem and provides access to real-time information, making it uniquely powerful for research, productivity, and creative tasks.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Tool Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between"><span className="text-gray-600">Rating</span><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="font-medium">4.6</span></div></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Views</span><span className="font-medium">87,000</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Status</span><div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /><span className="font-medium text-green-600">Verified</span></div></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <Button size="sm" asChild className="w-full bg-blue-600 hover:bg-blue-700"><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Visit Official Website</a></Button>
                      <Link href="/ai-tools" className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">Related Tools</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2><p className="text-lg text-gray-600">Discover what makes Google Gemini a powerful AI assistant</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => { const Icon = feature.icon; return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300"><CardHeader><div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><Icon className="w-6 h-6 text-blue-600" /></div><CardTitle className="text-xl">{feature.title}</CardTitle></div></CardHeader><CardContent><CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription></CardContent></Card>
            )})}
          </div>
        </div></div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2><p className="text-lg text-gray-600">Choose the plan that fits your needs</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><Badge className="bg-blue-500 text-white">Most Popular</Badge></div>}
                <CardHeader className="text-center"><CardTitle className="text-2xl">{plan.name}</CardTitle><div className="text-3xl font-bold text-blue-600">{plan.price}</div><CardDescription className="text-base">{plan.description}</CardDescription></CardHeader>
                <CardContent><ul className="space-y-3">{plan.features.map((feature, i) => (<li key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-blue-500 flex-shrink-0" /><span className="text-gray-700">{feature}</span></li>))}</ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.popular ? 'default' : 'outline'} asChild><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">{plan.price === 'Free' ? 'Start Free' : 'Upgrade Now'}</a></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2><p className="text-lg text-gray-600">How professionals use Google Gemini</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300"><CardHeader><CardTitle className="text-xl flex items-center gap-2"><TrendingUp className="w-5 h-5 text-blue-600" />{category.category}</CardTitle></CardHeader>
                <CardContent><ul className="space-y-2">{category.examples.map((example, i) => (<li key={i} className="flex items-center gap-2 text-gray-700"><Check className="w-4 h-4 text-blue-500 flex-shrink-0" />{example}</li>))}</ul></CardContent></Card>
            ))}
          </div>
        </div></div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Gemini?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Join millions of users leveraging Google&apos;s most powerful AI model.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100"><a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Start Free <ExternalLink className="ml-2 w-5 h-5" /></a></Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600"><Link href="/ai-tools">Explore More AI Tools</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
