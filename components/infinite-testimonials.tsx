"use client"

import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Founder, TechScale India",
        content: "Yar, Zenviq ne humara kaam aasan kar diya. The automated chatbot they built handles 80% of our customer queries automatically. Service ekdum top-notch thi!",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    },
    {
        id: 2,
        name: "Priya Venkatesh",
        role: "Marketing Head, Mumbai Trends",
        content: "Honestly, SEO results were slow initially, but after 3 months, our organic traffic skyrocketed. They know their craft properly. Highly recommended for long-term growth.",
        image: "/professional-indian-woman-entrepreneur-headshot--b.jpg"
    },
    {
        id: 3,
        name: "Rohan Das",
        role: "CEO, Bengaluru Logistics",
        content: "We needed a custom dashboard for our fleet. Their Next.js implementation is super fast. Professional team, deadlines meet karte hain, amazing experience.",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    },
    {
        id: 4,
        name: "Ishita Malhotra",
        role: "Co-Founder, ArtIsLife",
        content: "Design aesthetics are beautiful! They understood our brand voice perfectly. The new website looks premium and loads instantly on mobile.",
        image: "/professional-indian-woman-marketing-executive-head.jpg"
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Director, Singh Exports",
        content: "Kaafi agencies try kari thi pehle, but simple aur clear process bas yahan mila. No hidden charges, just pure work. Business inquiries 2x ho gayi hain.",
        image: "/professional-indian-male-ceo-headshot--confident-s.jpg"
    },
    {
        id: 6,
        name: "Ananya Reddy",
        role: "Product Lead, InnovateHub",
        content: "The best part is their support. Any minor issue, and they fix it within hours. Technical expertise is solid, especially in modern web apps.",
        image: "/professional-indian-woman-entrepreneur-headshot--b.jpg"
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
