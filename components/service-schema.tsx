import JsonLd from "@/components/json-ld"

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string[]
  priceRange?: string
}

/**
 * Service JSON-LD schema for individual service pages.
 * Per seo-schema skill: Service type is recommended for service pages.
 */
export default function ServiceSchema({
  name,
  description,
  url,
  provider = "ZENVIQ Digital",
  areaServed = ["Hanumangarh", "Sri Ganganagar", "Bathinda", "Rajasthan", "India"],
  priceRange = "₹8,000 - ₹1,00,000",
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://www.zenviqdigital.in${url}`,
    provider: {
      "@type": "ProfessionalService",
      name: provider,
      url: "https://www.zenviqdigital.in",
      image: "https://www.zenviqdigital.in/og-image.webp",
      telephone: "+91-9352410667",
      priceRange,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hanumangarh",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
        postalCode: "335513",
      },
    },
    areaServed: areaServed.map((area) => ({
      "@type": area === "India" ? "Country" : area === "Rajasthan" ? "State" : "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Packages`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            description,
          },
        },
      ],
    },
  }

  return <JsonLd data={serviceSchema} />
}
