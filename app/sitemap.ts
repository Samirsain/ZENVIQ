import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenviq.com'

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/ai-tools',
        '/blog',
        '/contact',
        '/gallery',
        '/privacy',
        '/terms',
        '/refund',
        '/tools',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Add specific tools and blog posts if they are many, 
    // but for now, we'll keep it simple and sustainable.
    // You can fetch these from your DB or file system here.

    return [...routes]
}
