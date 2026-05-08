import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Work & Portfolio | Web Design Projects by ZENVIQ Hanumangarh",
    description: "Browse ZENVIQ Digital's portfolio of websites, e-commerce stores, and digital projects delivered for clients in Hanumangarh, Rajasthan and across India. See our best web design work.",
    keywords: [
        "web design portfolio Hanumangarh",
        "ZENVIQ projects",
        "website design examples Rajasthan",
        "digital agency portfolio India",
        "best websites designed in Hanumangarh",
        "Next.js project showcase",
    ],
    openGraph: {
        title: "ZENVIQ Portfolio | Web Design & Development Showcase",
        description: "Explore premium websites and digital solutions built by Hanumangarh's leading digital agency.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/gallery",
    },
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
