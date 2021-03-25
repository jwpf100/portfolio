module.exports = {
  siteMetadata: {
    title: 'Joe Fletcher Portfolio',
    description: `Joe Fletcher - Front End Developer`,
    author: `joseph.fletcher100@gmail.com`,
    siteUrl: `https://josephfletcher.co.uk/`,
    keywords: ['Front End Developer', 'Web Developer', 'Portfolio'],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: `Joe Fletcher Portfolio`,
        short_name: `Joe Fletcher`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
