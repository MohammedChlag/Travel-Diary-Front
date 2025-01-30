import { useContext } from 'react'
import { AuthContext } from '../context/useAuth/AuthContext.js'

export const useAuth = () => {
  const { token, currentUser, onLogin, onLogout } = useContext(AuthContext)

  return {
    token,
    currentUser,
    onLogin,
    onLogout,
  }
}
