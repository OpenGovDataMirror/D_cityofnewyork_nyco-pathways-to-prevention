module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Red Hat Text`,
            variants: [`400`, `500`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: [`${__dirname}/src/svgs/logos`, `${__dirname}/src/svgs/images`, `${__dirname}/src/svgs/icons`]
          }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      },
    },
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: `stage-acs-pathways.bbox.ly`,
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ACS Pathways`,
        short_name: `ACS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.png`,
        icons: [
            {
              src: `/favicons/android-chrome-512x512.png`,
              sizes: `512x512`,
              type: `image/png`
            },
            {
                src: `/favicons/android-chrome-192x192.png`,
                sizes: `192x192`,
                type: `image/png`
            }
        ]
      },
    },
    `gatsby-plugin-offline`,
  ],
}
