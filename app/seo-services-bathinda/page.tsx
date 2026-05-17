import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = [
  {
    "icon": "FileSearch",
    "title": "Technical SEO Audit",
    "desc": "Complete website audit — crawl errors, site speed, mobile issues, schema markup, and Core Web Vitals.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "Search",
    "title": "On-Page SEO",
    "desc": "Keyword research, meta tags, heading structure, internal linking, and content optimization.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "Target",
    "title": "Local SEO",
    "desc": "Google Business Profile optimization, local citations, Maps ranking, and location-specific content strategy.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "TrendingUp",
    "title": "Content Strategy",
    "desc": "Blog content planning, topic clusters, and long-form content that targets high-intent search queries.",
    "link": "/blog"
  },
  {
    "icon": "Link2",
    "title": "Link Building",
    "desc": "High-authority backlinks through guest posts, directory submissions, and digital PR campaigns.",
    "link": "/services/seo-optimization"
  },
  {
    "icon": "BarChart3",
    "title": "Analytics & Reporting",
    "desc": "Monthly reports with Google Search Console, keyword rankings, traffic growth, and conversion tracking.",
    "link": "/services/seo-optimization"
  }
]

const whyUs = [
  {
    "icon": "Zap",
    "title": "Technical Edge",
    "desc": "Our Next.js sites load in under 1 second. Google rewards fast websites with higher rankings — your competitors can't match this."
  },
  {
    "icon": "Target",
    "title": "Data-Driven",
    "desc": "We use Ahrefs, SEMRush, and Google Search Console to find exact keywords your customers are searching for."
  },
  {
    "icon": "Shield",
    "title": "AI Search Ready",
    "desc": "We optimize for AI search engines (ChatGPT, Perplexity, Google AI). Your business appears in AI-generated answers."
  },
  {
    "icon": "Star",
    "title": "Transparent Reports",
    "desc": "Monthly reports with real metrics — keyword rankings, organic traffic, backlinks. No vanity metrics."
  },
  {
    "icon": "Users",
    "title": "Local Expertise",
    "desc": "We understand the local market. Same-day support and deep knowledge of regional search patterns."
  },
  {
    "icon": "Clock",
    "title": "Quick Wins",
    "desc": "Technical fixes, local listings, and on-page optimization show immediate improvement within 30 days."
  }
]

export default function Page() {
  const city = getCityData("bathinda")
  const service = getServiceData("seo-services")
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
