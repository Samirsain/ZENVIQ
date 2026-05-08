import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[30%] h-[30%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid-404" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-404)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        {/* 404 Number */}
        <div className="relative mb-6">
          <h1
            className="text-[10rem] sm:text-[14rem] font-black text-slate-100 leading-none select-none"
            style={{ letterSpacing: "-8px" }}
          >
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl shadow-indigo-200/50">
              <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mb-8 leading-relaxed max-w-sm mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold text-sm shadow-lg shadow-slate-300/40 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-slate-200 hover:border-indigo-200 bg-white text-slate-700 hover:text-indigo-700 font-medium text-sm shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-4">Quick Links</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Services", href: "/services" },
              { label: "Our Work", href: "/gallery" },
              { label: "Blog", href: "/blog" },
              { label: "Free Tools", href: "/tools" },
              { label: "About Us", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
