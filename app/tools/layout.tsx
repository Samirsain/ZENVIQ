import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Online Tools | Social Media Downloader, SEO Tools & More | ZENVIQ",
    description: "Free online tools by ZENVIQ Digital — Social media downloader (Instagram, TikTok, Twitter), content generators, SEO tools, and productivity utilities. No signup required.",
    keywords: [
        "free online tools",
        "social media downloader",
        "Instagram downloader free",
        "TikTok video downloader",
        "Twitter video downloader",
        "Pinterest image downloader",
        "free SEO tools",
        "content generator",
        "online tools ZENVIQ",
        "free productivity tools India",
    ],
    openGraph: {
        title: "Free Online Tools by ZENVIQ | Download, Generate & Optimize",
        description: "Access free social media downloaders, content generators, and SEO tools built by ZENVIQ Digital. No signup, no ads.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/tools",
    },
}

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
