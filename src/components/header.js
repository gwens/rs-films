import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #eee;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  > {
    text-transform: uppercase;
  }
`

const HoverLink = styled(NavLink)`
  &:hover,
  &.current-page {
    border-bottom: 2px solid #eee;
  }
`

const Logo = styled.div`
  background-color: #fff;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 0 0.5rem 0 0;
`

const Header = () => (
  <header
    css={css`
      background-color: #222;
      display: flex;
      justify-content: space-between;
      max-width: 90%;
      margin: auto;
      align-items: flex-end;
    `}
  >
    <NavLink to="/">
      <Logo />
      FILM & PHOTOGRAPHY
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <HoverLink to="/" activeClassName="current-page">
        HOME
      </HoverLink>
      <HoverLink to="/film" activeClassName="current-page">
        FILM
      </HoverLink>
      <HoverLink to="/photography" activeClassName="current-page">
        PHOTOGRAPHY
      </HoverLink>
      <HoverLink to="/livestreaming" activeClassName="current-page">
        LIVESTREAMING
      </HoverLink>
      <HoverLink to="/contact" activeClassName="current-page">
        CONTACT
      </HoverLink>
    </nav>
  </header>
)

export default Header
