"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ArrowRight, ArrowUpRight, ChevronDown, BarChart3, Smartphone, Link as LinkIcon, FileText, Globe, Code, Brain, Zap, ShoppingCart, Palette, Terminal } from "lucide-react"
import Image from "next/image"
import { Logo } from "@/components/logo"



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const mobileServicesRef = useRef<HTMLDivElement>(null)

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
      href: "/services/web-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Product Design, Strategy, & User Research",
      href: "/services/ui-ux-design"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Shopify, WooCommerce, & Custom Stores",
      href: "/services/ecommerce-development"
    },
    {
      icon: Smartphone,
      title: "SEO & Google Ranking",
      description: "Technical SEO, Local SEO, & Content Strategy",
      href: "/services/seo-optimization"
    },
    {
      icon: Brain,
      title: "AI & Business Automation",
      description: "Chatbots, Data Intelligence, & Process Automation",
      href: "/services/ai-automation"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Google Ads, Social Media, & WhatsApp Marketing",
      href: "/services"
    }
  ]


  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideDesktop = servicesRef.current && !servicesRef.current.contains(target)
      const isOutsideMobile = mobileServicesRef.current && !mobileServicesRef.current.contains(target)
      
      // Only close if click is outside BOTH desktop and mobile refs
      if (isOutsideDesktop && isOutsideMobile) {
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
            ? "bg-white/70 backdrop-blur-md shadow-stripe-lg translate-y-0"
            : "bg-white/50 backdrop-blur-sm shadow-stripe"}
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
            <div
              key={link.href}
              className="relative"
              ref={link.hasDropdown ? servicesRef : null}
              onMouseEnter={link.hasDropdown ? () => setIsServicesDropdownOpen(true) : undefined}
              onMouseLeave={link.hasDropdown ? () => setIsServicesDropdownOpen(false) : undefined}
            >
              {link.hasDropdown ? (
                <div
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2"
                >
                  <Link href={link.href}>{link.label}</Link>
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
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[600px] z-50"
                >
                  <div className="bg-white border border-slate-200 rounded-xl shadow-stripe-lg overflow-hidden">
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
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 group text-xs px-3.5 py-2 hidden sm:inline-flex"
          >
            Book a call
            <div className="size-6 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:bg-primary-foreground/25 transition-colors">
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </Link>
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
        <div className="md:hidden mt-2 w-full max-w-7xl bg-white/95 backdrop-blur-md rounded-2xl shadow-stripe-lg border border-slate-200 overflow-y-auto max-h-[80vh] py-4 px-2 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">


            {/* Theme toggle removed - using light mode only */}

            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div className="px-2" ref={mobileServicesRef}>
                    <button
                      className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="ml-2 mt-1 space-y-1 pb-2">
                        <Link
                          href="/services"
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-indigo-50 border border-indigo-100 mb-2"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsServicesDropdownOpen(false)
                          }}
                        >
                          <span className="text-xs font-bold text-indigo-600">View All Services →</span>
                        </Link>
                        {servicesDropdown.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsServicesDropdownOpen(false)
                            }}
                          >
                            <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <service.icon size={14} className="text-indigo-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-[11px] text-gray-500 truncate">
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
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97] transition-all duration-200 group text-sm px-5 py-2.5"
              >
                Book a call
                <div className="size-6 rounded-full bg-primary-foreground/15 flex items-center justify-center group-hover:bg-primary-foreground/25 transition-colors">
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
