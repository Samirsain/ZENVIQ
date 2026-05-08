import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const mediaUrl = request.nextUrl.searchParams.get('url')
    const filename = request.nextUrl.searchParams.get('filename') || 'pinterest-download'

    if (!mediaUrl) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Only allow Pinterest CDN URLs
    if (!mediaUrl.includes('pinimg.com')) {
      return NextResponse.json({ error: 'Invalid media URL' }, { status: 400 })
    }

    // Fetch the media file
    const response = await fetch(mediaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch media' }, { status: 400 })
    }

    const contentType = response.headers.get('content-type') || 'application/octet-stream'
    const buffer = await response.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': buffer.byteLength.toString(),
      },
    })
  } catch (error) {
    console.error('Media proxy error:', error)
    return NextResponse.json({ error: 'Failed to download media' }, { status: 500 })
  }
}
