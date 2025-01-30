import { useState } from 'react'
import { ThemeContext } from './ThemeContext.js'
import { getFromLocalStorage, setToLocalStorage } from '../../../utils/helpers.js'

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage('travelTheme') || 'light')

  const onToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    setToLocalStorage('travelTheme', theme)

    document.body.classList.toggle('dark')
  }

  return <ThemeContext.Provider value={{ theme, onToggleTheme }}>{children}</ThemeContext.Provider>
}
