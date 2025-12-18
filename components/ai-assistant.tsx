"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const SITE_DATA = {
  agency: {
    name: "Zenviq",
    tagline: "Build Smarter Digital Solutions",
    description: "Zenviq is a modern Web & Marketing Agency that helps individuals, startups, and businesses build premium, fast, and visually powerful digital experiences.",
    experience: "8+ years",
    projects: "500+",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Modern UI/UX Practices"]
  },
  services: [
    { name: "WordPress Development", keywords: ["wordpress", "wp", "blog", "cms"], detail: "Expert WordPress solutions from custom themes to enterprise plugins. We focus on zero bloat and high security." },
    { name: "AI & Automation", keywords: ["ai", "automation", "chatbots", "workflow"], detail: "Future-proof business with custom AI agents, LLM integrations, and process automation." },
    { name: "Next.js & React Apps", keywords: ["nextjs", "react", "app", "dashboard"], detail: "Sub-second loading, modern apps built with Next.js 14 for ultimate performance and SEO." },
    { name: "E-commerce", keywords: ["shop", "ecommerce", "sell", "store", "shopify", "woocommerce"], detail: "High-converting online stores globally optimized for sales and easy management." },
    { name: "SEO & Content", keywords: ["seo", "traffic", "google", "ranking"], detail: "Data-driven SEO strategies that drive organic traffic and convert visitors into customers." },
    { name: "UI/UX Design", keywords: ["design", "ui", "ux", "figma", "visual"], detail: "Strategic, user-centric design that balances premium aesthetics with functional experience." }
  ],
  tools: [
    "AI Content Generator", "Image Generator", "SEO Checker", "GST Calculator",
    "EMI Calculator", "Word Counter", "CSS Unit Converter", "Pinterest Downloader",
    "Instagram Tools", "Meta Caption Generator", "SKU Generator", "Speed SEO Tools"
  ],
  process: [
    "Discovery & Strategy", "Agile Development (High-frequency sprints)", "Rigorous Testing", "Launch & Evolution"
  ],
  contact: {
    meeting: "https://calendly.com/zenviq/30min",
    whatsapp: "https://wa.me/919352410667",
    email: "info@zenviq.com",
    form: "/contact"
  }
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your Zenviq AI Assistant. 👋\n\nI can help you build premium, fast, and visually powerful digital experiences. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // AI Processing
    setTimeout(() => {
      const response = getSmartResponse(inputValue)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 800)
  }

  const getSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Language detection
    const isHindi = /[अ-ह]/.test(userInput)
    const isHinglish = /kya|kaise|btao|hai|sakte|ho|nhi|hu|bol|rha|mere|liye|web|site|karna|chah|rha/i.test(input)
    const lang = isHindi ? "hindi" : (isHinglish ? "hinglish" : "english")

    const findService = SITE_DATA.services.find(s => s.keywords.some(k => input.includes(k)))

    // Pricing queries
    if (input.includes("price") || input.includes("cost") || input.includes("kitna") || input.includes("paisa") || input.includes("charge")) {
      if (lang === "english") return "Pricing at Zenviq depends on your project's scope. We offer affordable and flexible custom quotes. Best way is to book a quick 30-min strategy call: " + SITE_DATA.contact.meeting
      return "Zenviq ki pricing project ke scope par depend karti hai. Hum affordable aur premium solutions dete hain. Sabse sahi rahega ki aap ek small consultation book karein: " + SITE_DATA.contact.meeting
    }

    // Tools queries
    if (input.includes("tool") || input.includes("calculator") || input.includes("generator")) {
      const toolList = SITE_DATA.tools.slice(0, 5).join(", ") + " and more."
      if (lang === "english") return `We have built several free tools for the community like: ${toolList}. You can check them all in our Tools section!`
      return `Humne kaafi saare useful tools banaye hain jaise: ${toolList}. Aap humare tools section mein inhe free use kar sakte hain!`
    }

    // Service specific
    if (findService) {
      if (lang === "english") return `${findService.name}: ${findService.detail}\n\nThis would be perfect for your goal. Shall we discuss a strategy for this?`
      return `${findService.name}: ${findService.detail}\n\nYeh aapke requirements ke liye best option hai. Kya hum iske baare mein aur baat karein?`
    }

    // Start project / Contact
    if (input.includes("start") || input.includes("contact") || input.includes("help") || input.includes("baat") || input.includes("kaam")) {
      if (lang === "english") return `Great! You can start by filling our contact form, chatting on WhatsApp (${SITE_DATA.contact.whatsapp}), or booking a call: ${SITE_DATA.contact.meeting}. What works best for you?`
      return `Zaroor! Aap project start karne ke liye humara form bhar sakte hain, WhatsApp par message kar sakte hain (${SITE_DATA.contact.whatsapp}), ya directly call schedule kar sakte hain: ${SITE_DATA.contact.meeting}. Aapko kya suit karega?`
    }

    // Greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("namaste")) {
      if (lang === "english") return "Hello! I'm the Zenviq AI Assistant. How can I help you build your next premium digital experience today?"
      return "Namaste! Main Zenviq AI Assistant hoon. Kaise help kar sakta hoon aapki digital journey mein?"
    }

    // Fallback
    if (lang === "english") return "I'm trained on all Zenviq data. I can tell you about our WordPress, AI, Next.js services, or our 500+ successful projects. What would you like to build today?"
    return "Main Zenviq ka intelligent assistant hoon. Hum WordPress, AI automation aur modern Next.js apps banate hain. Aap apna project discuss karne ke liye WhatsApp ya meeting link use kar sakte hain."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-indigo-600 hover:bg-indigo-700"
        size="lg"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 h-[calc(100vh-8rem)] sm:h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 border-b px-3 sm:px-6 bg-indigo-50/50 dark:bg-indigo-900/20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <CardTitle className="text-xs sm:text-sm font-bold tracking-tight">Zenviq AI</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-5 w-5 sm:h-6 sm:w-6 p-0 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 ${message.isUser
                    ? "bg-indigo-600 text-white shadow-md rounded-tr-none"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm rounded-tl-none"
                    }`}
                >
                  <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed font-medium">
                    {message.text}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-3 py-2 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-2 sm:p-4 border-t bg-gray-50/50 dark:bg-gray-800/20">
            <div className="flex gap-1.5 sm:gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Talk to Zenviq AI..."
                className="flex-1 text-xs sm:text-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="px-2 sm:px-3 h-8 sm:h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md group"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2 font-medium">Zenviq AI Assistant • Always Ready to Help</p>
          </div>
        </div>
      )}
    </>
  )
}
