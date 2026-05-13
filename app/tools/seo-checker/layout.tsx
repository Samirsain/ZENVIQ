import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free SEO Checker Online | Analyze Website SEO Score & Issues",
    description: "Check your website's SEO score, meta tags, headings, images & more. Free SEO analysis tool by ZENVIQ Digital — instant website audit.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/seo-checker" },
    openGraph: { title: "Free SEO Checker | ZENVIQ Digital", description: "Analyze website SEO score & find issues. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
