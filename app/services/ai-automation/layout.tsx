import type { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "AI Automation & Chatbot Development in Hanumangarh | ZENVIQ Digital",
  description: "Custom AI chatbots, workflow automation, and intelligent business solutions in Hanumangarh. ZENVIQ integrates GPT, LangChain & modern AI to automate your business 24/7.",
  keywords: ["AI automation Hanumangarh", "chatbot development Rajasthan", "AI agency India", "business automation Hanumangarh", "custom chatbot Hanumangarh"],
  openGraph: { title: "AI Automation & Chatbot Development | ZENVIQ Digital Hanumangarh" },
  alternates: { canonical: "https://www.zenviqdigital.in/services/ai-automation" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    { "@type": "ListItem", position: 3, name: "AI Automation", item: "https://www.zenviqdigital.in/services/ai-automation" },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <><JsonLd data={breadcrumbSchema} />{children}</>
}
