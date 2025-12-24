import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { message } = await req.json()
        const apiKey = process.env.OPENAI_API_KEY

        if (!apiKey) {
            return NextResponse.json({ error: 'OpenAI API Key not found' }, { status: 500 })
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: `You are Zenviq AI, a senior digital consultant for Zenviq Agency. 
            Zenviq specializes in Premium Web Development, AI Automation, Next.js, and E-commerce.
            
            Your goal is to help users build high-performance digital solutions.
            
            Guidelines:
            1. Be professional, concise, and helpful. Use **bold** for key services or important points.
            2. Use bullet points or numbered lists for readibility when explaining services.
            3. If the user is interested in services, pricing, or "starting", ALWAYS invite them to book a meeting.
            4. IMPORTANT: If you suggest a meeting, include this EXACT link: https://calendly.com/zenviq/30min
            5. Response language: Match the user's language (English, Hindi, or Hinglish).
            
            Key Links:
            - Meeting: https://calendly.com/zenviq/30min
            - Contact: /contact
            - Whatsapp: +91 9352410667
            `
                    },
                    { role: 'user', content: message }
                ],
                temperature: 0.7,
                max_tokens: 350
            })
        })

        const data = await response.json()

        if (data.error) {
            console.error('OpenAI Error:', data.error)
            return NextResponse.json({ text: "I'm having trouble connecting right now. Please try again or contact us directly." })
        }

        const aiText = data.choices[0].message.content
        return NextResponse.json({ text: aiText })

    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ text: "Something went wrong. Please check your connection." }, { status: 500 })
    }
}
