import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog | Insights on AI, Web & Digital Growth",
    description: "Stay ahead with the latest trends in AI automation, Next.js development, and SEO strategies. Expert insights from the ZENVIQ Digital team.",
    keywords: ["AI blog", "web development trends", "SEO tips 2024", "ZENVIQ insights", "digital transformation blog"],
    openGraph: {
        title: "ZENVIQ Blog | Empowering Your Digital Journey",
        description: "Expert articles on web technology, AI innovation, and business growth strategies.",
    }
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
