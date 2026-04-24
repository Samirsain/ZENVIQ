import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | The Team Behind ZENVIQ Digital",
    description: "Learn about ZENVIQ Digital, a premium digital agency in India specializing in AI-driven web development, SEO, and automation solutions. Discover our mission to empower businesses with technology.",
    keywords: ["about ZENVIQ Digital", "digital agency India", "Samir Sain", "AI innovation team", "web development experts India"],
    openGraph: {
        title: "About ZENVIQ Digital | Crafting the Future of AI & Web Solutions",
        description: "Discover our journey, mission, and the expert team building next-generation digital tools and services at ZENVIQ.",
    }
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
