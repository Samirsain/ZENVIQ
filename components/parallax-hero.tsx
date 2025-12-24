"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

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
        <div className="flex flex-col items-center justify-center text-center py-10 perspective-1000">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight flex flex-col sm:block items-center">
                Where Innovation Meets <br className="hidden sm:block" />
                <span className="inline-block relative h-[1.2em] w-64 sm:w-auto text-indigo-600 sm:ml-2 text-center sm:text-left">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, rotateX: -90 }}
                            animate={{ opacity: 1, rotateX: 0 }}
                            exit={{ opacity: 0, rotateX: 90 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute left-0 right-0 block origin-center text-center sm:text-left"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            {words[index]}
                        </motion.span>
                    </AnimatePresence>
                </span>
            </h3>
        </div>
    )
}

export default function ParallaxHero() {
    const { scrollYProgress } = useScroll()

    // Tuned Parallax Values based on Reference (8.5 vs 4 speed)
    // Outer images move faster (expansion effect)
    const xOuterLeft = useTransform(scrollYProgress, [0, 1], [0, -150])
    const xInnerLeft = useTransform(scrollYProgress, [0, 1], [0, -60])

    const xInnerRight = useTransform(scrollYProgress, [0, 1], [0, 60])
    const xOuterRight = useTransform(scrollYProgress, [0, 1], [0, 150])

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

    // Mobile Animations (subtler)
    const scaleMobile = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])

    const images = [
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-e1761293655838-519x1024.png", // Left Out
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-1-e1761293706328-510x1024.png", // Left In
        "https://novixs.in/wp-content/uploads/2025/10/Adobe-Express-file-1-e1761293597739-515x1024.png", // Center
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-4-e1761293784739-509x1024.png", // Right In
        "https://novixs.in/wp-content/uploads/2025/10/Untitled-3-e1761293747341-510x1024.png"  // Right Out
    ]

    return (
        <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-20 pb-0 shadow-sm border-t border-slate-100 dark:border-slate-900">
            <div className="container mx-auto px-4 z-10 relative">
                <RotatingHeadline />
            </div>

            {/* Desktop Grid - Matches Novixs Layout */}
            <div className="hidden md:flex justify-center items-end gap-0 h-[600px] w-full relative mt-10 overflow-hidden">
                {/* Image 1: Left Out - Fastest Move Left */}
                <motion.div style={{ x: xOuterLeft, scale }} className="w-[18%] h-auto relative self-end z-0">
                    <Image
                        src={images[0]}
                        alt="App Screenshot 1"
                        width={519}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-t-xl"
                    />
                </motion.div>

                {/* Image 2: Left In - Med Move Left */}
                <motion.div style={{ x: xInnerLeft, scale }} className="w-[18%] h-auto relative self-end z-10 -ml-12">
                    <Image
                        src={images[1]}
                        alt="App Screenshot 2"
                        width={510}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-t-xl"
                    />
                </motion.div>

                {/* Image 3: Center - Scale Only */}
                <motion.div style={{ scale }} className="w-[20%] h-auto relative self-end z-20 -ml-12 -mr-12 perspective-1000">
                    <Image
                        src={images[2]}
                        alt="App Screenshot Center"
                        width={515}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-t-xl"
                    />
                </motion.div>

                {/* Image 4: Right In - Med Move Right */}
                <motion.div style={{ x: xInnerRight, scale }} className="w-[18%] h-auto relative self-end z-10 -mr-12">
                    <Image
                        src={images[3]}
                        alt="App Screenshot 4"
                        width={509}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-t-xl"
                    />
                </motion.div>

                {/* Image 5: Right Out - Fastest Move Right */}
                <motion.div style={{ x: xOuterRight, scale }} className="w-[18%] h-auto relative self-end z-0">
                    <Image
                        src={images[4]}
                        alt="App Screenshot 5"
                        width={510}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-2xl rounded-t-xl"
                    />
                </motion.div>
            </div>


            {/* Mobile/Tablet Grid */}
            <div className="md:hidden flex justify-center items-end gap-0 h-[400px] w-full relative mt-10 overflow-hidden">
                {/* Image 2: Left - Moves Left */}
                <motion.div style={{ x: xInnerLeft, scale: scaleMobile }} className="w-[28%] h-auto relative self-end z-10">
                    <Image
                        src={images[1]}
                        alt="App Screenshot 2"
                        width={510}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-md rounded-t-lg"
                    />
                </motion.div>

                {/* Image 3: Center - Scales Up */}
                <motion.div style={{ scale: scaleMobile }} className="w-[35%] h-auto relative self-end z-20 -ml-6 -mr-6">
                    <Image
                        src={images[2]}
                        alt="App Screenshot Center"
                        width={515}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-xl rounded-t-lg"
                    />
                </motion.div>

                {/* Image 4: Right - Moves Right */}
                <motion.div style={{ x: xInnerRight, scale: scaleMobile }} className="w-[28%] h-auto relative self-end z-10">
                    <Image
                        src={images[3]}
                        alt="App Screenshot 4"
                        width={509}
                        height={1024}
                        className="w-full h-auto object-contain drop-shadow-md rounded-t-lg"
                    />
                </motion.div>
            </div>
        </section>
    )
}
