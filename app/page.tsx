import Header from "@/components/header"
import Hero from "@/components/hero"
import Resources from "@/components/resources"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"
import ToolsCarousel from "@/components/tools-carousel"
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
            {/* S4U Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              S4U is for you!
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Digital Growth Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a wide range of digital services to help you grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-200 dark:border-gray-600">
                  <span className="text-2xl text-gray-700 dark:text-gray-300">&lt; &gt;</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WordPress Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">8+ years expertise. Custom themes, plugins, and smooth migration to modern tech when you're ready.</p>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                  Proven WordPress solutions
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-200 dark:border-gray-600">
                  <span className="text-2xl text-gray-700 dark:text-gray-300">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Next.js & Modern Apps</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">TypeScript, Tailwind CSS, Next.js 14. Scalable applications that grow with your business.</p>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                  Future-proof technology
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-200 dark:border-gray-600">
                  <span className="text-2xl text-gray-700 dark:text-gray-300">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Integration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">From GitaGPT to custom chatbots. Intelligent features that work 24/7 for your business.</p>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                  AI-powered growth
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-200 dark:border-gray-600">
                  <span className="text-2xl text-gray-700 dark:text-gray-300">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">E-commerce Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">WooCommerce to custom platforms. High-converting stores that drive sales and growth.</p>
                <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
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
      
      {/* Tools Section - Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools You'll Love
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our collection of free tools to boost your productivity
            </p>
          </div>
          
          <ToolsCarousel />
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  )
}

