import React from "react"
import { css } from "@emotion/react"

const FullScreenVideo = () => (
  <div
    css={css`
      height: 56.25vw;
      width: 100vw;
    `}
  >
    <iframe
      width="100%"
      src="https://www.youtube.com/embed/6UIdfBkAamg?rel=0&autoplay=1&controls=0&playlist=6UIdfBkAamg&loop=1&modestbranding=1&mute=1"
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
