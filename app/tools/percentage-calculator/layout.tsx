import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Percentage Calculator Online | Increase, Decrease & Difference",
    description: "Calculate percentages instantly — percentage increase, decrease, difference & more. Free percentage calculator by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/percentage-calculator" },
    openGraph: { title: "Free Percentage Calculator | ZENVIQ Digital", description: "Calculate percentage increase, decrease & difference instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
