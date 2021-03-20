import React from "react"
import { css } from "@emotion/react"

const Footer = () => (
  <footer
    css={css`
      color: #aaa;
      margin: auto;
      padding: 96px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1rem;
    `}
  >
    {`© Copyright RS Films ${new Date().getFullYear()}`}
  </footer>
)

export default Footer
