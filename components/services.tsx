import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Search, ShoppingCart, Share2, Bot, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design & WordPress",
    description:
      "Custom, responsive websites built with modern technologies and WordPress CMS for easy content management.",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description:
      "Data-driven SEO optimization and content strategies to boost your search rankings and organic traffic.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Powerful online stores with seamless checkout experiences, inventory management, and payment integration.",
  },
  {
    icon: Share2,
    title: "Social Media & Ads",
    description: "Strategic social media management and targeted advertising campaigns to grow your brand presence.",
  },
  {
    icon: Bot,
    title: "AI Automation & Tools",
    description: "Intelligent automation solutions and AI-powered tools to streamline your business operations.",
  },
  {
    icon: TrendingUp,
    title: "Branding & Digital Growth",
    description: "Comprehensive branding strategies and growth marketing to scale your digital presence.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
