"use client";

import React, { useRef, ElementType, ComponentPropsWithoutRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps<T extends ElementType = "div"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
}

export function TimelineContent<T extends ElementType = "div">({
  as,
  children,
  className,
  animationNum = 0,
  timelineRef,
  customVariants,
  ...props
}: TimelineContentProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TimelineContentProps<T>>) {
  const Component = as || "div";
  const MotionComponent = motion.create(Component as any);
  const fallbackRef = useRef(null);
  const isInView = useInView(timelineRef || fallbackRef, {
    once: true,
    margin: "-100px",
  });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const variants = customVariants || defaultVariants;

  return (
    <MotionComponent
      ref={!timelineRef ? fallbackRef : undefined}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
