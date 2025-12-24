"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Globe, Zap, Brain, ShoppingCart, Check, Star } from "lucide-react"

const services = [
    {
        title: "WordPress Development",
        description: "8+ years expertise. Custom themes, plugins, and smooth migration to modern tech when you're ready.",
        icon: Globe,
        tag: "Proven Solutions",
        color: "from-blue-500/20 to-indigo-500/20",
        iconColor: "text-blue-600 dark:text-blue-400",
        borderColor: "group-hover:border-blue-500/50",
    },
    {
        title: "Next.js & Modern Apps",
        description: "TypeScript, Tailwind CSS, Next.js 14. Scalable applications that grow with your business.",
        icon: Zap,
        tag: "Future-proof Tech",
        color: "from-indigo-500/20 to-cyan-500/20",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        borderColor: "group-hover:border-indigo-500/50",
    },
    {
        title: "AI Integration",
        description: "From GitaGPT to custom chatbots. Intelligent features that work 24/7 for your business.",
        icon: Brain,
        tag: "AI-powered Growth",
        color: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-600 dark:text-purple-400",
        borderColor: "group-hover:border-purple-500/50",
    },
    {
        title: "E-commerce Solutions",
        description: "WooCommerce to custom platforms. High-converting stores that drive sales and growth.",
        icon: ShoppingCart,
        tag: "Boost Sales 200%+",
        color: "from-emerald-500/20 to-teal-500/20",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        borderColor: "group-hover:border-emerald-500/50",
    },
]

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    // Tilt effect for the whole card
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    // Layered Parallax (Different speeds for depth)
    // Background moves slightly
    const bgTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"])
    const bgTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"])

    // Icon moves most (appears on top)
    const iconTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-25px", "25px"])
    const iconTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-25px", "25px"])

    // Text moves moderately (middle layer)
    const textTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"])
    const textTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15px", "15px"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-full perspective-1000"
        >
            {/* Glow / Shadow behind card */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-500`} />

            {/* Main Glass Card */}
            <div className={`relative h-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 ${service.borderColor} shadow-2xl transition-colors duration-500 overflow-hidden flex flex-col p-8 sm:p-10 pb-12`}>

                {/* Layer 1: Background Decorative Element */}
                <motion.div
                    style={{ x: bgTranslateX, y: bgTranslateY, translateZ: 0 }}
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} blur-3xl opacity-20 -mr-16 -mt-16 rounded-full`}
                />

                {/* Layer 3: Icon (Top Layer - Moves Fastest) */}
                <motion.div
                    style={{
                        x: iconTranslateX,
                        y: iconTranslateY,
                        translateZ: 100, // Highest depth
                    }}
                    className={`w-16 h-16 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-white/5 flex items-center justify-center mb-8 ${service.iconColor} ring-1 ring-slate-900/5`}
                >
                    <service.icon className="w-8 h-8" />
                </motion.div>

                {/* Layer 2: Text & Content (Middle Layer) */}
                <motion.div
                    style={{
                        x: textTranslateX,
                        y: textTranslateY,
                        translateZ: 50
                    }}
                    className="flex-grow space-y-4"
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {service.description}
                    </p>
                </motion.div>

                {/* Bottom Tag */}
                <motion.div
                    style={{ translateZ: 20 }}
                    className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5"
                >
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5 ${service.iconColor}`}>
                        <Check className="w-3.5 h-3.5" />
                        {service.tag}
                    </span>
                </motion.div>

                {/* Animated Border Reveal on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
        </motion.div>
    )
}

export default function ParallaxServices() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
            {/* Background Ambient Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-indigo-200 dark:border-indigo-800 shadow-sm"
                    >
                        <Star className="w-4 h-4 fill-current" />
                        Empowering Digital Growth
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        Complete Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Growth Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
                    >
                        We offer a wide range of digital services to help you grow your business online with industry-leading precision.
                    </motion.p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>

                {/* Global Stats / Trust Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-10 py-5 rounded-[2rem] border border-slate-200/50 dark:border-white/5 shadow-xl">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/40?u=${i}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-semibold text-slate-900 dark:text-white leading-none">Trusted by 200+ Businesses</p>
                            <p className="text-xs font-normal text-slate-500 uppercase tracking-tighter">Accelerating digital success since 2016</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
