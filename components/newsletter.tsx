"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle, Send } from "lucide-react"

const NEWSLETTER_ENDPOINT = "https://formspree.io/f/myznwrqa"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: "newsletter_subscription",
          message: "Newsletter subscription request",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setEmail("")
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-white/10">
            <Mail className="w-4 h-4" />
            Newsletter
          </div>

          <h2
            className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight"
            style={{ letterSpacing: "-1px" }}
          >
            Stay Updated
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed">
            Subscribe for the latest insights on AI, web development, and digital growth strategies.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-5 rounded-full border-0 bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-indigo-500 focus:bg-white/15 transition-all"
              required
            />
            <Button
              type="submit"
              className="h-12 px-6 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-5 flex items-center justify-center gap-2 p-3 bg-emerald-500/15 border border-emerald-400/20 rounded-xl text-emerald-300 max-w-md mx-auto">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Successfully subscribed! Welcome aboard.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-5 flex items-center justify-center gap-2 p-3 bg-red-500/15 border border-red-400/20 rounded-xl text-red-300 max-w-md mx-auto">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Failed to subscribe. Please try again.</span>
            </div>
          )}

          <p className="text-xs text-slate-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
