'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Search, View, Download, ExternalLink } from 'lucide-react'

interface Photo {
    name: string
    url: string
}

export default function GalleryPage() {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null)

    useEffect(() => {
        fetch('/api/photos')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPhotos(data)
                }
                setLoading(false)
            })
            .catch(err => {
                console.error('Failed to fetch photos:', err)
                setLoading(false)
            })
    }, [])

    const filteredPhotos = photos.filter(photo =>
        photo.name.toLowerCase().includes(search.toLowerCase())
    )

    const downloadImage = (url: string, name: string) => {
        const link = document.createElement('a')
        link.href = url
        link.download = name
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="min-h-screen bg-background font-jost">
            {/* Search Header */}
            <div className="sticky top-0 z-30 glass-panel border-b mb-8">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="p-2 hover:bg-accent rounded-full transition-colors">
                                <ArrowLeft className="w-6 h-6" />
                            </Link>
                            <h1 className="text-2xl font-bold gradient-text">Photo Gallery</h1>
                        </div>

                        <div className="relative group flex-1 md:max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search photos..."
                                className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 pb-20">
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="aspect-square bg-muted animate-pulse rounded-2xl" />
                        ))}
                    </div>
                ) : filteredPhotos.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="group relative aspect-square glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedImage(photo)}
                            >
                                <Image
                                    src={photo.url}
                                    alt={photo.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                                    <p className="text-white text-xs font-medium text-center line-clamp-2 mb-2">
                                        {photo.name}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedImage(photo)
                                            }}
                                            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg backdrop-blur-md transition-all"
                                        >
                                            <View className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                downloadImage(photo.url, photo.name)
                                            }}
                                            className="p-2 bg-white/20 hover:bg-white/40 text-white rounded-lg backdrop-blur-md transition-all"
                                        >
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">No photos found matching your search.</p>
                    </div>
                )}
            </main>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                        <button
                            className="absolute top-0 right-0 p-4 text-white hover:text-primary transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={selectedImage.url}
                                alt={selectedImage.name}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="mt-8 flex flex-col items-center gap-4">
                            <h2 className="text-white text-xl font-medium">{selectedImage.name}</h2>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        downloadImage(selectedImage.url, selectedImage.name)
                                    }}
                                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition-opacity font-medium"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Image
                                </button>
                                <Link
                                    href={selectedImage.url}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all font-medium"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Full Resolution
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
