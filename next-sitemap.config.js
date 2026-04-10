/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.maintenance-volt.com",
  generateRobotsTxt: true,
  outDir: "./out",
  trailingSlash: true,
  transform: async (config, path) => {
    if (path === "/ar/" || path === "/en/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.includes("/about/") || path.includes("/contact/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
