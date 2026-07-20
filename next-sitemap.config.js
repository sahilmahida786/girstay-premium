/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://girstay-premium.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/dashboard/*', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://girstay-premium.vercel.app/sitemap.xml',
    ],
  },
}
