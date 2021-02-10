require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "MS Moonshot",
    titleTemplate: "%s | Music in 2050",
    description:
      "Temporary Description",
    url: "https://ms-music.tokyo", // No trailing slash allowed!
    image: "/images/moonshot-logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@nNeuroMusicLab",
    author: "Hideo Daikoku", 
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
