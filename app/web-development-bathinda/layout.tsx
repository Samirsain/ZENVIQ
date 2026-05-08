import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Best Website Developer in Bathinda | Web Design Company | ZENVIQ",
  description:
    "ZENVIQ Digital is the top website development company near Bathinda. Fast, SEO-optimized websites using Next.js, WordPress & Shopify. Digital marketing, SEO & AI automation. Free consultation.",
  keywords: [
    "website developer Bathinda",
    "best website developer Bathinda",
    "website development company in Bathinda",
    "web design company Bathinda",
    "digital marketing company Bathinda",
    "best digital marketing company in Bathinda",
    "SEO services Bathinda",
    "ecommerce website Bathinda",
    "IT company Bathinda",
    "app development Bathinda",
  ],
  openGraph: {
    title: "Best Website Developer in Bathinda | ZENVIQ Digital",
    description: "Top web development company near Bathinda. Next.js, WordPress, React websites. Affordable pricing. Free consultation.",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/web-development-bathinda",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Web Development in Bathinda", item: "https://www.zenviqdigital.in/web-development-bathinda" },
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ZENVIQ Digital — Bathinda",
  description: "Top website development company near Bathinda, Punjab. Web development, SEO, digital marketing, and AI automation services.",
  url: "https://www.zenviqdigital.in/web-development-bathinda",
  telephone: "+91-9352410667",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanumangarh",
    addressRegion: "Rajasthan",
    postalCode: "335513",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Bathinda" },
    { "@type": "City", name: "Hanumangarh" },
  ],
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
