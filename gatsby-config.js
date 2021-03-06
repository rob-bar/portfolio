module.exports = {
  siteMetadata: {
    title: `Robbie Bardijn`,
    description: `Welcome, this is my portfolio website.`,
    author: `@robbiebardijn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-styled-components` },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     defaultLayouts: {
    //       default: require.resolve("./src/components/layouts/Post.js"),
    //     },
    //   },
    // },
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
        icon: `static/images/icon/fav.png`,
      },
    },
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-27483596-1`,
      },
    },
  ],
}
