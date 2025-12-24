"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const RotatingHeadline = () => {
    const words = ["Responsiveness", "Creativity", "Perfection", "Performance", "Design"]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [words.length])

    return (
        <div className="flex flex-col items-center justify-center text-center py-10 perspective-1000 mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight flex flex-col items-center">
                Where Innovation Meets <br />
                <span className="inline-block relative h-[1.3em] w-full mt-4 text-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: -50, rotateX: 90 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-0 right-0 block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
                        >
                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </h1>
        </div>
    )
}

export default function ParallaxHeroPremium() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    })

    // Premium Parallax Values - Smoother, more elegant motion
    // X-Axis Expansion (Opening Up)
    const xOuterLeft = useTransform(scrollYProgress, [0, 1], [0, -200])
    const xInnerLeft = useTransform(scrollYProgress, [0, 1], [0, -80])

    const xInnerRight = useTransform(scrollYProgress, [0, 1], [0, 80])
    const xOuterRight = useTransform(scrollYProgress, [0, 1], [0, 200])

    // Y-Axis Floating (Subtle rise)
    const yCenter = useTransform(scrollYProgress, [0, 1], [0, -100])
    const ySide = useTransform(scrollYProgress, [0, 1], [50, -50])
    const yOuter = useTransform(scrollYProgress, [0, 1], [100, 0])

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

    const images = [
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-e1761293655838-519x1024.png",
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-1-e1761293706328-510x1024.png",
        "https://novixs.in/wp-content/uploads/2025/10/Adobe-Express-file-1-e1761293597739-515x1024.png",
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-4-e1761293784739-509x1024.png",
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-3-e1761293747341-510x1024.png"
    ]

    return (
        <section ref={sectionRef} className="relative w-full min-h-[120vh] bg-[#0b0b0b] overflow-hidden flex flex-col items-center pt-32 pb-0">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-900/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-[500px] bg-purple-900/10 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative mb-12">
                <RotatingHeadline />

                <p className="text-slate-400 text-lg sm:text-xl text-center max-w-2xl mx-auto mb-16 leading-relaxed font-light">
                    We craft digital experiences that merge technical excellence with visual perfection. Elevate your brand with Zenviq.
                </p>

                <div className="flex justify-center mb-16">
                    <Link href="/contact" className="group relative -ml-4 pl-8 pr-12 py-4 bg-white text-[#0b0b0b] rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2">
                        Start Project
                        <span className="absolute right-2 bg-[#0b0b0b] w-8 h-8 rounded-full flex items-center justify-center group-hover:w-10 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Premium Parallax Grid */}
            <motion.div style={{ opacity }} className="relative w-full max-w-[1400px] h-[800px] flex justify-center items-start mt-10 perspective-1000">

                {/* Image 1: Outer Left */}
                <motion.div
                    style={{ x: xOuterLeft, y: yOuter }}
                    className="absolute left-[5%] top-20 w-[16%] z-0 grayscale-[50%] hover:grayscale-0 transition-all duration-500 hidden xl:block"
                >
                    <Image
                        src={images[0]}
                        alt="App UI Left Outer"
                        width={519}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-[2rem] border border-white/5"
                    />
                </motion.div>

                {/* Image 2: Inner Left */}
                <motion.div
                    style={{ x: xInnerLeft, y: ySide }}
                    className="absolute left-[15%] lg:left-[22%] top-10 w-[20%] z-10 hidden md:block"
                >
                    <Image
                        src={images[1]}
                        alt="App UI Left Inner"
                        width={510}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] border border-white/10"
                    />
                </motion.div>

                {/* Image 3: Center Hero */}
                <motion.div
                    style={{ y: yCenter, scale }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-[60%] sm:w-[40%] lg:w-[25%] z-20"
                >
                    <Image
                        src={images[2]}
                        alt="App UI Center"
                        width={515}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-[0_35px_60px_rgba(79,70,229,0.15)] rounded-[3rem] border border-white/20 shadow-indigo-500/10"
                        priority
                    />
                </motion.div>

                {/* Image 4: Inner Right */}
                <motion.div
                    style={{ x: xInnerRight, y: ySide }}
                    className="absolute right-[15%] lg:right-[22%] top-10 w-[20%] z-10 hidden md:block"
                >
                    <Image
                        src={images[3]}
                        alt="App UI Right Inner"
                        width={509}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] border border-white/10"
                    />
                </motion.div>

                {/* Image 5: Outer Right */}
                <motion.div
                    style={{ x: xOuterRight, y: yOuter }}
                    className="absolute right-[5%] top-20 w-[16%] z-0 grayscale-[50%] hover:grayscale-0 transition-all duration-500 hidden xl:block"
                >
                    <Image
                        src={images[4]}
                        alt="App UI Right Outer"
                        width={510}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-[2rem] border border-white/5"
                    />
                </motion.div>

            </motion.div>
        </section>
    )
}
