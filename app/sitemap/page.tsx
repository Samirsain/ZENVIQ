import Link from "next/link"
import { ArrowLeft, ExternalLink, Globe, FileText, Wrench, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap — All Pages & Resources",
  description: "Navigate through all pages, services, tools, and resources available on ZENVIQ Digital website. Find what you need quickly.",
  alternates: {
    canonical: "https://www.zenviqdigital.in/sitemap",
  },
}

interface SitemapLink {
  name: string
  url: string
  description: string
  external?: boolean
}

interface SitemapSection {
  category: string
  icon: React.ReactNode
  links: SitemapLink[]
}

const pages: SitemapSection[] = [
  {
    category: "Main Pages",
    icon: <Globe className="w-5 h-5" />,
    links: [
      { name: "Home", url: "/", description: "Landing page with overview of our services" },
      { name: "Services", url: "/services", description: "Our comprehensive digital services" },
      { name: "About", url: "/about", description: "Learn about our team and mission" },
      { name: "Contact", url: "/contact", description: "Get in touch with our team" },
      { name: "Gallery", url: "/gallery", description: "Our project portfolio showcase" },
      { name: "Blog", url: "/blog", description: "Latest insights and articles" },
      { name: "AI Tools", url: "/ai-tools", description: "AI-powered tools and solutions" },
      { name: "Free Tools", url: "/tools", description: "Free online tools for everyone" },
    ],
  },
  {
    category: "Blog Articles",
    icon: <FileText className="w-5 h-5" />,
    links: [
      { name: "SEO Tips 2025", url: "/blog/seo-tips-2025", description: "Latest SEO strategies and best practices" },
      { name: "AI Web Design & Development", url: "/blog/ai-web-design-development-2025", description: "How AI is transforming web design" },
      { name: "AI Automation for Business", url: "/blog/ai-automation-business-scaling", description: "Scale your business with AI automation" },
    ],
  },
  {
    category: "Free Tools",
    icon: <Wrench className="w-5 h-5" />,
    links: [
      { name: "Social Media Tools", url: "/tools/social-tools", description: "Best tools for managing & scheduling social media posts" },
      { name: "Social Media Downloader", url: "/tools/social-downloader", description: "Download videos from social platforms" },
      { name: "Pinterest Downloader", url: "/tools/pinterest-downloader", description: "Download Pinterest images and videos" },
      { name: "Instagram Tools", url: "/tools/instagram-tools", description: "Generate bios, names & username ideas for Instagram" },
      { name: "AI Content Generator", url: "/tools/ai-content-generator", description: "Generate content with AI" },
      { name: "AI Image Generator", url: "/tools/image-generator", description: "Create stunning images from text with AI" },
      { name: "SEO Checker", url: "/tools/seo-checker", description: "Analyze your website's SEO" },
      { name: "SEO Tools Suite", url: "/tools/seo-tools", description: "Essential free tools to improve your website SEO" },
      { name: "Word Counter", url: "/tools/word-counter", description: "Count words, characters, and sentences" },
      { name: "EMI Calculator", url: "/tools/emi-calculator", description: "Calculate your loan EMI" },
      { name: "GST Calculator", url: "/tools/gst-calculator", description: "Calculate GST amounts" },
      { name: "Percentage Calculator", url: "/tools/percentage-calculator", description: "Compute percentages, changes & discounts" },
      { name: "Case Converter", url: "/tools/case-converter", description: "Convert text case easily" },
      { name: "CSS Unit Converter", url: "/tools/css-unit-converter", description: "Convert between px, em, rem & other CSS units" },
      { name: "SKU Generator", url: "/tools/sku-generator", description: "Generate unique SKU codes for products" },
      { name: "Email Tools", url: "/tools/email-tools", description: "Validate emails & manage email lists" },
      { name: "Speed Testing Tools", url: "/tools/speed-tools", description: "Test & optimize your website loading speed" },
    ],
  },
  {
    category: "Legal Pages",
    icon: <Scale className="w-5 h-5" />,
    links: [
      { name: "Privacy Policy", url: "/privacy", description: "How we collect and use your data" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions for using our services" },
      { name: "Refund Policy", url: "/refund", description: "Our refund and cancellation policy" },
    ],
  },
  {
    category: "External Resources",
    icon: <ExternalLink className="w-5 h-5" />,
    links: [
      { name: "GitHub", url: "https://github.com/samirsain", description: "Open-source projects and code", external: true },
      { name: "LinkedIn", url: "https://linkedin.com/in/samirsain", description: "Professional network and updates", external: true },
      { name: "Instagram", url: "https://instagram.com/codexmir", description: "Behind-the-scenes and updates", external: true },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 bg-gradient-to-br from-slate-50 via-purple-50/40 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6 text-gray-600 hover:text-gray-900">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight tracking-tight">
              Site <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Navigate through all pages and resources available on ZENVIQ Digital
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {pages.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {link.name}
                        </h3>
                        {link.external && (
                          <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2 mt-0.5" />
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* XML Sitemap Link */}
            <div className="mt-16 bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                For Search Engines
              </h2>
              <p className="text-gray-600 mb-4">
                Looking for the XML sitemap? Search engines can find it here:
              </p>
              <a
                href="https://www.zenviqdigital.in/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                sitemap.xml
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
