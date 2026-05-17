import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Projects — ZENVIQ Digital Hanumangarh",
  description:
    "See our portfolio — premium websites, e-commerce stores & AI solutions built by ZENVIQ Digital for businesses across Hanumangarh, Ganganagar & Rajasthan.",
  alternates: {
    canonical: "https://www.zenviqdigital.in/gallery",
  },
  openGraph: {
    title: "Portfolio & Projects — ZENVIQ Digital Hanumangarh",
    description:
      "Premium websites, e-commerce stores & AI solutions built by ZENVIQ Digital. 50+ projects across 10+ industries.",
    url: "https://www.zenviqdigital.in/gallery",
    type: "website",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
