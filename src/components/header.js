import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

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
  &:hover {
    border-bottom: 2px solid #eee;
  }
`

const HeaderEl = styled.header`
  background-color: #222;
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  align-items: flex-end;
`

const Logo = styled.div`
  background-color: #fff;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 0 0.5rem 0 0;
`

const Nav = styled.nav`
  margin-top: 0;
`

const Header = () => (
  <HeaderEl>
    <NavLink to="/">
      <Logo/>
      FILM & PHOTOGRAPHY
    </NavLink>
    <Nav>
      <HoverLink to='/'>HOME</HoverLink>
      <HoverLink to='/film'>FILM</HoverLink>
      <HoverLink to='/photography'>PHOTOGRAPHY</HoverLink>
      <HoverLink to='/livestreaming'>LIVESTREAMING</HoverLink>
      <HoverLink to='/contact'>CONTACT</HoverLink>
    </Nav>
  </HeaderEl>
)

export default Header
