import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Social Media Tools | Hashtag Generator, Bio Maker & Analytics",
    description: "Free social media toolkit — hashtag generator, bio maker, post scheduler & analytics. All-in-one social media tools by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/social-tools" },
    openGraph: { title: "Free Social Media Tools | ZENVIQ Digital", description: "Hashtag generator, bio maker & social analytics. Free tools by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
