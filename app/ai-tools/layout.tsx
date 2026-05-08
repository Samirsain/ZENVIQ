import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free AI Tools | AI Chatbot & Automation Tools by ZENVIQ Hanumangarh",
    description: "Free AI-powered tools by ZENVIQ Digital Hanumangarh. AI content generators, chatbot builders, and automation tools to boost your business productivity. No signup required.",
    keywords: [
        "free AI tools India",
        "AI chatbot builder",
        "AI content generator free",
        "automation tools online",
        "ZENVIQ AI tools",
        "free ChatGPT tools",
        "AI productivity tools",
        "business automation Hanumangarh",
    ],
    openGraph: {
        title: "Free AI Tools by ZENVIQ Digital | Hanumangarh",
        description: "Powerful, free AI tools built by Hanumangarh's top digital agency. Automate tasks, generate content, and boost efficiency.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/ai-tools",
    },
}

export default function AIToolsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
