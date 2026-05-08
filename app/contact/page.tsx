"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone, Mail, MapPin, MessageSquare, Send, Calendar,
  Sparkles, Check, ArrowRight,
} from "lucide-react"

const CONTACT_ENDPOINT = "https://formspree.io/f/myznwrqa"

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9352410667", href: "tel:+919352410667", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Mail, label: "Email", value: "info@zenviqdigital.in", href: "mailto:info@zenviqdigital.in", accent: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  { icon: MapPin, label: "Location", value: "India", href: null, accent: "bg-purple-50 text-purple-600 border-purple-100" },
  { icon: Calendar, label: "Schedule", value: "Book a 30-min slot", href: "https://calendly.com/zenviq/30min", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
]

const benefits = [
  { title: "Expert AI Consultation", desc: "Professional advice on AI tools and implementation strategies." },
  { title: "Custom Web Solutions", desc: "Tailored websites and apps built with modern technologies." },
  { title: "24/7 Support", desc: "Round-the-clock technical support and maintenance." },
  { title: "Affordable Pricing", desc: "Competitive rates without compromising on quality." },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else throw new Error()
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-[1.08] tracking-tight"
              style={{ letterSpacing: "-1.5px" }}
            >
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto">
              Get in touch for AI consultation, web development, and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? "a" : "div"
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                : {}

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="block p-5 rounded-xl bg-white border border-slate-200 hover:shadow-stripe hover:border-indigo-200/60 transition-all duration-300 text-center group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.accent} border flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.label}</h3>
                    <p className="text-xs text-slate-500">{item.value}</p>
                  </Wrapper>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-stripe"
            >
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">Send us a Message</h2>
              </div>
              <p className="text-sm text-slate-500 mb-6">We&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-slate-700">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="Samir" className="h-11 rounded-lg border-slate-200 text-sm" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-slate-700">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Sain" className="h-11 rounded-lg border-slate-200 text-sm" required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-slate-700">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" className="h-11 rounded-lg border-slate-200 text-sm" required />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold text-slate-700">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+91 9352410667" className="h-11 rounded-lg border-slate-200 text-sm" />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service" className="text-xs font-semibold text-slate-700">Service</Label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-11 px-3 border border-slate-200 rounded-lg bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-tools">AI Tools & Consultation</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-semibold text-slate-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="rounded-lg border-slate-200 text-sm resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 font-semibold shadow-xl shadow-slate-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-sm font-medium">
                    <Check className="w-4 h-4" />
                    Message sent! We&apos;ll respond within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-medium">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-stripe"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">Why Choose ZENVIQ?</h3>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5">{b.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/919352410667?text=Hi!%20I%27m%20interested%20in%20your%20services.%20Can%20you%20help%20me?"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="block rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 text-center hover:shadow-stripe-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-1">Quick WhatsApp Chat</h3>
                <p className="text-sm text-emerald-700 mb-5">For instant support and quick queries</p>
                <div className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full text-sm font-bold border border-emerald-200 group-hover:shadow-md transition-all">
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
