import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free GST Calculator Online | Calculate CGST, SGST & IGST Instantly",
    description: "Free online GST calculator — calculate CGST, SGST, IGST for any amount. Add or remove GST instantly. Tool by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/gst-calculator" },
    openGraph: { title: "Free GST Calculator | ZENVIQ Digital", description: "Calculate GST, CGST, SGST & IGST instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
