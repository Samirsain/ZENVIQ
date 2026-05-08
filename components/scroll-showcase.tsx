"use client"

import { useEffect, useRef, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const BLIND_COUNT = 25
const SVG_NS = "http://www.w3.org/2000/svg"

interface ShowcaseSlide {
  image: string
  title: string
  subtitle: string
  description: string
}

const SLIDES: ShowcaseSlide[] = [
  {
    image: "/showcase-1.png",
    title: "Premium Dashboards",
    subtitle: "SaaS & Analytics",
    description:
      "We craft data-rich dashboards with stunning visual hierarchy and real-time capabilities.",
  },
  {
    image: "/showcase-2.png",
    title: "E-Commerce Experiences",
    subtitle: "Conversion-Driven Design",
    description:
      "High-converting storefronts built for speed, elegance, and seamless checkout flows.",
  },
  {
    image: "/showcase-3.png",
    title: "AI-Powered Platforms",
    subtitle: "Next-Gen Technology",
    description:
      "Futuristic interfaces powered by machine learning and intelligent automation.",
  },
]

export default function ScrollShowcase() {
  const stageRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<SVGSVGElement[]>([])
  const blindsGroupsRef = useRef<SVGGElement[]>([])
  const textsRef = useRef<HTMLDivElement[]>([])
  const fillsRef = useRef<HTMLDivElement[]>([])
  const masterRef = useRef<gsap.core.Timeline | null>(null)
  const progressTriggerRef = useRef<ScrollTrigger | null>(null)

  const setLayerRef = useCallback(
    (el: SVGSVGElement | null, i: number) => {
      if (el) layersRef.current[i] = el
    },
    []
  )
  const setBlindsRef = useCallback(
    (el: SVGGElement | null, i: number) => {
      if (el) blindsGroupsRef.current[i] = el
    },
    []
  )
  const setTextRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      if (el) textsRef.current[i] = el
    },
    []
  )
  const setFillRef = useCallback(
    (el: HTMLDivElement | null, i: number) => {
      if (el) fillsRef.current[i] = el
    },
    []
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      const width = window.innerWidth
      const height = window.innerHeight
      const vbWidth = 100
      const vbHeight = (height / width) * 100

      const allBlindsSets: {
        top: SVGRectElement
        bottom: SVGRectElement
        y: number
        h: number
      }[][] = []

      /* ---- Set up each SVG layer ---- */
      layersRef.current.forEach((svg, i) => {
        if (!svg) return
        svg.setAttribute("viewBox", `0 0 ${vbWidth} ${vbHeight}`)

        const maskRect = svg.querySelector("mask rect")
        if (maskRect) {
          maskRect.setAttribute("width", String(vbWidth))
          maskRect.setAttribute("height", String(vbHeight))
        }

        const img = svg.querySelector("image")
        if (img) {
          img.setAttribute("width", String(vbWidth))
          img.setAttribute("height", String(vbHeight))
        }

        /* create blinds inside the group */
        const g = blindsGroupsRef.current[i]
        if (!g) return
        g.innerHTML = ""

        const h = vbHeight / BLIND_COUNT
        const blinds: {
          top: SVGRectElement
          bottom: SVGRectElement
          y: number
          h: number
        }[] = []
        let currentY = 0

        for (let j = 0; j < BLIND_COUNT; j++) {
          const centerY = vbHeight - (currentY + h / 2)

          const rectTop = document.createElementNS(SVG_NS, "rect")
          const rectBottom = document.createElementNS(SVG_NS, "rect")
          ;[rectTop, rectBottom].forEach((r) => {
            r.setAttribute("x", "0")
            r.setAttribute("width", "100")
            r.setAttribute("height", "0")
            r.setAttribute("fill", "white")
            r.setAttribute("shape-rendering", "crispEdges")
          })

          rectTop.setAttribute("y", String(centerY))
          rectBottom.setAttribute("y", String(centerY))

          g.appendChild(rectTop)
          g.appendChild(rectBottom)

          blinds.push({
            top: rectTop,
            bottom: rectBottom,
            y: centerY,
            h: h / 2,
          })
          currentY += h
        }

        allBlindsSets.push(blinds)
      })

      /* ---- Animations ---- */
      function openBlinds(
        blinds: { top: SVGRectElement; bottom: SVGRectElement; y: number; h: number }[]
      ) {
        return gsap.timeline().to(
          blinds.flatMap((b) => [b.top, b.bottom]),
          {
            attr: {
              y: (idx: number) => {
                const b = blinds[Math.floor(idx / 2)]
                return idx % 2 === 0 ? b.y - b.h : b.y
              },
              height: (idx: number) => {
                const b = blinds[Math.floor(idx / 2)]
                return b.h + 0.01
              },
            },
            ease: "power3.out",
            stagger: { each: 0.02, from: "start" },
          }
        )
      }

      function textIn(el: HTMLDivElement) {
        return gsap.to(el, {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1.5,
          ease: "expo.out",
        })
      }

      function textOut(el: HTMLDivElement) {
        return gsap.to(el, {
          clipPath: "inset(0% 0% 100% 0%)",
          y: -30,
          duration: 1.2,
          ease: "power2.inOut",
        })
      }

      /* ---- Master timeline ---- */
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      allBlindsSets.forEach((blinds, i) => {
        master.add(openBlinds(blinds))
        const txt = textsRef.current[i]
        if (txt) {
          master.add(textIn(txt), "-=0.3")
          master.add(textOut(txt), "+=0.8")
        }
      })

      masterRef.current = master

      /* ---- Progress bar ---- */
      const progressFills = fillsRef.current
      const progressST = ScrollTrigger.create({
        trigger: stageRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress
          const total = progressFills.length
          progressFills.forEach((fill, i) => {
            if (!fill) return
            let p = (progress - i / total) * total
            p = Math.max(0, Math.min(1, p))
            fill.style.width = `${p * 100}%`
          })
        },
      })
      progressTriggerRef.current = progressST
    }, stageRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative bg-white">
      {/* Scroll Stage */}
      <div ref={stageRef} className="relative" style={{ height: "500vh" }}>
        <div className="sticky top-0 w-screen h-screen overflow-hidden bg-slate-100">
          {/* SVG Layers */}
          {SLIDES.map((slide, i) => (
            <svg
              key={i}
              ref={(el) => setLayerRef(el, i)}
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id={`showcase-mask-${i}`}>
                  <rect x="0" y="0" width="100" height="100" fill="black" />
                  <g ref={(el) => setBlindsRef(el, i)} />
                </mask>
              </defs>
              <image
                href={slide.image}
                x="0"
                y="0"
                width="100"
                height="100"
                preserveAspectRatio="xMidYMid slice"
                mask={`url(#showcase-mask-${i})`}
                style={{ filter: "brightness(0.75)" }}
              />
            </svg>
          ))}

          {/* Text Overlays */}
          <div className="absolute inset-0 z-10 p-[3vw] pointer-events-none">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                ref={(el) => setTextRef(el, i)}
                className="absolute w-full text-white uppercase"
                style={{
                  clipPath: "inset(100% 0 0 0)",
                  transform: "translateY(40px)",
                }}
              >
                <h3
                  className="mt-[10vh] font-bold leading-[0.85] tracking-tight"
                  style={{
                    fontSize: "clamp(3rem, 6.8vw, 10rem)",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {slide.title}
                </h3>
                <h4
                  className="mt-[4vw] tracking-[0.24em] font-light"
                  style={{
                    fontSize: "clamp(0.9rem, 1.067vw, 1.4rem)",
                  }}
                >
                  {slide.subtitle}
                </h4>
                <span
                  className="block mt-6 leading-relaxed normal-case tracking-normal text-white/70"
                  style={{
                    fontSize: "clamp(0.85rem, 0.8vw, 1rem)",
                    width: "min(380px, 90%)",
                  }}
                >
                  {slide.description}
                </span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 w-full px-8 sm:px-16 py-8 flex gap-3 z-20">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-[2px] bg-slate-900/15 overflow-hidden relative rounded-full"
              >
                <div
                  ref={(el) => setFillRef(el, i)}
                  className="absolute top-0 left-0 h-full bg-slate-900 rounded-full"
                  style={{ width: "0%" }}
                />
              </div>
            ))}
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent z-[5] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
