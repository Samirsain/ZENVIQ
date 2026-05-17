import { Metadata } from "next"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
    title: "Web Development & SEO Services in Hanumangarh | ZENVIQ Digital Agency",
    description: "ZENVIQ offers premium web development, SEO services, AI automation, e-commerce solutions, and digital marketing in Hanumangarh, Rajasthan. Best website developer in Hanumangarh. Get a free quote today.",
    keywords: [
        "web development Hanumangarh",
        "SEO services Hanumangarh",
        "website developer Hanumangarh",
        "digital marketing Hanumangarh",
        "best web design company Hanumangarh",
        "ecommerce website Hanumangarh",
        "WordPress development Rajasthan",
        "Next.js developer India",
        "AI automation services Rajasthan",
        "SEO company Hanumangarh",
        "website design Hanumangarh Rajasthan",
        "digital agency services Rajasthan",
        "affordable web development Hanumangarh",
        "social media marketing Hanumangarh",
    ],
    openGraph: {
        title: "Web Development & Digital Marketing Services in Hanumangarh | ZENVIQ",
        description: "Premium web development, SEO, AI automation & e-commerce services by Hanumangarh's #1 digital agency. Transform your business online with ZENVIQ Digital.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/services",
    },
}

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.zenviqdigital.in" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.zenviqdigital.in/services" },
    ],
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What web development services does ZENVIQ offer in Hanumangarh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ZENVIQ offers WordPress development, Next.js & React web apps, e-commerce stores (Shopify, WooCommerce), SEO services, AI automation & chatbots, UI/UX design, and digital marketing in Hanumangarh, Rajasthan.",
            },
        },
        {
            "@type": "Question",
            name: "How much does web development cost in Hanumangarh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Web development in Hanumangarh starts from ₹8,000 for a basic business website to ₹50,000+ for custom web applications and e-commerce stores. ZENVIQ offers transparent, project-based pricing with zero hidden fees.",
            },
        },
        {
            "@type": "Question",
            name: "Which is the best web development company in Hanumangarh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ZENVIQ Digital is the #1 rated web development company in Hanumangarh with 50+ projects delivered, 4.9★ Google rating, and 98% client retention. We use modern frameworks like Next.js (used by Netflix & Uber) for blazing-fast websites.",
            },
        },
        {
            "@type": "Question",
            name: "Does ZENVIQ provide SEO services in Hanumangarh?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! ZENVIQ provides comprehensive SEO services in Hanumangarh including technical SEO audits, local SEO, keyword optimization, content strategy, and link building. We help businesses rank on page 1 of Google.",
            },
        },
        {
            "@type": "Question",
            name: "Can ZENVIQ build AI chatbots for my business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. ZENVIQ is the only agency in Hanumangarh offering AI-powered chatbots for WhatsApp, Instagram, and websites. Our chatbots handle customer queries 24/7, qualify leads, and integrate with your existing CRM.",
            },
        },
    ],
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />
            {children}
        </>
    )
}
