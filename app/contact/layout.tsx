import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Strategy Consultation",
    description: "Get in touch with ZENVIQ Digital for expert consultation on web development, AI automation, and SEO. Book a strategy call or send us a message today.",
    keywords: ["contact ZENVIQ Digital", "book SEO consultation India", "hire Next.js developers", "AI strategy call", "digital agency contact"],
    openGraph: {
        title: "Contact ZENVIQ | Start Your Digital Transformation",
        description: "Ready to build something amazing? Reach out to ZENVIQ Digital for a free strategy session or project quote.",
    }
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
