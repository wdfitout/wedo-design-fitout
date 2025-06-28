/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wedointerior.ae',
  generateRobotsTxt: true, // Generate robots.txt
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'), // <-- This line explicitly adds the homepage
  ],
};
