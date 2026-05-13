import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Meta Caption Generator | Instagram, Facebook & LinkedIn Captions",
    description: "Generate engaging social media captions for Instagram, Facebook & LinkedIn. Free AI-powered caption generator by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/meta-caption" },
    openGraph: { title: "Free Meta Caption Generator | ZENVIQ Digital", description: "Generate social media captions for Instagram, Facebook & LinkedIn. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
