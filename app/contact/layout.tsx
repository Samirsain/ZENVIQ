import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact ZENVIQ Digital — Free Consultation in Hanumangarh",
  description:
    "Get a free consultation from ZENVIQ Digital. Call +91-9352410667 or visit us in Hanumangarh, Rajasthan. Web development, SEO & AI automation quotes within 24h.",
  alternates: {
    canonical: "https://www.zenviqdigital.in/contact",
  },
  openGraph: {
    title: "Contact ZENVIQ Digital — Free Consultation in Hanumangarh",
    description:
      "Get a free consultation from ZENVIQ Digital. Web development, SEO & AI automation quotes within 24h. Call +91-9352410667.",
    url: "https://www.zenviqdigital.in/contact",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
