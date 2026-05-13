import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free CSS Unit Converter | px, rem, em, vh, vw & More",
    description: "Convert CSS units instantly — px to rem, em to px, vh to px and more. Free online CSS unit converter tool by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/css-unit-converter" },
    openGraph: { title: "Free CSS Unit Converter | ZENVIQ Digital", description: "Convert between px, rem, em, vh, vw instantly. Free developer tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
