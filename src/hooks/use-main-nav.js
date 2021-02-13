import { graphql, useStaticQuery } from "gatsby"

const useMainNav = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage {
        nodes {
          slug
          navText
          navOrder
        }
      }
    }
  `)

  return data.allContentfulPage.nodes.sort((a, b) =>
    a.navOrder > b.navOrder ? 1 : -1
  )
}

export default useMainNav
