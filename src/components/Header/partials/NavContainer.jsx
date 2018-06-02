import React from 'react'
import NavLink from './NavLink'
import {
  LeftNavWrapper,
  RightNavWrapper,
  MarginRight
}from '../../../styledComponents/exports'

const NavContainer = (props) => {
  return <MarginRight mr={10}>
      <LeftNavWrapper>
        <NavLink to="/" text="Home" />
      </LeftNavWrapper>
      <RightNavWrapper>
        <NavLink to="/about" text="About" />
        <NavLink to="/resume" text="Resume" />
      </RightNavWrapper>
    </MarginRight>;
}

export default NavContainer