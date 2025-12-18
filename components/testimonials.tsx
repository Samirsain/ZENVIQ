"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import testimonialsData from "@/content/testimonials.json"

function Counter({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function: easeOutExpo
      const easedPercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage)

      const currentCount = Math.floor(easedPercentage * target)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={elementRef}>{count}{suffix}</div>
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonials = testimonialsData

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">Trusted by Growing Businesses</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            See what real clients have to say about their experience working with us.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">
              <Counter target={200} suffix="+" />
            </div>
            <div className="text-sm sm:text-base text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">
              <Counter target={30} suffix="K+" />
            </div>
            <div className="text-sm sm:text-base text-gray-600">GitaGPT Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">
              <Counter target={250} suffix="%+" />
            </div>
            <div className="text-sm sm:text-base text-gray-600">Avg. Conversion Increase</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-indigo-100 shadow-2xl bg-white overflow-hidden rounded-3xl">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex gap-1 mb-2 sm:mb-3 justify-center sm:justify-start">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-indigo-600 text-indigo-600" />
                    ))}
                  </div>
                  <div className="font-bold text-base sm:text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-sm sm:text-base text-muted-foreground">{testimonials[activeIndex].role}</div>
                </div>
              </div>
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground text-center sm:text-left">
                "{testimonials[activeIndex].content}"
              </blockquote>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === activeIndex ? "bg-indigo-600 w-6 sm:w-8" : "bg-gray-300"
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
