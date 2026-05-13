import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Content Generator Online | Blog Posts, Articles & Marketing Copy",
    description: "Generate engaging content for blogs, articles, and marketing campaigns. Free content creation tool by ZENVIQ Digital — no signup required.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/content-generator" },
    openGraph: { title: "Free Content Generator | ZENVIQ Digital", description: "Create blog posts, articles & marketing copy instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
