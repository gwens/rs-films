import React from "react"
import { css } from "@emotion/react"
import Img from "gatsby-image"

import PhotoGallery from "./photo-gallery"

const Section = ({ title, textContent, image, photoGallery }) => (
  <section>
    {title && (
      <h1
        css={css`
          text-align: center;
          padding: 24px 0;
          font-weight: 500;
        `}
      >
        {title}
      </h1>
    )}
    {textContent && (
      <p
        css={css`
          max-width: 1000px;
          margin: auto;
        `}
      >
        {textContent}
      </p>
    )}
    {image && <Img fluid={image.photo.fluid} alt={image.altText} />}
    {photoGallery && (
      <PhotoGallery images={photoGallery ? photoGallery.photos : []} />
    )}
  </section>
)

export default Section
