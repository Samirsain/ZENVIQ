import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Calendar, FileCode, CheckCircle, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-10 bg-white">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 tech-grid pointer-events-none opacity-60"></div>

      {/* Primary Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-100/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-md mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-blue-600 tracking-wide uppercase">Top Rated Agency 2024</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              We Build <span className="gradient-text">High-Performance</span> Websites That Grow Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-slate-500 font-normal max-w-xl mb-10 leading-relaxed">
              Premium UI/UX design, modern web development, and scalable digital solutions. We turn complex ideas into elegant, conversion-driven reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Button - Book a Meeting */}
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all font-semibold">
                <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Book a Meeting
                  <Calendar className="w-4 h-4" />
                </a>
              </Button>

              {/* Secondary Button - Our Services */}
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-slate-700 shadow-sm transition-all font-medium">
                <Link href="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </Button>
            </div>

            {/* Metrics/Social Proof */}
            <div className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-200 w-full">
              <div>
                <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                  150+ <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide">Projects Launched</div>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <div className="text-2xl font-bold text-slate-900 flex items-center gap-1">
                  98% <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wide">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Tech Visuals (Responsive Unified) */}
          <div className="relative w-full h-[400px] sm:h-[600px] perspective-1000 opacity-0 animate-fade-in-up mt-6 lg:mt-0 flex items-center justify-center lg:block" style={{ animationFillMode: 'forwards', animationDelay: '0.4s' }}>
            {/* The Visual Stage: Scaled for mobile, natural for desktop */}
            <div className="relative w-full max-w-[480px] lg:w-full h-full transform transition-transform duration-700 hover:scale-[1.02] scale-[0.7] sm:scale-90 lg:scale-100 origin-center lg:origin-left">

              {/* Main Dashboard Card (Floating) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[240px] sm:h-[320px] glass-panel rounded-2xl p-1 z-20 animate-float neon-glow">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden border border-slate-100 relative">
                  {/* Header */}
                  <div className="h-8 sm:h-10 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="px-1.5 py-0.5 rounded bg-blue-50 border border-blue-100 text-[8px] sm:text-[10px] text-blue-600 font-mono">analytics.tsx</div>
                  </div>
                  {/* Graph Mockup */}
                  <div className="p-4 sm:p-6 relative">
                    <div className="flex justify-between items-end mb-4">
                      <div className="">
                        <div className="text-[8px] sm:text-[10px] text-slate-500 font-medium mb-1">Total Impact</div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900">427% Growth</div>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-1 h-3 sm:h-4 bg-blue-200 rounded-sm"></span>
                        <span className="w-1 h-5 sm:h-6 bg-blue-300 rounded-sm"></span>
                        <span className="w-1 h-2 sm:h-3 bg-blue-200 rounded-sm"></span>
                        <span className="w-1 h-6 sm:h-8 bg-blue-600 rounded-sm shadow-lg shadow-blue-200"></span>
                      </div>
                    </div>
                    {/* Area Chart Path (CSS SVG) */}
                    <div className="w-full h-24 sm:h-32 relative overflow-hidden">
                      <div className="bg-gradient-to-t from-blue-50 to-transparent opacity-60 absolute inset-0"></div>
                      <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <path d="M0 40 L0 30 C 20 30, 20 10, 40 15 S 60 35, 80 20 S 100 5, 100 5 L 100 40 Z" fill="url(#hero-gradient)" opacity="0.3"></path>
                        <path d="M0 30 C 20 30, 20 10, 40 15 S 60 35, 80 20 S 100 5, 100 5" fill="none" stroke="#3b82f6" strokeWidth="0.5"></path>
                        <defs>
                          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.5 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0 }}></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Code Block (Behind/Left) */}
              <div className="absolute top-10 sm:top-20 -left-10 sm:left-0 w-48 sm:w-64 p-3 sm:p-4 glass-panel rounded-xl z-10 animate-float-delayed transform -rotate-6 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 border-b border-slate-100 pb-2">
                  <FileCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-500" />
                  <span className="text-[8px] sm:text-[10px] text-slate-500">samirsain.config.ts</span>
                </div>
                <div className="space-y-1 sm:space-y-1.5 font-mono text-[8px] sm:text-[10px]">
                  <div className="flex">
                    <span className="text-purple-600 mr-1 sm:mr-2">const</span>
                    <span className="text-blue-600">isPremium</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-orange-500 ml-1">true</span>;
                  </div>
                  <div className="flex">
                    <span className="text-purple-600 mr-1 sm:mr-2">return</span>
                    <span className="text-slate-600">{"{"}</span>
                  </div>
                  <div className="pl-3 sm:pl-4 text-slate-500">speed: <span className="text-emerald-600">"99"</span>,</div>
                  <div className="pl-3 sm:pl-4 text-slate-500">ux: <span className="text-emerald-600">"seamless"</span></div>
                  <div className="text-slate-600">{"}"}</div>
                </div>
              </div>

              {/* Floating Success Badge (Front/Right) */}
              <div className="absolute bottom-20 sm:bottom-32 -right-5 sm:right-0 w-44 sm:w-56 p-2 sm:p-3 glass-panel rounded-xl z-30 animate-float-delayed transform rotate-3 flex items-center gap-2 sm:gap-3 border-l-2 border-emerald-500 bg-white">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[8px] sm:text-[10px] font-semibold text-slate-900 uppercase">Live Ready</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500">Optimized by Zenviq</div>
                </div>
              </div>

              {/* Decorative Geometric Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border border-blue-200 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute top-1/2 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-indigo-200 to-purple-200 blur-[40px] sm:blur-[60px] opacity-40 rounded-full mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

