"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaShopify, FaFigma, FaGoogle,
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiTailwindcss, SiTypescript,
  SiOpenai, SiStripe, SiSupabase,
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: SiOpenai, color: "#412991" },
  { Icon: FaShopify, color: "#7AB55C" },
  { Icon: SiStripe, color: "#635BFF" },
  { Icon: FaFigma, color: "#F24E1E" },
  { Icon: FaGoogle, color: "#4285F4" },
  { Icon: SiSupabase, color: "#3ECF8E" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-16 sm:my-24 lg:my-32 px-4 sm:px-6 lg:pl-10 flex flex-col lg:flex-row items-center justify-between min-h-[24rem] lg:h-[30rem] border border-slate-200 bg-white overflow-hidden rounded-3xl shadow-stripe-lg">
      {/* Left side: Heading and Text */}
      <div className="w-full lg:w-1/2 z-10 py-10 px-2 sm:py-12 lg:py-0 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold mb-6 border border-indigo-100">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Our Tech Stack
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 tracking-tight" style={{ letterSpacing: '-1px' }}>
          Built With the <span className="text-indigo-600">Best</span> Tools
        </h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
          We leverage cutting-edge technologies to build fast, scalable, and beautiful digital products that drive real business results.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <Button asChild size="lg" className="h-12 px-6 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200 transition-all duration-300 font-semibold">
            <a href="https://calendly.com/zenviq/30min" target="_blank" rel="noopener noreferrer">
              Start a Project
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-slate-700 shadow-stripe-sm transition-all duration-300 font-medium">
            <Link href="/services">
              View Services
            </Link>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation */}
      <div className="relative w-full lg:w-1/2 h-[20rem] sm:h-[24rem] lg:h-full flex items-center justify-center lg:justify-start overflow-hidden">
        <div className="relative w-[40rem] sm:w-[45rem] lg:w-[50rem] h-[40rem] sm:h-[45rem] lg:h-[50rem] lg:translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-50 to-white shadow-lg flex items-center justify-center border border-slate-100">
            <FaReact className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-slate-200"
                style={{
                  width: size,
                  height: size,
                  animation: `stack-spin ${14 + orbitIdx * 8}s linear infinite${orbitIdx % 2 === 1 ? ' reverse' : ''}`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white rounded-full p-2 shadow-md border border-slate-100 hover:shadow-lg hover:scale-110 transition-all duration-300"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          animation: `stack-counter-spin ${14 + orbitIdx * 8}s linear infinite${orbitIdx % 2 === 1 ? ' reverse' : ''}`,
                        }}
                      >
                        <cfg.Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes stack-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes stack-counter-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
