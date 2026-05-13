"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const WHATSAPP_NUMBER = "919311908389"
const WHATSAPP_MESSAGE = "Hi Zenviq Digital Solution! I'm interested in your digital services. Can you help me?"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [pulseCount, setPulseCount] = useState(0)

  useEffect(() => {
    // Show button after a short delay for better UX
    const showTimer = setTimeout(() => setIsVisible(true), 1500)

    // Show tooltip after 5 seconds to grab attention
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 5000)

    // Hide tooltip after 10 seconds
    const hideTooltipTimer = setTimeout(() => setShowTooltip(false), 12000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(tooltipTimer)
      clearTimeout(hideTooltipTimer)
    }
  }, [])

  // Pulse animation every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative mr-1"
              >
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 max-w-[220px] border border-slate-100">
                  <p className="text-sm font-medium text-slate-800 leading-snug">
                    Need help? 💬
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Chat with us on WhatsApp
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
            onClick={() => setShowTooltip(false)}
          >
            {/* Pulse rings */}
            <span
              key={pulseCount}
              className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"
              style={{ animationDuration: "2s", animationIterationCount: 3 }}
            />
            <span
              key={`ring-${pulseCount}`}
              className="absolute -inset-1 rounded-full bg-[#25D366]/15 animate-pulse"
            />

            {/* Button */}
            <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-shadow duration-300 group-hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)]">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[30px]"
              >
                <path
                  d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.18 13.18 0 0 0 1.98 6.94L2.667 29.333l6.627-2.013a13.28 13.28 0 0 0 6.71 1.813h.005A13.284 13.284 0 0 0 16.004 2.667Zm0 24.326a11.03 11.03 0 0 1-5.623-1.54l-.404-.24-4.184 1.27 1.289-4.085-.263-.418a11.01 11.01 0 0 1-1.688-5.88 11.05 11.05 0 0 1 22.1-.005 11.06 11.06 0 0 1-11.227 10.898Zm6.053-8.273c-.332-.166-1.965-.97-2.27-1.08-.305-.112-.527-.167-.749.166-.221.333-.86 1.08-1.054 1.302-.194.221-.389.249-.721.083-.333-.166-1.404-.517-2.674-1.65-.988-.88-1.655-1.968-1.85-2.3-.193-.333-.02-.513.146-.679.15-.149.333-.388.5-.582.166-.194.221-.333.332-.555.112-.222.056-.416-.028-.583-.083-.166-.749-1.804-1.026-2.47-.27-.648-.545-.56-.749-.57-.194-.01-.416-.012-.638-.012a1.224 1.224 0 0 0-.887.416c-.305.333-1.165 1.138-1.165 2.775s1.193 3.22 1.359 3.442c.166.222 2.348 3.585 5.69 5.027.795.343 1.415.548 1.899.702.798.253 1.524.217 2.098.132.64-.095 1.965-.803 2.243-1.579.277-.776.277-1.44.194-1.579-.083-.139-.305-.222-.638-.389Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
