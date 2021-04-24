import React from "react"
import { Global, css } from "@emotion/react"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import useSiteMetadata from "../hooks/use-sitemetadata"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
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
            padding: 0;
            color: #eee;
            background-color: #111;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe-UI", Roboto,
              Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.4;
            overflow: auto;

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
              color: #111;
            }

            li {
              margin-top: 0.25rem;
            }

            iframe {
              margin: 0;
              padding: 0;
              height: 100%;
              border: none;
              display: block;
              width: 100%;
              border: none;
              overflow-y: auto;
              overflow-x: hidden;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
