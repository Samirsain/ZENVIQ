import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Best Website Developer in Sri Ganganagar | Web Design | ZENVIQ",
  description:
    "ZENVIQ Digital is the best website development company in Sri Ganganagar. We build fast, SEO-optimized websites using Next.js, WordPress & Shopify. Affordable pricing. Free consultation.",
  keywords: [
    "website developer Ganganagar",
    "best website developer Sri Ganganagar",
    "web development company Ganganagar",
    "website design Sri Ganganagar",
    "digital marketing company Ganganagar",
    "best digital marketing company in Ganganagar",
    "SEO services Ganganagar",
    "ecommerce website Ganganagar",
    "IT company Ganganagar",
    "app development Ganganagar",
    "web design company Sri Ganganagar",
  ],
  openGraph: {
    title: "Best Website Developer in Sri Ganganagar | ZENVIQ Digital",
    description: "#1 web development company near Sri Ganganagar. Next.js, WordPress, React websites. Affordable pricing.",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/web-development-ganganagar",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Web Development in Ganganagar", item: "https://www.zenviqdigital.in/web-development-ganganagar" },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZENVIQ Digital — Sri Ganganagar",
  description: "Best website development company near Sri Ganganagar. Custom web development, SEO, digital marketing, and AI automation services for businesses in Ganganagar.",
  url: "https://www.zenviqdigital.in/web-development-ganganagar",
  telephone: "+91-9352410667",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sri Ganganagar",
    addressRegion: "Rajasthan",
    postalCode: "335001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "29.9094", longitude: "73.8780" },
  areaServed: { "@type": "City", name: "Sri Ganganagar" },
  priceRange: "₹₹",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  )
}
