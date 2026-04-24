import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio Gallery | Our Success Stories",
    description: "Explore ZENVIQ Digital's portfolio of premium web development, UI/UX design, and AI projects. See how we've helped businesses transform their digital presence.",
    keywords: ["web development portfolio", "UI/UX design showcase", "ZENVIQ projects", "digital agency work", "Next.js case studies"],
    openGraph: {
        title: "ZENVIQ Portfolio | Showcasing Digital Excellence",
        description: "A collection of our best work in web development, design, and AI automation. Witness the ZENVIQ impact.",
    }
}

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
