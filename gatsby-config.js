/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://owengbean.com'
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-react-helmet`, `gatsby-plugin-sitemap`],
  pathPrefix: "",
}
