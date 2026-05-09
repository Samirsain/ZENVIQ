import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Web Development in Hanumangarh | Best Web Design Company | ZENVIQ Digital",
  description:
    "Top-rated web development in Hanumangarh by ZENVIQ Digital. We build fast, SEO-optimized websites using Next.js, WordPress & React. 50+ projects. Free consultation — call now.",
  keywords: [
    "web development in Hanumangarh",
    "web development company in Hanumangarh",
    "web development Hanumangarh",
    "website development in Hanumangarh",
    "website developer in Hanumangarh",
    "best web development in Hanumangarh",
    "web design in Hanumangarh",
    "web design company Hanumangarh",
    "website design Hanumangarh",
    "best website developer in Hanumangarh",
    "best IT company Hanumangarh",
    "WordPress developer Hanumangarh",
    "ecommerce website Hanumangarh",
    "digital marketing Hanumangarh",
    "SEO company Hanumangarh",
    "app development Hanumangarh",
    "affordable web development Hanumangarh",
    "Next.js developer Hanumangarh",
    "React developer Hanumangarh",
  ],
  openGraph: {
    title: "Web Development in Hanumangarh | ZENVIQ Digital",
    description: "#1 web development company in Hanumangarh. Fast, SEO-optimized websites — Next.js, WordPress, React. 50+ projects. Free consultation.",
    url: "https://www.zenviqdigital.in/web-development-hanumangarh",
    type: "website",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/web-development-hanumangarh",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Web Development in Hanumangarh", item: "https://www.zenviqdigital.in/web-development-hanumangarh" },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZENVIQ Digital",
  description: "Top-rated web development company in Hanumangarh, Rajasthan. Specialising in custom web development, SEO, digital marketing, e-commerce, and AI automation services.",
  url: "https://www.zenviqdigital.in/web-development-hanumangarh",
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
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services in Hanumangarh",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    ],
  },
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
