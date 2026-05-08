import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About ZENVIQ Digital | Best Digital Agency in Hanumangarh, Rajasthan",
    description: "ZENVIQ Digital is Hanumangarh's top-rated digital agency founded by Samir Sain. We deliver premium websites, AI automation, and SEO services to businesses across Rajasthan and India. Learn about our mission, values, and team.",
    keywords: [
        "about ZENVIQ Digital",
        "digital agency Hanumangarh",
        "Samir Sain Hanumangarh",
        "best web developer Hanumangarh",
        "IT company Hanumangarh Rajasthan",
        "website design company Rajasthan",
        "ZENVIQ founder",
        "top digital agency Rajasthan",
    ],
    openGraph: {
        title: "About ZENVIQ | Hanumangarh's Most Trusted Digital Agency",
        description: "Meet the team behind Hanumangarh's #1 digital agency. We craft premium websites, AI solutions, and growth strategies for businesses across India.",
    },
    alternates: {
        canonical: "https://www.zenviqdigital.in/about",
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
