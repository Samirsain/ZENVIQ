"use client"

import React, { useEffect, useRef, useCallback } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface ShowcaseItem {
  image: string
  title: string
  category: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    image: "/project/antiquity.png",
    title: "Antiquity Digital — Agency",
    category: "DIGITAL AGENCY",
  },
  {
    image: "/project/scrollinpanda.png",
    title: "ScrollinPanda — E-commerce",
    category: "E-COMMERCE",
  },
  {
    image: "/project/eliteballondecor.png",
    title: "Elite Decors — Events",
    category: "EVENT DECOR",
  },
  {
    image: "/project/halpinghand.png",
    title: "Helping Hands — NGO",
    category: "NONPROFIT",
  },
  {
    image: "/project/gmresort.png",
    title: "GM Resort — Hospitality",
    category: "HOSPITALITY",
  },
  {
    image: "/project/dantel.png",
    title: "Dantel — Creative Site",
    category: "WEB DESIGN",
  },
  {
    image: "/project/relible.png",
    title: "Reliable Diagnostics",
    category: "HEALTHCARE",
  },
]

export default function GsapShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    position: 0,
    velocity: 0,
    smoothPos: 0,
    isDragging: false,
    lastX: 0,
    dragStartX: 0,
    dragStartTime: 0,
    touchStartX: null as number | null,
    itemW: 0,
    totalWidth: 0,
    visibleCenterX: 0,
    cards: [] as HTMLElement[],
    originalCount: 0,
    tickerAdded: false,
  })

  const FRICTION = 0.91
  const WHEEL_MULT = 0.1
  const LERP = 0.14
  const CLONE_COUNT = 3

  const wrap = useCallback((x: number) => {
    const tw = stateRef.current.totalWidth
    return ((x % tw) + tw) % tw
  }, [])

  const easeScale = useCallback((t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }, [])

  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    const s = stateRef.current
    // Clone cards for infinite scroll
    const originals = Array.from(track.children) as HTMLElement[]
    s.originalCount = originals.length
    track.innerHTML = ""
    for (let c = 0; c < CLONE_COUNT; c++) {
      originals.forEach((el) => track.appendChild(el.cloneNode(true)))
    }
    s.cards = Array.from(track.children) as HTMLElement[]

    const measure = () => {
      if (!s.cards[0]) return
      const style = getComputedStyle(s.cards[0])
      s.itemW = s.cards[0].offsetWidth + parseFloat(style.marginRight || "0")
      s.totalWidth = s.itemW * s.cards.length
      s.visibleCenterX = window.innerWidth / 2
    }
    measure()

    // Wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      s.velocity += e.deltaY * WHEEL_MULT
    }
    window.addEventListener("wheel", onWheel, { passive: false })

    // Touch
    const onTouchStart = (e: TouchEvent) => { s.touchStartX = e.touches[0].clientX }
    const onTouchMove = (e: TouchEvent) => {
      if (s.touchStartX === null) return
      const dx = e.touches[0].clientX - s.touchStartX
      s.position -= dx
      s.touchStartX = e.touches[0].clientX
    }
    const onTouchEnd = () => { s.touchStartX = null }
    viewport.addEventListener("touchstart", onTouchStart, { passive: true })
    viewport.addEventListener("touchmove", onTouchMove, { passive: true })
    viewport.addEventListener("touchend", onTouchEnd)

    // Mouse drag
    const onMouseDown = (e: MouseEvent) => {
      s.isDragging = true
      s.lastX = e.clientX
      s.dragStartX = e.clientX
      s.dragStartTime = performance.now()
      s.velocity = 0
      viewport.classList.add("cursor-grabbing")
    }
    const onMouseUp = (e: MouseEvent) => {
      if (!s.isDragging) return
      viewport.classList.remove("cursor-grabbing")
      s.isDragging = false
      const dx = e.clientX - s.dragStartX
      const dt = (performance.now() - s.dragStartTime) / 1000
      if (dt > 0) {
        const v = -(dx / dt) * 0.03
        s.velocity = Math.max(Math.min(v, 30), -30)
      }
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!s.isDragging) return
      const dx = e.clientX - s.lastX
      s.position -= dx * 0.8
      s.lastX = e.clientX
    }
    viewport.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)
    viewport.addEventListener("mousemove", onMouseMove)

    // Ticker
    const tick = () => {
      if (!s.isDragging) {
        s.position += s.velocity
        s.velocity *= FRICTION
      }
      s.smoothPos += (s.position - s.smoothPos) * LERP

      for (let i = 0; i < s.cards.length; i++) {
        let baseX = i * s.itemW - s.smoothPos
        baseX = wrap(baseX)
        const finalX = baseX - s.totalWidth / 2 + s.visibleCenterX
        const cardCenterX = finalX + s.itemW / 2
        const dist = Math.abs(cardCenterX - s.visibleCenterX)
        let t = gsap.utils.clamp(0, 1, dist / Math.max(window.innerWidth, 900))
        t = easeScale(t)

        const scale = gsap.utils.mapRange(0, 1, 1, 0.65, t)
        const rotY = gsap.utils.mapRange(0, 1, 0, 20, t) * (cardCenterX < s.visibleCenterX ? 1 : -1)
        const rotX = gsap.utils.mapRange(0, 1, 0, 6, t) * (cardCenterX < s.visibleCenterX ? -1 : 1)
        const z = gsap.utils.mapRange(0, 1, 120, -60, t)
        const yOff = gsap.utils.mapRange(0, 1, 0, 40, t)
        const blur = gsap.utils.mapRange(0, 1, 0, 6, t)
        const brightness = gsap.utils.mapRange(0, 1, 1, 0.6, t)

        gsap.set(s.cards[i], {
          x: finalX,
          y: yOff,
          scaleX: scale,
          scaleY: scale,
          rotationY: rotY,
          rotationX: rotX,
          z,
          filter: `blur(${blur}px) brightness(${brightness})`,
          transformOrigin: "center center",
        })

        const parallaxRange = 40
        const img = s.cards[i].querySelector(".gsap-card-img") as HTMLElement
        if (img) {
          const px = gsap.utils.mapRange(
            -window.innerWidth / 2, window.innerWidth / 2,
            parallaxRange, -parallaxRange,
            cardCenterX - s.visibleCenterX
          )
          const py = gsap.utils.mapRange(
            -window.innerWidth / 2, window.innerWidth / 2,
            -10, 10,
            cardCenterX - s.visibleCenterX
          )
          gsap.to(img, { x: px, y: py, duration: 0.45, ease: "power2.out" })
        }
      }
    }

    gsap.ticker.add(tick)
    s.tickerAdded = true

    const onResize = () => measure()
    window.addEventListener("resize", onResize)

    return () => {
      gsap.ticker.remove(tick)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("resize", onResize)
      viewport.removeEventListener("touchstart", onTouchStart)
      viewport.removeEventListener("touchmove", onTouchMove)
      viewport.removeEventListener("touchend", onTouchEnd)
      viewport.removeEventListener("mousedown", onMouseDown)
      viewport.removeEventListener("mousemove", onMouseMove)
    }
  }, [wrap, easeScale])

  return (
    <section className="relative w-full bg-slate-950 overflow-hidden py-16 sm:py-20">
      {/* Header */}
      <div className="container mx-auto px-4 mb-8 sm:mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-white/10"
        >
          <Star className="w-4 h-4 fill-current" />
          Our Showcase
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
          style={{ letterSpacing: "-1.5px" }}
        >
          Work That{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Speaks
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="text-white/50 text-base sm:text-lg max-w-lg mx-auto"
        >
          Drag or scroll to explore our latest projects in 3D.
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full flex items-end justify-center"
        style={{ perspective: "1200px", height: "38vh", minHeight: "320px" }}
      >
        <div
          ref={viewportRef}
          className="w-full h-full overflow-visible flex items-end justify-start relative cursor-grab select-none"
        >
          <div
            ref={trackRef}
            className="absolute bottom-4 left-0 h-full"
            style={{ willChange: "transform" }}
          >
            {showcaseItems.map((item, i) => (
              <div
                key={i}
                className="absolute bottom-0 overflow-hidden"
                style={{
                  width: "clamp(260px, 30vw, 400px)",
                  aspectRatio: "16/9",
                  marginRight: "48px",
                  transformStyle: "preserve-3d",
                  borderRadius: "16px",
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-2xl" style={{ willChange: "transform" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gsap-card-img block object-cover select-none pointer-events-none"
                    style={{
                      width: "120%",
                      height: "120%",
                      transform: "translate3d(0,0,0)",
                      willChange: "transform",
                    }}
                    draggable={false}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  )
}
