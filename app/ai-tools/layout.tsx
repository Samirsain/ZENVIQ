import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free AI Tools | Boost Your Productivity",
    description: "Explore ZENVIQ Digital's collection of free AI tools designed to streamline your workflow. From custom ChatGPT agents to automation scripts.",
    keywords: ["free AI tools", "ChatGPT agents", "productivity tools", "AI automation", "ZENVIQ tools"],
    openGraph: {
        title: "Free AI Tools by ZENVIQ | Sarter Solutions",
        description: "Discover powerful, free AI tools built by ZENVIQ Digital to help you automate tasks and boost efficiency.",
    }
}

export default function AIToolsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
