import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact ZENVIQ Digital | Free Consultation in Hanumangarh",
    description: "Contact ZENVIQ Digital for web development, SEO, and digital marketing services in Hanumangarh, Rajasthan. Book a free strategy call or request a quote. Phone: +91-9352410667.",
    keywords: [
        "contact digital agency Hanumangarh",
        "hire web developer Hanumangarh",
        "free SEO consultation Rajasthan",
        "book web design consultation",
        "ZENVIQ contact number",
        "website quote Hanumangarh",
        "digital marketing consultation Rajasthan",
    ],
    openGraph: {
        title: "Contact ZENVIQ | Get Free Digital Consultation in Hanumangarh",
        description: "Ready to grow your business? Contact Hanumangarh's best digital agency for a free strategy session. Web development, SEO & AI services.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
