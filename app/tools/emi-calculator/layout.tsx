import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free EMI Calculator Online | Home Loan, Car Loan & Personal Loan",
    description: "Calculate EMI for home loans, car loans & personal loans instantly. Free EMI calculator with amortization schedule by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/emi-calculator" },
    openGraph: { title: "Free EMI Calculator | ZENVIQ Digital", description: "Calculate loan EMIs instantly with amortization schedule. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
