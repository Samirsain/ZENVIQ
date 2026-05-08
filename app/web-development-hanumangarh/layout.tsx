import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Best Website Developer in Hanumangarh | Web Design Company | ZENVIQ",
  description:
    "Looking for the best website developer in Hanumangarh? ZENVIQ Digital builds fast, SEO-optimized websites using Next.js, WordPress & React. 50+ projects delivered. Free consultation available.",
  keywords: [
    "website developer Hanumangarh",
    "best website developer in Hanumangarh",
    "web development company Hanumangarh",
    "website design Hanumangarh",
    "web design company Hanumangarh",
    "best IT company Hanumangarh",
    "WordPress developer Hanumangarh",
    "ecommerce website Hanumangarh",
    "digital marketing Hanumangarh",
    "SEO company Hanumangarh",
    "app development Hanumangarh",
    "website cost Hanumangarh",
    "affordable website Hanumangarh",
  ],
  openGraph: {
    title: "Best Website Developer in Hanumangarh | ZENVIQ Digital",
    description: "#1 web development company in Hanumangarh. Next.js, WordPress, React websites. 50+ projects. Free consultation.",
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
  name: "ZENVIQ Digital — Hanumangarh",
  description: "Best website development company in Hanumangarh, Rajasthan. Custom web development, SEO, digital marketing, and AI automation services.",
  url: "https://www.zenviqdigital.in/web-development-hanumangarh",
  telephone: "+91-9352410667",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanumangarh",
    addressRegion: "Rajasthan",
    postalCode: "335513",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "29.5815", longitude: "74.3294" },
  areaServed: { "@type": "City", name: "Hanumangarh" },
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
