import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online store with advanced filtering, cart management, and secure checkout.",
    image: "/modern-ecommerce-interface.png",
    category: "E-Commerce",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management.",
    image: "/saas-analytics-dashboard-dark-theme.jpg",
    category: "Web App",
  },
  {
    title: "Corporate Website",
    description: "Professional corporate site with CMS integration and multilingual support.",
    image: "/corporate-business-website.png",
    category: "Website",
  },
  {
    title: "AI Content Platform",
    description: "AI-powered content generation platform with custom training models.",
    image: "/ai-content-generation-interface.jpg",
    category: "AI Tool",
  },
  {
    title: "Restaurant Booking App",
    description: "Mobile-first booking system with real-time availability and notifications.",
    image: "/restaurant-booking-app-interface.png",
    category: "Mobile App",
  },
  {
    title: "Marketing Agency Site",
    description: "Creative portfolio site with case studies and interactive animations.",
    image: "/creative-marketing-agency-website.jpg",
    category: "Portfolio",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our recent work and success stories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <Button variant="ghost" className="group-hover:text-primary p-0">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
