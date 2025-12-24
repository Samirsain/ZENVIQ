import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Zenviq, a premium digital agency specializing in AI-driven web development, SEO, and automation solutions. Discover our mission and the team behind our innovation.",
    keywords: ["about Zenviq", "digital agency mission", "Samir Sain", "AI innovation team"],
    openGraph: {
        title: "About Zenviq | Crafting the Future of AI & Web Solutions",
        description: "Discover our journey, mission, and the expert team building next-generation digital tools and services.",
    }
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
