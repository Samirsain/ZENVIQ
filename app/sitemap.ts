import { MetadataRoute } from 'next'
import blogPosts from '@/content/blog-posts.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.zenviqdigital.in'

    // Use a stable date — only update when content actually changes
    const lastUpdated = new Date('2026-05-09')

    // Core pages — highest priority
    const corePages = [
        { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { route: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
        { route: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
        { route: '/gallery', priority: 0.85, changeFrequency: 'weekly' as const },
        { route: '/blog', priority: 0.85, changeFrequency: 'weekly' as const },
        { route: '/tools', priority: 0.8, changeFrequency: 'weekly' as const },
        { route: '/ai-tools', priority: 0.8, changeFrequency: 'weekly' as const },
    ].map((page) => ({
        url: `${baseUrl}${page.route}`,
        lastModified: lastUpdated,
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
        lastModified: lastUpdated,
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
        lastModified: lastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    // AI Tools pages
    const aiToolPages = [
        '/ai-tools/chatgpt',
        '/ai-tools/claude',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }))

    // Tool pages — all actual tools for organic traffic
    const toolPages = [
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
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastUpdated,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
    }))

    // Legal pages
    const legalPages = [
        '/privacy',
        '/terms',
        '/refund',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastUpdated,
        changeFrequency: 'yearly' as const,
        priority: 0.3,
    }))

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date || '2026-05-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        ...corePages,
        ...servicePages,
        ...cityPages,
        ...aiToolPages,
        ...toolPages,
        ...legalPages,
        ...blogRoutes,
    ]
}
