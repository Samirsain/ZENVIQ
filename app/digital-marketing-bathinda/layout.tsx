import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const city = getCityData("bathinda")
const service = getServiceData("digital-marketing")

export const metadata: Metadata = city && service ? {
  title: `${service.title} in ${city.city} | Best ${service.shortTitle} Company | ZENVIQ Digital`,
  description: `Professional ${service.title.toLowerCase()} in ${city.city}, ${city.state} by ZENVIQ Digital. ${service.desc} Free consultation.`,
  keywords: [
    `${service.title.toLowerCase()} ${city.city}`,
    `${service.title.toLowerCase()} company ${city.city}`,
    `best ${service.title.toLowerCase()} ${city.city}`,
    `${service.shortTitle.toLowerCase()} agency ${city.city}`,
  ],
  openGraph: {
    title: `${service.title} in ${city.city} | ZENVIQ Digital`,
    description: `#1 ${service.title.toLowerCase()} company in ${city.city}. Free consultation.`,
    url: `https://www.zenviqdigital.in/digital-marketing-bathinda`,
  },
  alternates: { canonical: `https://www.zenviqdigital.in/digital-marketing-bathinda` },
} : {}

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!city || !service) notFound()

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
      { "@type": "ListItem", position: 3, name: `${service.title} in ${city.city}`, item: `https://www.zenviqdigital.in/digital-marketing-bathinda` },
    ],
  }

  const localBiz = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ZENVIQ Digital — ${service.title} ${city.city}`,
    description: `Professional ${service.title.toLowerCase()} in ${city.city}, ${city.state}.`,
    url: `https://www.zenviqdigital.in/digital-marketing-bathinda`,
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
