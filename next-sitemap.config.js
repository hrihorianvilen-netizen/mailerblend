/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mailerblend.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: 'public',
  changefreq: null, // we'll set per-URL when needed
  priority: null,
  generateIndexSitemap: true,

  // Optional: include alternate refs for future ES locale
  alternateRefs: [
    // { href: 'https://www.mailerblend.com/es', hreflang: 'es' },
    // { href: 'https://www.mailerblend.com', hreflang: 'en' },
  ],

  transform: async (config, path) => {
    // Default values
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    if (path === '/pricing/') { priority = 0.9; changefreq = 'weekly'; }
    if (path === '/email-marketing-automation/') { priority = 0.9; changefreq = 'weekly'; }
    if (path === '/email-analytics-reporting/') { priority = 0.9; changefreq = 'weekly'; }
    if (path === '/email-security-deliverability/') { priority = 0.8; changefreq = 'monthly'; }
    if (path === '/email-marketing-integrations/') { priority = 0.8; changefreq = 'weekly'; }
    if (path === '/smtp-relay/') { priority = 0.8; changefreq = 'monthly'; }
    if (path === '/transactional-sms-api/') { priority = 0.8; changefreq = 'monthly'; }
    if (path === '/dedicated-ip/') { priority = 0.8; changefreq = 'monthly'; }
    if (path === '/contact/') { priority = 0.6; changefreq = 'monthly'; }
    if (path === '/login/' || path === '/signup/') { priority = 0.1; changefreq = 'monthly'; }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? []
    };
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/login/', '/signup/', '/preview/', '/sandbox/'] },
    ],
    additionalSitemaps: [
      'https://www.mailerblend.com/sitemap-pages.xml',
      'https://www.mailerblend.com/sitemap-features.xml',
      // Future:
      // 'https://www.mailerblend.com/sitemap-es.xml',
      // 'https://www.mailerblend.com/sitemap-blog.xml',
      // 'https://www.mailerblend.com/sitemap-help.xml',
    ],
  },
};
