import { MetadataRoute } from 'next'
import blogPosts from '@/content/blog-posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://zenviq.com'

    // Static routes
    const staticRoutes = [
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

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // You can add more dynamic routes like /tools/[slug] or /ai-tools/[slug] here

    return [...staticRoutes, ...blogRoutes]
}
