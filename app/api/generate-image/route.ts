import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { prompt, style } = await req.json()
        const hfToken = process.env.HF_TOKEN

        if (!hfToken) {
            return NextResponse.json({ error: 'API token not configured' }, { status: 500 })
        }

        // Enhance prompt with style
        const stylePrompts: Record<string, string> = {
            'realistic': 'photorealistic, ultra detailed, 8k, sharp focus',
            'artistic': 'artistic, digital art, vibrant colors, detailed',
            'cartoon': 'cartoon style, colorful, fun, detailed illustration',
            'anime': 'anime style, detailed, vibrant, studio quality',
            'oil-painting': 'oil painting style, textured, classical art, masterpiece',
            'watercolor': 'watercolor painting, soft colors, fluid strokes, artistic',
        }

        const enhancedPrompt = `${prompt}, ${stylePrompts[style] || stylePrompts['realistic']}, high quality, masterpiece`

        // Use FLUX.1-schnell for fast image generation via HuggingFace
        const response = await fetch(
            'https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${hfToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: enhancedPrompt,
                }),
            }
        )

        if (!response.ok) {
            const errorText = await response.text()
            console.error('HF Image Error:', errorText)
            return NextResponse.json({ error: 'Image generation failed. Please try again.' }, { status: 500 })
        }

        // Response is raw image bytes
        const imageBuffer = await response.arrayBuffer()
        const base64Image = Buffer.from(imageBuffer).toString('base64')
        const imageUrl = `data:image/png;base64,${base64Image}`

        return NextResponse.json({ imageUrl })

    } catch (error) {
        console.error('Image API Error:', error)
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
}
