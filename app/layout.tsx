import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import AIAssistant from "@/components/ai-assistant"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zenviq.com"),
  title: "Zenviq - Build Smarter Digital Solutions",
  description:
    "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Zenviq.",
  keywords: ["web development", "SEO", "AI tools", "automation", "digital agency", "WordPress", "e-commerce"],
  authors: [{ name: "Zenviq" }],
  creator: "Zenviq",
  publisher: "Zenviq",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
  },
  verification: {
    google: "ziDZd_lijC0FXqCM7zawWTZ5IXuosqWYbzNhYhSXNfI",
  },
  openGraph: {
    title: "Zenviq - Build Smarter Digital Solutions",
    description: "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Zenviq.",
    type: "website",
    siteName: "Zenviq",
    url: "https://zenviq.com",
    images: [
      {
        url: "/professional-corporate-business-website--hero-sect.jpg",
        width: 1200,
        height: 630,
        alt: "Zenviq - Professional Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenviq - Build Smarter Digital Solutions",
    description: "Professional web development, SEO, AI tools, and automation services. Transform your digital presence with Zenviq.",
    creator: "@zenviq",
    images: ["/professional-corporate-business-website--hero-sect.jpg"],
  },
  generator: "Zenviq",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${jost.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Suspense fallback={null}>{children}</Suspense>
          <AIAssistant />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
