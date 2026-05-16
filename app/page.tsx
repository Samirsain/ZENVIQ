import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/ui/hero-section"
import { Sparkles, Github, Linkedin, Instagram, Mail, Globe, ArrowRight, Code2, Palette, Cpu } from "lucide-react"

// Dynamic imports for below-fold sections — reduces initial JS by ~300KB
const ParallaxServices = dynamic(() => import("@/components/parallax-services"), {
  loading: () => <div className="min-h-[60vh]" />,
})
const CaseStudiesCarousel = dynamic(
  () => import("@/components/ui/case-studies-carousel").then((mod) => ({ default: mod.CaseStudiesCarousel })),
  { loading: () => <div className="min-h-[50vh]" /> }
)
const ClientFeedback = dynamic(() => import("@/components/ui/testimonial"), {
  loading: () => <div className="min-h-[40vh]" />,
})
const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="min-h-[40vh]" />,
})
const RudraShowcase = dynamic(() => import("@/components/rudra-showcase"), {
  loading: () => <div className="min-h-[50vh]" />,
})
const ToolsCarousel = dynamic(() => import("@/components/tools-carousel"), {
  loading: () => <div className="min-h-[40vh]" />,
})
const StackFeatureSection = dynamic(() => import("@/components/ui/stack-feature-section"), {
  loading: () => <div className="min-h-[30vh]" />,
})

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

        {/* ===== TEAM SHOWCASE SECTION ===== */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
          <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-violet-100/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-14 sm:mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100/60 px-5 py-2 rounded-full mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">The Crew</span>
                <span className="text-sm">✨</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight" style={{ letterSpacing: "-1.5px" }}>
                Meet the{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Humans</span>{" "}
                Behind ZENVIQ
              </h2>
              <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
                A tight-knit team of builders, designers & engineers who turn ideas into premium digital products.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Samir */}
              <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-xl hover:border-slate-300/80 transition-all duration-500 hover:-translate-y-2">
                  <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                  <div className="absolute top-5 right-5 text-2xl select-none z-10 animate-float">🚀</div>
                  <div className="p-6 sm:p-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
                        <Image src="/team/samirsain.png" alt="Samir Sain — Founder & CEO" width={96} height={96} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-indigo-500/10 border-indigo-500/20 border backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Code2 className="w-4 h-4 text-indigo-600" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">Samir Sain</h3>
                      <p className="text-sm font-semibold text-indigo-600 mb-3">Founder & CEO</p>
                      <p className="text-sm text-slate-500 leading-relaxed">Full-stack dev & AI specialist. Builds world-class digital products from strategy to ship.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href="https://samirsain.com" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Globe className="w-4 h-4" /></Link>
                      <Link href="https://github.com/samirsain" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Github className="w-4 h-4" /></Link>
                      <Link href="https://instagram.com/codexmir" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Instagram className="w-4 h-4" /></Link>
                      <Link href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Linkedin className="w-4 h-4" /></Link>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>
              </div>

              {/* Aditya */}
              <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-xl hover:border-slate-300/80 transition-all duration-500 hover:-translate-y-2">
                  <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-500" />
                  <div className="absolute top-5 right-5 text-2xl select-none z-10 animate-float-delayed">⚡</div>
                  <div className="p-6 sm:p-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-violet-500/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
                        <Image src="/team/aditya.png" alt="Aditya Raj — Product Engineer" width={96} height={96} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-violet-500/10 border-violet-500/20 border backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Cpu className="w-4 h-4 text-violet-600" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">Aditya Raj</h3>
                      <p className="text-sm font-semibold text-violet-600 mb-3">Product Engineer</p>
                      <p className="text-sm text-slate-500 leading-relaxed">SaaS systems, AI workflows & automation. Designs, codes, ships, repeats.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href="https://adityaraj.info" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Globe className="w-4 h-4" /></Link>
                      <Link href="https://github.com/adityaraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Github className="w-4 h-4" /></Link>
                      <Link href="https://linkedin.com/in/adityaraj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Linkedin className="w-4 h-4" /></Link>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>
              </div>

              {/* Yogi */}
              <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-xl hover:border-slate-300/80 transition-all duration-500 hover:-translate-y-2">
                  <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                  <div className="absolute top-5 right-5 text-2xl select-none z-10 animate-float">🎨</div>
                  <div className="p-6 sm:p-8">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-lg group-hover:scale-105 transition-transform duration-500">
                        <Image src="/team/yogi-sahu.png" alt="Yogi Sahu — Frontend Developer" width={96} height={96} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-cyan-500/10 border-cyan-500/20 border backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Palette className="w-4 h-4 text-cyan-600" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">Yogi Sahu</h3>
                      <p className="text-sm font-semibold text-cyan-600 mb-3">Frontend Developer</p>
                      <p className="text-sm text-slate-500 leading-relaxed">Pixel-perfect UIs with React & Next.js. Open source lover & CSS wizard.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href="https://github.com/yogiisahu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Github className="w-4 h-4" /></Link>
                      <Link href="mailto:thedankyogi@gmail.com" aria-label="Email" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Mail className="w-4 h-4" /></Link>
                      <Link href="https://zenviqdigital.in" target="_blank" rel="noopener noreferrer" aria-label="Website" className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white text-slate-500 transition-all duration-300 hover:scale-110"><Globe className="w-4 h-4" /></Link>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-3xl" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

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
