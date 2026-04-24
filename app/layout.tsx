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
  metadataBase: new URL("https://www.zenviqdigital.in"),
  title: {
    default: "ZENVIQ | Premium Web Development & AI Digital Agency",
    template: "%s | ZENVIQ Digital",
  },
  description:
    "ZENVIQ is a leading digital agency in India specializing in premium web development, Next.js applications, AI-driven automation, and result-oriented SEO solutions. Transform your digital presence today.",
  keywords: [
    "ZENVIQ Digital",
    "digital agency India",
    "web development services",
    "Next.js developers India",
    "AI automation solutions",
    "UI/UX design agency",
    "premium SEO agency",
    "WordPress development India",
    "custom software development",
    "digital transformation agency",
  ],
  authors: [{ name: "ZENVIQ", url: "https://www.zenviqdigital.in" }],
  creator: "ZENVIQ Digital",
  publisher: "ZENVIQ Digital",
  alternates: {
    canonical: "https://www.zenviqdigital.in",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
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
      {
        rel: "icon",
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "ZENVIQ | Premium Digital Solutions & AI Agency",
    description:
      "Transform your digital presence with ZENVIQ's expert web development, AI automation, and SEO services. We build high-performance digital products for global businesses.",
    type: "website",
    siteName: "ZENVIQ Digital",
    url: "https://www.zenviqdigital.in",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZENVIQ - Premium Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENVIQ | Leading Web Development & AI Agency",
    description:
      "Elevate your business with ZENVIQ's high-performance web solutions and AI-driven automation.",
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
  category: "technology",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ZENVIQ Digital",
  "url": "https://www.zenviqdigital.in",
  "logo": "https://www.zenviqdigital.in/logo.svg",
  "sameAs": [
    "https://twitter.com/zenviq",
    "https://linkedin.com/company/zenviq",
    "https://github.com/zenviq",
    "https://instagram.com/zenviq"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9352410667",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
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
      "url": "https://www.zenviqdigital.in"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "Services",
      "url": "https://www.zenviqdigital.in/services"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Blog",
      "url": "https://www.zenviqdigital.in/blog"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "AI Tools",
      "url": "https://www.zenviqdigital.in/ai-tools"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 5,
      "name": "Contact",
      "url": "https://www.zenviqdigital.in/contact"
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
