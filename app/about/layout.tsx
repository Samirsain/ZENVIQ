import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ZENVIQ Digital — Best Web Agency in Hanumangarh, Rajasthan",
  description:
    "Meet ZENVIQ Digital — Hanumangarh's #1 web development & AI agency. Founded by Samir Sain. 50+ projects delivered, 30+ happy clients across Rajasthan & India.",
  alternates: {
    canonical: "https://www.zenviqdigital.in/about",
  },
  openGraph: {
    title: "About ZENVIQ Digital — Best Web Agency in Hanumangarh",
    description:
      "Meet ZENVIQ Digital — Hanumangarh's #1 web development & AI agency. Founded by Samir Sain. 50+ projects delivered across Rajasthan.",
    url: "https://www.zenviqdigital.in/about",
    type: "website",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
