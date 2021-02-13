import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import logo from "../../static/rs-films-logo.png"
import useMainNav from "../hooks/use-main-nav"

const NavLink = styled(Link)`
  color: #eee;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  text-transform: uppercase;
`

const HoverLink = styled(NavLink)`
  &:hover,
  &.current-page {
    border-bottom: 2px solid #eee;
  }
`

const Header = () => {
  const links = useMainNav()
  console.log(JSON.stringify(links, null, 2))
  return (
    <header
      css={css`
        background-color: #111;
        display: flex;
        justify-content: space-between;
        max-width: 90%;
        margin: auto;
        align-items: flex-end;
        padding-top: 24px;
      `}
    >
      <NavLink to="/">
        {/* Replace with SVG */}
        <img
          alt="logo"
          css={css`
            margin: 0 0.5rem 0 0;
          `}
          height={80}
          src={logo}
        />
        Film & Photography
      </NavLink>
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        {links.map(({ slug, navText }) => (
          <HoverLink key={slug} to={slug} activeClassName="current-page">
            {navText}
          </HoverLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
