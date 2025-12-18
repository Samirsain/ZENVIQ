import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  Target,
  Heart,
  Calendar,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Rocket
} from "lucide-react"
import { Instagram, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-jost">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 tech-grid -z-10 opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10"></div>

        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float opacity-50 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-float-delayed opacity-50 -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm font-semibold mb-8 text-primary ring-1 ring-primary/20">
              <Sparkles className="w-4 h-4" />
              Empowering Digital Innovation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              Crafting the Future of <br />
              <span className="gradient-text">AI & Web Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Zenviq is a cutting-edge digital hub dedicated to simplifying complex technology. From advanced AI tools to strategic SEO resources, we empower the next generation of digital creators.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-7 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a
                href="https://calendly.com/zenviq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass-panel hover:bg-white/10 text-lg font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-primary/10"
              >
                <Calendar className="w-5 h-5 text-primary" />
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="inline-block p-3 bg-secondary rounded-2xl mb-2">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Our Mission: <br />
                <span className="text-primary">Simplicity at Scale</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Zenviq, we believe that powerful technology shouldn't be complicated. Our core focus lies in bridging the gap between sophisticated AI capabilities and everyday productivity.
                </p>
                <p>
                  Whether it's building high-performance websites, optimizing for search engines, or deploying custom AI tools, we focus on delivering measurable impact through intuitive interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: Zap, label: "Fast Performance" },
                  { icon: Shield, label: "Built with Trust" },
                  { icon: Globe, label: "Global Reach" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-xl text-sm font-medium border border-border">
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-cyan-500/20 blur-3xl -z-10"></div>
              <div className="glass-panel p-10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Rocket className="w-40 h-40 rotate-12" />
                </div>
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold gradient-text">8+</div>
                  <h3 className="text-2xl font-bold">Years of Innovation</h3>
                  <p className="text-muted-foreground">Transforming the digital landscape since 2016 through constant iteration and expertise.</p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="p-4 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              The <span className="gradient-text">Zenviq Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              We're not just another agency. We're your strategic partner in digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Tool Ecosystem",
                description: "Access a suite of free, high-performance tools designed for modern digital workflows.",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: Zap,
                title: "AI-First Approach",
                description: "We integrate the latest LLM and automation capabilities into every project we touch.",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                icon: Users,
                title: "Community Growth",
                description: "Trusted by thousands of professionals and students worldwide for reliable resources.",
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((item, index) => (
              <div key={index} className="glass-panel p-10 rounded-3xl hover:translate-y-[-8px] transition-all duration-300 group neon-glow">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto glass-panel rounded-[3rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 relative h-[500px] lg:h-full bg-secondary/50">
                <Image
                  src="/founder.svg"
                  alt="SamirSain"
                  fill
                  className="object-contain p-12 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              <div className="lg:col-span-7 p-10 md:p-16 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                    The Visionary
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">Meet Samir Sain</h2>
                  <p className="text-xl text-primary font-medium tracking-tight">Founder & Principal Architect</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Founder of Zenviq with over 4 years of hands-on experience in full-stack engineering and digital strategy. Samir's journey began with a simple question: "How can we make sophisticated tech accessible to everyone?"
                </p>

                <div className="bg-secondary/40 p-8 rounded-2xl border-l-4 border-primary">
                  <p className="text-xl italic font-light leading-relaxed">
                    "My mission is to build digital engines that don't just work—they inspire. We're here to bridge the gap between human creativity and technical execution."
                  </p>
                  <p className="mt-4 font-bold">— Samir Sain</p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, href: "https://instagram.com/codexmir", color: "hover:text-pink-500" },
                      { icon: Linkedin, href: "https://linkedin.com/in/samirsain", color: "hover:text-blue-500" },
                      { icon: Github, href: "https://github.com/samirsain", color: "hover:text-primary" },
                      { icon: Mail, href: "mailto:hello@zenviq.com", color: "hover:text-primary" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-secondary rounded-xl transition-all ${social.color} hover:bg-secondary/80`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                  <Button variant="default" className="rounded-xl px-8" asChild>
                    <Link href="#contact">Contact directly</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
        {/* Background Patterns */}
        <div className="absolute inset-0 tech-grid opacity-20 -z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-cyan-500/20 -z-0"></div>

        {/* Floating Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float-delayed opacity-50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-10 animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Let's Build Something <br />
              <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Remarkable Together</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our consultation is always free and focused on your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://calendly.com/zenviq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 text-xl font-bold px-10 py-5 rounded-[2rem] shadow-2xl hover:scale-105 transition-all"
              >
                <Calendar className="w-6 h-6 text-primary" />
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-col items-start gap-3">
                {[
                  "100% Free Consultation",
                  "Actionable Strategy Plan",
                  "24h Response Guaranteed"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                    <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
