import Header from "@/components/header"
import Hero from "@/components/hero"
import Resources from "@/components/resources"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Resources />
      
      {/* Services Section - Sahu4You Style */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Digital Growth Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a wide range of digital services to help you grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WordPress Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">8+ years expertise. Custom themes, plugins, and smooth migration to modern tech when you're ready.</p>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Proven WordPress solutions
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Next.js & Modern Apps</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">TypeScript, Tailwind CSS, Next.js 14. Scalable applications that grow with your business.</p>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                  Future-proof technology
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">From GitaGPT to custom chatbots. Intelligent features that work 24/7 for your business.</p>
                <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                  AI-powered growth
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">E-commerce Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">WooCommerce to custom platforms. High-converting stores that drive sales and growth.</p>
                <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                  Increase sales by 200%+
                </div>
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Trusted by 200+ Businesses</span>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />
      
      {/* Tools Section - Sahu4You Style */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools You'll Love
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download Pinterest Pins with AI-powered Pinterest Downloader
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link href="/tools/pinterest-downloader">
                Try Now
              </Link>
            </Button>
            <div className="mt-4">
              <Link href="/ai-tools" className="text-blue-600 dark:text-blue-400 hover:underline">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  )
}

