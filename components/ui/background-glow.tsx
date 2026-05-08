import { cn } from "@/lib/utils";

interface BackgroundGlowProps {
  variant?: "yellow" | "orange";
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundGlow({ variant = "yellow", className }: BackgroundGlowProps) {
  if (variant === "orange") {
    return (
      <div
        className={cn("absolute inset-0 z-0 pointer-events-none", className)}
        style={{
          background: "transparent",
          backgroundImage: `
            radial-gradient(
              circle at top right,
              rgba(255, 140, 60, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
    );
  }

  return (
    <div
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{
        backgroundImage: `
          radial-gradient(circle at center, #FFF991 0%, transparent 70%)
        `,
        opacity: 0.6,
        mixBlendMode: "multiply",
      }}
    />
  );
}

export default BackgroundGlow;
