import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"

const Page = ({ data }) => {
  const { sections } = data.contentfulPage

  return (
    <Layout>
      {sections.map(({ id, title, textContent, image }) => (
        <Section
          key={id}
          title={title}
          textContent={textContent && textContent.textContent}
          image={image && image.photo}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      sections {
        id
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
`

export default Page
