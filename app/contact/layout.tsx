import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Zenviq for expert consultation on web development, AI tools, and SEO. Book a strategy call or send us a message today.",
    keywords: ["contact Zenviq", "book SEO consultation", "hire web developers", "AI strategy call"],
    openGraph: {
        title: "Contact Zenviq | Start Your Digital Transformation",
        description: "Ready to build something amazing? Reach out to Zenviq for a free strategy session or project quote.",
    }
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
