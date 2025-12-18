"use client"

import { useState } from "react"
import { MessageCircle, Plus, Minus } from "lucide-react"
import Link from "next/link"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer comprehensive web development, SEO optimization, AI tools development, digital marketing, and automation services. Our team specializes in creating modern, responsive websites and digital solutions tailored to your business needs."
  },
  {
    id: "2",
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and requirements. Simple websites typically take 1-2 weeks, while complex applications may take 4-8 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the development process."
  },
  {
    id: "3",
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in building long-term relationships with our clients."
  },
  {
    id: "4",
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on the scope, complexity, and requirements. We offer competitive rates and provide detailed quotes after understanding your specific needs. Contact us for a personalized quote."
  },
  {
    id: "5",
    question: "Do you work with clients globally?",
    answer: "Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and can accommodate different time zones. We use modern communication tools to ensure smooth project management."
  },
  {
    id: "6",
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Next.js, Node.js, Python, and various AI/ML frameworks. We stay updated with the latest trends and choose the best technology stack for each project's specific requirements."
  },
  {
    id: "7",
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes! We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, and content strategy. We also provide digital marketing services to help grow your online presence and reach your target audience."
  },
  {
    id: "8",
    question: "Do you offer custom AI solutions?",
    answer: "Absolutely! We develop custom AI tools and automation solutions tailored to your business needs. From chatbots to data analysis tools, we can create AI-powered solutions that streamline your operations and improve efficiency."
  }
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1")

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="max-w-7xl sm:px-6 sm:mt-20 mt-8 mx-auto px-4 mb-20">
      <div className="relative overflow-hidden rounded-[40px] border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-white/5 to-transparent"></div>
        </div>

        <div className="relative sm:p-12 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Intro */}
            <div className="lg:col-span-5">
              <h2 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter leading-none mb-6">
                Questions.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mb-8">
                Find answers to common questions about our services, processes, and how we can help transform your brand.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 transition-colors shadow-sm"
              >
                Get in touch
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqData.map((item) => {
                  const isOpen = openId === item.id
                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border transition-all duration-300 ${isOpen
                        ? "border-indigo-100 bg-indigo-50/30 dark:border-indigo-500/30 dark:bg-indigo-500/5 shadow-sm"
                        : "border-gray-100 dark:border-white/5 bg-white dark:bg-white/5"
                        }`}
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-gray-900 dark:text-gray-200"
                          }`}>
                          {item.question}
                        </span>
                        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-indigo-600 dark:bg-indigo-500 text-white rotate-180" : "bg-gray-100 dark:bg-white/10 text-gray-500"
                          }`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
