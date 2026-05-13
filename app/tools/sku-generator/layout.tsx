import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free SKU Generator Online | Product SKU Code Creator",
    description: "Generate unique SKU codes for your products instantly. Free SKU generator tool for e-commerce businesses by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/sku-generator" },
    openGraph: { title: "Free SKU Generator | ZENVIQ Digital", description: "Generate unique product SKU codes instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
