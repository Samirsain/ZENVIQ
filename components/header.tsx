"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ArrowRight, ChevronDown, BarChart3, Smartphone, Link as LinkIcon, FileText, Globe, Code, Brain, Zap, ShoppingCart, Palette, Terminal } from "lucide-react"
import Image from "next/image"
import { Logo } from "@/components/logo"



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/gallery", label: "Our Work" },
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  const servicesDropdown = [
    {
      icon: Code,
      title: "Web Development",
      description: "E-commerce, Custom Apps, & Enterprise Solutions",
      href: "/services#web-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Product Design, Strategy, & User Research",
      href: "/services#ui-ux-design"
    },
    {
      icon: Terminal,
      title: "Software Development",
      description: "SaaS, Cloud Solutions, & API Integration",
      href: "/services#software-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "iOS, Android, & Cross-Platform Apps",
      href: "/services#app-development"
    },
    {
      icon: Brain,
      title: "AI & Business Automation",
      description: "Chatbots, Data Intelligence, & Process Automation",
      href: "/services#ai-automation"
    },
    {
      icon: BarChart3,
      title: "Marketing & SEO",
      description: "SEO, Social Media, & Branding",
      href: "/services#marketing-seo"
    }
  ]


  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex flex-col items-center px-4 transition-all duration-300`}
    >
      <div
        className={`
          flex items-center justify-between 
          w-full max-w-7xl 
          pl-4 pr-2 py-2 sm:pl-6 sm:pr-2 sm:py-2 md:px-6 md:py-3
          rounded-full 
          transition-all duration-300
          border border-white/20
          ${isScrolled || isMobileMenuOpen
            ? "bg-white/70 backdrop-blur-md shadow-lg translate-y-0"
            : "bg-white/50 backdrop-blur-sm shadow-md"}
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative" ref={link.hasDropdown ? servicesRef : null}>
              {link.hasDropdown ? (
                <div
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )}

              {/* Services Dropdown */}
              {link.hasDropdown && isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {servicesDropdown.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <service.icon size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-slate-900 flex items-center gap-2">
                              {service.title}
                              <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-600" />
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center px-2">
                      <div className="text-xs text-slate-500">
                        Need custom solutions?
                      </div>
                      <Link href="/contact" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                        Talk to an expert <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 font-semibold shadow-lg shadow-indigo-900/20">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 w-full max-w-7xl bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden py-4 px-2 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">


            {/* Theme toggle removed - using light mode only */}

            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div className="px-2">
                    <button
                      className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {servicesDropdown.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsServicesDropdownOpen(false)
                            }}
                          >
                            <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                              <service.icon size={10} className="text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-xs text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-xs text-gray-500 truncate">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-2 pt-2">
              <Button asChild className="w-full text-sm">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
