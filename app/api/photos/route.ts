import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    try {
        const publicDir = path.join(process.cwd(), 'public')
        const files = fs.readdirSync(publicDir)

        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']
        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase()
            return imageExtensions.includes(ext)
        }).map(file => ({
            name: file,
            url: `/${file}`
        }))

        // Also check logos directory if it exists
        const logosDir = path.join(publicDir, 'logos')
        if (fs.existsSync(logosDir)) {
            const logoFiles = fs.readdirSync(logosDir)
            const logos = logoFiles.filter(file => {
                const ext = path.extname(file).toLowerCase()
                return imageExtensions.includes(ext)
            }).map(file => ({
                name: `logos/${file}`,
                url: `/logos/${file}`
            }))
            images.push(...logos)
        }

        return NextResponse.json(images)
    } catch (error) {
        console.error('Error reading gallery:', error)
        return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 })
    }
}
