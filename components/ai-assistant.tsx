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

// ... existing imports
import { Calendar, ArrowUpRight } from "lucide-react"

// ... existing interface and SITE_DATA

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
  }, [messages, isTyping])

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

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text })
      })

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.text || "I'm having a little trouble thinking clearly. Please try again.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error(error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Connection error. Please check your internet or try again later.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Helper to render formatted text
  const renderFormattedText = (text: string) => {
    // 1. Handle Bullet Points (lines starting with - or 1.)
    const lines = text.split('\n');
    return lines.map((line, i) => {
      // Bold parsing: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);

      const content = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="text-indigo-700 dark:text-indigo-300 font-bold">{part.slice(2, -2)}</strong>;
        }
        // Link parsing: [text](url)
        const linkParts = part.split(/\[(.*?)\]\((.*?)\)/g);
        if (linkParts.length > 2) {
          const result = [];
          for (let k = 0; k < linkParts.length; k += 3) {
            result.push(linkParts[k]); // text before
            if (k + 1 < linkParts.length) {
              result.push(
                <a key={k} href={linkParts[k + 2]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  {linkParts[k + 1]} <ArrowUpRight className="inline w-3 h-3 mb-0.5" />
                </a>
              );
            }
          }
          return <span key={j}>{result}</span>
        }
        return <span key={j}>{part}</span>;
      });

      if (line.trim().startsWith('- ') || line.trim().match(/^\d+\./)) {
        return <div key={i} className="pl-4 mb-1">• {content}</div>
      }
      return <div key={i} className={`min-h-[1.2em] ${line === "" ? "h-2" : ""}`}>{content}</div>;
    });
  }

  // Check if message implies a meeting invite
  const hasMeetingInvoke = (text: string) => text.includes("calendly.com/zenviq");

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-indigo-600 hover:bg-indigo-700 animate-in zoom-in duration-300"
        size="lg"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[32rem] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-indigo-100 dark:border-indigo-900 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 ring-4 ring-indigo-500/10">
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 py-3 px-4 border-b bg-white/50 backdrop-blur-xl dark:bg-slate-900/50 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Zenviq AI</CardTitle>
                <span className="text-[10px] text-slate-500 font-medium">Digital Consultant • Online</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/50 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-slate-700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex flex-col ${message.isUser ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${message.isUser
                    ? "bg-indigo-600 text-white rounded-tr-sm"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800 rounded-tl-sm"
                    }`}
                >
                  <div className={`text-sm leading-relaxed ${!message.isUser ? "prose-sm" : ""}`}>
                    {message.isUser ? message.text : renderFormattedText(message.text)}
                  </div>
                </div>

                {/* Smart Action Button for AI Messages */}
                {!message.isUser && hasMeetingInvoke(message.text) && (
                  <div className="mt-2 ml-1 animate-in slide-in-from-left-2 duration-500">
                    <a
                      href="https://calendly.com/zenviq/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 text-xs font-bold rounded-xl transition-colors cursor-pointer border border-indigo-200"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Strategy Call
                    </a>
                  </div>
                )}

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce text-indigo-500" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce text-indigo-600" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="relative flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about web, AI, or pricing..."
                className="pr-12 text-sm bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 py-6 shadow-sm"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
                className="absolute right-1.5 w-9 h-9 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                Powered by <span className="font-semibold text-indigo-500">Zenviq Intelligence</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
