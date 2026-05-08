import { MetadataRoute } from 'next'
import blogPosts from '@/content/blog-posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.zenviqdigital.in'

    // Core pages with strategic priority
    const corePages = [
        { route: '', priority: 1.0, changeFrequency: 'daily' as const },
        { route: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
        { route: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/gallery', priority: 0.85, changeFrequency: 'weekly' as const },
        { route: '/blog', priority: 0.85, changeFrequency: 'daily' as const },
        { route: '/tools', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/ai-tools', priority: 0.8, changeFrequency: 'weekly' as const },
    ].map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }))

    // Individual service pages — high SEO value
    const servicePages = [
        '/services/web-development',
        '/services/seo-optimization',
        '/services/ai-automation',
        '/services/ecommerce-development',
        '/services/ui-ux-design',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // City landing pages — critical for local SEO
    const cityPages = [
        '/web-development-hanumangarh',
        '/web-development-ganganagar',
        '/web-development-bathinda',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // Tool pages — high value for organic traffic
    const toolPages = [
        '/tools/social-downloader',
        '/tools/pinterest-downloader',
        '/tools/content-generator',
        '/tools/color-palette',
        '/tools/json-formatter',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.75,
    }))

    // Legal pages
    const legalPages = [
        '/privacy',
        '/terms',
        '/refund',
        '/sitemap',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }))

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...corePages, ...servicePages, ...cityPages, ...toolPages, ...legalPages, ...blogRoutes]
}
