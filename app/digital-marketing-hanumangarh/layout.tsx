import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Hanumangarh | ZENVIQ Digital",
  description:
    "Top-rated digital marketing company in Hanumangarh. SEO, Google Ads, social media marketing, WhatsApp marketing & content strategy. Get a free consultation today.",
  keywords: [
    "digital marketing Hanumangarh",
    "digital marketing company Hanumangarh",
    "best digital marketing agency Hanumangarh",
    "social media marketing Hanumangarh",
    "Google Ads Hanumangarh",
    "WhatsApp marketing Hanumangarh",
    "content marketing Rajasthan",
    "online marketing Hanumangarh",
    "digital marketing services Rajasthan",
    "affordable digital marketing Hanumangarh",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Hanumangarh | ZENVIQ Digital",
    description: "#1 digital marketing company in Hanumangarh. SEO, Google Ads, social media & WhatsApp marketing. Free consultation.",
    url: "https://www.zenviqdigital.in/digital-marketing-hanumangarh",
    type: "website",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/digital-marketing-hanumangarh",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Digital Marketing in Hanumangarh", item: "https://www.zenviqdigital.in/digital-marketing-hanumangarh" },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZENVIQ Digital — Digital Marketing Hanumangarh",
  description: "Best digital marketing agency in Hanumangarh, Rajasthan. SEO, Google Ads, social media marketing, WhatsApp marketing & content strategy for local businesses.",
  url: "https://www.zenviqdigital.in/digital-marketing-hanumangarh",
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
    name: "Digital Marketing Services in Hanumangarh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization (SEO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing" } },
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
      name: "Which is the best digital marketing company in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZENVIQ Digital is the best digital marketing company in Hanumangarh — offering SEO, Google Ads, social media marketing, WhatsApp marketing, and content strategy. We use data-driven strategies and AI-powered tools that traditional agencies don't have access to.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing services in Hanumangarh start from ₹5,000/month for basic social media management to ₹30,000+/month for comprehensive digital marketing including SEO, Google Ads, and content creation. ZENVIQ offers customized packages based on your goals and budget.",
      },
    },
    {
      "@type": "Question",
      name: "Does ZENVIQ offer WhatsApp marketing in Hanumangarh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! ZENVIQ provides complete WhatsApp marketing solutions in Hanumangarh — including bulk messaging, WhatsApp Business API setup, chatbot automation, catalog management, and broadcast campaigns. We also integrate WhatsApp with your website for instant lead capture.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run Google Ads for my Hanumangarh business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. ZENVIQ manages Google Ads campaigns for businesses in Hanumangarh with a focus on ROI — including search ads, display ads, and local service ads. We handle keyword research, ad copy, landing page optimization, and performance tracking.",
      },
    },
    {
      "@type": "Question",
      name: "What social media platforms does ZENVIQ manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manage Instagram, Facebook, LinkedIn, YouTube, and WhatsApp Business accounts for businesses in Hanumangarh. Our services include content creation, post scheduling, community management, paid promotions, and performance analytics.",
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
