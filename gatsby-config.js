module.exports = {
  siteMetadata: {
    title: "MS Moonshot",
    titleTemplate: "%s | Music in 2050",
    description:
      "Temporary Description",
    url: "https://ms-music.tokyo", // No trailing slash allowed!
    image: "/images/sample.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@nNeuroMusicLab",
    author: "Hideo Daikoku", 
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
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
        custom: {
          families: ["Ancho-Thin"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
};
