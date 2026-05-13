import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Website Speed Test Online | Page Load Performance Analyzer",
    description: "Test your website speed and performance for free. Analyze page load time, Core Web Vitals & get optimization tips. Speed testing tool by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/speed-tools" },
    openGraph: { title: "Free Website Speed Test | ZENVIQ Digital", description: "Test website speed & analyze Core Web Vitals. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
