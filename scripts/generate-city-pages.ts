/**
 * Programmatic SEO Page Generator
 * Generates service×city pages from city-data.ts
 * 
 * Run: npx tsx scripts/generate-city-pages.ts
 */

import * as fs from "fs"
import * as path from "path"

// Service-specific offerings & whyUs data
const SERVICE_CONTENT: Record<string, { offerings: any[]; whyUs: any[] }> = {
  "web-development": {
    offerings: [
      { icon: "Globe", title: "Business Websites", desc: "Custom responsive websites for local businesses — fast, mobile-first, and SEO-optimized.", link: "/services/web-development" },
      { icon: "Code", title: "Next.js & React Apps", desc: "High-performance web applications using Next.js and React — the same tech used by Netflix and Uber.", link: "/services/web-development" },
      { icon: "Smartphone", title: "Mobile-First Design", desc: "Websites that look stunning on every device — mobile, tablet, and desktop with fluid layouts.", link: "/services/ui-ux-design" },
      { icon: "Search", title: "SEO-First Development", desc: "Every website includes built-in SEO — structured data, meta tags, sitemaps, and Core Web Vitals optimization.", link: "/services/seo-optimization" },
      { icon: "Shield", title: "WordPress Development", desc: "Custom WordPress themes and plugins — WooCommerce, Elementor, and headless WordPress setups.", link: "/services/web-development" },
      { icon: "Zap", title: "E-commerce Stores", desc: "Shopify and WooCommerce stores with Razorpay, UPI, and COD payment integration.", link: "/services/ecommerce-development" },
    ],
    whyUs: [
      { icon: "Zap", title: "Next.js Speed", desc: "Your website loads in under 1 second. Competitors using WordPress load in 3-4 seconds — that's our unfair advantage in Google rankings." },
      { icon: "Search", title: "SEO Built-In", desc: "Every website comes with structured data, meta tags, sitemaps, and Core Web Vitals optimization. Google loves our sites." },
      { icon: "Shield", title: "AI-Powered", desc: "We're the only agency in the region offering AI chatbots, workflow automation, and intelligent business tools." },
      { icon: "Star", title: "Transparent Pricing", desc: "No hidden fees. Fixed project-based pricing starting from ₹8,000. Free consultation before every project." },
      { icon: "Users", title: "Local Support", desc: "Same-day support, in-person meetings, and ongoing maintenance included with every project." },
      { icon: "Clock", title: "Fast Delivery", desc: "Standard websites delivered in 7-14 days. We follow agile methodology with weekly demos." },
    ],
  },
  "seo-services": {
    offerings: [
      { icon: "FileSearch", title: "Technical SEO Audit", desc: "Complete website audit — crawl errors, site speed, mobile issues, schema markup, and Core Web Vitals.", link: "/services/seo-optimization" },
      { icon: "Search", title: "On-Page SEO", desc: "Keyword research, meta tags, heading structure, internal linking, and content optimization.", link: "/services/seo-optimization" },
      { icon: "Target", title: "Local SEO", desc: "Google Business Profile optimization, local citations, Maps ranking, and location-specific content strategy.", link: "/services/seo-optimization" },
      { icon: "TrendingUp", title: "Content Strategy", desc: "Blog content planning, topic clusters, and long-form content that targets high-intent search queries.", link: "/blog" },
      { icon: "Link2", title: "Link Building", desc: "High-authority backlinks through guest posts, directory submissions, and digital PR campaigns.", link: "/services/seo-optimization" },
      { icon: "BarChart3", title: "Analytics & Reporting", desc: "Monthly reports with Google Search Console, keyword rankings, traffic growth, and conversion tracking.", link: "/services/seo-optimization" },
    ],
    whyUs: [
      { icon: "Zap", title: "Technical Edge", desc: "Our Next.js sites load in under 1 second. Google rewards fast websites with higher rankings — your competitors can't match this." },
      { icon: "Target", title: "Data-Driven", desc: "We use Ahrefs, SEMRush, and Google Search Console to find exact keywords your customers are searching for." },
      { icon: "Shield", title: "AI Search Ready", desc: "We optimize for AI search engines (ChatGPT, Perplexity, Google AI). Your business appears in AI-generated answers." },
      { icon: "Star", title: "Transparent Reports", desc: "Monthly reports with real metrics — keyword rankings, organic traffic, backlinks. No vanity metrics." },
      { icon: "Users", title: "Local Expertise", desc: "We understand the local market. Same-day support and deep knowledge of regional search patterns." },
      { icon: "Clock", title: "Quick Wins", desc: "Technical fixes, local listings, and on-page optimization show immediate improvement within 30 days." },
    ],
  },
  "digital-marketing": {
    offerings: [
      { icon: "Search", title: "SEO & Rankings", desc: "Rank on page 1 of Google with technical SEO, local optimization, and content strategy.", link: "/services/seo-optimization" },
      { icon: "Target", title: "Google Ads (PPC)", desc: "High-ROI Google Ads campaigns — search ads, display ads, and local service ads with conversion tracking.", link: "/services" },
      { icon: "Share2", title: "Social Media", desc: "Instagram, Facebook & LinkedIn management — content creation, scheduling, and paid promotions.", link: "/services" },
      { icon: "MessageSquare", title: "WhatsApp Marketing", desc: "Bulk messaging, WhatsApp Business API, chatbot automation, and broadcast campaigns.", link: "/services" },
      { icon: "Megaphone", title: "Content Marketing", desc: "Blog writing, video content, infographics, and thought leadership content.", link: "/blog" },
      { icon: "BarChart3", title: "Analytics & ROI", desc: "Google Analytics, conversion tracking, campaign reports, and data-driven optimization.", link: "/services" },
    ],
    whyUs: [
      { icon: "Zap", title: "AI-Powered Campaigns", desc: "We use AI tools to analyze competitors, find trending keywords, and optimize ad copy for maximum ROI." },
      { icon: "Target", title: "Local Market Expert", desc: "We understand the local market. Our campaigns target the right demographics and interests." },
      { icon: "Shield", title: "Transparent Reporting", desc: "Monthly reports with real metrics — leads generated, cost per acquisition, ROI, and growth trajectory." },
      { icon: "Star", title: "Full-Stack Capability", desc: "We build your website AND run your marketing. Seamless integration between website, landing pages, and ads." },
      { icon: "Users", title: "Dedicated Manager", desc: "Every client gets a dedicated point of contact. Weekly check-ins and proactive campaign optimization." },
      { icon: "Clock", title: "Fast Results", desc: "Google Ads live in 48 hours. Social media starts within a week. SEO improvements visible within 30 days." },
    ],
  },
  "ecommerce-development": {
    offerings: [
      { icon: "Globe", title: "Shopify Stores", desc: "Custom Shopify stores with professional themes, product catalogs, and payment integration.", link: "/services/ecommerce-development" },
      { icon: "Code", title: "WooCommerce", desc: "WordPress + WooCommerce stores with custom functionality, shipping, and inventory management.", link: "/services/ecommerce-development" },
      { icon: "Smartphone", title: "Mobile Commerce", desc: "Mobile-optimized shopping experiences with fast checkout, push notifications, and app-like UX.", link: "/services/ecommerce-development" },
      { icon: "Shield", title: "Payment Integration", desc: "Razorpay, Paytm, UPI, COD, and international payment gateways — secure and PCI-compliant.", link: "/services/ecommerce-development" },
      { icon: "BarChart3", title: "Analytics & CRM", desc: "Sales dashboards, customer analytics, abandoned cart recovery, and email automation.", link: "/services/ecommerce-development" },
      { icon: "Zap", title: "Shipping & Logistics", desc: "Shiprocket, Delhivery, and custom shipping integration with real-time tracking for customers.", link: "/services/ecommerce-development" },
    ],
    whyUs: [
      { icon: "Zap", title: "Fast Load Times", desc: "E-commerce sites that load in under 2 seconds. Slow sites lose 53% of mobile shoppers." },
      { icon: "Search", title: "E-commerce SEO", desc: "Product pages optimized for Google Shopping, rich snippets, and category page rankings." },
      { icon: "Shield", title: "Secure Payments", desc: "PCI-compliant payment integration with Razorpay, Paytm, UPI, and COD support." },
      { icon: "Star", title: "Conversion Optimized", desc: "Cart recovery, upselling, and checkout optimization that increase revenue by 20-40%." },
      { icon: "Users", title: "Ongoing Support", desc: "Product uploads, inventory management, and seasonal promotions — we handle everything." },
      { icon: "Clock", title: "2-4 Week Delivery", desc: "Fully functional e-commerce stores delivered in 2-4 weeks with thorough testing." },
    ],
  },
  "ai-automation": {
    offerings: [
      { icon: "Bot", title: "AI Chatbots", desc: "24/7 AI chatbots for WhatsApp, Instagram, and website — handle customer queries automatically.", link: "/services/ai-automation" },
      { icon: "Cpu", title: "Workflow Automation", desc: "Automate repetitive tasks — invoicing, follow-ups, data entry, and report generation.", link: "/services/ai-automation" },
      { icon: "MessageSquare", title: "WhatsApp AI", desc: "WhatsApp Business API with AI-powered auto-replies, catalog sharing, and order tracking.", link: "/services/ai-automation" },
      { icon: "Search", title: "AI Content Tools", desc: "AI-powered content generation, SEO optimization, and social media post creation.", link: "/services/ai-automation" },
      { icon: "BarChart3", title: "Smart Analytics", desc: "AI-driven business analytics — customer insights, sales predictions, and trend analysis.", link: "/services/ai-automation" },
      { icon: "Shield", title: "CRM Integration", desc: "Connect AI tools with your CRM, accounting software, and existing business systems.", link: "/services/ai-automation" },
    ],
    whyUs: [
      { icon: "Zap", title: "First in Region", desc: "We're the only agency in the region offering AI automation. Your competitors don't have this capability yet." },
      { icon: "Target", title: "Custom Solutions", desc: "No generic chatbots. We build AI solutions tailored to your specific business needs and customer base." },
      { icon: "Shield", title: "24/7 Operations", desc: "AI chatbots never sleep. Handle customer queries, qualify leads, and process orders round the clock." },
      { icon: "Star", title: "Cost Reduction", desc: "Reduce customer support costs by 60-80% while improving response times and customer satisfaction." },
      { icon: "Users", title: "Easy Integration", desc: "Seamless integration with WhatsApp, Instagram, your website, and existing business tools." },
      { icon: "Clock", title: "Quick Setup", desc: "Basic AI chatbots deployed in 3-5 days. Custom automation workflows in 1-2 weeks." },
    ],
  },
}

// Cities data (mirrors city-data.ts)
const CITIES_SLUGS = ["hanumangarh", "ganganagar", "bathinda", "nohar", "bikaner", "jodhpur"]
const SERVICE_KEYS = ["web-development", "seo-services", "digital-marketing", "ecommerce-development", "ai-automation"]

const appDir = path.resolve(__dirname, "../app")

let created = 0
let skipped = 0

for (const serviceKey of SERVICE_KEYS) {
  for (const citySlug of CITIES_SLUGS) {
    const folderName = `${serviceKey}-${citySlug}`
    const folderPath = path.join(appDir, folderName)

    // Skip existing manually-created pages
    if (fs.existsSync(folderPath)) {
      console.log(`⏭  Skipping ${folderName} (already exists)`)
      skipped++
      continue
    }

    fs.mkdirSync(folderPath, { recursive: true })

    const content = SERVICE_CONTENT[serviceKey]

    // Generate layout.tsx
    const layoutContent = `import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const city = getCityData("${citySlug}")
const service = getServiceData("${serviceKey}")

export const metadata: Metadata = city && service ? {
  title: \`\${service.title} in \${city.city} | Best \${service.shortTitle} Company | ZENVIQ Digital\`,
  description: \`Professional \${service.title.toLowerCase()} in \${city.city}, \${city.state} by ZENVIQ Digital. \${service.desc} Free consultation.\`,
  keywords: [
    \`\${service.title.toLowerCase()} \${city.city}\`,
    \`\${service.title.toLowerCase()} company \${city.city}\`,
    \`best \${service.title.toLowerCase()} \${city.city}\`,
    \`\${service.shortTitle.toLowerCase()} agency \${city.city}\`,
  ],
  openGraph: {
    title: \`\${service.title} in \${city.city} | ZENVIQ Digital\`,
    description: \`#1 \${service.title.toLowerCase()} company in \${city.city}. Free consultation.\`,
    url: \`https://www.zenviqdigital.in/${folderName}\`,
  },
  alternates: { canonical: \`https://www.zenviqdigital.in/${folderName}\` },
} : {}

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!city || !service) notFound()

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
      { "@type": "ListItem", position: 3, name: \`\${service.title} in \${city.city}\`, item: \`https://www.zenviqdigital.in/${folderName}\` },
    ],
  }

  const localBiz = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: \`ZENVIQ Digital — \${service.title} \${city.city}\`,
    description: \`Professional \${service.title.toLowerCase()} in \${city.city}, \${city.state}.\`,
    url: \`https://www.zenviqdigital.in/${folderName}\`,
    telephone: "+91-9352410667",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.city,
      addressRegion: city.state,
      postalCode: city.pin,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    priceRange: "₹₹",
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={localBiz} />
      <JsonLd data={faq} />
      {children}
    </>
  )
}
`

    // Generate page.tsx
    const pageContent = `import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = ${JSON.stringify(content.offerings, null, 2)}

const whyUs = ${JSON.stringify(content.whyUs, null, 2)}

export default function Page() {
  const city = getCityData("${citySlug}")
  const service = getServiceData("${serviceKey}")
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
`

    fs.writeFileSync(path.join(folderPath, "layout.tsx"), layoutContent)
    fs.writeFileSync(path.join(folderPath, "page.tsx"), pageContent)
    console.log(`✅ Created ${folderName}`)
    created++
  }
}

console.log(`\n🎉 Done! Created ${created} pages, skipped ${skipped} existing.`)
console.log(`📊 Total indexable city pages: ${created + skipped}`)
