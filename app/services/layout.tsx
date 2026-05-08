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

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <JsonLd data={breadcrumbSchema} />
            {children}
        </>
    )
}
