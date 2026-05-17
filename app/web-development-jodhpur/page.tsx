import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = [
  {
    "icon": "Globe",
    "title": "Business Websites",
    "desc": "Custom responsive websites for local businesses — fast, mobile-first, and SEO-optimized.",
    "link": "/services/web-development"
  },
  {
    "icon": "Code",
    "title": "Next.js & React Apps",
    "desc": "High-performance web applications using Next.js and React — the same tech used by Netflix and Uber.",
    "link": "/services/web-development"
  },
  {
    "icon": "Smartphone",
    "title": "Mobile-First Design",
    "desc": "Websites that look stunning on every device — mobile, tablet, and desktop with fluid layouts.",
    "link": "/services/ui-ux-design"
  },
  {
    "icon": "Search",
    "title": "SEO-First Development",
    "desc": "Every website includes built-in SEO — structured data, meta tags, sitemaps, and Core Web Vitals optimization.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "Shield",
    "title": "WordPress Development",
    "desc": "Custom WordPress themes and plugins — WooCommerce, Elementor, and headless WordPress setups.",
    "link": "/services/web-development"
  },
  {
    "icon": "Zap",
    "title": "E-commerce Stores",
    "desc": "Shopify and WooCommerce stores with Razorpay, UPI, and COD payment integration.",
    "link": "/services/ecommerce-development"
  }
]

const whyUs = [
  {
    "icon": "Zap",
    "title": "Next.js Speed",
    "desc": "Your website loads in under 1 second. Competitors using WordPress load in 3-4 seconds — that's our unfair advantage in Google rankings."
  },
  {
    "icon": "Search",
    "title": "SEO Built-In",
    "desc": "Every website comes with structured data, meta tags, sitemaps, and Core Web Vitals optimization. Google loves our sites."
  },
  {
    "icon": "Shield",
    "title": "AI-Powered",
    "desc": "We're the only agency in the region offering AI chatbots, workflow automation, and intelligent business tools."
  },
  {
    "icon": "Star",
    "title": "Transparent Pricing",
    "desc": "No hidden fees. Fixed project-based pricing starting from ₹8,000. Free consultation before every project."
  },
  {
    "icon": "Users",
    "title": "Local Support",
    "desc": "Same-day support, in-person meetings, and ongoing maintenance included with every project."
  },
  {
    "icon": "Clock",
    "title": "Fast Delivery",
    "desc": "Standard websites delivered in 7-14 days. We follow agile methodology with weekly demos."
  }
]

export default function Page() {
  const city = getCityData("jodhpur")
  const service = getServiceData("web-development")
  if (!city || !service) notFound()

  return (
    <CityServiceTemplate
      city={city}
      service={service}
      offerings={offerings}
      whyUs={whyUs}
    />
  )
}
