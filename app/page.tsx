import ParallaxServices from "@/components/parallax-services"
import ClientFeedback from "@/components/ui/testimonial"
import FAQSection from "@/components/faq-section"
import ToolsCarousel from "@/components/tools-carousel"
import Link from "next/link"
import HeroSection from "@/components/ui/hero-section"
import { Sparkles } from "lucide-react"
import { CaseStudiesCarousel } from "@/components/ui/case-studies-carousel"
import StackFeatureSection from "@/components/ui/stack-feature-section"
import RudraShowcase from "@/components/rudra-showcase"
import TeamShowcase from "@/components/team-showcase"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main content area */}
      <main className="flex-1">
        <HeroSection />
        <ParallaxServices />
        <CaseStudiesCarousel />
        <ClientFeedback />
        <FAQSection />

        {/* Rudra Product Showcase */}
        <RudraShowcase />

        {/* Tools Section - Premium Grid */}
        <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 tech-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-indigo-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Free & Powerful</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Tools You&apos;ll Love{" "}
                <span className="inline-block animate-float">🛠️</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Discover our collection of free tools designed to
                <span className="font-semibold text-slate-700"> supercharge </span>
                your productivity
              </p>
            </div>

            <ToolsCarousel />
          </div>
        </section>

        <StackFeatureSection />
        <TeamShowcase />

        {/* SEO Content Section — Keyword-rich visible content for Google */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.5px' }}>
                Best Digital Agency in Hanumangarh, Rajasthan
              </h2>
              <div className="prose prose-slate prose-sm sm:prose-base max-w-none text-slate-500 leading-relaxed space-y-4">
                <p>
                  <strong>ZENVIQ Digital</strong> is the <strong>leading digital agency in Hanumangarh</strong>, Rajasthan — trusted by businesses across the region for premium <strong>web development</strong>, <strong>SEO services</strong>, <strong>AI automation</strong>, and <strong>digital marketing</strong>. Whether you need a stunning business website, an e-commerce store, or want to dominate Google search results — ZENVIQ is your go-to partner.
                </p>
                <p>
                  As the <strong>best website developer in Hanumangarh</strong>, we specialize in modern technologies like <strong>Next.js</strong>, <strong>React</strong>, <strong>WordPress</strong>, and <strong>Shopify</strong> to build fast, responsive, and SEO-optimized websites. Our <strong>SEO services in Hanumangarh</strong> include technical SEO audits, keyword research, on-page optimization, link building, and content strategy — all designed to get your business to <strong>page 1 of Google</strong>.
                </p>
                <p>
                  We also offer <strong>social media marketing in Hanumangarh</strong>, <strong>e-commerce website development</strong>, <strong>UI/UX design</strong>, and custom <strong>AI chatbot development</strong>. From local shops in Hanumangarh to brands scaling across Rajasthan and India — ZENVIQ delivers <strong>digital solutions that convert visitors into customers</strong>.
                </p>
                <p>
                  Looking for a <strong>web design company in Hanumangarh</strong>? Book a <Link href="/contact" className="text-indigo-600 font-semibold hover:text-indigo-700 underline underline-offset-2">free consultation</Link> today and let&apos;s build something your competitors will envy.
                </p>
              </div>

              {/* Service keyword links for internal SEO */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Web Development Hanumangarh",
                  "SEO Services Rajasthan",
                  "Digital Marketing Hanumangarh",
                  "E-commerce Website",
                  "AI Automation",
                  "WordPress Developer",
                  "UI/UX Design",
                  "Social Media Marketing",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href="/services"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-[11px] font-medium text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer at bottom */}
    </div>
  )
}

