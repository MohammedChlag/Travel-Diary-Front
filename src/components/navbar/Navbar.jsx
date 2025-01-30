import React from 'react'
import Menu from './Menu.jsx'
import './navbar.css'
import Search from './Search.jsx'
import Profile from './Profile.jsx'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Menu />
        </li>
        <li>
          <Search />
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
