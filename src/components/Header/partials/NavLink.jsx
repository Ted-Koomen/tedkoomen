import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

const NavLink = (props) => {
  return (
    <div className={css`
      display: flex;
      margin-right: 10px;
    `}>
      <Link to={props.to}>{props.text}</Link>
    </div>
  )
} 

export default NavLink
