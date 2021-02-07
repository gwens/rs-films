import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import { Section } from "../styles/section"
import useContentfulPage from "../hooks/use-contentful-page"

const HomePage = () => {
  const sections = useContentfulPage()

  return (
    <Layout>
      {sections.map(({ title, textContent, image }) => (
        <Section>
          <h1>{title}</h1>
          <p>{textContent}</p>
          <Img fluid={image.fluid} key={image.title} alt={image.description} />
        </Section>
      ))}
    </Layout>
  )
}

export default HomePage
