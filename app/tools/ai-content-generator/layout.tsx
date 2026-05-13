import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free AI Content Generator Online | Blog, Social Media & Marketing Copy",
    description: "Generate high-quality AI-powered content for blogs, social media, marketing emails & more. Free online tool by ZENVIQ Digital. No signup required.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/ai-content-generator" },
    openGraph: { title: "Free AI Content Generator | ZENVIQ Digital", description: "AI-powered content generator for blogs, social media & marketing. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
