import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best Free AI Tools in 2025 | Complete Guide — ChatGPT, Claude, Gemini & More",
    description: "Discover the best free AI tools in 2025 — from ChatGPT to Claude AI, Midjourney, DALL-E 3 & more. Detailed reviews, features, pricing & tips. Complete AI tools guide.",
    keywords: [
        "free AI tools",
        "best AI tools 2025",
        "ChatGPT free",
        "Claude AI",
        "Google Gemini",
        "Midjourney",
        "DALL-E 3",
        "AI image generator",
        "AI writing tools",
        "free AI tools guide",
    ],
    alternates: { canonical: "https://www.zenviqdigital.in/blog/free-ai-tools-guide" },
    openGraph: {
        title: "Best Free AI Tools in 2025 | Complete Guide",
        description: "Discover the most powerful free AI tools. From ChatGPT to Claude AI — detailed reviews, features & pricing.",
        type: "article",
    },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
