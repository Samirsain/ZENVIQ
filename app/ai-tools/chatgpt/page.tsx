import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Brain, MessageSquare, Code, BookOpen, Users, TrendingUp, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ChatGPTPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "ChatGPT understands context and maintains conversation flow naturally, making interactions feel human-like."
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Write, debug, and explain code in multiple programming languages including Python, JavaScript, Java, and more."
    },
    {
      icon: BookOpen,
      title: "Creative Writing",
      description: "Generate articles, stories, marketing copy, poetry, and creative content tailored to your needs."
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Analyze complex problems, provide step-by-step solutions, and offer multiple approaches to challenges."
    }
  ]

  const pricingPlans = [
    {
      name: "Free Tier",
      price: "Free",
      description: "Access to GPT-3.5 with basic features",
      features: [
        "GPT-3.5 access",
        "Standard response times",
        "Limited usage per day",
        "Basic conversation capabilities"
      ],
      popular: false
    },
    {
      name: "ChatGPT Plus",
      price: "$20/month",
      description: "Premium access with advanced features",
      features: [
        "Access to GPT-4",
        "Priority access during peak times",
        "Faster response times",
        "DALL-E 3 integration",
        "Advanced data analysis",
        "File upload capabilities"
      ],
      popular: true
    }
  ]

  const useCases = [
    {
      category: "Content Creation",
      examples: [
        "Blog post writing and editing",
        "Social media content generation",
        "Email marketing campaigns",
        "Product descriptions"
      ]
    },
    {
      category: "Programming",
      examples: [
        "Code debugging and optimization",
        "Algorithm explanation",
        "API documentation",
        "Code review and suggestions"
      ]
    },
    {
      category: "Business",
      examples: [
        "Business plan development",
        "Market research analysis",
        "Customer service automation",
        "Presentation creation"
      ]
    },
    {
      category: "Education",
      examples: [
        "Tutoring and explanations",
        "Study material creation",
        "Language learning",
        "Research assistance"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
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
                    src="/logos/chatgpt.svg" 
                    alt="ChatGPT logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    ChatGPT
                  </h1>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <Star className="w-3 h-3 mr-1" />
                    4.8★
                  </Badge>
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  OpenAI's revolutionary conversational AI that can help with writing, coding, analysis, and more. 
                  The most popular AI tool with over 100 million users worldwide.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                    <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                      Try ChatGPT
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
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">100M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">175B</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Parameters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">2022</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">OpenAI</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Company</div>
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
                Discover what makes ChatGPT the most popular AI assistant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-green-500 shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">{plan.price}</div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
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
                How professionals use ChatGPT across different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience ChatGPT?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who are already using ChatGPT to boost their productivity and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100">
              <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-600">
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
