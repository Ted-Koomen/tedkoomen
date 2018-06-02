import React from 'react';
import { css } from 'emotion';
import NavContainer from './partials/NavContainer'


const Header = (props) => {
  return (
    <div className={css`
      border: 1px solid black;
      width: 100%;
      height: 5%;
      display: inline-block;
    `}>
     <NavContainer />
    </div>
  )
}

export default Header