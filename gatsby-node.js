const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// called whenever new node is created.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // I was getting the bs Cannot query field “fields” on type “MarkdownRemark” when I have allMarkdownRemark
  // error. but that was solved by changing the orders here.
  // https://stackoverflow.com/questions/65559337/cannot-query-fields-on-allmarkdownremark-graphql

  if (node.internal.type === `MarkdownRemark`) {
    // but CMS should provide slug directly.
    // create slug using plugin from gatsby-source-filesystem
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    // create additional fields on nodes created by other plugins
    // you area basically adding slug directly to the new MarkdownRemark nodes
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  fmImagesToRelative(node) // convert image paths for gatsby images

}

// after creating the slug, you can create pages

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  // **Note:** The graphql function call returns a Promise
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  
}