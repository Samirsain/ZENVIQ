import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">AI-Powered Digital Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
              Supercharge your <span className="gradient-text">AI Workflow</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-200">
              Find the right best AI tools for your workflow
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
              <Button size="lg" asChild className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                <Link href="#contact">
                  All AI Tools
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-600">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/3d-isometric-illustration-of-ai-workflow-dashboard.jpg"
                alt="AI Workflow Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          {[
            { value: "200+", label: "Projects Delivered" },
            { value: "30K+", label: "Active Users" },
            { value: "250%+", label: "Avg. Growth Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
