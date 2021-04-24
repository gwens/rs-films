import React from "react"
import { css } from "@emotion/react"

const FullScreenVideo = ({ id, aspectRatio }) => (
  <div
    css={css`
      height: calc(100vw * ${1 / aspectRatio});
      width: 100vw;
    `}
  >
    <iframe
      width="100%"
      src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&controls=0&playlist=${id}&loop=1&modestbranding=1&mute=1`}
      title="YouTube video player"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      allow="autoplay"
      allowfullscreen
      scrolling="auto"
    ></iframe>
  </div>
)

export default FullScreenVideo
