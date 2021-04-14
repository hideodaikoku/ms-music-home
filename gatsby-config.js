require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "MS Moonshot",
    titleTemplate: "%s | Music in 2050",
    description:
      "2050年の社会における音楽芸術はどのようなものでしょうか",
    url: "https://ms-music.tokyo", // No trailing slash allowed!
    image: "/images/moonshot-logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@NeuroMusicLab",
    author: "Hideo Daikoku, Hazuki Ota, Leonard Choo", 
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploaded-images",
        path: `${__dirname}/images/uploads`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "faculty-images",
        path: `${__dirname}/src/images/faculty`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "news-images",
        path: `${__dirname}/src/images/news`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project-images",
        path: `${__dirname}/src/images/projects`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "student-images",
        path: `${__dirname}/src/images/students`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-posts",
        path: `${__dirname}/_posts/blog`,
      },
    },

    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
};
