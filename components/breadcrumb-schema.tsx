"use client"

import { usePathname } from "next/navigation"
import JsonLd from "@/components/json-ld"

const BASE_URL = "https://www.zenviqdigital.in"

/** Route → human-readable label */
const ROUTE_LABELS: Record<string, string> = {
  "": "Home",
  services: "Services",
  "web-development": "Web Development",
  "seo-optimization": "SEO Optimization",
  "ai-automation": "AI Automation",
  "ecommerce-development": "E-commerce Development",
  "ui-ux-design": "UI/UX Design",
  about: "About",
  contact: "Contact",
  gallery: "Portfolio",
  blog: "Blog",
  tools: "Free Tools",
  "ai-tools": "AI Tools",
  "web-development-hanumangarh": "Web Development Hanumangarh",
  "web-development-ganganagar": "Web Development Ganganagar",
  "web-development-bathinda": "Web Development Bathinda",
  sitemap: "Sitemap",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  refund: "Refund Policy",
  // Tool pages
  "emi-calculator": "EMI Calculator",
  "word-counter": "Word Counter",
  "qr-code-generator": "QR Code Generator",
  "color-palette": "Color Palette",
  "sku-generator": "SKU Generator",
  "ai-content-generator": "AI Content Generator",
  "speed-tools": "Speed Tools",
  "social-downloader": "Social Downloader",
  "pinterest-downloader": "Pinterest Downloader",
}

/**
 * BreadcrumbList JSON-LD schema — renders on every page.
 * Generates breadcrumbs from the URL path segments.
 * Per seo-schema skill: BreadcrumbList is ACTIVE and recommended.
 */
export default function BreadcrumbSchema() {
  const pathname = usePathname()

  // Don't render on homepage (no breadcrumb needed)
  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...segments.map((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/")
      const isLast = index === segments.length - 1
      const label =
        ROUTE_LABELS[segment] ||
        segment
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")

      return {
        "@type": "ListItem",
        position: index + 2,
        name: label,
        ...(isLast ? {} : { item: `${BASE_URL}${path}` }),
      }
    }),
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  }

  return <JsonLd data={breadcrumbSchema} />
}
