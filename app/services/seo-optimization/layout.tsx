import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "SEO Services in Hanumangarh | Best SEO Company Rajasthan | ZENVIQ",
  description:
    "ZENVIQ provides expert SEO services in Hanumangarh — technical SEO audits, keyword research, on-page optimization, link building & local SEO. Rank #1 on Google. Get a free SEO audit today.",
  keywords: [
    "SEO services Hanumangarh",
    "SEO company Hanumangarh",
    "best SEO company Rajasthan",
    "local SEO Hanumangarh",
    "SEO agency Rajasthan",
    "Google ranking Hanumangarh",
    "SEO optimization Hanumangarh",
    "digital marketing SEO Rajasthan",
  ],
  openGraph: {
    title: "SEO Services in Hanumangarh | Best SEO Company | ZENVIQ Digital",
    description: "Rank #1 on Google with ZENVIQ's expert SEO services in Hanumangarh. Technical audits, keyword research, local SEO & content strategy.",
  },
  alternates: {
    canonical: "https://www.zenviqdigital.in/services/seo-optimization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    { "@type": "ListItem", position: 3, name: "SEO Optimization", item: "https://www.zenviqdigital.in/services/seo-optimization" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services in Hanumangarh",
  description: "Professional search engine optimization services including technical SEO, local SEO, keyword research, and content strategy for businesses in Hanumangarh.",
  provider: { "@type": "Organization", name: "ZENVIQ Digital", url: "https://www.zenviqdigital.in" },
  areaServed: [
    { "@type": "City", name: "Hanumangarh" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Search Engine Optimization",
}

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {children}
    </>
  )
}
