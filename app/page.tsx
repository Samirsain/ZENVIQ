import Header from "@/components/header"
import Hero from "@/components/hero"
import Resources from "@/components/resources"
import InfiniteTestimonials from "@/components/infinite-testimonials"
import Projects from "@/components/projects"
import FAQSection from "@/components/faq-section"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"
import ToolsCarousel from "@/components/tools-carousel"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star, Globe, Zap, Brain, ShoppingCart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content area */}
      <main className="flex-1">
        <Hero />
        <Resources />

        {/* Services Section - Sahu4You Style */}
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="text-center mb-12 sm:mb-16">
              {/* Zenviq Badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-indigo-100 dark:border-indigo-900/50">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                Empowering Digital Growth
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Complete Digital Growth Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                We offer a wide range of digital services to help you grow your business online.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* WordPress Development Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-blue-100 dark:border-blue-800/50">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">WordPress Development</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                    8+ years expertise. Custom themes, plugins, and smooth migration to modern tech when you're ready.
                  </p>
                  <div className="pt-4 border-t border-slate-50 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      Proven Solutions
                    </span>
                  </div>
                </div>
              </div>

              {/* Next.js & Modern Apps Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-indigo-100 dark:border-indigo-800/50">
                    <Zap className="w-7 h-7 fill-current" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">Next.js & Modern Apps</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                    TypeScript, Tailwind CSS, Next.js 14. Scalable applications that grow with your business.
                  </p>
                  <div className="pt-4 border-t border-slate-50 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      Future-proof Tech
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Integration Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-purple-100 dark:border-purple-800/50">
                    <Brain className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">AI Integration</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                    From GitaGPT to custom chatbots. Intelligent features that work 24/7 for your business.
                  </p>
                  <div className="pt-4 border-t border-slate-50 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      AI-powered Growth
                    </span>
                  </div>
                </div>
              </div>

              {/* E-commerce Solutions Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                <div className="relative bg-white dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-emerald-100 dark:border-emerald-800/50">
                    <ShoppingCart className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">E-commerce Solutions</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed flex-grow">
                    WooCommerce to custom platforms. High-converting stores that drive sales and growth.
                  </p>
                  <div className="pt-4 border-t border-slate-50 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      Boost Sales 200%+
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Trusted by 200+ Businesses</span>
              </div>
            </div>
          </div>
        </section>
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
      <Footer />
    </div>
  )
}

