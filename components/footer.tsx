"use client"

import Link from "next/link"
import { Twitter, Github, Linkedin, ArrowRight, Heart } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info & Newsletter */}
          <div className="space-y-4">
            {/* Logo and Name */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-gray-900 dark:text-white text-xl font-bold">Sam4You</span>
            </Link>
            
            {/* Description */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We design systems that grow while you sleep.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Transforming businesses through innovative digital solutions, AI-powered tools, and strategic growth marketing.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">Stay Updated</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Side - Copyright & Build Info */}
            <div className="space-y-1 text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} Sam4You. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>

            {/* Right Side - Social Media & Attribution */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">Follow us:</span>
                <div className="flex gap-3">
                  <a href="https://twitter.com/sam4you" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/Samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Crafted with <Heart className="w-4 h-4 inline text-red-500" /> by <span className="font-semibold">Samir Sain</span>
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/sitemap" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Sitemap
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

