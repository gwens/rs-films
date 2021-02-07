import React from "react"
import { css } from "@emotion/react"
import Img from "gatsby-image"

const Section = ({ title, textContent, image }) => (
  <section>
    <h1
      css={css`
        text-align: center;
        padding: 24px 0;
        font-weight: 500;
      `}
    >
      {title}
    </h1>
    <p
      css={css`
        max-width: 1000px;
        margin: auto;
      `}
    >
      {textContent}
    </p>
    {image && (
      <Img fluid={image.fluid} key={image.title} alt={image.description} />
    )}
  </section>
)

export default Section
