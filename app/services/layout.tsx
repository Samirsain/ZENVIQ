import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | Premium Web & AI Solutions",
    description: "Explore ZENVIQ Digital's high-performance services: WordPress development, Next.js apps, AI integration, SEO strategy, and UI/UX design. Build your digital empire with us.",
    keywords: ["WordPress development India", "Next.js services", "AI business integration", "premium SEO services India", "UI/UX design agency", "digital marketing services"],
    openGraph: {
        title: "ZENVIQ Services | High-Performance Digital Solutions",
        description: "From custom web development to AI-driven automation, discover how ZENVIQ Digital helps businesses scale in the digital age.",
    }
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
