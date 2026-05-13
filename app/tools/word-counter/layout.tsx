import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Word Counter Online | Character, Sentence & Paragraph Counter",
    description: "Count words, characters, sentences & paragraphs instantly. Free online word counter tool with reading time estimation by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/word-counter" },
    openGraph: { title: "Free Word Counter | ZENVIQ Digital", description: "Count words, characters & paragraphs instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
