export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[25%] h-[25%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-slate-100" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-600 border-r-indigo-600 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Loading</h2>
          <p className="text-sm text-slate-400">Please wait a moment...</p>
        </div>

        {/* Skeleton Bars */}
        <div className="w-64 space-y-3">
          <div className="h-2 bg-slate-100 rounded-full animate-pulse" />
          <div className="flex gap-3">
            <div className="h-2 flex-1 bg-slate-100 rounded-full animate-pulse" />
            <div className="h-2 flex-[2] bg-slate-100 rounded-full animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-2 flex-[2] bg-slate-100 rounded-full animate-pulse" />
            <div className="h-2 flex-1 bg-slate-100 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
