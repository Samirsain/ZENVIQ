import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Brain, MessageSquare, Code, BookOpen, Users, TrendingUp, ExternalLink, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ClaudeAIPage() {
  const features = [
    {
      icon: Brain,
      title: "Long Context Understanding",
      description: "Claude can process and understand very long documents and conversations, maintaining context across extended interactions."
    },
    {
      icon: Shield,
      title: "Ethical AI Responses",
      description: "Built with constitutional AI principles to provide helpful, harmless, and honest responses that prioritize user safety."
    },
    {
      icon: BookOpen,
      title: "Document Analysis",
      description: "Upload and analyze documents, PDFs, and files with detailed insights and summaries."
    },
    {
      icon: Code,
      title: "Advanced Reasoning",
      description: "Excellent at complex reasoning tasks, mathematical problems, and logical analysis with step-by-step explanations."
    }
  ]

  const pricingPlans = [
    {
      name: "Claude Free",
      price: "Free",
      description: "Access to Claude 3 Haiku with basic features",
      features: [
        "Claude 3 Haiku access",
        "Standard response times",
        "Basic conversation capabilities",
        "Document analysis (limited)"
      ],
      popular: false
    },
    {
      name: "Claude Pro",
      price: "$20/month",
      description: "Premium access with advanced features",
      features: [
        "Access to Claude 3 Sonnet & Opus",
        "Priority access during peak times",
        "Faster response times",
        "Advanced document analysis",
        "Longer context windows",
        "API access (separate billing)"
      ],
      popular: true
    }
  ]

  const useCases = [
    {
      category: "Research & Analysis",
      examples: [
        "Academic research assistance",
        "Legal document review",
        "Scientific paper analysis",
        "Market research synthesis"
      ]
    },
    {
      category: "Writing & Editing",
      examples: [
        "Technical documentation",
        "Creative writing assistance",
        "Content editing and proofreading",
        "Translation services"
      ]
    },
    {
      category: "Business Intelligence",
      examples: [
        "Data analysis and insights",
        "Strategic planning assistance",
        "Risk assessment",
        "Competitive analysis"
      ]
    },
    {
      category: "Education",
      examples: [
        "Personalized tutoring",
        "Curriculum development",
        "Assessment creation",
        "Learning material generation"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Logo and Basic Info */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                  <Image 
                    src="/logos/claude.svg" 
                    alt="Claude AI logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Claude AI
                  </h1>
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                    <Star className="w-3 h-3 mr-1" />
                    4.7★
                  </Badge>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Anthropic's AI assistant built with constitutional AI principles. Focused on being helpful, harmless, 
                  and honest with exceptional reasoning capabilities and long context understanding.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                      Try Claude AI
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#pricing">View Pricing</a>
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Anthropic</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Company</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2023</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">200K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Context Tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Constitutional</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">AI Approach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                What makes Claude AI stand out in the AI landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the plan that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-orange-500 shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{plan.price}</div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                        {plan.price === 'Free' ? 'Start Free' : 'Upgrade Now'}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How professionals leverage Claude AI's capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Claude AI's Intelligence
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Discover why Claude AI is trusted by professionals for complex reasoning and ethical AI interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-orange-600">
              <Link href="/ai-tools">
                Explore More AI Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
