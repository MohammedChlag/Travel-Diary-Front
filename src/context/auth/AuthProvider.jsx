import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import { toast } from 'react-toastify'
import { getFromLocalStorage, setToLocalStorage } from '../../utils/helpers.js'
import { getOwnUserService } from '../../services/fetchApi.js'

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getFromLocalStorage('travelToken') || null)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const user = await getOwnUserService(token)

          setCurrentUser(user)
        } catch (error) {
          console.error(error)
          localStorage.removeItem('travelToken')
          setToken(null)
          setCurrentUser(null)
        }
      }
    }

    loadUser()
  }, [token])

  const onLogin = async token => {
    try {
      setToken(token)
      setToLocalStorage('travelToken', token)

      const user = await getOwnUserService(token)

      setCurrentUser(user)
      toast.info('Bienvenido 🎉')
    } catch (error) {
      localStorage.removeItem('travelToken')
      setToken(null)
      setCurrentUser(null)

      throw error
    }
  }
  const onLogout = () => {
    localStorage.removeItem('travelToken')
    setToken(null)
    setCurrentUser(null)

    toast.info('Hasta luego 👋')
  }
  return (
    <AuthContext.Provider value={{ token, currentUser, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
