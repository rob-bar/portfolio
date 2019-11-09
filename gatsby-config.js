module.exports = {
  siteMetadata: {
    title: `Robbie Bardijn`,
    description: `Welcome, this is my portfolio website.`,
    author: `@robbiebardijn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `downloads`,
        path: `${__dirname}/static/downloads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RobbieBardijn`,
        short_name: `RobbieBardijn`,
        start_url: `/`,
        background_color: `#198dcf`,
        theme_color: `#198dcf`,
        display: `standalone`,
        icon: `static/images/icon/fav.png`
      },
    },
    `gatsby-transformer-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
