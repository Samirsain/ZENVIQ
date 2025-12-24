import ParallaxServices from "@/components/parallax-services"
import Resources from "@/components/resources"
import InfiniteTestimonials from "@/components/infinite-testimonials"
import Projects from "@/components/projects"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"

import NewsletterSignup from "@/components/newsletter-signup"
import ToolsCarousel from "@/components/tools-carousel"
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main content area */}
      <main className="flex-1">
        <Hero />
        <Resources />
        <ParallaxServices />
        <Projects />

        <InfiniteTestimonials />
        <FAQSection />

        {/* Tools Section - Carousel */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Tools You'll Love
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                Discover our collection of free tools to boost your productivity
              </p>
            </div>

            <ToolsCarousel />
          </div>
        </section>


      </main>

      {/* Footer at bottom */}
    </div>
  )
}

