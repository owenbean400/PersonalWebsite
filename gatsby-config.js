/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://owengbean.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/404`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            if (node.path.startsWith("/portfolio/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.7,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/about/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `yearly`,
                priority: 0.9,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/contact/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `yearly`,
                priority: 0.8,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/explore/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.5,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/games/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.4,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/graphics/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.5,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/websites/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.7,
                lastmod: `2020-11-11`,
              }
            } else if (node.path.startsWith("/")) {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 1.0,
                lastmod: `2020-11-11`,
              }
            } else {
              return {
                url: `${site.siteMetadata.siteUrl}${node.path}`,
                changefreq: `monthly`,
                priority: 0.8,
                lastmod: `2020-11-11`,
              }
            }
          }),
      },
    },
  ],
  pathPrefix: "",
}
