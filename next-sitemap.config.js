/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zenviqdigital.in',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  outDir: './public',
  exclude: ['/api/*', '/sitemap.xml', '/robots.txt'],
}
