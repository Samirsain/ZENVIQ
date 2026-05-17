import CityServiceTemplate from "@/components/city-service-template"
import { getCityData, getServiceData } from "@/content/city-data"
import { notFound } from "next/navigation"

const offerings = [
  {
    "icon": "Bot",
    "title": "AI Chatbots",
    "desc": "24/7 AI chatbots for WhatsApp, Instagram, and website — handle customer queries automatically.",
    "link": "/services/ai-automation"
  },
  {
    "icon": "Cpu",
    "title": "Workflow Automation",
    "desc": "Automate repetitive tasks — invoicing, follow-ups, data entry, and report generation.",
    "link": "/services/ai-automation"
  },
  {
    "icon": "MessageSquare",
    "title": "WhatsApp AI",
    "desc": "WhatsApp Business API with AI-powered auto-replies, catalog sharing, and order tracking.",
    "link": "/services/ai-automation"
  },
  {
    "icon": "Search",
    "title": "AI Content Tools",
    "desc": "AI-powered content generation, SEO optimization, and social media post creation.",
    "link": "/services/ai-automation"
  },
  {
    "icon": "BarChart3",
    "title": "Smart Analytics",
    "desc": "AI-driven business analytics — customer insights, sales predictions, and trend analysis.",
    "link": "/services/ai-automation"
  },
  {
    "icon": "Shield",
    "title": "CRM Integration",
    "desc": "Connect AI tools with your CRM, accounting software, and existing business systems.",
    "link": "/services/ai-automation"
  }
]

const whyUs = [
  {
    "icon": "Zap",
    "title": "First in Region",
    "desc": "We're the only agency in the region offering AI automation. Your competitors don't have this capability yet."
  },
  {
    "icon": "Target",
    "title": "Custom Solutions",
    "desc": "No generic chatbots. We build AI solutions tailored to your specific business needs and customer base."
  },
  {
    "icon": "Shield",
    "title": "24/7 Operations",
    "desc": "AI chatbots never sleep. Handle customer queries, qualify leads, and process orders round the clock."
  },
  {
    "icon": "Star",
    "title": "Cost Reduction",
    "desc": "Reduce customer support costs by 60-80% while improving response times and customer satisfaction."
  },
  {
    "icon": "Users",
    "title": "Easy Integration",
    "desc": "Seamless integration with WhatsApp, Instagram, your website, and existing business tools."
  },
  {
    "icon": "Clock",
    "title": "Quick Setup",
    "desc": "Basic AI chatbots deployed in 3-5 days. Custom automation workflows in 1-2 weeks."
  }
]

export default function Page() {
  const city = getCityData("bathinda")
  const service = getServiceData("ai-automation")
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
