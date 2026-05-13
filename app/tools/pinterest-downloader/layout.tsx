import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Pinterest Image & Video Downloader | Save Pins in HD",
    description: "Download Pinterest images and videos in HD quality for free. No login required. Fast Pinterest pin saver tool by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/pinterest-downloader" },
    openGraph: { title: "Free Pinterest Downloader | ZENVIQ Digital", description: "Download Pinterest images & videos in HD quality. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
