"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "DevXmir transformed our online presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, EcoShop",
    content:
      "The e-commerce platform they built for us is incredible. Sales have doubled, and our customers love the seamless experience.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLab",
    content:
      "Their AI automation tools saved us countless hours. The team is professional, responsive, and truly understands digital marketing.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </blockquote>
              <div>
                <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[activeIndex].role}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
