import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "E-commerce Website Development in Hanumangarh | ZENVIQ Digital",
  description: "Build a high-converting online store in Hanumangarh with ZENVIQ. Shopify, WooCommerce & custom e-commerce solutions with payment integration, inventory management & SEO.",
  keywords: ["ecommerce website Hanumangarh", "Shopify developer Hanumangarh", "WooCommerce Rajasthan", "online store Hanumangarh", "ecommerce development India"],
  openGraph: { title: "E-commerce Website Development in Hanumangarh | ZENVIQ" },
  alternates: { canonical: "https://www.zenviqdigital.in/services/ecommerce-development" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    { "@type": "ListItem", position: 3, name: "E-commerce Development", item: "https://www.zenviqdigital.in/services/ecommerce-development" },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><JsonLd data={breadcrumbSchema} />{children}</>
}
