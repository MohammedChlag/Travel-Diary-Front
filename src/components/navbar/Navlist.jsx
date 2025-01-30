import React from 'react'
import { NavItem } from './NavItem.jsx'

const NavList = ({ className, list }) => {
  return (
    <nav className={className}>
      <ul>
        {list.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default NavList
