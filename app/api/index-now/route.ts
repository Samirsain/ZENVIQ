import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'zenviq2025indexnow'
const SITE_URL = 'https://www.zenviqdigital.in'

// All important pages to submit for indexing
const ALL_URLS = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/gallery',
  '/blog',
  '/tools',
  '/ai-tools',
  '/tools/social-downloader',
  '/tools/pinterest-downloader',
  '/tools/content-generator',
  '/privacy',
  '/terms',
]

export async function POST(request: NextRequest) {
  try {
    const { urls, engine } = await request.json()
    const targetUrls = urls || ALL_URLS.map(u => `${SITE_URL}${u}`)

    const results: Record<string, string> = {}

    // 1. IndexNow — Bing, Yandex, Seznam, Naver
    if (!engine || engine === 'all' || engine === 'indexnow') {
      try {
        const indexNowPayload = {
          host: 'www.zenviqdigital.in',
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: targetUrls,
        }

        const bingRes = await fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(indexNowPayload),
          signal: AbortSignal.timeout(10000),
        })
        results.indexnow = `Status: ${bingRes.status} (${bingRes.status === 200 || bingRes.status === 202 ? 'Submitted successfully' : 'Check response'})`
      } catch (e) {
        results.indexnow = `Error: ${e instanceof Error ? e.message : 'Failed'}`
      }
    }

    // 2. Google Ping — Submit sitemap
    if (!engine || engine === 'all' || engine === 'google') {
      try {
        const googleRes = await fetch(
          `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
          { signal: AbortSignal.timeout(10000) }
        )
        results.google_ping = `Status: ${googleRes.status}`
      } catch (e) {
        results.google_ping = `Error: ${e instanceof Error ? e.message : 'Failed'}`
      }
    }

    // 3. Bing Webmaster Ping
    if (!engine || engine === 'all' || engine === 'bing') {
      try {
        const bingPing = await fetch(
          `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
          { signal: AbortSignal.timeout(10000) }
        )
        results.bing_ping = `Status: ${bingPing.status}`
      } catch (e) {
        results.bing_ping = `Error: ${e instanceof Error ? e.message : 'Failed'}`
      }
    }

    return NextResponse.json({
      success: true,
      submitted: targetUrls.length,
      results,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit' },
      { status: 500 }
    )
  }
}

// GET — Quick status check
export async function GET() {
  return NextResponse.json({
    indexnow_key: INDEXNOW_KEY,
    sitemap: `${SITE_URL}/sitemap.xml`,
    robots: `${SITE_URL}/robots.txt`,
    total_urls: ALL_URLS.length,
    urls: ALL_URLS.map(u => `${SITE_URL}${u}`),
  })
}
