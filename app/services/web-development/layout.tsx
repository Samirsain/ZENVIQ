import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Professional Web Development Services in Hanumangarh | ZENVIQ Digital",
  description:
    "Looking for expert web developers in Hanumangarh? ZENVIQ builds fast, SEO-optimized websites using Next.js, WordPress & React. Custom websites for businesses across Rajasthan. Get a free quote today.",
  keywords: [
    "web development Hanumangarh",
    "website developer Hanumangarh",
    "best web developer Hanumangarh",
    "Next.js developer Hanumangarh",
    "WordPress developer Hanumangarh",
    "React developer Rajasthan",
    "custom website development",
    "web design company Hanumangarh",
    "affordable web development Hanumangarh",
    "business website Hanumangarh",
  ],
  openGraph: {
    title: "Professional Web Development Services in Hanumangarh | ZENVIQ Digital",
    description:
      "Custom website development by Hanumangarh's #1 agency. Next.js, WordPress, React — fast, SEO-optimized websites that convert.",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/services/web-development",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Web Development",
      item: "https://www.zenviqdigital.in/services/web-development",
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services in Hanumangarh",
  description:
    "Custom website development using Next.js, WordPress, and React for businesses in Hanumangarh and Rajasthan.",
  provider: {
    "@type": "Organization",
    name: "ZENVIQ Digital",
    url: "https://www.zenviqdigital.in",
  },
  areaServed: [
    { "@type": "City", name: "Hanumangarh" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Web Development",
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {children}
    </>
  )
}
