module.exports = {
  siteMetadata: {
    title: `watasuke.tk`,
    description: `my profile and portfolio`,
    author: `@Watasuke102`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        name: `markdown`,
        path: `${__dirname}/src/md-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `watasuke.tk`,
        short_name: `watasuke.tk`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    // マークダウンをHTMLにする
    `gatsby-transformer-remark`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
