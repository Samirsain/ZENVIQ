import { NextRequest, NextResponse } from 'next/server'

// Extracts direct media URLs by fetching and parsing the page HTML
// Works for platforms that embed video/image URLs in their page source

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
  })
  return res.text()
}

function detectPlatform(url: string): string {
  const u = url.toLowerCase()
  if (u.includes('instagram.com') || u.includes('instagr.am')) return 'instagram'
  if (u.includes('tiktok.com') || u.includes('vm.tiktok')) return 'tiktok'
  if (u.includes('twitter.com') || u.includes('//x.com') || u.includes('//www.x.com')) return 'twitter'
  if (u.includes('facebook.com') || u.includes('fb.watch') || u.includes('fb.com') || u.includes('m.facebook')) return 'facebook'
  if (u.includes('pinterest.com') || u.includes('pin.it')) return 'pinterest'
  if (u.includes('reddit.com') || u.includes('redd.it')) return 'reddit'
  return 'unknown'
}

// ── Pinterest ──
async function handlePinterest(url: string) {
  let resolvedUrl = url
  if (url.includes('pin.it/')) {
    try {
      const r = await fetch(url, { method: 'HEAD', redirect: 'follow' })
      resolvedUrl = r.url || url
    } catch { /* continue */ }
  }

  const html = await fetchPage(resolvedUrl)

  const videoPatterns = [
    /"(https:\/\/v\.pinimg\.com\/videos\/[^"]*\.mp4[^"]*)"/,
    /"(https:\/\/v\.pinimg\.com\/[^"]*\.mp4[^"]*)"/,
  ]
  let videoUrl = ''
  for (const p of videoPatterns) {
    const m = html.match(p)
    if (m) { videoUrl = m[1].replace(/\\u002F/g, '/'); break }
  }

  const imgPatterns = [
    /"(https:\/\/i\.pinimg\.com\/originals\/[^"]*\.(jpg|png|webp)[^"]*)"/,
    /"(https:\/\/i\.pinimg\.com\/1200x\/[^"]*\.(jpg|png|webp)[^"]*)"/,
    /"(https:\/\/i\.pinimg\.com\/736x\/[^"]*\.(jpg|png|webp)[^"]*)"/,
  ]
  let imageUrl = ''
  for (const p of imgPatterns) {
    const m = html.match(p)
    if (m) { imageUrl = m[1].replace(/\\u002F/g, '/'); break }
  }

  const titleMatch = html.match(/<title>([^<]*)<\/title>/)
  const title = titleMatch ? titleMatch[1].replace(/\s*[-|]\s*Pinterest\s*$/, '') : 'Pinterest Media'

  if (videoUrl) return { status: 'tunnel', url: videoUrl, filename: `pinterest_video.mp4`, title, type: 'video', thumbnail: imageUrl }
  if (imageUrl) return { status: 'tunnel', url: imageUrl, filename: `pinterest_image.jpg`, title, type: 'image', thumbnail: imageUrl }
  throw new Error('No media found in this Pinterest post')
}

// ── Twitter/X ──
async function handleTwitter(url: string) {
  // Use fxtwitter/vxtwitter API which provides direct media links
  const tweetUrl = url.replace('twitter.com', 'api.fxtwitter.com').replace('x.com', 'api.fxtwitter.com')
  const res = await fetch(tweetUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(10000),
  })
  const data = await res.json()

  if (!data.tweet) throw new Error('Tweet not found or is private')

  const tweet = data.tweet
  const media = tweet.media

  if (media?.videos?.length) {
    const video = media.videos[0]
    return {
      status: 'tunnel',
      url: video.url,
      filename: `twitter_${tweet.id}.mp4`,
      title: tweet.text?.substring(0, 80) || 'Twitter Video',
      type: 'video',
      thumbnail: video.thumbnail_url || media.photos?.[0]?.url,
    }
  }

  if (media?.photos?.length) {
    if (media.photos.length === 1) {
      return {
        status: 'tunnel',
        url: media.photos[0].url,
        filename: `twitter_${tweet.id}.jpg`,
        title: tweet.text?.substring(0, 80) || 'Twitter Image',
        type: 'image',
        thumbnail: media.photos[0].url,
      }
    }
    return {
      status: 'picker',
      picker: media.photos.map((p: { url: string }, i: number) => ({
        type: 'photo',
        url: p.url,
        thumb: p.url,
      })),
      title: tweet.text?.substring(0, 80) || 'Twitter Images',
    }
  }

  throw new Error('No media found in this tweet')
}

// ── Instagram ──
async function handleInstagram(url: string) {
  // Use ddinstagram API
  const instaUrl = url.replace('instagram.com', 'ddinstagram.com')
  const html = await fetchPage(instaUrl)

  // Find og:video or og:image
  const videoMatch = html.match(/<meta\s+property="og:video"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+property="og:video"/i)
  const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/i)
  const titleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i)
    || html.match(/<meta\s+content="([^"]+)"\s+property="og:title"/i)

  const title = titleMatch ? titleMatch[1] : 'Instagram Media'

  if (videoMatch) {
    return {
      status: 'tunnel',
      url: videoMatch[1],
      filename: 'instagram_video.mp4',
      title,
      type: 'video',
      thumbnail: imageMatch?.[1],
    }
  }
  if (imageMatch) {
    return {
      status: 'tunnel',
      url: imageMatch[1],
      filename: 'instagram_image.jpg',
      title,
      type: 'image',
      thumbnail: imageMatch[1],
    }
  }

  throw new Error('No media found. The post may be private.')
}

// ── TikTok ──
async function handleTiktok(url: string) {
  // Use tikwm.com API
  const res = await fetch('https://www.tikwm.com/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `url=${encodeURIComponent(url)}&hd=1`,
    signal: AbortSignal.timeout(15000),
  })
  const data = await res.json()

  if (data.code !== 0 || !data.data) {
    throw new Error('Could not fetch TikTok video. It may be private.')
  }

  const d = data.data
  // Images (slideshow)
  if (d.images && d.images.length > 0) {
    return {
      status: 'picker',
      picker: d.images.map((img: string) => ({
        type: 'photo' as const,
        url: img,
        thumb: img,
      })),
      audio: d.music,
      audioFilename: `tiktok_audio_${d.id}.mp3`,
      title: d.title || 'TikTok Slideshow',
    }
  }

  // Video
  const videoUrl = d.hdplay || d.play
  if (videoUrl) {
    return {
      status: 'tunnel',
      url: videoUrl,
      filename: `tiktok_${d.id}.mp4`,
      title: d.title || 'TikTok Video',
      type: 'video',
      thumbnail: d.cover || d.origin_cover,
    }
  }

  throw new Error('No media found in this TikTok')
}

// ── Facebook ──
async function handleFacebook(url: string) {
  const html = await fetchPage(url)

  const videoMatch = html.match(/"playable_url(?:_quality_hd)?"\s*:\s*"([^"]+)"/)
    || html.match(/"sd_src(?:_no_ratelimit)?"\s*:\s*"([^"]+)"/)
    || html.match(/"hd_src(?:_no_ratelimit)?"\s*:\s*"([^"]+)"/)

  if (videoMatch) {
    const videoUrl = videoMatch[1].replace(/\\\//g, '/').replace(/\\u0025/g, '%')
    return {
      status: 'tunnel',
      url: videoUrl,
      filename: 'facebook_video.mp4',
      title: 'Facebook Video',
      type: 'video',
    }
  }

  const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
  if (imageMatch) {
    return {
      status: 'tunnel',
      url: imageMatch[1].replace(/&amp;/g, '&'),
      filename: 'facebook_image.jpg',
      title: 'Facebook Image',
      type: 'image',
      thumbnail: imageMatch[1].replace(/&amp;/g, '&'),
    }
  }

  throw new Error('No media found. The post may be private or login-required.')
}

// ── Reddit ──
async function handleReddit(url: string) {
  const jsonUrl = url.replace(/\/?$/, '.json')
  const res = await fetch(jsonUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(10000),
  })
  const data = await res.json()

  const post = data?.[0]?.data?.children?.[0]?.data
  if (!post) throw new Error('Reddit post not found')

  // Video
  if (post.is_video && post.media?.reddit_video?.fallback_url) {
    return {
      status: 'tunnel',
      url: post.media.reddit_video.fallback_url,
      filename: `reddit_${post.id}.mp4`,
      title: post.title || 'Reddit Video',
      type: 'video',
      thumbnail: post.thumbnail,
    }
  }

  // Image
  if (post.url && /\.(jpg|png|gif|webp)/i.test(post.url)) {
    return {
      status: 'tunnel',
      url: post.url,
      filename: `reddit_${post.id}.${post.url.match(/\.(jpg|png|gif|webp)/i)?.[1] || 'jpg'}`,
      title: post.title || 'Reddit Image',
      type: 'image',
      thumbnail: post.url,
    }
  }

  // Gallery
  if (post.is_gallery && post.media_metadata) {
    const items = Object.values(post.media_metadata).map((m: any) => {
      const img = m.s?.u?.replace(/&amp;/g, '&') || m.s?.gif?.replace(/&amp;/g, '&')
      return { type: 'photo' as const, url: img, thumb: img }
    }).filter((i: any) => i.url)

    if (items.length > 0) {
      return { status: 'picker', picker: items, title: post.title || 'Reddit Gallery' }
    }
  }

  throw new Error('No downloadable media found in this Reddit post')
}

export async function POST(request: NextRequest) {
  try {
    let { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Normalize URL
    url = url.trim()
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    console.log('[Social Download] URL received:', url)

    const platform = detectPlatform(url)
    console.log('[Social Download] Detected platform:', platform)

    let result
    switch (platform) {
      case 'pinterest':
        result = await handlePinterest(url)
        break
      case 'twitter':
        result = await handleTwitter(url)
        break
      case 'instagram':
        result = await handleInstagram(url)
        break
      case 'tiktok':
        result = await handleTiktok(url)
        break
      case 'facebook':
        result = await handleFacebook(url)
        break
      case 'reddit':
        result = await handleReddit(url)
        break
      default:
        return NextResponse.json(
          { error: `"${url}" is not supported. Currently works with: Instagram, TikTok, Twitter/X, Facebook, Pinterest, Reddit.` },
          { status: 400 }
        )
    }

    return NextResponse.json(result)

  } catch (error) {
    console.error('Social download error:', error)
    const message = error instanceof Error ? error.message : 'Failed to process your request.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
