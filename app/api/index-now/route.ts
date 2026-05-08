import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'zenviq2025indexnow'
const SITE_URL = 'https://www.zenviqdigital.in'

// All important pages to submit for indexing — must match sitemap.xml
const ALL_URLS = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/gallery',
  '/blog',
  '/tools',
  '/ai-tools',
  // Blog posts
  '/blog/seo-tips-2025',
  '/blog/ai-web-design-development-2025',
  '/blog/ai-automation-business-scaling',
  // Service pages
  '/services/web-development',
  '/services/seo-optimization',
  '/services/ai-automation',
  '/services/ecommerce-development',
  '/services/ui-ux-design',
  // City pages
  '/web-development-hanumangarh',
  '/web-development-ganganagar',
  '/web-development-bathinda',
  // Tool pages
  '/tools/social-downloader',
  '/tools/pinterest-downloader',
  '/tools/content-generator',
  '/tools/ai-content-generator',
  '/tools/image-generator',
  '/tools/case-converter',
  '/tools/css-unit-converter',
  '/tools/email-tools',
  '/tools/emi-calculator',
  '/tools/gst-calculator',
  '/tools/instagram-tools',
  '/tools/meta-caption',
  '/tools/percentage-calculator',
  '/tools/seo-checker',
  '/tools/seo-tools',
  '/tools/sku-generator',
  '/tools/social-tools',
  '/tools/speed-tools',
  '/tools/word-counter',
  // Legal
  '/privacy',
  '/terms',
  '/refund',
  // AI tools
  '/ai-tools/chatgpt',
  '/ai-tools/claude',
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

        // Submit to multiple IndexNow endpoints for maximum coverage
        const endpoints = [
          'https://api.indexnow.org/indexnow',
          'https://www.bing.com/indexnow',
          'https://yandex.com/indexnow',
        ]

        for (const endpoint of endpoints) {
          try {
            const res = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(indexNowPayload),
              signal: AbortSignal.timeout(10000),
            })
            const name = new URL(endpoint).hostname.split('.')[1] || new URL(endpoint).hostname
            results[`indexnow_${name}`] = `Status: ${res.status} (${res.status === 200 || res.status === 202 ? '✅ Submitted' : '⚠️ Check response'})`
          } catch (e) {
            const name = new URL(endpoint).hostname
            results[`indexnow_${name}`] = `Error: ${e instanceof Error ? e.message : 'Failed'}`
          }
        }
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
        results.google_ping = `Status: ${googleRes.status} ${googleRes.status === 200 ? '✅' : '⚠️'}`
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
        results.bing_ping = `Status: ${bingPing.status} ${bingPing.status === 200 ? '✅' : '⚠️'}`
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

// GET — Quick status check + trigger a ping
export async function GET() {
  // Auto-ping Google & Bing on GET for convenience
  const pingResults: Record<string, string> = {}

  try {
    const googlePing = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
      { signal: AbortSignal.timeout(5000) }
    )
    pingResults.google = `${googlePing.status}`
  } catch {
    pingResults.google = 'timeout'
  }

  try {
    const bingPing = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
      { signal: AbortSignal.timeout(5000) }
    )
    pingResults.bing = `${bingPing.status}`
  } catch {
    pingResults.bing = 'timeout'
  }

  return NextResponse.json({
    indexnow_key: INDEXNOW_KEY,
    sitemap: `${SITE_URL}/sitemap.xml`,
    robots: `${SITE_URL}/robots.txt`,
    total_urls: ALL_URLS.length,
    ping_results: pingResults,
    urls: ALL_URLS.map(u => `${SITE_URL}${u}`),
  })
}
