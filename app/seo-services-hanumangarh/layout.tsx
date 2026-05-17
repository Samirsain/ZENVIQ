import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Best SEO Services in Hanumangarh | #1 SEO Company | ZENVIQ Digital",
  description:
    "Professional SEO services in Hanumangarh by ZENVIQ Digital. Technical SEO audits, local SEO, keyword optimization & content strategy. Rank #1 on Google — free consultation.",
  keywords: [
    "SEO services Hanumangarh",
    "SEO company Hanumangarh",
    "best SEO company in Hanumangarh",
    "SEO agency Hanumangarh",
    "local SEO Hanumangarh",
    "Google ranking Hanumangarh",
    "SEO expert Hanumangarh",
    "digital marketing SEO Rajasthan",
    "technical SEO Hanumangarh",
    "affordable SEO Hanumangarh",
  ],
  openGraph: {
    title: "SEO Services in Hanumangarh | ZENVIQ Digital",
    description: "#1 SEO company in Hanumangarh. Technical SEO, local SEO & content strategy. Free audit — call now.",
    url: "https://www.zenviqdigital.in/seo-services-hanumangarh",
    type: "website",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/seo-services-hanumangarh",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "SEO Services in Hanumangarh", item: "https://www.zenviqdigital.in/seo-services-hanumangarh" },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZENVIQ Digital — SEO Services Hanumangarh",
  description: "Professional SEO services in Hanumangarh, Rajasthan. Technical SEO, local SEO, keyword research, on-page optimization & content strategy to rank your business #1 on Google.",
  url: "https://www.zenviqdigital.in/seo-services-hanumangarh",
  telephone: "+91-9352410667",
  image: "https://www.zenviqdigital.in/og-image.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanumangarh",
    addressRegion: "Rajasthan",
    postalCode: "335513",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "29.5815", longitude: "74.3294" },
  areaServed: [
    { "@type": "City", name: "Hanumangarh" },
    { "@type": "City", name: "Sri Ganganagar" },
    { "@type": "City", name: "Bathinda" },
    { "@type": "City", name: "Nohar" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services in Hanumangarh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO Audit" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO Optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Page SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy & Link Building" } },
    ],
  },
  priceRange: "₹₹",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who provides the best SEO services in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZENVIQ Digital is the top-rated SEO company in Hanumangarh with proven results — helping businesses rank on page 1 of Google through technical SEO, keyword optimization, and content strategy.",
      },
    },
    {
      "@type": "Question",
      name: "How much do SEO services cost in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO services in Hanumangarh start from ₹5,000/month for basic local SEO to ₹25,000+/month for comprehensive SEO with content marketing and link building. ZENVIQ offers transparent, results-based pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see SEO results in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a long-term investment. Typically, local SEO results in Hanumangarh begin to show within 2-3 months, with significant ranking improvements at 4-6 months. ZENVIQ provides monthly progress reports.",
      },
    },
    {
      "@type": "Question",
      name: "Does ZENVIQ provide local SEO for Hanumangarh businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! ZENVIQ specializes in local SEO for Hanumangarh — including Google Business Profile optimization, local citation building, location-specific content, and Maps ranking improvement.",
      },
    },
    {
      "@type": "Question",
      name: "What makes ZENVIQ different from other SEO companies in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZENVIQ uses Next.js (the same framework used by Netflix & Uber) which gives websites a massive technical SEO advantage. We also offer AI-powered content strategy and are the only agency in Hanumangarh providing AI search optimization (appearing in ChatGPT, Perplexity results).",
      },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
