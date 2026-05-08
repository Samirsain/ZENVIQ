"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import Image from "next/image";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, TechScale India",
    content:
      "ZENVIQ ne humara kaam aasan kar diya. The automated chatbot they built handles 80% of our customer queries automatically. Service ekdum top-notch thi!",
    image: "/professional-indian-male-ceo-headshot--confident-s.jpg",
    variant: "white" as const,
  },
  {
    name: "Priya Venkatesh",
    role: "Marketing Head, Mumbai Trends",
    content:
      "SEO results were slow initially, but after 3 months, our organic traffic skyrocketed. They know their craft properly. Highly recommended for long-term growth.",
    image: "/professional-indian-woman-entrepreneur-headshot--b.jpg",
    variant: "indigo" as const,
  },
  {
    name: "Rohan Das",
    role: "CEO, Bengaluru Logistics",
    content:
      "Their Next.js implementation is super fast. Professional team, deadlines meet karte hain, amazing experience overall.",
    image: "/professional-indian-male-ceo-headshot--confident-s.jpg",
    variant: "dark" as const,
  },
  {
    name: "Ishita Malhotra",
    role: "Co-Founder, ArtIsLife",
    content:
      "Design aesthetics are beautiful! They understood our brand voice perfectly. The new website looks premium and loads instantly.",
    image: "/professional-indian-woman-marketing-executive-head.jpg",
    variant: "dark" as const,
  },
  {
    name: "Vikram Singh",
    role: "Director, Singh Exports",
    content:
      "No hidden charges, just pure work. Business inquiries 2x ho gayi hain. Best agency we've worked with.",
    image: "/professional-indian-male-ceo-headshot--confident-s.jpg",
    variant: "dark" as const,
  },
  {
    name: "Ananya Reddy",
    role: "Product Lead, InnovateHub",
    content:
      "ZENVIQ has been a key partner in our growth journey. Their support is exceptional — any issue fixed within hours.",
    image: "/professional-indian-woman-entrepreneur-headshot--b.jpg",
    variant: "indigo" as const,
  },
  {
    name: "Siddharth Gupta",
    role: "CTO, CloudNine Systems",
    content:
      "ZENVIQ has been a true game-changer for us. Their exceptional service, combined with their deep expertise and commitment to excellence, has made a significant impact on our business.",
    image: "/professional-indian-male-ceo-headshot--confident-s.jpg",
    variant: "white" as const,
  },
];

const variantStyles = {
  white: "bg-white text-slate-900",
  dark: "bg-slate-900 text-white",
  indigo: "bg-indigo-600 text-white",
};

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: 20,
      opacity: 0,
    },
  };

  // Split testimonials into 3 columns
  const col1 = [testimonials[0], testimonials[1]];
  const col2 = [testimonials[2], testimonials[3], testimonials[4]];
  const col3 = [testimonials[5], testimonials[6]];

  return (
    <section className="w-full bg-white">
      <div
        className="relative container mx-auto py-20 sm:py-28 px-4"
        ref={testimonialRef}
      >
        {/* Header */}
        <div className="max-w-screen-md mx-auto text-center mb-12 sm:mb-16">
          <TimelineContent
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100 shadow-stripe-sm"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by Industry Leaders
          </TimelineContent>

          <TimelineContent
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
            style={{ letterSpacing: "-1.5px" }}
          >
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </TimelineContent>

          <TimelineContent
            as="p"
            className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            animationNum={2}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Real feedback from businesses we&apos;ve helped grow with modern
            technology and strategic design.
          </TimelineContent>
        </div>

        {/* Testimonial Grid */}
        <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full lg:px-6 px-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i}
                revealVariants={revealVariants}
                timelineRef={testimonialRef}
                isLarge={i === 0}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i + 2}
                revealVariants={revealVariants}
                timelineRef={testimonialRef}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {col3.map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i + 5}
                revealVariants={revealVariants}
                timelineRef={testimonialRef}
                isLarge={i === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  revealVariants,
  timelineRef,
  isLarge,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  revealVariants: any;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  isLarge?: boolean;
}) {
  const style = variantStyles[testimonial.variant];

  return (
    <TimelineContent
      animationNum={index}
      customVariants={revealVariants}
      timelineRef={timelineRef}
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 p-6 sm:p-7 transition-all duration-300 hover:shadow-stripe-lg ${style} ${isLarge ? "lg:min-h-[280px]" : ""}`}
    >
      {/* Grid pattern for white cards */}
      {testimonial.variant === "white" && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:40px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      )}

      <article className="relative mt-auto space-y-4">
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 fill-current ${
                testimonial.variant === "white"
                  ? "text-indigo-500"
                  : "text-white/80"
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            testimonial.variant === "white"
              ? "text-slate-700"
              : "text-white/90"
          }`}
        >
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center justify-between pt-4 border-t border-current/10">
          <div>
            <h3
              className={`font-bold text-base tracking-tight ${
                testimonial.variant === "white"
                  ? "text-slate-900"
                  : "text-white"
              }`}
            >
              {testimonial.name}
            </h3>
            <p
              className={`text-sm ${
                testimonial.variant === "white"
                  ? "text-slate-500"
                  : "text-white/70"
              }`}
            >
              {testimonial.role}
            </p>
          </div>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={200}
            height={200}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border-2 border-white/20"
          />
        </div>
      </article>
    </TimelineContent>
  );
}

export default ClientFeedback;
