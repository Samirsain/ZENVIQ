import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Github, Send, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-blue-950 dark:to-purple-950 text-white overflow-hidden">
      {/* Liquid/Flow Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/Sam4You.svg"
                  alt="Sam4You Logo"
                  width={150}
                  height={50}
                  className="object-contain h-10 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Sam4You India's No 1 AI Tools & Web Development Company. We provide unique and Best quality websites, 
              AI Tools & Digital Solutions to customers at a very affordable price.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm group cursor-pointer">
              <div className="relative p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="group-hover:text-white transition-colors">Call: 9352410667</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/refund" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-white mb-4">Subscribe</h3>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm"></div>
              <div className="relative flex gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-3">
              Get latest updates and AI tool recommendations
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <a href="https://instagram.com/codexmir" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-pink-400 transition-colors relative z-10" />
              </a>
              <a href="https://github.com/samirsain" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gray-400/50 transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors relative z-10" />
              </a>
              <a href="https://linkedin.com/in/samirsain" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors relative z-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-sm"></div>
            <p className="text-gray-300 text-sm relative z-10">
              Sam4You © {currentYear} All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

