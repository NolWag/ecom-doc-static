"use strict";

module.exports = {
  siteMetadata: {
    title: "EcomDocStatic"
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-sharp", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-offline", "gatsby-plugin-postcss", {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/"
    },
    __key: "images"
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./src/pages/"
    },
    __key: "pages"
  }]
};