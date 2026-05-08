"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CaseStudy {
  id: string;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc: string;
  brandName: string;
  metric?: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "antiquity",
    imageSrc: "/project/antiquity.png",
    imageAlt: "Antiquity Digital Agency Website",
    tag: "Digital Agency",
    title: "Antiquity Digital — Full Brand Website",
    description: "Complete agency website with SEO analytics dashboard and conversion tracking.",
    brandLogoSrc: "/project/antiquity.png",
    brandName: "Antiquity Digital",
    metric: "+284% Traffic",
    href: "https://www.antiquitydigital.online/",
  },
  {
    id: "scrollinpanda",
    imageSrc: "/project/scrollinpanda.png",
    imageAlt: "ScrollinPanda E-commerce Store",
    tag: "E-commerce",
    title: "ScrollinPanda — Refurbished Laptops",
    description: "Full e-commerce store with product catalog, search, and cart functionality.",
    brandLogoSrc: "/project/scrollinpanda.png",
    brandName: "ScrollinPanda",
    metric: "500+ Products",
    href: "https://www.scrollinpanda.com/",
  },
  {
    id: "eliteballondecor",
    imageSrc: "/project/eliteballondecor.png",
    imageAlt: "Elite Balloon Decor Website",
    tag: "Event Decor",
    title: "Elite Decors — Balloon & Floral",
    description: "Premium event decor website with gallery, booking, and 50+ themed packages.",
    brandLogoSrc: "/project/eliteballondecor.png",
    brandName: "Elite Decors",
    metric: "5000+ Events",
    href: "https://www.eliteballondecor.com/",
  },
  {
    id: "helpinghands",
    imageSrc: "/project/halpinghand.png",
    imageAlt: "Helping Hands NGO Website",
    tag: "NGO / Nonprofit",
    title: "Helping Hands — Animal Welfare",
    description: "Donation platform with Razorpay integration and 80G tax receipt system.",
    brandLogoSrc: "/project/halpinghand.png",
    brandName: "Helping Hands",
    metric: "₹8.2L Raised",
    href: "https://www.helpinghandsfoundations.org/",
  },
  {
    id: "gmresort",
    imageSrc: "/project/gmresort.png",
    imageAlt: "GM Resort Website",
    tag: "Hospitality",
    title: "GM Resort — Premium Stay Experience",
    description: "Resort booking website with room gallery, amenities, and contact system.",
    brandLogoSrc: "/project/gmresort.png",
    brandName: "GM Resort",
    metric: "4.9★ Rating",
    href: "https://gmresort.vercel.app/",
  },
  {
    id: "reliable",
    imageSrc: "/project/relible.png",
    imageAlt: "Reliable Diagnostics Centre Website",
    tag: "Healthcare",
    title: "Reliable Diagnostics Centre",
    description: "Medical diagnostics center with test catalog, booking, and report access.",
    brandLogoSrc: "/project/relible.png",
    brandName: "Reliable Diagnostics",
    metric: "100+ Tests",
    href: "https://reliable-diagnostics-centre-4ou3.vercel.app/",
  },
];

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard = React.memo(({ study }: CaseStudyCardProps) => (
  <motion.a
    href={study.href}
    target={study.href.startsWith("http") ? "_blank" : undefined}
    rel={study.href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="relative flex-shrink-0 w-[280px] sm:w-[340px] rounded-2xl overflow-hidden group block bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Image */}
    <div className="w-full aspect-[16/10] overflow-hidden relative">
      <Image
        src={study.imageSrc}
        alt={study.imageAlt}
        fill
        sizes="(max-width: 640px) 280px, 340px"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col gap-3 border-t border-slate-100">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Zap className="w-3.5 h-3.5 text-indigo-500" />
          <span className="font-semibold uppercase tracking-wider">{study.tag}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight tracking-tight">
          {study.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
          {study.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <Image
            src={study.brandLogoSrc}
            alt={study.brandName}
            width={28}
            height={28}
            className="rounded-full object-cover bg-slate-100 p-0.5"
          />
          <div>
            <p className="text-xs font-bold text-slate-900">{study.brandName}</p>
            {study.metric && (
              <p className="text-[10px] text-indigo-600 font-semibold">{study.metric}</p>
            )}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-45">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </motion.a>
));
CaseStudyCard.displayName = "CaseStudyCard";

// Continuous smooth scrolling speed (px/s)
const SCROLL_SPEED = 40;

export function CaseStudiesCarousel({ className }: { className?: string }) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const animationRef = React.useRef<number | null>(null);
  const lastTimeRef = React.useRef<number>(0);
  const scrollPositionRef = React.useRef<number>(0);

  // Duplicate items for seamless infinite loop
  const items = React.useMemo(() => [...caseStudies, ...caseStudies], []);

  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate half-width (original set width) for seamless reset
    const getHalfWidth = () => {
      const children = Array.from(track.children);
      const half = children.length / 2;
      let width = 0;
      for (let i = 0; i < half; i++) {
        const child = children[i] as HTMLElement;
        width += child.offsetWidth + 20; // 20px = gap-5
      }
      return width;
    };

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isPaused) {
        scrollPositionRef.current += (SCROLL_SPEED * delta) / 1000;

        const halfWidth = getHalfWidth();
        if (scrollPositionRef.current >= halfWidth) {
          scrollPositionRef.current -= halfWidth;
        }

        track.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section id="case-studies" className={cn("py-20 sm:py-28 bg-white overflow-hidden", className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold w-fit border border-indigo-100">
              <Star className="w-4 h-4 fill-current" />
              Our Work
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
              style={{ letterSpacing: "-1.5px" }}
            >
              Case Studies
            </h2>
            <p className="max-w-lg text-slate-500 text-base sm:text-lg leading-relaxed">
              See how we helped businesses scale with modern technology and strategic design.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((study, i) => (
            <CaseStudyCard key={`${study.id}-${i}`} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
