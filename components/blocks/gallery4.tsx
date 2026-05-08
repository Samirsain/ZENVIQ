"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data: Gallery4Item[] = [
  {
    id: "credify",
    title: "Credify — AI-Powered Finance Platform",
    description:
      "A modern fintech solution featuring AI-driven insights, dark-mode UI with glassmorphism, and seamless integrations with Stripe, PayPal & Apple Pay. 10M+ users trust it daily.",
    href: "https://credify-fintech.vercel.app/",
    image: "/credify-hero.png",
  },
  {
    id: "nuroxfit",
    title: "NuroxFit — High-Performance E-commerce",
    description:
      "Custom Shopify theme for a fitness apparel brand with 200% sales increase, 0.8s load speed, and a conversion-driven mobile-first checkout flow.",
    href: "https://nuroxfit.myshopify.com/",
    image: "/nuroxfit-hero.png",
  },
  {
    id: "samirsain-portfolio",
    title: "Samirsain — Premium Portfolio & Brand Hub",
    description:
      "A flagship personal brand portal with integrated blog, resume tracker, and project vault. 99/100 performance score and high SEO visibility.",
    href: "https://samirsain.com",
    image: "/samirsain-portfolio-v2.png",
  },
  {
    id: "norvia-dashboard",
    title: "Norvia — Real-Time Analytics Dashboard",
    description:
      "A powerful SaaS analytics platform with interactive charts, revenue metrics, and a modular card-based layout designed for clarity and speed.",
    href: "https://norvia-dashboard.vercel.app/",
    image: "/norvia-dashboard.png",
  },
];

const Gallery4 = ({
  title = "Case Studies",
  description = "See how we helped businesses scale with modern technology, strategic design, and high-performance digital solutions.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between md:mb-14 lg:mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold w-fit border border-indigo-100">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Our Work
            </div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="max-w-lg text-slate-500 text-base sm:text-lg leading-relaxed">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto h-12 w-12 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto h-12 w-12 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[400px]"
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl block">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 320px, 400px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-bold md:mb-3 md:pt-4 lg:pt-4 tracking-tight">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-white/80 leading-relaxed md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                        View Project{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-indigo-600 w-6" : "bg-slate-200 w-2 hover:bg-slate-300"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
