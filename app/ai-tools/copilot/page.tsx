import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Code, Zap, Terminal, GitBranch, TrendingUp, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GitHub Copilot — Review, Features & Pricing",
  description: "Explore GitHub Copilot — AI pair programmer that helps you write code faster. Features, pricing, IDE support, and use cases.",
}

export default function CopilotPage() {
  const features = [
    { icon: Code, title: "Code Completion", description: "Get intelligent, context-aware code suggestions as you type — complete functions, classes, and entire modules." },
    { icon: Terminal, title: "Multi-Language", description: "Works with Python, JavaScript, TypeScript, Go, Ruby, Java, C++, and dozens more programming languages." },
    { icon: GitBranch, title: "IDE Integration", description: "Native integration with VS Code, JetBrains IDEs, Neovim, and Visual Studio for seamless workflow." },
    { icon: Zap, title: "Copilot Chat", description: "Ask questions about your codebase, get explanations, refactor code, and generate tests via natural language." },
  ]

  const pricingPlans = [
    {
      name: "Individual", price: "$10/month", description: "For individual developers", popular: false,
      features: ["Code completions", "Copilot Chat", "Multi-IDE support", "30-day free trial", "Public code filter"],
    },
    {
      name: "Business", price: "$19/user/month", description: "For teams and organizations", popular: true,
      features: ["Everything in Individual", "Organization-wide management", "IP indemnity", "Enterprise-grade security", "Policy controls", "Usage analytics"],
    },
  ]

  const useCases = [
    { category: "Development", examples: ["Rapid prototyping", "Boilerplate code generation", "API integration scaffolding", "Test case generation"] },
    { category: "Learning", examples: ["Understanding new codebases", "Learning new languages", "Algorithm explanation", "Best practice suggestions"] },
    { category: "Refactoring", examples: ["Code optimization", "Pattern modernization", "Bug fix suggestions", "Performance improvements"] },
    { category: "Documentation", examples: ["Inline documentation", "README generation", "API docs writing", "Code commenting"] },
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
                    <Image src="/logos/github-copilot.webp" alt="GitHub Copilot logo" width={80} height={80} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">GitHub Copilot</h1>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-gray-900 text-white">Copilot X</Badge>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="text-sm font-medium">4.3</span></div>
                      <Badge variant="secondary">coding</Badge>
                      <Badge variant="outline">Freemium</Badge>
                    </div>
                    <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800"><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Try Now <ExternalLink className="ml-2 w-4 h-4" /></a></Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">GitHub Copilot provides intelligent code suggestions and completions in your IDE.</p>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What is GitHub Copilot?</h2>
                  <p className="text-gray-600 leading-relaxed">GitHub Copilot is an AI pair programmer that helps you write code faster and with fewer errors. Powered by OpenAI Codex, it provides intelligent code suggestions and completions directly in your IDE, understanding context from comments, function names, and surrounding code.</p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Tool Overview</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between"><span className="text-gray-600">Rating</span><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /><span className="font-medium">4.3</span></div></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Views</span><span className="font-medium">78,000</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Status</span><div className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /><span className="font-medium text-green-600">Verified</span></div></div>
                    </div>
                  </div>
                  <Button size="sm" asChild className="w-full bg-gray-900 hover:bg-gray-800"><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Visit Official Website</a></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((f, i) => { const Icon = f.icon; return (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><div className="flex items-center gap-3 mb-3"><div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"><Icon className="w-6 h-6 text-gray-900" /></div><CardTitle className="text-xl">{f.title}</CardTitle></div></CardHeader><CardContent><CardDescription className="text-base leading-relaxed">{f.description}</CardDescription></CardContent></Card>)})}</div>
      </div></div></section>

      <section id="pricing" className="py-20 bg-gray-50"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{pricingPlans.map((plan, i) => (<Card key={i} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-gray-900 shadow-lg' : ''}`}>{plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><Badge className="bg-gray-900 text-white">Most Popular</Badge></div>}<CardHeader className="text-center"><CardTitle className="text-2xl">{plan.name}</CardTitle><div className="text-3xl font-bold text-gray-900">{plan.price}</div><CardDescription className="text-base">{plan.description}</CardDescription></CardHeader><CardContent><ul className="space-y-3">{plan.features.map((f, j) => (<li key={j} className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>))}</ul><Button className={`w-full mt-6 ${plan.popular ? 'bg-gray-900 hover:bg-gray-800' : ''}`} variant={plan.popular ? 'default' : 'outline'} asChild><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Get Started</a></Button></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{useCases.map((c, i) => (<Card key={i} className="hover:shadow-lg transition-all duration-300"><CardHeader><CardTitle className="text-xl flex items-center gap-2"><TrendingUp className="w-5 h-5 text-gray-900" />{c.category}</CardTitle></CardHeader><CardContent><ul className="space-y-2">{c.examples.map((e, j) => (<li key={j} className="flex items-center gap-2 text-gray-700"><Check className="w-4 h-4 text-green-500 flex-shrink-0" />{e}</li>))}</ul></CardContent></Card>))}</div>
      </div></div></section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Code with Copilot?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Ship code 55% faster with AI-powered code completions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-gray-900 hover:bg-gray-100"><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">Start Free Trial <ExternalLink className="ml-2 w-5 h-5" /></a></Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-900"><Link href="/ai-tools">Explore More AI Tools</Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
