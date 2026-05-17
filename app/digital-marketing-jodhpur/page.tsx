import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = [
  {
    "icon": "Search",
    "title": "SEO & Rankings",
    "desc": "Rank on page 1 of Google with technical SEO, local optimization, and content strategy.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "Target",
    "title": "Google Ads (PPC)",
    "desc": "High-ROI Google Ads campaigns — search ads, display ads, and local service ads with conversion tracking.",
    "link": "/services"
  },
  {
    "icon": "Share2",
    "title": "Social Media",
    "desc": "Instagram, Facebook & LinkedIn management — content creation, scheduling, and paid promotions.",
    "link": "/services"
  },
  {
    "icon": "MessageSquare",
    "title": "WhatsApp Marketing",
    "desc": "Bulk messaging, WhatsApp Business API, chatbot automation, and broadcast campaigns.",
    "link": "/services"
  },
  {
    "icon": "Megaphone",
    "title": "Content Marketing",
    "desc": "Blog writing, video content, infographics, and thought leadership content.",
    "link": "/blog"
  },
  {
    "icon": "BarChart3",
    "title": "Analytics & ROI",
    "desc": "Google Analytics, conversion tracking, campaign reports, and data-driven optimization.",
    "link": "/services"
  }
]

const whyUs = [
  {
    "icon": "Zap",
    "title": "AI-Powered Campaigns",
    "desc": "We use AI tools to analyze competitors, find trending keywords, and optimize ad copy for maximum ROI."
  },
  {
    "icon": "Target",
    "title": "Local Market Expert",
    "desc": "We understand the local market. Our campaigns target the right demographics and interests."
  },
  {
    "icon": "Shield",
    "title": "Transparent Reporting",
    "desc": "Monthly reports with real metrics — leads generated, cost per acquisition, ROI, and growth trajectory."
  },
  {
    "icon": "Star",
    "title": "Full-Stack Capability",
    "desc": "We build your website AND run your marketing. Seamless integration between website, landing pages, and ads."
  },
  {
    "icon": "Users",
    "title": "Dedicated Manager",
    "desc": "Every client gets a dedicated point of contact. Weekly check-ins and proactive campaign optimization."
  },
  {
    "icon": "Clock",
    "title": "Fast Results",
    "desc": "Google Ads live in 48 hours. Social media starts within a week. SEO improvements visible within 30 days."
  }
]

export default function Page() {
  const city = getCityData("jodhpur")
  const service = getServiceData("digital-marketing")
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
