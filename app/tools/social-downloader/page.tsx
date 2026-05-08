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
  Shield,
  Zap,
  X,
  Play,
} from "lucide-react"
import Link from "next/link"

const PLATFORMS = [
  { name: "Instagram", icon: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000" },
  { name: "TikTok", icon: "https://img.icons8.com/?size=100&id=123922&format=png&color=000000" },
  { name: "Twitter/X", icon: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" },
  { name: "Facebook", icon: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" },
  { name: "Pinterest", icon: "https://img.icons8.com/?size=100&id=63676&format=png&color=000000" },
  { name: "Reddit", icon: "https://img.icons8.com/?size=100&id=102689&format=png&color=000000" },
]

interface PickerItem {
  type: "photo" | "video" | "gif"
  url: string
  thumb?: string
}

interface DownloadResult {
  status: "tunnel" | "redirect" | "picker" | "error"
  url?: string
  filename?: string
  audio?: string
  audioFilename?: string
  picker?: PickerItem[]
  error?: { code: string }
}

export default function SocialDownloaderPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState<DownloadResult | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const fetchMedia = async (inputUrl?: string) => {
    const target = inputUrl || url
    if (!target.trim()) {
      setError("Please paste a social media link")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const res = await fetch("/api/social-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: target }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        throw new Error(typeof data.error === "string" ? data.error : data.error?.code || "Download failed")
      }

      setResult(data)

      // Auto-download for tunnel/redirect (single file)
      if ((data.status === "tunnel" || data.status === "redirect") && data.url) {
        triggerDownload(data.url, data.filename || "download")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const triggerDownload = (downloadUrl: string, filename: string) => {
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = filename
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setUrl(text)
      if (text.startsWith("http")) {
        fetchMedia(text)
      }
    } catch {
      inputRef.current?.focus()
    }
  }

  const clearAll = () => {
    setUrl("")
    setError("")
    setResult(null)
  }

  const detectPlatform = (inputUrl: string) => {
    const lower = inputUrl.toLowerCase()
    if (lower.includes("instagram.com")) return "Instagram"
    if (lower.includes("tiktok.com")) return "TikTok"
    if (lower.includes("twitter.com") || lower.includes("x.com")) return "Twitter/X"
    if (lower.includes("facebook.com") || lower.includes("fb.watch")) return "Facebook"
    if (lower.includes("pinterest.com") || lower.includes("pin.it")) return "Pinterest"
    if (lower.includes("reddit.com")) return "Reddit"
    return null
  }

  const detectedPlatform = url ? detectPlatform(url) : null

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-violet-50/20">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Button asChild variant="ghost" className="text-slate-500 hover:text-slate-800 gap-2 rounded-full">
            <Link href="/tools"><ArrowLeft className="w-4 h-4" />All Tools</Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-violet-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-5">
            <Download className="w-3.5 h-3.5 text-violet-600" />
            <span className="text-xs font-semibold text-violet-700 tracking-wide uppercase">Universal Downloader</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Social Media{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Downloader
            </span>{" "}
            <span className="inline-block animate-float">🚀</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Paste any link from{" "}
            <span className="font-semibold text-slate-700">Instagram, TikTok, Twitter, Facebook</span>{" "}
            Pinterest & Reddit — download instantly
          </p>
        </motion.div>

        {/* Supported platforms pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {PLATFORMS.map((p) => (
            <span
              key={p.name}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                detectedPlatform === p.name
                  ? "bg-violet-100 text-violet-700 ring-2 ring-violet-300 scale-110"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              <img src={p.icon} alt={p.name} className="w-4 h-4" />
              {p.name}
            </span>
          ))}
        </motion.div>

        {/* Input Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-stripe overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    ref={inputRef}
                    placeholder="Paste Instagram, TikTok, Twitter, Facebook link..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && fetchMedia()}
                    className="pl-10 pr-10 h-12 rounded-xl border-slate-200 text-sm focus:ring-2 focus:ring-violet-500/20 focus:border-violet-400"
                  />
                  {url && (
                    <button onClick={clearAll} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button onClick={handlePaste} variant="outline" className="h-12 px-4 rounded-xl border-slate-200 hover:border-violet-300 hover:bg-violet-50 gap-2">
                    <Clipboard className="w-4 h-4" />
                    <span className="hidden sm:inline">Paste</span>
                  </Button>
                  <Button
                    onClick={() => fetchMedia()}
                    disabled={loading || !url.trim()}
                    className="h-12 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg gap-2 min-w-[140px]"
                  >
                    {loading ? <><RefreshCw className="w-4 h-4 animate-spin" />Fetching...</> : <><Download className="w-4 h-4" />Download</>}
                  </Button>
                </div>
              </div>

              {/* Detected platform */}
              {detectedPlatform && (
                <div className="mt-4 flex items-center gap-3">
                  <Badge className="bg-violet-100 text-violet-700 border-0 text-[10px] gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {detectedPlatform} detected
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-700">Download Error</p>
                  <p className="text-sm text-red-600 mt-0.5">{error}</p>
                </div>
                <button onClick={() => setError("")} className="ml-auto text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result — Single file */}
        <AnimatePresence>
          {result && (result.status === "tunnel" || result.status === "redirect") && result.url && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-stripe-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">Ready to download!</span>
                  {result.filename && (
                    <Badge className="ml-auto bg-white/20 text-white border-0 text-[10px] truncate max-w-[200px]">
                      {result.filename}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base font-bold text-slate-900 mb-1 line-clamp-1">{result.filename || "Media File"}</h3>
                    <p className="text-xs text-slate-500">{detectedPlatform || "Social Media"}</p>
                  </div>
                  <Button
                    onClick={() => triggerDownload(result.url!, result.filename || "download")}
                    className="h-12 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg gap-2 font-semibold"
                  >
                    <Download className="w-4 h-4" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result — Picker (multiple items like carousel) */}
        <AnimatePresence>
          {result && result.status === "picker" && result.picker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-stripe-lg overflow-hidden">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">
                    {result.picker.length} items found — Pick what to download
                  </span>
                </div>
                <CardContent className="p-6">
                  {/* Audio track if available */}
                  {result.audio && (
                    <div className="mb-4 p-3 bg-violet-50 rounded-xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                        <Music className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-violet-800">Background Audio</p>
                        <p className="text-[10px] text-violet-600">{result.audioFilename || "audio.mp3"}</p>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => triggerDownload(result.audio!, result.audioFilename || "audio.mp3")}
                        className="h-8 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs gap-1"
                      >
                        <Download className="w-3 h-3" />
                        Audio
                      </Button>
                    </div>
                  )}

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {result.picker.map((item, i) => (
                      <div key={i} className="group relative rounded-xl overflow-hidden bg-slate-100 aspect-square">
                        {/* Thumbnail or placeholder */}
                        {item.thumb ? (
                          <img src={item.thumb} alt={`Item ${i + 1}`} className="w-full h-full object-cover" />
                        ) : item.type === "video" ? (
                          <video src={item.url} className="w-full h-full object-cover" muted preload="metadata" />
                        ) : (
                          <img src={item.url} alt={`Item ${i + 1}`} className="w-full h-full object-cover" />
                        )}

                        {/* Type badge */}
                        <div className="absolute top-2 left-2">
                          <Badge className={`border-0 text-white text-[9px] gap-0.5 ${item.type === "video" ? "bg-violet-600" : item.type === "gif" ? "bg-amber-600" : "bg-rose-600"}`}>
                            {item.type === "video" ? <Video className="w-2.5 h-2.5" /> : <ImageIcon className="w-2.5 h-2.5" />}
                            {item.type}
                          </Badge>
                        </div>

                        {/* Download overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <Button
                            size="sm"
                            onClick={() => triggerDownload(item.url, `download_${i + 1}.${item.type === "video" ? "mp4" : item.type === "gif" ? "gif" : "jpg"}`)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity h-9 rounded-lg bg-white text-slate-900 hover:bg-slate-100 text-xs gap-1 shadow-lg"
                          >
                            <Download className="w-3 h-3" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Download All */}
                  <div className="mt-4 flex justify-center">
                    <Button
                      onClick={() => {
                        result.picker?.forEach((item, i) => {
                          setTimeout(() => {
                            triggerDownload(item.url, `download_${i + 1}.${item.type === "video" ? "mp4" : "jpg"}`)
                          }, i * 500)
                        })
                      }}
                      className="h-10 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white gap-2 text-sm font-semibold"
                    >
                      <Download className="w-4 h-4" />
                      Download All ({result.picker.length})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty / Loading states */}
        {!result && !loading && !error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-stripe-sm mb-8">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Paste Any Link</h3>
                <p className="text-sm text-slate-500 max-w-sm">
                  YouTube, Instagram, TikTok, Twitter, Facebook, Reddit & more — just paste and download
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {loading && (
          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-stripe-sm mb-8">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                <RefreshCw className="w-8 h-8 text-white animate-spin" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Processing...</h3>
              <p className="text-sm text-slate-500">Extracting media from {detectedPlatform || "the platform"}</p>
            </CardContent>
          </Card>
        )}

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Zap, title: "Instant Download", desc: "Paste link and download in seconds", gradient: "from-amber-500 to-orange-600" },
            { icon: Video, title: "All Platforms", desc: "YouTube, Instagram, TikTok, Twitter & more", gradient: "from-violet-500 to-indigo-600" },
            { icon: Shield, title: "Private & Secure", desc: "No data stored, no tracking, no ads", gradient: "from-emerald-500 to-green-600" },
          ].map((f, i) => (
            <Card key={f.title} className="border-0 bg-white/70 backdrop-blur-sm shadow-stripe-sm hover:shadow-stripe transition-all duration-300">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md`}>
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <Card className="border-0 bg-amber-50/80 shadow-none">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-amber-800 mb-1.5">Fair Use Notice</p>
                <ul className="text-[11px] text-amber-700 space-y-1">
                  <li>• Only download content you have permission to use</li>
                  <li>• Respect copyright and intellectual property rights</li>
                  <li>• Powered by open-source technology • For personal use only</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
