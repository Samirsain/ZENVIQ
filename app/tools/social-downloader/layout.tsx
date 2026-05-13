import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Social Media Video Downloader | Instagram, TikTok, Twitter & More",
    description: "Download videos from Instagram, TikTok, Twitter, Facebook & YouTube for free. Fast social media video saver tool by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/social-downloader" },
    openGraph: { title: "Free Social Media Downloader | ZENVIQ Digital", description: "Download videos from Instagram, TikTok, Twitter & more. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
