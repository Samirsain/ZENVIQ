import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import AIAssistant from "@/components/ai-assistant"
import { Toaster } from "@/components/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
})

import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  metadataBase: new URL("https://zenviq.com"),
  title: {
    default: "Zenviq | Premium Web Development & Digital Solutions Agency",
    template: "%s | Zenviq",
  },
  description:
    "Zenviq builds smarter digital solutions. We specialize in premium web development, UI/UX design, SEO, and AI-driven automation to help your business scale.",
  keywords: [
    "Zenviq",
    "digital agency",
    "web development services",
    "UI/UX design agency",
    "premium SEO solutions",
    "AI automation business",
    "performance optimization",
    "Next.js developers",
    "custom software development",
  ],
  authors: [{ name: "Zenviq", url: "https://zenviq.com" }],
  creator: "Zenviq",
  publisher: "Zenviq",
  alternates: {
    canonical: "https://zenviq.com",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Zenviq | Premium Digital Solutions Agency",
    description:
      "Transform your digital presence with Zenviq's expert web development, AI automation, and SEO services. Build smarter, scale faster.",
    type: "website",
    siteName: "Zenviq",
    url: "https://zenviq.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zenviq - Professional Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenviq | Premium Digital Solutions Agency",
    description:
      "Transform your digital presence with Zenviq's expert web development, AI automation, and SEO services.",
    site: "@zenviq",
    creator: "@zenviq",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zenviq",
  "url": "https://zenviq.com",
  "logo": "https://zenviq.com/logo.svg",
  "sameAs": [
    "https://twitter.com/zenviq",
    "https://linkedin.com/company/zenviq",
    "https://github.com/zenviq"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9352410667",
    "contactType": "customer service"
  }
}

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Home",
      "url": "https://zenviq.com"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "Services",
      "url": "https://zenviq.com/services"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Blog",
      "url": "https://zenviq.com/blog"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "AI Tools",
      "url": "https://zenviq.com/ai-tools"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistMono.variable} ${jost.variable} antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={siteNavigationSchema} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DMSQMC1Q80"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DMSQMC1Q80');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M3PP7N9C');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3PP7N9C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          <AIAssistant />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
