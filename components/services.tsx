import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Search, ShoppingCart, Share2, Bot, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "In Samir's expertise: Custom themes, plugins, and smooth migration to modern web when you're ready.",
    badge: "Proven WordPress solutions",
  },
  {
    icon: Search,
    title: "Next.js & Modern Apps",
    description: "TypeScript, Tailwind CSS, Next.js 15, scalable applications that grow with your business.",
    badge: "Future-proof technology",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "WooCommerce to custom platforms, high-converting stores that drive sales and growth.",
    badge: "Increase sales by 200%+",
  },
  {
    icon: Share2,
    title: "AI Integration",
    description: "From ChatGPT to custom chatbots, intelligent features that work 24/7 for your business.",
    badge: "AI-powered growth",
  },
  {
    icon: Bot,
    title: "SEO & Content Strategy",
    description: "Rank higher on Google with data-driven SEO strategies and content that converts.",
    badge: "Increase traffic by 300%+",
  },
  {
    icon: TrendingUp,
    title: "Branding & Digital Growth",
    description: "Comprehensive branding strategies and growth marketing to scale your digital presence.",
    badge: "Proven track record",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            ✓ SERVICES
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Complete Digital Growth Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of digital services to help you grow your business online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:border-purple-300 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-3">{service.description}</CardDescription>
                  <span className="text-xs text-purple-600 font-medium">{service.badge}</span>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
