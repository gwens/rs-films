import React, { useState, useCallback } from "react"
import { css } from "@emotion/react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Container = styled.div`
  padding: 24px;
  display: flex;
  height: 500px;
  justify-content: space-between;
  align-items: center;
`

const PhotoGallery = ({ images }) => {
  const keepInRange = useCallback(
    x => (images.length === 0 ? 0 : (x + images.length) % images.length),
    [images.length]
  )
  const [selected, setSelected] = useState(0)

  const increment = useCallback(() => {
    console.log("incrementing")
    const newValue = keepInRange(selected + 1)
    setSelected(newValue)
  }, [selected, keepInRange])

  const decrement = useCallback(() => {
    const newValue = keepInRange(selected - 1)
    setSelected(newValue)
  }, [selected, keepInRange])

  if (!images.length) return null

  const mainImage = images[selected]
  const leftImage = images[keepInRange(selected - 1)]
  const rightImage = images[keepInRange(selected + 1)]
  return (
    <Container>
      <div
        css={css`
          flex-grow: 1;
          padding: 24px;
        `}
        onClick={decrement}
      >
        <Img fluid={leftImage.photo.fluid} alt={leftImage.altText} />
      </div>
      <div
        css={css`
          flex-grow: 3;
        `}
      >
        <Img fluid={mainImage.photo.fluid} alt={mainImage.altText} />
      </div>
      <div
        css={css`
          flex-grow: 1;
          padding: 24px;
        `}
        onClick={increment}
      >
        <Img fluid={rightImage.photo.fluid} alt={rightImage.altText} />
      </div>
    </Container>
  )
}

export default PhotoGallery
