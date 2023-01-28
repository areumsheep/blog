import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env`,
});

const siteMetadata = {
  title: 'tech blog',
  author: 'areumsheep',
  siteUrl: 'https://blog.areumsheep.vercel.app/',
  description: 'Miso의 기술 블로그',
};

const config: GatsbyConfig = {
  siteMetadata,
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        short_url: '/',
        background_color: '#ffffff',
        theme_color: '#F0A455',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'none',
            },
          },
          {
            resolve: 'gatsby-remark-copy-relative-linked-files',
            options: {
              ignoreFileExtensions: ['.md', '.pdf', '.d.ts'],
              filename: ({ hash, name, extension }) => `${name}-${hash}.${extension}`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_VERSION,
      },
    },
  ],
};

export default config;
