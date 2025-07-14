/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bookmariachi.com', // replace with your actual site URL
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/404'],
    sitemapSize: 5000,
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    },
  }
  