import { graphql, useStaticQuery } from "gatsby"

const useContentfulPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSection {
        nodes {
          title
          textContent {
            textContent
          }
          image {
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
              description
            }
          }
        }
      }
    }
  `)

  return data.allContentfulSection.nodes
    .map(node => ({
      title: node.title,
      textContent: node.textContent.textContent,
      image: node.image.photo,
    }))
    .reverse()
}

export default useContentfulPage
