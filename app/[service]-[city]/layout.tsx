import type { Metadata } from "next"
import { notFound } from "next/navigation"
import JsonLd from "@/components/json-ld"
import { CITIES, SERVICES, getCityData, getServiceData, getAllCityServiceSlugs } from "@/content/city-data"

interface Props {
  params: { service: string; city: string }
}

export function generateStaticParams() {
  return getAllCityServiceSlugs()
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityData(params.city)
  const service = getServiceData(params.service)
  if (!city || !service) return {}

  const title = `${service.title} in ${city.city} | Best ${service.shortTitle} Company | ZENVIQ Digital`
  const description = `Professional ${service.title.toLowerCase()} in ${city.city}, ${city.state} by ZENVIQ Digital. ${service.desc} Free consultation — call now.`
  const url = `https://www.zenviqdigital.in/${params.service}-${params.city}`

  return {
    title,
    description,
    keywords: [
      `${service.title.toLowerCase()} ${city.city}`,
      `${service.title.toLowerCase()} company ${city.city}`,
      `best ${service.title.toLowerCase()} ${city.city}`,
      `${service.title.toLowerCase()} services ${city.state}`,
      `${service.shortTitle.toLowerCase()} agency ${city.city}`,
    ],
    openGraph: { title, description, url, type: "website" },
    alternates: { canonical: url },
  }
}

export default function CityServiceLayout({ children, params }: Props & { children: React.ReactNode }) {
  const city = getCityData(params.city)
  const service = getServiceData(params.service)
  if (!city || !service) notFound()

  const url = `https://www.zenviqdigital.in/${params.service}-${params.city}`

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
      { "@type": "ListItem", position: 3, name: `${service.title} in ${city.city}`, item: url },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `ZENVIQ Digital — ${service.title} ${city.city}`,
    description: `Professional ${service.title.toLowerCase()} in ${city.city}, ${city.state}. ${service.desc}`,
    url,
    telephone: "+91-9352410667",
    image: "https://www.zenviqdigital.in/og-image.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.city,
      addressRegion: city.state,
      postalCode: city.pin,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    areaServed: [
      { "@type": "City", name: city.city },
      ...city.nearCities.map((c) => ({ "@type": "City" as const, name: c })),
    ],
    priceRange: "₹₹",
  }

  const faqSchema = {
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
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
