import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, ImageIcon, Sparkles, Shield, Zap, TrendingUp, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DALL-E 3 — Review, Features & Pricing",
  description: "Explore DALL-E 3 — OpenAI's image generator integrated with ChatGPT. Create stunning images from text descriptions with safety features and commercial usage rights.",
}

export default function DallEPage() {
  const features = [
    { icon: ImageIcon, title: "Text-to-Image", description: "Generate highly detailed images from natural language descriptions with industry-leading prompt understanding." },
    { icon: Sparkles, title: "ChatGPT Integration", description: "Seamlessly create and refine images directly within ChatGPT conversations for iterative design." },
    { icon: Shield, title: "Safety Features", description: "Built-in content safety measures and content policy compliance to prevent misuse." },
    { icon: Zap, title: "Commercial Rights", description: "Full commercial usage rights for all generated images — use them for business without restrictions." },
  ]

  const pricingPlans = [
    {
      name: "ChatGPT Plus", price: "$20/month", description: "Access via ChatGPT Plus subscription", popular: true,
      features: ["DALL-E 3 integration in ChatGPT", "GPT-4 access included", "Natural language prompting", "Image editing capabilities", "Commercial usage rights", "Priority access"],
    },
    {
      name: "API Access", price: "Pay per image", description: "For developers and businesses", popular: false,
      features: ["$0.040 per image (1024×1024)", "$0.080 per image (1024×1792)", "Bulk generation support", "API integration", "Commercial usage rights"],
    },
  ]

  const useCases = [
    { category: "Marketing", examples: ["Ad creative generation", "Social media visuals", "Product photography alternatives", "Brand asset creation"] },
    { category: "Design", examples: ["Logo concept exploration", "Website hero images", "Illustration creation", "Mockup generation"] },
    { category: "Education", examples: ["Visual learning materials", "Scientific illustrations", "Historical scene recreation", "Diagram generation"] },
    { category: "E-commerce", examples: ["Product lifestyle shots", "Category banner images", "Seasonal campaign visuals", "A/B test image variants"] },
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
                    <Image src="/logos/dalle-3.png" alt="DALL-E 3 logo" width={80} height={80} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">DALL-E 3</h1>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-emerald-600 text-white">DALL-E 3</Badge>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-medium">4.5</span></div>
                      <Badge variant="secondary">integration</Badge>
                      <Badge variant="outline">Premium</Badge>
                    </div>
                    <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700"><a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">Try Now <ExternalLink className="ml-2 w-4 h-4" /></a></Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">DALL-E 3 generates images from text descriptions with safety measures and commercial usage rights.</p>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is DALL-E 3?</h2>
                  <p className="text-gray-600 leading-relaxed">DALL-E 3 is OpenAI&apos;s latest image generation model, integrated with ChatGPT for seamless access. It creates high-quality images from text descriptions with built-in safety measures and full commercial usage rights, making it ideal for business and creative applications.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Tool Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between"><span className="text-gray-600">Rating</span><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="font-medium">4.5</span></div></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Views</span><span className="font-medium">92,000</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Status</span><div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /><span className="font-medium text-green-600">Verified</span></div></div>
                    </div>
                  </div>
                  <Button size="sm" asChild className="w-full bg-emerald-600 hover:bg-emerald-700"><a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">Visit Official Website</a></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"><Icon className="w-6 h-6 text-emerald-600" /></div><CardTitle className="text-xl">{f.title}</CardTitle></div></CardHeader><CardContent><CardDescription className="text-base leading-relaxed">{f.description}</CardDescription></CardContent></Card>)})}</div>
      </div></div></section>

      <section id="pricing" className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{pricingPlans.map((plan, i) => (<Card key={i} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-emerald-500 shadow-lg' : ''}`}>{plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><Badge className="bg-emerald-500 text-white">Recommended</Badge></div>}<CardHeader className="text-center"><CardTitle className="text-2xl">{plan.name}</CardTitle><div className="text-3xl font-bold text-emerald-600">{plan.price}</div><CardDescription className="text-base">{plan.description}</CardDescription></CardHeader><CardContent><ul className="space-y-3">{plan.features.map((f, j) => (<li key={j} className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-500 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>))}</ul><Button className={`w-full mt-6 ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`} variant={plan.popular ? 'default' : 'outline'} asChild><a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">Get Started</a></Button></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{useCases.map((c, i) => (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><CardTitle className="text-xl flex items-center gap-2"><TrendingUp className="w-5 h-5 text-emerald-600" />{c.category}</CardTitle></CardHeader><CardContent><ul className="space-y-2">{c.examples.map((e, j) => (<li key={j} className="flex items-center gap-2 text-gray-700"><Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />{e}</li>))}</ul></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Create with DALL-E 3?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">Generate professional images from text — no design skills needed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-emerald-600 hover:bg-gray-100"><a href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">Start Creating <ExternalLink className="ml-2 w-5 h-5" /></a></Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-emerald-600"><Link href="/ai-tools">Explore More AI Tools</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
