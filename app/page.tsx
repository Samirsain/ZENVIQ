import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AITools from "@/components/ai-tools"
import Portfolio from "@/components/portfolio"
import BlogSection from "@/components/blog-section"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AITools />
      <Portfolio />
      <BlogSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
