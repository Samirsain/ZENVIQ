import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Case Converter Online | UPPERCASE, lowercase, Title Case & More",
    description: "Free online case converter tool — convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case & more. Instant conversion, no signup required.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/case-converter" },
    openGraph: { title: "Free Case Converter Online | ZENVIQ Digital", description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
