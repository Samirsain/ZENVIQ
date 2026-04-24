import Image from "next/image"

interface LogoProps {
    className?: string
    iconSize?: number
}

export function Logo({ className = "" }: LogoProps) {
    return (
        <div className={`flex items-center group ${className}`}>
            <div className="w-[120px] relative flex items-center justify-center">
                {/* Icon Container */}
                <div className="relative w-full h-auto flex items-center justify-center">
                    <Image
                        src="/logo.svg"
                        alt="ZENVIQ Digital Logo"
                        width={180}
                        height={60}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
