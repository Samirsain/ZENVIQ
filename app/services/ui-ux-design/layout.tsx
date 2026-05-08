import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "UI/UX Design Services in Hanumangarh | ZENVIQ Digital Agency",
  description: "Premium UI/UX design services in Hanumangarh. User research, wireframing, interactive prototypes & design systems. ZENVIQ designs interfaces that convert visitors into customers.",
  keywords: ["UI UX design Hanumangarh", "web design Hanumangarh", "UI design Rajasthan", "UX design agency India", "Figma designer Hanumangarh"],
  openGraph: { title: "UI/UX Design Services in Hanumangarh | ZENVIQ Digital" },
  alternates: { canonical: "https://www.zenviqdigital.in/services/ui-ux-design" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    { "@type": "ListItem", position: 3, name: "UI/UX Design", item: "https://www.zenviqdigital.in/services/ui-ux-design" },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><JsonLd data={breadcrumbSchema} />{children}</>
}
