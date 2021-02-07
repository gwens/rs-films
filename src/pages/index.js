import React from "react"

import Layout from "../components/layout"
import Section from "../components/section"

import useContentfulPage from "../hooks/use-contentful-page"

const HomePage = () => {
  const sections = useContentfulPage()

  return (
    <Layout>
      {sections.map(({ title, textContent, image }) => (
        <Section title={title} textContent={textContent} image={image} />
      ))}
    </Layout>
  )
}

export default HomePage
