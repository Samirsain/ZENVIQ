import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Premium Services",
    description: "Explore Zenviq's high-performance services: WordPress development, Next.js apps, AI integration, SEO strategy, and UI/UX design. Build a scalable digital empire.",
    keywords: ["WordPress development", "Next.js services", "AI business integration", "premium SEO services", "UI/UX design agency"],
    openGraph: {
        title: "Zenviq Services | High-Performance Digital Solutions",
        description: "From custom web development to AI-driven automation, discover how Zenviq helps businesses scale in the digital age.",
    }
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
