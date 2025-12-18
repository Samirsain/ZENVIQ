"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Star, Zap, Target, Users, Globe, Smartphone, BarChart3, Palette, Code, Megaphone, Search, MessageSquare, Camera, PenTool, Settings, Shield, Clock, Award, ShoppingCart, Brain, Rocket, Sparkles, Database, Laptop } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "wordpress",
    category: "Modern Web",
    icon: Globe,
    title: "WordPress Development",
    description: "Expert WordPress solutions from custom themes to complex enterprise plugins.",
    detailedDescription: "With over 8 years of specialized WordPress experience, we dont just build websites; we build performance engines. From high-traffic news portals to intricate membership sites, our WordPress solutions are secure, scalable, and easy for your team to manage.",
    whyChooseUs: [
      "Custom-coded themes (No bloated builders)",
      "Enterprise-grade security hardening",
      "Core Web Vitals optimized out of the box",
      "Seamless integration with 3rd party APIs"
    ],
    techStack: ["PHP", "Next.js (Headless)", "WP-CLI", "React", "MySQL"],
    features: ["Custom Theme Dev", "Plugin Customization", "Speed Optimization", "Secure Migration"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50/30"
  },
  {
    id: "ai",
    category: "AI & Automation",
    icon: Brain,
    title: "AI Integration",
    description: "Future-proof your business with custom AI agents and workflow automation.",
    detailedDescription: "We help you leverage the power of LLMs and Generative AI to automate repetitive tasks, provide 24/7 customer support, and gain insights from your data that were previously impossible to see.",
    whyChooseUs: [
      "Custom Trained Models for your data",
      "Seamless integration with existing CRM/ERP",
      "Privacy-first approach to data handling",
      "Scalable infrastructure that grows with usage"
    ],
    techStack: ["OpenAI API", "LangChain", "Python", "Pinecone", "Next.js"],
    features: ["Custom Chatbots", "Workflow Automation", "Data Analysis AI", "AI Strategy Consulting"],
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50/30"
  },
  {
    id: "nextjs",
    category: "Modern Web",
    icon: Zap,
    title: "Next.js & Modern Apps",
    description: "High-performance web applications built for speed, SEO, and scalability.",
    detailedDescription: "When 'fast' isn't enough, we build with Next.js 14. Our modern web apps provide a sub-second loading experience, superior SEO rankings, and a developer-friendly codebase that ensures long-term maintainability.",
    whyChooseUs: [
      "Server-Side Rendering (SSR) for instant loads",
      "Type-safe development with TypeScript",
      "Edge Computing for global performance",
      "Modern, responsive UI with Tailwind CSS"
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    features: ["PWA Readiness", "Real-time Features", "Scalable Backend", "SEO Performance"],
    color: "from-indigo-600 to-cyan-500",
    bgColor: "from-indigo-50 to-cyan-50/30"
  },
  {
    id: "ecommerce",
    category: "Growth & Sales",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-converting online stores designed to boost your sales and simplify management.",
    detailedDescription: "We specialize in creating shopping experiences that convert. Whether you need a simple WooCommerce store or a complex custom e-commerce engine, we focus on the entire funnel: from landing to checkout.",
    whyChooseUs: [
      "Conversion Rate Optimization (CRO) focused",
      "One-click checkout implementations",
      "Automated inventory & shipping sync",
      "Multi-currency & Global selling ready"
    ],
    techStack: ["WooCommerce", "Shopify", "Stripe", "NextJS Commerce", "Node.js"],
    features: ["Payment Integration", "Inventory Management", "Sales Analytics", "Customer Portals"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50/30"
  },
  {
    id: "seo",
    category: "Growth & Sales",
    icon: Search,
    title: "SEO & Content Strategy",
    description: "Dominate search results and drive organic traffic that actually converts.",
    detailedDescription: "SEO isn't just about rankings; it's about revenue. We analyze user intent to create content and technical strategies that bring the right people to your site at the right time in their buying journey.",
    whyChooseUs: [
      "Competitor gap analysis",
      "Technical SEO audit & implementation",
      "High-authority link building",
      "Semantic content mapping"
    ],
    techStack: ["Ahrefs", "SEMRush", "Google Search Console", "SurferSEO"],
    features: ["Keyword Research", "On-Page SEO", "Technical Audits", "Content Marketing"],
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50/30"
  },
  {
    id: "uiux",
    category: "Creative",
    icon: Palette,
    title: "UI/UX Design",
    description: "Strategic design that balances aesthetics with functional user experience.",
    detailedDescription: "We don't just make things look pretty. We design with purpose. Our UI/UX process involves deep user research and iterative prototyping to ensure your product is intuitive and delightful to use.",
    whyChooseUs: [
      "User-centric design methodology",
      "High-fidelity interactive prototypes",
      "Full Design System delivery",
      "Accessibility (WCAG) compliance"
    ],
    techStack: ["Figma", "Adobe Creative Cloud", "Spline (3D)", "Framer"],
    features: ["User Research", "Wireframing", "Visual Identity", "Design Systems"],
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50/30"
  }
]

const helpMeChoose = [
  {
    goal: "I want to start a new business website",
    recommendation: "wordpress",
    reason: "WordPress is flexible, scalable, and allows you to manage content easily as you grow."
  },
  {
    goal: "I need a high-performance web dashboard",
    recommendation: "nextjs",
    reason: "Next.js provides the speed and developer tools needed for complex, data-heavy applications."
  },
  {
    goal: "I want to automate my customer support",
    recommendation: "ai",
    reason: "Our AI agents can handle 70%+ of routine queries, saving your team hours every day."
  },
  {
    goal: "I want to sell products globally",
    recommendation: "ecommerce",
    reason: "We build global-ready stores with multi-currency support and seamless payment flows."
  },
  {
    goal: "I'm not getting enough traffic",
    recommendation: "seo",
    reason: "Our SEO strategies target high-intent keywords that bring buying customers to your site."
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, competitors, and target audience to build a foolproof roadmap.",
    icon: Target
  },
  {
    step: "02",
    title: "Agile Development",
    description: "We build in high-frequency sprints, giving you a live preview of the progress every step of the way.",
    icon: Code
  },
  {
    step: "03",
    title: "Rigorous Testing",
    description: "From load testing to security audits, we ensure your solution is rock-solid before it ever sees a user.",
    icon: Settings
  },
  {
    step: "04",
    title: "Launch & Evolution",
    description: "We don't just launch and leave. We monitor performance and iterate to ensure long-term success.",
    icon: Shield
  }
]

const stats = [
  { value: "500+", label: "Projects Completed", icon: Rocket },
  { value: "8+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Expert Partners", icon: Users },
  { value: "24/7", label: "Dedicated Support", icon: Award }
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal)
    const recommendation = helpMeChoose.find(h => h.goal === goal)?.recommendation
    if (recommendation) {
      setActiveTab(recommendation)
      const element = document.getElementById(`service-${recommendation}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-sm font-bold mb-8 uppercase tracking-wider animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Everything for Your Growth
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              We combine cutting-edge AI automation with 8+ years of craft in WordPress and Modern Web to build systems that scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
                <Link href="#choose">Get Advice</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-2xl border-2">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-100 dark:border-white/5 bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Me Choose Section */}
      <section id="choose" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Not sure where to start?</h2>
            <p className="text-slate-600 dark:text-slate-400">Tell us your goal and we'll recommend the best path forward.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpMeChoose.map((item, index) => (
              <button
                key={index}
                onClick={() => handleGoalSelect(item.goal)}
                className={`flex flex-col text-left p-6 rounded-2xl border-2 transition-all duration-300 ${selectedGoal === item.goal
                  ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20 scale-[1.02]"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 text-slate-900 dark:text-white"
                  }`}
              >
                <span className="font-bold text-lg mb-2">{item.goal}</span>
                {selectedGoal === item.goal && (
                  <p className="text-blue-50 text-sm mt-2 font-medium leading-relaxed animate-fade-in">
                    <Check className="inline-block w-4 h-4 mr-2" />
                    Recommended: {services.find(s => s.id === item.recommendation)?.title}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 sm:p-12 rounded-[2.5rem] border transition-all duration-500 glass-panel ${activeTab === service.id ? "ring-2 ring-blue-500 ring-offset-4 dark:ring-offset-slate-950" : ""
                  }`}
              >
                {/* Visual Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] -z-10`} />

                {/* Content Left */}
                <div className="lg:col-span-7">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full uppercase tracking-tighter mb-4">
                    {service.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button size="lg" className="px-8 font-bold" asChild>
                      <Link href="#contact">Get a Quote</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 font-bold" onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}>
                      {activeTab === service.id ? "Less Details" : "More Details"}
                    </Button>
                  </div>
                </div>

                {/* Content Right (Why Us / Tech) */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h4 className="font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Why Choose Us
                    </h4>
                    <ul className="space-y-4">
                      {service.whyChooseUs.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0 fill-current" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 shadow-2xl">
                    <h4 className="font-black text-white mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-cyan-400" />
                      Our Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-widest">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-20 leading-tight">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Our Workflow</h2>
            <p className="text-slate-400 text-lg sm:text-xl">A transparent, data-driven process designed for speed and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/50 to-purple-500/20 z-0" />

            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 group text-center">
                <div className="w-24 h-24 bg-slate-800 rounded-3xl border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-2xl">
                  <step.icon className="w-10 h-10 text-blue-400" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-sm font-black shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -ml-32 -mb-32" />

            <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-tight relative">
              Ready to build <br /> something amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed relative">
              Book a meeting or get a free consultation today. Let's discuss your project and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-slate-100 px-10 py-8 text-xl font-black rounded-2xl w-full sm:w-auto">
                <Link href="https://calendly.com/zenviq/30min">Book a Meeting</Link>
              </Button>
              <div className="text-sm font-bold text-blue-200">
                <Check className="inline-block w-4 h-4 mr-2" />
                No obligations, just pure strategy.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
