import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import { Section } from "../styles/section"

const HomePage = () => (
  <Layout>
    <Header />
    <Section>
      <h1>What I Do</h1>
      <p>
        Looking for dynamic, creative content for your website or social media?
        Look no further. My video and photography services are here waiting to
        take your online presence to the next level.
      </p>
    </Section>
  </Layout>
)

export default HomePage
