import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"
import FullScreenVideo from "../components/full-screen-video"

const Page = ({ data }) => {
  const { sections } = data.contentfulPage

  return (
    <Layout>
      <FullScreenVideo />
      {sections.map(
        ({ id, title, textContent, image, photoGallery, video }) => (
          <Section
            key={id}
            title={title}
            textContent={textContent && textContent.textContent}
            image={image}
            photoGallery={photoGallery}
            video={video}
          />
        )
      )}
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
          }
          altText
        }
        photoGallery {
          photos {
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
              title
            }
            altText
          }
        }
      }
    }
  }
`

export default Page
