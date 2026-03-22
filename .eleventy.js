module.exports = function (eleventyConfig) {
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/articoli/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("articlesByCategory", function (articles, categoryKey) {
    return articles.filter((article) => article.data.category === categoryKey);
  });

  eleventyConfig.addFilter("featuredArticles", function (articles) {
    return articles.filter((article) => article.data.featured);
  });

  eleventyConfig.addFilter("displayDate", function (value) {
    const date = new Date(value);
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  });

  eleventyConfig.addFilter("absoluteUrl", function (pageUrl, siteUrl) {
    if (!pageUrl) return siteUrl;
    const normalizedSiteUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
    const normalizedPageUrl = pageUrl === "/" ? "" : pageUrl.replace(/^\//, "");
    return `${normalizedSiteUrl}${normalizedPageUrl}`;
  });

  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
