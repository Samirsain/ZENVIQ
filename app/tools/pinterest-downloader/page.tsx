"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Image as ImageIcon,
  Video,
  Link2,
  Clipboard,
  Sparkles,
  Shield,
  Zap,
  X,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

interface MediaResult {
  title: string
  type: "video" | "image"
  thumbnail: string
  downloadUrl: string
  allImages: string[]
  size: string
  pinId: string
  filename: string
}

export default function PinterestDownloaderPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<MediaResult | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isValidUrl = (u: string) =>
    u.includes("pinterest.com") || u.includes("pin.it/")

  const fetchMedia = async (inputUrl?: string) => {
    const target = inputUrl || url
    if (!target.trim()) {
      setError("Please paste a Pinterest URL")
      return
    }
    if (!isValidUrl(target)) {
      setError("Please enter a valid Pinterest URL (pinterest.com or pin.it)")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const res = await fetch("/api/download-pinterest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: target }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to fetch media")
      }

      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
      if (isValidUrl(text)) {
        fetchMedia(text)
      }
    } catch {
      inputRef.current?.focus()
    }
  }

  const handleDownload = (downloadUrl: string, filename: string) => {
    const proxyUrl = `/api/download-pinterest/proxy?url=${encodeURIComponent(downloadUrl)}&filename=${encodeURIComponent(filename)}`
    const link = document.createElement("a")
    link.href = proxyUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const clearAll = () => {
    setUrl("")
    setError("")
    setResult(null)
  }

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Download in seconds with our optimized pipeline", gradient: "from-amber-500 to-orange-600" },
    { icon: ImageIcon, title: "Images & Videos", desc: "Supports both Pinterest images and video pins", gradient: "from-rose-500 to-pink-600" },
    { icon: Shield, title: "Safe & Private", desc: "No data stored — your privacy is fully protected", gradient: "from-emerald-500 to-green-600" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-rose-50/20">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rose-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button asChild variant="ghost" className="text-slate-500 hover:text-slate-800 gap-2 rounded-full">
            <Link href="/tools">
              <ArrowLeft className="w-4 h-4" />
              All Tools
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rose-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
            <Download className="w-3.5 h-3.5 text-rose-600" />
            <span className="text-xs font-semibold text-rose-700 tracking-wide uppercase">Free Tool</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Pinterest{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Downloader
            </span>{" "}
            <span className="inline-block animate-float">📌</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Paste any Pinterest link to{" "}
            <span className="font-semibold text-slate-700">preview & download</span>{" "}
            images and videos instantly
          </p>
        </motion.div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-stripe overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    ref={inputRef}
                    placeholder="https://www.pinterest.com/pin/... or https://pin.it/..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && fetchMedia()}
                    className="pl-10 pr-10 h-12 rounded-xl border-slate-200 text-sm focus:ring-2 focus:ring-rose-500/20 focus:border-rose-400"
                  />
                  {url && (
                    <button
                      onClick={clearAll}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handlePaste}
                    variant="outline"
                    className="h-12 px-4 rounded-xl border-slate-200 hover:border-rose-300 hover:bg-rose-50 gap-2"
                  >
                    <Clipboard className="w-4 h-4" />
                    <span className="hidden sm:inline">Paste</span>
                  </Button>
                  <Button
                    onClick={() => fetchMedia()}
                    disabled={loading || !url.trim()}
                    className="h-12 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg gap-2 min-w-[140px]"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Fetching...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Fetch Media
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* How to steps */}
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold flex items-center justify-center">1</span> Copy Pinterest link</span>
                <span className="text-slate-300">→</span>
                <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold flex items-center justify-center">2</span> Paste above</span>
                <span className="text-slate-300">→</span>
                <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 text-[10px] font-bold flex items-center justify-center">3</span> Download!</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6"
            >
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-700">Download Error</p>
                  <p className="text-sm text-red-600 mt-0.5">{error}</p>
                </div>
                <button onClick={() => setError("")} className="ml-auto text-red-400 hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result Preview */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="mb-10"
            >
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-stripe-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Success banner */}
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">
                      {result.type === "video" ? "Video" : "Image"} found — Ready to download!
                    </span>
                    <Badge className="ml-auto bg-white/20 text-white border-0 text-[10px]">
                      {result.size}
                    </Badge>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Preview */}
                      <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-square flex items-center justify-center group">
                        {result.type === "video" ? (
                          <video
                            src={result.downloadUrl}
                            poster={result.thumbnail}
                            controls
                            className="w-full h-full object-contain bg-black rounded-xl"
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={result.thumbnail || result.downloadUrl}
                            alt={result.title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        )}

                        {/* Media type badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className={`gap-1 border-0 text-white text-[10px] ${result.type === "video" ? "bg-violet-600" : "bg-rose-600"}`}>
                            {result.type === "video" ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                            {result.type === "video" ? "Video" : "Image"}
                          </Badge>
                        </div>
                      </div>

                      {/* Info + Actions */}
                      <div className="flex flex-col justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                            {result.title}
                          </h3>

                          <div className="space-y-2 mb-6">
                            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                              <span className="text-slate-500">Type</span>
                              <span className="font-medium text-slate-800 capitalize">{result.type}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                              <span className="text-slate-500">File Size</span>
                              <span className="font-medium text-slate-800">{result.size}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                              <span className="text-slate-500">Platform</span>
                              <span className="font-medium text-slate-800">Pinterest</span>
                            </div>
                            {result.pinId && (
                              <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100">
                                <span className="text-slate-500">Pin ID</span>
                                <span className="font-mono text-xs text-slate-600">{result.pinId}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Download buttons */}
                        <div className="space-y-3">
                          <Button
                            onClick={() => handleDownload(result.downloadUrl, result.filename)}
                            className="w-full h-12 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg gap-2 text-sm font-semibold"
                          >
                            <Download className="w-4 h-4" />
                            Download {result.type === "video" ? "Video" : "Image"}
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            className="w-full h-10 rounded-xl border-slate-200 gap-2 text-sm"
                          >
                            <a href={result.downloadUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Open in New Tab
                            </a>
                          </Button>

                          {/* Alternative resolutions for images */}
                          {result.type === "image" && result.allImages && result.allImages.length > 1 && (
                            <div className="pt-2">
                              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                                Other Resolutions
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {result.allImages.slice(0, 4).map((imgUrl, i) => {
                                  const sizeLabel = imgUrl.includes("originals") ? "Original" :
                                    imgUrl.includes("1200x") ? "1200px" :
                                    imgUrl.includes("736x") ? "736px" :
                                    imgUrl.includes("564x") ? "564px" :
                                    imgUrl.includes("474x") ? "474px" : `Size ${i + 1}`
                                  return (
                                    <button
                                      key={i}
                                      onClick={() => handleDownload(imgUrl, `pinterest_${result.pinId}_${sizeLabel}.jpg`)}
                                      className="px-3 py-1.5 text-[11px] font-medium bg-slate-100 hover:bg-rose-100 hover:text-rose-700 text-slate-600 rounded-lg transition-colors"
                                    >
                                      {sizeLabel}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!result && !loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-stripe-sm mb-10">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Ready to Download</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  Paste any Pinterest image or video link above and click &quot;Fetch Media&quot; to preview & download
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Loading */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-stripe-sm mb-10">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                  <RefreshCw className="w-8 h-8 text-white animate-spin" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Fetching Media...</h3>
                <p className="text-sm text-slate-500">Extracting content from Pinterest</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1 }}
            >
              <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-stripe-sm hover:shadow-stripe transition-all duration-300 h-full">
                <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md`}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="border-0 bg-amber-50/80 backdrop-blur-sm shadow-none">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-800 mb-1.5">Usage Notice</p>
                  <ul className="text-[11px] text-amber-700 space-y-1 leading-relaxed">
                    <li>• Only download content you have permission to use</li>
                    <li>• Respect copyright and intellectual property rights</li>
                    <li>• This tool is for personal use only — always credit the original creator</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
