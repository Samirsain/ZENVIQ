import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Free AI Image Generator Online | Text to Image, Art & Graphics",
    description: "Generate stunning AI images from text prompts. Free AI image generator tool for art, graphics & creative visuals by ZENVIQ Digital.",
    alternates: { canonical: "https://www.zenviqdigital.in/tools/image-generator" },
    openGraph: { title: "Free AI Image Generator | ZENVIQ Digital", description: "Generate AI images from text prompts instantly. Free tool by ZENVIQ." },
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
