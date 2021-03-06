import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Section from "../components/section"

const Page = ({ data }) => {
  const { sections } = data.contentfulPage
  console.log("SECTIONS", sections)

  return (
    <Layout>
      {sections.map(
        ({ id, title, textContent, image, photoGallery, fullScreenVideo }) => (
          <Section
            key={id}
            title={title}
            textContent={textContent && textContent.textContent}
            image={image}
            photoGallery={photoGallery}
            fullScreenVideo={fullScreenVideo}
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
        fullScreenVideo {
          youtubeId
          aspectRatio
        }
      }
    }
  }
`

export default Page
