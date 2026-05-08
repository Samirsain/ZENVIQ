import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    const isValidPinterestUrl = url.includes('pinterest.com') || url.includes('pin.it/')
    if (!isValidPinterestUrl) {
      return NextResponse.json({ error: 'Invalid Pinterest URL' }, { status: 400 })
    }

    // Resolve shortened URLs
    let resolvedUrl = url
    if (url.includes('pin.it/')) {
      try {
        const redirectRes = await fetch(url, { method: 'HEAD', redirect: 'follow' })
        resolvedUrl = redirectRes.url || url
      } catch {
        // continue with original
      }
    }

    // Extract pin ID
    let pinId = ''
    const pinMatch = resolvedUrl.match(/pin\/(\d+)/)
    if (pinMatch) {
      pinId = pinMatch[1]
    } else if (url.includes('pin.it/')) {
      pinId = url.split('pin.it/')[1]?.split(/[/?#]/)[0] || ''
    }

    // Fetch Pinterest page HTML
    const response = await fetch(resolvedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch Pinterest page' }, { status: 400 })
    }

    const html = await response.text()

    // Extract title
    const titleMatch = html.match(/<title>([^<]*)<\/title>/)
    const title = titleMatch ? titleMatch[1].replace(/\s*[-|]\s*Pinterest\s*$/, '').trim() : 'Pinterest Media'

    // Try to find video URL first
    const videoPatterns = [
      /"(https:\/\/v\.pinimg\.com\/videos\/[^"]*\.mp4[^"]*)"/,
      /"(https:\/\/v\.pinimg\.com\/[^"]*\.mp4[^"]*)"/,
      /video_list.*?"V_720P".*?"url"\s*:\s*"([^"]*)"/s,
      /video_list.*?"V_EXP7".*?"url"\s*:\s*"([^"]*)"/s,
      /video_list.*?"url"\s*:\s*"([^"]*\.mp4[^"]*)"/,
    ]

    let videoUrl = ''
    for (const pattern of videoPatterns) {
      const match = html.match(pattern)
      if (match) {
        videoUrl = match[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/')
        break
      }
    }

    // Find image URL (highest resolution first)
    const imagePatterns = [
      /"(https:\/\/i\.pinimg\.com\/originals\/[^"]*\.(jpg|png|gif|webp)[^"]*)"/,
      /"(https:\/\/i\.pinimg\.com\/1200x\/[^"]*\.(jpg|png|gif|webp)[^"]*)"/,
      /"(https:\/\/i\.pinimg\.com\/736x\/[^"]*\.(jpg|png|gif|webp)[^"]*)"/,
      /"(https:\/\/i\.pinimg\.com\/564x\/[^"]*\.(jpg|png|gif|webp)[^"]*)"/,
      /"(https:\/\/i\.pinimg\.com\/[^"]*\.(jpg|png|gif|webp)[^"]*)"/,
    ]

    let imageUrl = ''
    let thumbnailUrl = ''
    for (const pattern of imagePatterns) {
      const match = html.match(pattern)
      if (match) {
        if (!imageUrl) imageUrl = match[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/')
        if (!thumbnailUrl) thumbnailUrl = imageUrl
      }
    }

    // Find all available image sizes for the user to choose
    const allImages: string[] = []
    const imgRegex = /https:\/\/i\.pinimg\.com\/(?:originals|1200x|736x|564x|474x|236x)\/[^"'\s\\)]+\.(jpg|png|gif|webp)/g
    let imgMatch
    while ((imgMatch = imgRegex.exec(html)) !== null) {
      const cleanUrl = imgMatch[0].replace(/\\u002F/g, '/').replace(/\\\//g, '/')
      if (!allImages.includes(cleanUrl)) {
        allImages.push(cleanUrl)
      }
    }

    if (!videoUrl && !imageUrl) {
      return NextResponse.json({ error: 'No media found in this Pinterest post. Try a different pin URL.' }, { status: 400 })
    }

    // Determine media type
    const type = videoUrl ? 'video' : 'image'
    const downloadUrl = videoUrl || imageUrl

    // Try to get file size
    let size = 'Unknown'
    try {
      const headRes = await fetch(downloadUrl, { method: 'HEAD' })
      const contentLength = headRes.headers.get('content-length')
      if (contentLength) {
        const bytes = parseInt(contentLength)
        size = bytes > 1024 * 1024
          ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
          : `${(bytes / 1024).toFixed(0)} KB`
      }
    } catch {
      // size remains Unknown
    }

    const ext = type === 'video' ? 'mp4' : imageUrl.match(/\.(jpg|png|gif|webp)/)?.[1] || 'jpg'

    return NextResponse.json({
      title,
      type,
      thumbnail: thumbnailUrl || imageUrl,
      downloadUrl,
      allImages: allImages.slice(0, 5), // top 5 resolutions
      size,
      pinId,
      filename: `pinterest_${pinId || 'media'}.${ext}`,
    })

  } catch (error) {
    console.error('Pinterest download error:', error)
    return NextResponse.json(
      { error: 'Failed to process Pinterest URL. Please check the link and try again.' },
      { status: 500 }
    )
  }
}
