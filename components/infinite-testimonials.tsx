"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Founder, TechVenture",
        content: "They transformed our online presence completely. Our website now converts visitors at 3x the rate, and we couldn't be happier with the results.",
        image: "/professional-indian-woman-entrepreneur-headshot--b.jpg"
    },
    {
        id: 2,
        name: "Ravi Patel",
        role: "CEO, GrowthEngine",
        content: "Working with this team was a game-changer. They didn't just build a website - they built a growth engine. Our sales have doubled in 6 months.",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    },
    {
        id: 3,
        name: "Anjali Desai",
        role: "Marketing Head, EcoShop",
        content: "The AI chatbot they integrated saves us 20+ hours per week. It's like having a 24/7 customer service team that never sleeps.",
        image: "/professional-indian-woman-marketing-executive-head.jpg"
    },
    {
        id: 4,
        name: "Arjun Mehta",
        role: "Co-Founder, SaaSFlow",
        content: "The design speed and code quality are unmatched. We ported our entire marketing site in just 2 weeks. Highly recommended for startups.",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    },
    {
        id: 5,
        name: "Neha Gupta",
        role: "Product Manager, CreativeLab",
        content: "Incredible attention to detail. The new UI is so smooth and intuitive that our user engagement metrics jumped by 45% instantly.",
        image: "/professional-indian-woman-entrepreneur-headshot--b.jpg"
    },
    {
        id: 6,
        name: "Vikram Singh",
        role: "Director, Singh Logistics",
        content: "Finally, a technical partner who understands business. They delivered a complex dashboard that simplified our operations.",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    }
]

export default function InfiniteTestimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 mb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-indigo-100">
                    <Star className="w-4 h-4 fill-current" />
                    Trusted by Industry Leaders
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                    What Zenviq users <span className="text-indigo-600 font-extrabold italic">are saying</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    The secret behind the exponential growth of modern businesses.
                </p>
            </div>

            <div className="relative flex flex-col gap-10">
                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* First Row */}
                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-8">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                    ))}
                </div>

                {/* Second Row */}
                <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] gap-8">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={`${t.id}-rev-${i}`} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-[380px] sm:w-[500px] bg-slate-50/50 border border-slate-200 p-8 sm:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:bg-white hover:border-indigo-200 transition-all duration-500 shrink-0 flex flex-col justify-between h-[300px] group">
            <div className="space-y-6">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-indigo-600 text-indigo-600" />
                    ))}
                </div>
                <p className="text-slate-800 text-lg sm:text-xl leading-relaxed italic font-medium">
                    "{testimonial.content}"
                </p>
            </div>

            <div className="flex items-center gap-5 pt-6 border-t border-slate-200/60">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="min-w-0">
                    <div className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                        {testimonial.name}
                    </div>
                    <div className="text-indigo-600/80 font-semibold text-sm sm:text-base">
                        {testimonial.role}
                    </div>
                </div>
            </div>
        </div>
    )
}
