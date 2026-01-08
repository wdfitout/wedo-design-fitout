/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wedointerior.ae',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'), // Ensure homepage is included
  ],
  transform: async (config, path) => {
    const priority = path === '/' ? 1.0 : 0.9;

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
