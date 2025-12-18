import Image from "next/image"

interface LogoProps {
    className?: string
    iconSize?: number
}

export function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center gap-2 group ${className}`}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                {/* Icon Container */}
                <div className="relative w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                        src="/logo.svg"
                        alt="Zenviq Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Brand Text & Subheading */}
            <div className="flex flex-col -space-y-1">
                <span className="font-black tracking-tighter text-slate-900 text-xl sm:text-2xl transition-colors">
                    ZEN<span className="text-indigo-600">VIQ</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-[0.1em]">
                    Web & Marketing Agency
                </span>
            </div>
        </div>
    )
}
