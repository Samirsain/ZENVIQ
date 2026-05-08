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
import LenisProvider from "@/components/lenis-provider"
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
    default: "ZENVIQ Digital | #1 Web Development & AI Agency in Hanumangarh",
    template: "%s | ZENVIQ Digital — Hanumangarh",
  },
  description:
    "ZENVIQ is Hanumangarh's top-rated digital agency delivering premium websites, AI-powered automation, and result-driven SEO. From local startups to national brands — we craft digital experiences that convert.",
  keywords: [
    "ZENVIQ Digital",
    "digital agency Hanumangarh",
    "web development Hanumangarh",
    "website design Hanumangarh",
    "best website developer Hanumangarh",
    "website developer Hanumangarh Rajasthan",
    "SEO services Hanumangarh",
    "SEO company Hanumangarh",
    "best SEO company Hanumangarh Rajasthan",
    "digital marketing Hanumangarh",
    "digital marketing agency Rajasthan",
    "social media marketing Hanumangarh",
    "best digital marketing company Hanumangarh",
    "ecommerce website Hanumangarh",
    "web design company Hanumangarh",
    "affordable web development Hanumangarh",
    "AI automation agency India",
    "Next.js developer India",
    "WordPress developer Hanumangarh",
    "Shopify developer Rajasthan",
    "IT company Hanumangarh",
    "graphic design Hanumangarh",
    "PPC advertising Rajasthan",
    "Google Ads management Hanumangarh",
    "local SEO Hanumangarh",
    "app development Hanumangarh",
    "web development company Rajasthan",
    "UI/UX design agency Rajasthan",
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
    title: "ZENVIQ Digital | Hanumangarh's Premier Web & AI Agency",
    description:
      "From stunning websites to intelligent automation — ZENVIQ is the digital partner businesses in Hanumangarh and beyond trust for results that matter.",
    type: "website",
    siteName: "ZENVIQ Digital",
    url: "https://www.zenviqdigital.in",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZENVIQ Digital — #1 Agency in Hanumangarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZENVIQ Digital | Best Web Development Agency in Hanumangarh",
    description:
      "Premium websites, AI automation & SEO by Hanumangarh's most trusted digital agency. Let's grow your brand together.",
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
  verification: {
    google: "5sxqpCrLHhb7nFlCL_f4kw9ubhs91zFx7BdY290Df08",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "name": "ZENVIQ Digital",
  "alternateName": ["ZENVIQ", "Zenviq Digital Agency", "ZENVIQ Web Development"],
  "url": "https://www.zenviqdigital.in",
  "logo": "https://www.zenviqdigital.in/logo.svg",
  "image": "https://www.zenviqdigital.in/og-image.jpg",
  "description": "ZENVIQ is Hanumangarh's #1 digital agency offering premium web development, SEO services, AI automation, e-commerce solutions, and digital marketing across Rajasthan and India.",
  "foundingDate": "2023",
  "founder": {
    "@type": "Person",
    "name": "Samir Sain",
    "url": "https://samirsain.com"
  },
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer, Online Payment",
  "openingHours": "Mo-Sa 09:00-20:00",
  "sameAs": [
    "https://twitter.com/zenviq",
    "https://linkedin.com/company/zenviq",
    "https://github.com/Samirsain",
    "https://instagram.com/zenviq",
    "https://www.zenviqdigital.in"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9352410667",
      "contactType": "customer service",
      "areaServed": ["IN", "Hanumangarh", "Rajasthan"],
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9352410667",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hanumangarh",
    "addressLocality": "Hanumangarh",
    "addressRegion": "Rajasthan",
    "postalCode": "335513",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.5815",
    "longitude": "74.3294"
  },
  "areaServed": [
    { "@type": "City", "name": "Hanumangarh" },
    { "@type": "State", "name": "Rajasthan" },
    { "@type": "Country", "name": "India" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development in Hanumangarh",
          "description": "Custom website design and development using Next.js, WordPress, and modern frameworks for businesses in Hanumangarh and Rajasthan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services Hanumangarh",
          "description": "Search engine optimization, keyword research, on-page SEO, technical SEO, and local SEO services for businesses in Hanumangarh."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing Hanumangarh",
          "description": "Social media marketing, content marketing, Google Ads, and brand strategy for businesses in Hanumangarh and Rajasthan."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation & Chatbot Development",
          "description": "Custom AI chatbots, workflow automation, and intelligent business solutions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Website Development",
          "description": "Shopify, WooCommerce, and custom e-commerce store development for online selling."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "30",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "SiteNavigationElement", "position": 1, "name": "Home", "url": "https://www.zenviqdigital.in" },
    { "@type": "SiteNavigationElement", "position": 2, "name": "Services", "url": "https://www.zenviqdigital.in/services" },
    { "@type": "SiteNavigationElement", "position": 3, "name": "About Us", "url": "https://www.zenviqdigital.in/about" },
    { "@type": "SiteNavigationElement", "position": 4, "name": "Blog", "url": "https://www.zenviqdigital.in/blog" },
    { "@type": "SiteNavigationElement", "position": 5, "name": "Portfolio", "url": "https://www.zenviqdigital.in/gallery" },
    { "@type": "SiteNavigationElement", "position": 6, "name": "Free Tools", "url": "https://www.zenviqdigital.in/tools" },
    { "@type": "SiteNavigationElement", "position": 7, "name": "Contact", "url": "https://www.zenviqdigital.in/contact" }
  ]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ZENVIQ Digital",
  "alternateName": "ZENVIQ",
  "url": "https://www.zenviqdigital.in",
  "description": "Hanumangarh's #1 digital agency — web development, SEO, AI automation & digital marketing services.",
  "publisher": {
    "@type": "Organization",
    "name": "ZENVIQ Digital"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.zenviqdigital.in/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best website developer in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZENVIQ Digital is Hanumangarh's top-rated website developer. We specialize in Next.js, WordPress, Shopify, and custom web development. Our team has delivered 50+ projects for businesses across Rajasthan with a 98% client retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a website cost in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website costs in Hanumangarh range from ₹5,000 for a basic business website to ₹50,000+ for custom e-commerce stores and web applications. ZENVIQ offers competitive, transparent pricing with no hidden fees. Contact us for a free quote."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best digital marketing agency in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ZENVIQ Digital is the best digital marketing agency in Hanumangarh, offering SEO, social media marketing, Google Ads, content marketing, and brand strategy. We help local businesses rank on page 1 of Google and grow their online presence."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide SEO services in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! ZENVIQ provides comprehensive SEO services in Hanumangarh including technical SEO audits, keyword research, on-page optimization, link building, local SEO, and content strategy. We've helped dozens of businesses achieve page 1 rankings on Google."
      }
    },
    {
      "@type": "Question",
      "name": "Can ZENVIQ build an e-commerce website in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! ZENVIQ builds high-converting e-commerce websites using Shopify, WooCommerce, and custom platforms. We handle everything from product setup and payment integration to SEO optimization and mobile-responsive design."
      }
    },
    {
      "@type": "Question",
      "name": "Does ZENVIQ offer social media marketing in Hanumangarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide full social media marketing services in Hanumangarh including Instagram marketing, Facebook Ads, content creation, community management, and brand awareness campaigns for businesses across Rajasthan."
      }
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
        <JsonLd data={websiteSchema} />
        <JsonLd data={faqSchema} />
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
            forcedTheme="light"
            enableSystem={false}
            disableTransitionOnChange={false}
          >
          <LenisProvider>
          <Header />
          <Suspense fallback={null}>{children}</Suspense>
          <Footer />
          </LenisProvider>
          <AIAssistant />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
