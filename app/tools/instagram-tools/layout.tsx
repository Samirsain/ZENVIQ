import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Instagram Tools | Reels Downloader, Story Saver & Analytics",
    description: "Free Instagram tools — download Reels, save Stories, analyze profiles. All-in-one Instagram toolkit by ZENVIQ Digital. No login required.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/instagram-tools" },
    openGraph: { title: "Free Instagram Tools | ZENVIQ Digital", description: "Download Reels, save Stories & analyze profiles. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
