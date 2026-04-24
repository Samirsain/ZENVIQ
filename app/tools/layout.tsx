import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Digital Tools | Productivity Boosters by ZENVIQ",
    description: "Boost your productivity with ZENVIQ Digital's collection of free tools: SEO checkers, image generators, unit converters, and more. High-performance tools for modern creators.",
    keywords: ["free SEO tools India", "online image generator", "CSS unit converter", "productivity tools online", "ZENVIQ tools", "web tools for developers"],
    openGraph: {
        title: "ZENVIQ Tools | Professional Resources for Digital Creators",
        description: "Access a powerful ecosystem of free tools designed to simplify your workflow and enhance your digital output.",
    }
}

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
