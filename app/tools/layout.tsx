import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Digital Tools",
    description: "Boost your productivity with Zenviq's collection of free digital tools: SEO checkers, image generators, unit converters, and more. High-performance tools for modern creators.",
    keywords: ["free SEO tools", "online image generator", "CSS unit converter", "productivity tools online", "Zenviq tools"],
    openGraph: {
        title: "Zenviq Tools | Professional Resources for Digital Creators",
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
