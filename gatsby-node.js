const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node }) => {
  // const { createNodeField } = actions
  // console.log(`Node of type ${node.internal.type} created`)
  if (node.internal.type === "ContentfulPage") {
    console.log("page", JSON.stringify(node, null, 2))
    /*     createNodeField({
      node,
      name: `slug`,
      value: node.slug,
    }) */
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 2))

  result.data.allContentfulPage.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
