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
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
})

import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenviqdigital.in"),
  title: {
    default: "ZENVIQ Digital | Best Web & AI Agency Hanumangarh",
    template: "%s | ZENVIQ Digital — Hanumangarh",
  },
  description:
    "ZENVIQ Digital — Hanumangarh's #1 web development, SEO & AI automation agency. Premium websites, e-commerce & digital marketing. Trusted by 50+ businesses.",
  keywords: [
    // Brand
    "ZENVIQ Digital",
    "ZENVIQ",
    "zenviq digital agency",
    // Primary — Hanumangarh (beat Dextor Labs)
    "best website development company in Hanumangarh",
    "website development company in Hanumangarh",
    "web development Hanumangarh",
    "website developer Hanumangarh",
    "website design Hanumangarh",
    "web design company Hanumangarh",
    "best digital marketing agency in Hanumangarh",
    "digital marketing company Hanumangarh",
    "SEO services Hanumangarh",
    "SEO company Hanumangarh",
    "best SEO company Hanumangarh",
    "local SEO Hanumangarh",
    "social media marketing Hanumangarh",
    "ecommerce website Hanumangarh",
    "IT company Hanumangarh",
    "app development Hanumangarh",
    "mobile app development Hanumangarh",
    "WhatsApp marketing Hanumangarh",
    "Google promotion Hanumangarh",
    // City-wise (Dextor Labs strategy — steal it)
    "website development company Ganganagar",
    "digital marketing company Ganganagar",
    "web developer Sri Ganganagar",
    "website development company Bathinda",
    "digital marketing company Bathinda",
    "SEO services Rajasthan",
    "web development company Rajasthan",
    "digital marketing agency Rajasthan",
    // Technology keywords (beat all competitors)
    "Next.js developer India",
    "React developer Hanumangarh",
    "WordPress developer Hanumangarh",
    "Shopify developer Rajasthan",
    "custom website development India",
    // Service keywords (from InstaVyapar & OmSoft)
    "Google first page promotion",
    "Google Ads management Hanumangarh",
    "PPC advertising Rajasthan",
    "SMO services Hanumangarh",
    "content marketing Hanumangarh",
    // AI advantage (no competitor has this)
    "AI automation agency India",
    "AI chatbot development India",
    "business automation Rajasthan",
    // Design keywords
    "UI/UX design agency Rajasthan",
    "graphic design Hanumangarh",
    "logo design Hanumangarh",
    // High-intent buyer keywords
    "affordable web development Hanumangarh",
    "website cost Hanumangarh",
    "best website developer near me",
    "hire web developer Hanumangarh",
  ],
  authors: [{ name: "Samir Sain", url: "https://samirsain.com" }],
  creator: "ZENVIQ Digital",
  publisher: "ZENVIQ Digital",
  alternates: {
    canonical: "https://www.zenviqdigital.in",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ZENVIQ Digital | Best Web & AI Agency Hanumangarh",
    description:
      "Hanumangarh's #1 web development, SEO & AI agency. Premium websites, e-commerce & digital marketing. Trusted by 50+ businesses.",
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
    title: "ZENVIQ Digital | Best Web & AI Agency Hanumangarh",
    description:
      "Best web development & digital marketing in Hanumangarh, Rajasthan. SEO, AI automation & WhatsApp marketing. Get free quote.",
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
    { "@type": "City", "name": "Sri Ganganagar" },
    { "@type": "City", "name": "Bathinda" },
    { "@type": "City", "name": "Nohar" },
    { "@type": "City", "name": "Bikaner" },
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
          "name": "Website Development in Hanumangarh",
          "description": "Custom website design and development using Next.js, WordPress, React, and Shopify for businesses in Hanumangarh, Ganganagar, and Rajasthan.",
          "url": "https://www.zenviqdigital.in/services/web-development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services in Hanumangarh",
          "description": "Technical SEO audits, keyword research, on-page optimization, link building, local SEO, and Google first page promotion for businesses in Hanumangarh.",
          "url": "https://www.zenviqdigital.in/services/seo-optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing & Google Promotion",
          "description": "Social media marketing, Google Ads, PPC, content marketing, WhatsApp marketing, and brand strategy for businesses in Hanumangarh and Rajasthan.",
          "url": "https://www.zenviqdigital.in/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation & Chatbot Development",
          "description": "Custom AI chatbots, WhatsApp automation, workflow automation, and intelligent business solutions for 24/7 customer support.",
          "url": "https://www.zenviqdigital.in/services/ai-automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Website Development in Hanumangarh",
          "description": "Shopify, WooCommerce, and custom e-commerce stores with Razorpay, UPI payment integration for online selling in India.",
          "url": "https://www.zenviqdigital.in/services/ecommerce-development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design Services in Hanumangarh",
          "description": "Premium user interface and experience design, wireframing, prototyping, and design systems for websites and mobile apps.",
          "url": "https://www.zenviqdigital.in/services/ui-ux-design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development in Hanumangarh",
          "description": "Custom mobile app development using React Native and Flutter for businesses in Hanumangarh and Rajasthan."
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${GeistMono.variable} ${jost.variable} antialiased`} suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <JsonLd data={siteNavigationSchema} />
        <JsonLd data={websiteSchema} />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DMSQMC1Q80"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DMSQMC1Q80');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="lazyOnload">
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
            disableTransitionOnChange
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
