import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = [
  {
    "icon": "Globe",
    "title": "Shopify Stores",
    "desc": "Custom Shopify stores with professional themes, product catalogs, and payment integration.",
    "link": "/services/ecommerce-development"
  },
  {
    "icon": "Code",
    "title": "WooCommerce",
    "desc": "WordPress + WooCommerce stores with custom functionality, shipping, and inventory management.",
    "link": "/services/ecommerce-development"
  },
  {
    "icon": "Smartphone",
    "title": "Mobile Commerce",
    "desc": "Mobile-optimized shopping experiences with fast checkout, push notifications, and app-like UX.",
    "link": "/services/ecommerce-development"
  },
  {
    "icon": "Shield",
    "title": "Payment Integration",
    "desc": "Razorpay, Paytm, UPI, COD, and international payment gateways — secure and PCI-compliant.",
    "link": "/services/ecommerce-development"
  },
  {
    "icon": "BarChart3",
    "title": "Analytics & CRM",
    "desc": "Sales dashboards, customer analytics, abandoned cart recovery, and email automation.",
    "link": "/services/ecommerce-development"
  },
  {
    "icon": "Zap",
    "title": "Shipping & Logistics",
    "desc": "Shiprocket, Delhivery, and custom shipping integration with real-time tracking for customers.",
    "link": "/services/ecommerce-development"
  }
]

const whyUs = [
  {
    "icon": "Zap",
    "title": "Fast Load Times",
    "desc": "E-commerce sites that load in under 2 seconds. Slow sites lose 53% of mobile shoppers."
  },
  {
    "icon": "Search",
    "title": "E-commerce SEO",
    "desc": "Product pages optimized for Google Shopping, rich snippets, and category page rankings."
  },
  {
    "icon": "Shield",
    "title": "Secure Payments",
    "desc": "PCI-compliant payment integration with Razorpay, Paytm, UPI, and COD support."
  },
  {
    "icon": "Star",
    "title": "Conversion Optimized",
    "desc": "Cart recovery, upselling, and checkout optimization that increase revenue by 20-40%."
  },
  {
    "icon": "Users",
    "title": "Ongoing Support",
    "desc": "Product uploads, inventory management, and seasonal promotions — we handle everything."
  },
  {
    "icon": "Clock",
    "title": "2-4 Week Delivery",
    "desc": "Fully functional e-commerce stores delivered in 2-4 weeks with thorough testing."
  }
]

export default function Page() {
  const city = getCityData("nohar")
  const service = getServiceData("ecommerce-development")
  if (!city || !service) notFound()

  return (
    <CityServiceTemplate
      city={city}
      service={service}
      offerings={offerings}
      whyUs={whyUs}
    />
  )
}
