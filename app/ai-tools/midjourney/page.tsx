import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Palette, Sparkles, Layers, Wand2, TrendingUp, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Midjourney AI — Review, Features & Pricing",
  description: "Explore Midjourney — the leading AI image generation tool for creating stunning visual content from text prompts. Features, pricing, and use cases.",
}

export default function MidjourneyPage() {
  const features = [
    { icon: Palette, title: "Artistic Excellence", description: "Generate stunning, high-quality artistic images with unmatched aesthetic quality and style variety." },
    { icon: Sparkles, title: "v6 Model", description: "Latest v6 model delivers photorealistic quality, improved text rendering, and advanced prompt understanding." },
    { icon: Layers, title: "Style Control", description: "Fine-tune styles with --stylize, --chaos, and aspect ratio controls for precise creative output." },
    { icon: Wand2, title: "Vary & Upscale", description: "Iterate on generated images with variations, pan, zoom, and high-resolution upscaling." },
  ]

  const pricingPlans = [
    {
      name: "Basic Plan", price: "$10/month", description: "For casual creators and hobbyists", popular: false,
      features: ["~200 generations/month", "3 concurrent fast jobs", "General commercial terms", "Access to member gallery"],
    },
    {
      name: "Standard Plan", price: "$30/month", description: "For regular creators and professionals", popular: true,
      features: ["15h fast generations", "Unlimited relaxed generations", "3 concurrent fast jobs", "Stealth mode", "General commercial terms"],
    },
  ]

  const useCases = [
    { category: "Marketing", examples: ["Social media visuals", "Ad campaign imagery", "Brand identity exploration", "Product mockup concepts"] },
    { category: "Art & Design", examples: ["Concept art creation", "Character design", "Architectural visualization", "Fashion design ideation"] },
    { category: "Content", examples: ["Blog post illustrations", "Book cover design", "YouTube thumbnails", "Presentation graphics"] },
    { category: "Game Dev", examples: ["Environment concept art", "Character sprites", "UI element design", "World building visuals"] },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 md:pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/ai-tools" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to AI Tools</Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <Image src="/logos/midjourney-logo-icon_1731359952.webp" alt="Midjourney logo" width={80} height={80} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Midjourney</h1>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-600 text-white">v6</Badge>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-medium">4.9</span></div>
                      <Badge variant="secondary">artistic</Badge>
                      <Badge variant="outline">Premium</Badge>
                    </div>
                    <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700"><a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Try Now <ExternalLink className="ml-2 w-4 h-4" /></a></Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">Midjourney creates high-quality artistic images from text descriptions with advanced AI algorithms.</p>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Midjourney?</h2>
                  <p className="text-gray-600 leading-relaxed">Midjourney is a leading AI image generation tool that creates stunning artwork and visual content from text prompts. It&apos;s known for its artistic capabilities, photorealistic output, and high-quality aesthetics that set the standard in AI-generated art.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Tool Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between"><span className="text-gray-600">Rating</span><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="font-medium">4.9</span></div></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Views</span><span className="font-medium">156,000</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Status</span><div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /><span className="font-medium text-green-600">Verified</span></div></div>
                    </div>
                  </div>
                  <div>
                    <Button size="sm" asChild className="w-full bg-purple-600 hover:bg-purple-700"><a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Visit Official Website</a></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"><Icon className="w-6 h-6 text-purple-600" /></div><CardTitle className="text-xl">{f.title}</CardTitle></div></CardHeader><CardContent><CardDescription className="text-base leading-relaxed">{f.description}</CardDescription></CardContent></Card>)})}</div>
      </div></div></section>

      <section id="pricing" className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{pricingPlans.map((plan, i) => (<Card key={i} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-purple-500 shadow-lg' : ''}`}>{plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><Badge className="bg-purple-500 text-white">Most Popular</Badge></div>}<CardHeader className="text-center"><CardTitle className="text-2xl">{plan.name}</CardTitle><div className="text-3xl font-bold text-purple-600">{plan.price}</div><CardDescription className="text-base">{plan.description}</CardDescription></CardHeader><CardContent><ul className="space-y-3">{plan.features.map((f, j) => (<li key={j} className="flex items-center gap-3"><Check className="w-5 h-5 text-purple-500 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>))}</ul><Button className={`w-full mt-6 ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`} variant={plan.popular ? 'default' : 'outline'} asChild><a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Get Started</a></Button></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{useCases.map((c, i) => (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><CardTitle className="text-xl flex items-center gap-2"><TrendingUp className="w-5 h-5 text-purple-600" />{c.category}</CardTitle></CardHeader><CardContent><ul className="space-y-2">{c.examples.map((e, j) => (<li key={j} className="flex items-center gap-2 text-gray-700"><Check className="w-4 h-4 text-purple-500 flex-shrink-0" />{e}</li>))}</ul></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create with Midjourney?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">Start generating stunning AI artwork today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100"><a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">Get Started <ExternalLink className="ml-2 w-5 h-5" /></a></Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600"><Link href="/ai-tools">Explore More AI Tools</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
