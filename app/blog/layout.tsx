import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog | Web Development, SEO & Digital Marketing Tips | ZENVIQ Hanumangarh",
    description: "Expert insights on web development, SEO strategies, AI automation, and digital marketing from ZENVIQ Digital — Hanumangarh's leading digital agency. Stay updated with latest trends.",
    keywords: [
        "web development blog Hanumangarh",
        "SEO tips Rajasthan",
        "digital marketing blog India",
        "AI automation insights",
        "ZENVIQ blog",
        "best SEO practices 2025",
        "Next.js development tips",
        "WordPress tutorials",
    ],
    openGraph: {
        title: "ZENVIQ Blog | Digital Marketing & Web Development Insights",
        description: "Expert articles on web development, SEO, AI, and business growth strategies from Hanumangarh's top digital agency.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/blog",
    },
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
