import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { contentType, topic, keywords, tone, length } = await req.json()
        const hfToken = process.env.HF_TOKEN

        if (!hfToken) {
            return NextResponse.json({ error: 'API token not configured' }, { status: 500 })
        }

        const lengthGuide: Record<string, string> = {
            'short': '100-200 words',
            'medium': '300-500 words',
            'long': '600-1000 words',
            'very-long': '1000+ words',
        }

        const contentTypeGuide: Record<string, string> = {
            'blog': 'Write a well-structured blog post with proper headings (## for H2, ### for H3), introduction, key points, and conclusion. Use markdown formatting.',
            'social': 'Write engaging social media posts with emojis, hashtags, and call-to-action. Keep it punchy and shareable.',
            'marketing': 'Write persuasive marketing copy with benefits, features, social proof elements, and a strong call-to-action.',
            'seo': 'Write SEO-optimized content with the target keywords naturally integrated. Include proper H2/H3 structure, meta-friendly intro, and internal linking suggestions.',
            'creative': 'Write creative, engaging storytelling content that captivates readers with vivid imagery and compelling narrative.',
        }

        const systemPrompt = `You are an expert content writer. Write high-quality, original content.
Rules:
- Write in a ${tone} tone
- Target length: ${lengthGuide[length] || '300-500 words'}
- ${contentTypeGuide[contentType] || contentTypeGuide['blog']}
- Use markdown formatting (bold, headers, bullet points)
- Make content engaging, informative, and ready to publish
- Do NOT include meta instructions or notes about the content
- Just output the content directly`

        const userPrompt = `Write ${contentType} content about: "${topic}"${keywords ? `\n\nTarget keywords to include: ${keywords}` : ''}`

        const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${hfToken}`
            },
            body: JSON.stringify({
                model: 'Qwen/Qwen2.5-72B-Instruct',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: 0.8,
                max_tokens: 2000,
                top_p: 0.95,
            })
        })

        const data = await response.json()

        if (data.error) {
            console.error('HF Content Error:', JSON.stringify(data.error))
            return NextResponse.json({ error: 'AI generation failed' }, { status: 500 })
        }

        const content = data.choices?.[0]?.message?.content
        if (!content) {
            return NextResponse.json({ error: 'Empty response from AI' }, { status: 500 })
        }

        return NextResponse.json({ content })

    } catch (error) {
        console.error('Content API Error:', error)
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
}
