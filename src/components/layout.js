import React from "react"
import { Global, css } from "@emotion/react"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #eee;
          background-color: #222;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe-UI", Roboto,
            Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;

          // remove margin for the gatsby div
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #eee;
            line-height: 1.1;
            text-transform: uppercase;
            font-size: 1.2rem;
            font-weight: normal;

            + * {
              margin-top: 0.5rem;
            }
          }

          p {
            text-transform: uppercase;
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <header></header>
    <main>{children}</main>
  </>
)

export default Layout
