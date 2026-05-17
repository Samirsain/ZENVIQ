export interface CityData {
  slug: string
  city: string
  state: string
  pin: string
  lat: string
  lng: string
  mapQuery: string
  population: string
  topIndustries: string[]
  nearCities: string[]
  uniqueInsight: string
  stats: { value: string; label: string }[]
  faqs: { q: string; a: string }[]
  seoContent: string[]
}

export const SERVICES = [
  {
    key: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    desc: "Custom websites using Next.js, WordPress, React & Shopify — built for speed and SEO.",
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    accent: "blue",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100",
  },
  {
    key: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    desc: "Rank on page 1 of Google with technical SEO, keyword optimization & local SEO strategies.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    accent: "amber",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    accentBorder: "border-amber-100",
  },
  {
    key: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    desc: "Google Ads, social media, WhatsApp marketing & content strategy for local businesses.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "emerald",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-100",
  },
  {
    key: "ecommerce-development",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    desc: "Sell online with Shopify & WooCommerce stores — Razorpay, UPI & COD payment integration.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    accent: "violet",
    accentBg: "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-100",
  },
  {
    key: "ai-automation",
    title: "AI Automation",
    shortTitle: "AI",
    desc: "24/7 AI chatbots for WhatsApp, Instagram & website — never miss a customer query again.",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    accent: "rose",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-100",
  },
] as const

export const CITIES: CityData[] = [
  {
    slug: "hanumangarh",
    city: "Hanumangarh",
    state: "Rajasthan",
    pin: "335513",
    lat: "29.5815",
    lng: "74.3294",
    mapQuery: "Hanumangarh%2C%20Rajasthan",
    population: "1.77 lakh",
    topIndustries: ["Agriculture & Agri-tech", "Textile & Ginning Mills", "Education & Coaching", "Retail & FMCG", "Healthcare & Clinics"],
    nearCities: ["Sri Ganganagar", "Nohar", "Bathinda", "Pilibanga"],
    uniqueInsight: "Hanumangarh is a fast-growing Tier-3 city in northern Rajasthan with a booming agri-economy. Local businesses here are rapidly digitizing but face a shortage of quality tech agencies — making it a prime market for modern web solutions.",
    stats: [
      { value: "50+", label: "Projects Delivered" },
      { value: "98%", label: "Client Retention" },
      { value: "<1s", label: "Page Load Time" },
      { value: "4.9★", label: "Google Rating" },
    ],
    faqs: [
      { q: "Who is the best web developer in Hanumangarh?", a: "ZENVIQ Digital is the top-rated web development company in Hanumangarh with 50+ projects, 4.9★ Google rating, and 98% client retention. We use Next.js, React, and WordPress." },
      { q: "How much does a website cost in Hanumangarh?", a: "Websites in Hanumangarh start from ₹8,000 for a basic business site to ₹50,000+ for e-commerce stores. ZENVIQ offers transparent, project-based pricing." },
      { q: "Does ZENVIQ provide SEO in Hanumangarh?", a: "Yes! Every ZENVIQ website includes built-in SEO — structured data, meta tags, sitemaps, and Core Web Vitals optimization to rank on Google." },
      { q: "How fast is delivery in Hanumangarh?", a: "Standard websites take 7-14 days. E-commerce stores take 2-4 weeks. Custom web apps take 4-8 weeks. We share a timeline during your free consultation." },
      { q: "Do you offer support after launch?", a: "Absolutely. Every project includes ongoing maintenance — security updates, content changes, performance optimization, and priority support." },
    ],
    seoContent: [
      "ZENVIQ Digital is the best {service} company in Hanumangarh, Rajasthan. Founded by Samir Sain, we specialize in professional {service} using modern frameworks like Next.js, WordPress, React, and Shopify.",
      "Unlike traditional agencies in Hanumangarh that use slow templates, ZENVIQ builds websites that load in under 1 second — giving you a massive advantage in Google rankings. Our clients span agriculture, textile, education, and healthcare businesses across Hanumangarh.",
      "With 50+ projects delivered and a 4.9★ Google rating, we are the most trusted {service} company in Hanumangarh. Our clients include businesses in Hanumangarh, Sri Ganganagar, Bathinda, and across Rajasthan.",
    ],
  },
  {
    slug: "ganganagar",
    city: "Sri Ganganagar",
    state: "Rajasthan",
    pin: "335001",
    lat: "29.9094",
    lng: "73.8780",
    mapQuery: "Sri%20Ganganagar%2C%20Rajasthan",
    population: "2.50 lakh",
    topIndustries: ["Agriculture & Food Processing", "Cotton & Textile", "Education & Institutes", "Government Services", "Retail & Wholesale"],
    nearCities: ["Hanumangarh", "Abohar", "Fazilka", "Suratgarh"],
    uniqueInsight: "Sri Ganganagar — known as the 'Food Basket of Rajasthan' — has a thriving agricultural economy. Local exporters, food processors, and educational institutions here need modern digital presence to compete regionally and nationally.",
    stats: [
      { value: "30+", label: "Ganganagar Projects" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "<1s", label: "Page Load Time" },
      { value: "4.9★", label: "Google Rating" },
    ],
    faqs: [
      { q: "Who is the best web developer in Sri Ganganagar?", a: "ZENVIQ Digital serves Sri Ganganagar with premium web development — Next.js, WordPress, React. 30+ projects delivered for Ganganagar businesses with 95% satisfaction." },
      { q: "How much does a website cost in Sri Ganganagar?", a: "Website development in Sri Ganganagar starts from ₹8,000. E-commerce stores from ₹25,000. ZENVIQ offers free consultations and transparent pricing." },
      { q: "Can you build an e-commerce site for a Ganganagar business?", a: "Yes! We specialize in Shopify and WooCommerce stores for Ganganagar businesses — with Razorpay, UPI, and COD payment integration." },
      { q: "Does ZENVIQ work remotely with Ganganagar clients?", a: "Yes. While we're based in nearby Hanumangarh, we serve Ganganagar businesses via video calls, screen sharing, and regular in-person visits." },
      { q: "Do you provide digital marketing in Sri Ganganagar?", a: "Absolutely. We offer SEO, Google Ads, social media marketing, and WhatsApp marketing for businesses in Sri Ganganagar." },
    ],
    seoContent: [
      "ZENVIQ Digital provides premium {service} in Sri Ganganagar, Rajasthan. As the nearest modern tech agency, we serve Ganganagar businesses with Next.js, WordPress, React, and Shopify development.",
      "Sri Ganganagar's economy is driven by agriculture, food processing, and education. We help local businesses — from kinnow exporters to coaching institutes — build blazing-fast websites that rank on Google and convert visitors to customers.",
      "With 30+ projects for Ganganagar clients and a 4.9★ Google rating, ZENVIQ is the most trusted {service} partner in the region. We provide same-week delivery, in-person meetings, and ongoing support.",
    ],
  },
  {
    slug: "bathinda",
    city: "Bathinda",
    state: "Punjab",
    pin: "151001",
    lat: "30.2110",
    lng: "74.9455",
    mapQuery: "Bathinda%2C%20Punjab",
    population: "3.50 lakh",
    topIndustries: ["Thermal Power & Energy", "Agriculture & Mandi", "Education & Universities", "Healthcare & Hospitals", "Retail & Shopping"],
    nearCities: ["Mansa", "Muktsar", "Faridkot", "Hanumangarh"],
    uniqueInsight: "Bathinda is Punjab's fastest-growing industrial city with a major thermal power hub and agricultural mandi. Businesses here are scaling digitally but lack access to premium web agencies — most rely on generic freelancers.",
    stats: [
      { value: "20+", label: "Bathinda Projects" },
      { value: "3x", label: "Avg Traffic Growth" },
      { value: "<1s", label: "Page Load Time" },
      { value: "4.9★", label: "Google Rating" },
    ],
    faqs: [
      { q: "Who provides web development in Bathinda?", a: "ZENVIQ Digital provides premium web development in Bathinda using Next.js, WordPress, and React. 20+ projects delivered for Bathinda businesses." },
      { q: "How much does web development cost in Bathinda?", a: "Web development in Bathinda starts from ₹8,000 for business websites to ₹50,000+ for custom web applications. Free consultation available." },
      { q: "Can ZENVIQ build a website for my Bathinda business?", a: "Yes! We serve Bathinda clients remotely and in-person. Our team delivers websites in 7-14 days with full SEO optimization included." },
      { q: "Does ZENVIQ offer SEO in Bathinda?", a: "Absolutely. We provide technical SEO, local SEO, and content strategy for Bathinda businesses to rank on page 1 of Google." },
      { q: "What industries do you serve in Bathinda?", a: "We serve energy, agriculture, education, healthcare, and retail businesses in Bathinda with custom web solutions and digital marketing." },
    ],
    seoContent: [
      "ZENVIQ Digital provides professional {service} in Bathinda, Punjab. We serve Bathinda businesses with modern web solutions using Next.js, WordPress, React, and Shopify.",
      "Bathinda's growing industrial economy — from thermal power to agricultural trade — needs modern digital infrastructure. ZENVIQ helps Bathinda businesses build fast, SEO-optimized websites that outperform competitors still using outdated WordPress templates.",
      "With 20+ projects delivered for Bathinda clients, ZENVIQ is the trusted {service} partner in the region. We offer same-week delivery, transparent pricing, and ongoing maintenance.",
    ],
  },
  {
    slug: "nohar",
    city: "Nohar",
    state: "Rajasthan",
    pin: "335523",
    lat: "29.1833",
    lng: "74.7667",
    mapQuery: "Nohar%2C%20Rajasthan",
    population: "55,000",
    topIndustries: ["Agriculture & Dairy", "Small Retail", "Education", "Handicrafts", "Local Services"],
    nearCities: ["Hanumangarh", "Bhadra", "Rawatsar", "Ellenabad"],
    uniqueInsight: "Nohar is an emerging town in Hanumangarh district where small businesses and local shops are just beginning their digital journey. There's virtually zero competition from web agencies here — first-mover advantage is massive.",
    stats: [
      { value: "10+", label: "Nohar Projects" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "<1s", label: "Page Load Time" },
      { value: "₹8K", label: "Starting Price" },
    ],
    faqs: [
      { q: "Is there a web developer in Nohar?", a: "ZENVIQ Digital serves Nohar businesses with premium web development. Based in nearby Hanumangarh, we provide in-person consultations and fast delivery for Nohar clients." },
      { q: "How much does a website cost in Nohar?", a: "Affordable websites in Nohar start from ₹8,000. ZENVIQ offers special pricing for small businesses and startups in Nohar." },
      { q: "Can ZENVIQ help my Nohar shop go online?", a: "Yes! We help Nohar businesses create Google Business profiles, build business websites, and set up e-commerce stores to sell online across India." },
      { q: "Do you provide digital marketing in Nohar?", a: "Absolutely. We offer Google Ads, social media marketing, and WhatsApp marketing to help Nohar businesses reach customers across Rajasthan." },
      { q: "How fast can you deliver a website in Nohar?", a: "Standard business websites for Nohar clients are delivered in 7-14 days. We provide free consultations via phone, video call, or in-person." },
    ],
    seoContent: [
      "ZENVIQ Digital is the go-to {service} provider for businesses in Nohar, Rajasthan. Based in nearby Hanumangarh, we serve Nohar with premium web solutions at affordable prices.",
      "Nohar's local businesses — from dairy farms to retail shops — deserve a modern digital presence. ZENVIQ helps Nohar businesses build professional websites, rank on Google, and reach customers across India.",
      "With 10+ projects for Nohar clients and 100% satisfaction, ZENVIQ is trusted by local businesses for {service}. We offer in-person meetings, affordable pricing from ₹8,000, and ongoing support.",
    ],
  },
  {
    slug: "bikaner",
    city: "Bikaner",
    state: "Rajasthan",
    pin: "334001",
    lat: "28.0229",
    lng: "73.3119",
    mapQuery: "Bikaner%2C%20Rajasthan",
    population: "6.44 lakh",
    topIndustries: ["Tourism & Hospitality", "Handicrafts & Textiles", "Namkeen & Food Processing", "Education", "Wool & Carpet Industry"],
    nearCities: ["Nokha", "Kolayat", "Deshnoke", "Nagaur"],
    uniqueInsight: "Bikaner is a major tourist city and India's namkeen capital. Hotels, handicraft sellers, and food brands here need e-commerce and booking websites to compete with larger cities — but most are stuck with outdated designs.",
    stats: [
      { value: "15+", label: "Bikaner Projects" },
      { value: "4x", label: "Avg Lead Growth" },
      { value: "<1s", label: "Page Load Time" },
      { value: "4.9★", label: "Google Rating" },
    ],
    faqs: [
      { q: "Who is the best web developer in Bikaner?", a: "ZENVIQ Digital provides premium web development in Bikaner — Next.js, WordPress, React, Shopify. 15+ projects with proven results for Bikaner businesses." },
      { q: "How much does a website cost in Bikaner?", a: "Websites in Bikaner start from ₹8,000 for business sites. Tourism websites and e-commerce stores from ₹25,000. Free consultation available." },
      { q: "Can you build an e-commerce website for a Bikaner namkeen brand?", a: "Absolutely! We specialize in food & FMCG e-commerce — Shopify stores with Razorpay, shipping integration, and inventory management for Bikaner brands." },
      { q: "Does ZENVIQ serve Bikaner remotely?", a: "Yes. We work with Bikaner clients via video calls and screen sharing. We also provide in-person visits for larger projects." },
      { q: "Do you provide hotel booking website development?", a: "Yes! We build custom hotel and tourism websites for Bikaner — with booking engines, Google Maps integration, and review management." },
    ],
    seoContent: [
      "ZENVIQ Digital provides professional {service} in Bikaner, Rajasthan. We help Bikaner businesses — from namkeen brands to heritage hotels — build modern, high-performance websites.",
      "Bikaner's tourism, handicraft, and food processing industries need modern digital infrastructure. ZENVIQ builds blazing-fast websites with e-commerce, booking engines, and SEO optimization to help Bikaner businesses reach customers worldwide.",
      "With 15+ projects for Bikaner clients and 4x average lead growth, ZENVIQ is the trusted {service} partner in the region. We combine Next.js performance with local market expertise.",
    ],
  },
  {
    slug: "jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    pin: "342001",
    lat: "26.2389",
    lng: "73.0243",
    mapQuery: "Jodhpur%2C%20Rajasthan",
    population: "12.0 lakh",
    topIndustries: ["Tourism & Heritage Hotels", "Handicrafts & Furniture", "Education & Coaching", "IT & Software", "Textiles & Bandhej"],
    nearCities: ["Pali", "Barmer", "Nagaur", "Jaisalmer"],
    uniqueInsight: "Jodhpur — the Blue City — is Rajasthan's second-largest city with a massive tourism economy. While there are many freelancers here, very few agencies offer Next.js-level performance and AI automation — ZENVIQ fills that gap.",
    stats: [
      { value: "10+", label: "Jodhpur Projects" },
      { value: "5x", label: "ROI for Clients" },
      { value: "<1s", label: "Page Load Time" },
      { value: "4.9★", label: "Google Rating" },
    ],
    faqs: [
      { q: "Who provides web development in Jodhpur?", a: "ZENVIQ Digital provides premium web development in Jodhpur using Next.js, React, WordPress, and Shopify. 10+ projects with 5x ROI for Jodhpur clients." },
      { q: "How much does a website cost in Jodhpur?", a: "Web development in Jodhpur starts from ₹10,000 for business websites. Tourism and e-commerce sites from ₹30,000. Free consultation available." },
      { q: "Can ZENVIQ build a tourism website for Jodhpur?", a: "Yes! We specialize in tourism & hospitality websites — hotel booking engines, tour package catalogs, and Google Maps integration for Jodhpur businesses." },
      { q: "Does ZENVIQ offer AI solutions in Jodhpur?", a: "Absolutely. We provide AI chatbots, workflow automation, and intelligent business tools for Jodhpur businesses. We're one of the few agencies offering AI services in Rajasthan." },
      { q: "Do you provide e-commerce development in Jodhpur?", a: "Yes! We build Shopify and WooCommerce stores for Jodhpur handicraft sellers, furniture makers, and textile businesses with nationwide shipping integration." },
    ],
    seoContent: [
      "ZENVIQ Digital provides premium {service} in Jodhpur, Rajasthan. We help Jodhpur businesses — from heritage hotels to handicraft exporters — build world-class websites.",
      "Jodhpur's tourism-driven economy needs modern digital infrastructure. ZENVIQ builds Next.js-powered websites that load in under 1 second, rank on Google, and convert visitors into paying customers.",
      "With 10+ projects for Jodhpur clients and 5x average ROI, ZENVIQ delivers measurable results. We combine cutting-edge technology with deep understanding of Rajasthan's market dynamics.",
    ],
  },
]

// Generate all service+city combinations for static params
export function getAllCityServiceSlugs() {
  const slugs: { service: string; city: string }[] = []
  for (const service of SERVICES) {
    for (const city of CITIES) {
      slugs.push({ service: service.key, city: city.slug })
    }
  }
  return slugs
}

export function getCityData(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug)
}

export function getServiceData(key: string) {
  return SERVICES.find((s) => s.key === key)
}
