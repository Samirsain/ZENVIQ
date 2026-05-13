import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free Email Tools Online | Email Validator, Extractor & Generator",
    description: "Free email utility tools — validate emails, extract addresses, generate professional emails. Online tool by ZENVIQ Digital, no signup required.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/email-tools" },
    openGraph: { title: "Free Email Tools | ZENVIQ Digital", description: "Validate, extract & generate emails instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
