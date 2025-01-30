import React from 'react'
import Button from '../Button.jsx'
import Icon from '../Icon.jsx'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/auth/theme/ThemeContext.js'
import { AuthContext } from '../../context/auth/AuthContext.js'

export const NavItem = ({ item }) => {
  const { onToggleTheme } = useContext(ThemeContext)
  const { onLogout } = useContext(AuthContext)

  const handleClick = () => {
    if (item.name === 'light_mode' || item.name === 'dark_mode') {
      onToggleTheme()
    }
    if (item.name === 'logout') {
      onLogout()
    }
  }
  return (
    <li>
      {item.url ? (
        <Link to={item.url}>
          <Button id={item.name} handleClick={handleClick}>
            <Icon name={item.name} />
            <span className='text'>{item.text}</span>
          </Button>
        </Link>
      ) : (
        <Button id={item.name} handleClick={handleClick}>
          <Icon name={item.name} />
          <span className='text'>{item.text}</span>
        </Button>
      )}
    </li>
  )
}
