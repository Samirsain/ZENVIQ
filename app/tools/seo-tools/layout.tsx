import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free SEO Tools Online | Meta Tag Generator, Sitemap & Robot.txt Tools",
    description: "Free SEO utility tools — meta tag generator, sitemap creator, robots.txt builder & more. Essential SEO toolkit by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/seo-tools" },
    openGraph: { title: "Free SEO Tools | ZENVIQ Digital", description: "Meta tag generator, sitemap creator & SEO utilities. Free tools by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
